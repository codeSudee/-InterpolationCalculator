// Shared interpolation math for linear, logarithmic, and bilinear (double) modes.
// Pure functions, no DOM access, so they can be unit tested and reused by any UI.
//
// All user-facing text (step labels, error messages) is supplied by the caller via
// the `messages` parameter so the same math can be localized into any language.

export type RangePosition = "interpolated" | "extrapolated-below" | "extrapolated-above";

export interface CalcStep {
	label: string;
	expression: string;
}

export interface CalcSuccess {
	ok: true;
	result: number;
	position: RangePosition;
	steps: CalcStep[];
}

export interface CalcError {
	ok: false;
	error: string;
}

export type CalcResult = CalcSuccess | CalcError;

export interface StepLabels {
	formula: string;
	substitute: string;
	computeSlope: string;
	applySlope: string;
	takeLogs: string;
	computeLogSlope: string;
	interpolateXAtY1: string;
	interpolateXAtY2: string;
	interpolateY: string;
	result: string;
}

export interface LinearMessages {
	steps: StepLabels;
	invalidNumber: (field: string) => string;
	xEqual: string;
}

export interface LogMessages {
	steps: StepLabels;
	invalidNumber: (field: string) => string;
	logDomain: string;
	xEqual: string;
}

export interface BilinearMessages {
	steps: StepLabels;
	invalidNumber: (field: string) => string;
	xEqual: string;
	yEqual: string;
}

function fmt(n: number): string {
	if (!Number.isFinite(n)) return String(n);
	// Trim floating point noise, keep up to 6 significant decimal places.
	const rounded = Math.round(n * 1e6) / 1e6;
	return String(rounded);
}

function positionOf(x: number, x1: number, x2: number): RangePosition {
	const lo = Math.min(x1, x2);
	const hi = Math.max(x1, x2);
	if (x < lo) return "extrapolated-below";
	if (x > hi) return "extrapolated-above";
	return "interpolated";
}

/**
 * Linear interpolation: y = y1 + (x - x1) * (y2 - y1) / (x2 - x1)
 */
export function linearInterpolate(
	x1: number,
	y1: number,
	x2: number,
	y2: number,
	x: number,
	messages: LinearMessages
): CalcResult {
	for (const [name, v] of Object.entries({ x1, y1, x2, y2, x })) {
		if (!Number.isFinite(v)) {
			return { ok: false, error: messages.invalidNumber(name) };
		}
	}

	if (x1 === x2) {
		return { ok: false, error: messages.xEqual };
	}

	const slope = (y2 - y1) / (x2 - x1);
	const result = y1 + (x - x1) * slope;
	const position = positionOf(x, x1, x2);

	const steps: CalcStep[] = [
		{
			label: messages.steps.formula,
			expression: "y = y\u2081 + (x \u2212 x\u2081) \u00d7 (y\u2082 \u2212 y\u2081) / (x\u2082 \u2212 x\u2081)",
		},
		{
			label: messages.steps.substitute,
			expression: `y = ${fmt(y1)} + (${fmt(x)} \u2212 ${fmt(x1)}) \u00d7 (${fmt(y2)} \u2212 ${fmt(y1)}) / (${fmt(x2)} \u2212 ${fmt(x1)})`,
		},
		{
			label: messages.steps.computeSlope,
			expression: `slope = (${fmt(y2)} \u2212 ${fmt(y1)}) / (${fmt(x2)} \u2212 ${fmt(x1)}) = ${fmt(slope)}`,
		},
		{
			label: messages.steps.applySlope,
			expression: `y = ${fmt(y1)} + (${fmt(x)} \u2212 ${fmt(x1)}) \u00d7 ${fmt(slope)}`,
		},
		{
			label: messages.steps.result,
			expression: `y = ${fmt(result)}`,
		},
	];

	return { ok: true, result, position, steps };
}

/**
 * Logarithmic interpolation: treats x on a log scale.
 * y = y1 + (ln(x) - ln(x1)) * (y2 - y1) / (ln(x2) - ln(x1))
 * Requires x1, x2, x > 0.
 */
export function logInterpolate(
	x1: number,
	y1: number,
	x2: number,
	y2: number,
	x: number,
	messages: LogMessages
): CalcResult {
	for (const [name, v] of Object.entries({ x1, y1, x2, y2, x })) {
		if (!Number.isFinite(v)) {
			return { ok: false, error: messages.invalidNumber(name) };
		}
	}

	if (x1 <= 0 || x2 <= 0 || x <= 0) {
		return { ok: false, error: messages.logDomain };
	}

	if (x1 === x2) {
		return { ok: false, error: messages.xEqual };
	}

	const lnX1 = Math.log(x1);
	const lnX2 = Math.log(x2);
	const lnX = Math.log(x);
	const slope = (y2 - y1) / (lnX2 - lnX1);
	const result = y1 + (lnX - lnX1) * slope;
	const position = positionOf(x, x1, x2);

	const steps: CalcStep[] = [
		{
			label: messages.steps.formula,
			expression:
				"y = y\u2081 + (ln(x) \u2212 ln(x\u2081)) \u00d7 (y\u2082 \u2212 y\u2081) / (ln(x\u2082) \u2212 ln(x\u2081))",
		},
		{
			label: messages.steps.takeLogs,
			expression: `ln(${fmt(x1)}) = ${fmt(lnX1)}, ln(${fmt(x2)}) = ${fmt(lnX2)}, ln(${fmt(x)}) = ${fmt(lnX)}`,
		},
		{
			label: messages.steps.substitute,
			expression: `y = ${fmt(y1)} + (${fmt(lnX)} \u2212 ${fmt(lnX1)}) \u00d7 (${fmt(y2)} \u2212 ${fmt(y1)}) / (${fmt(lnX2)} \u2212 ${fmt(lnX1)})`,
		},
		{
			label: messages.steps.computeLogSlope,
			expression: `slope = (${fmt(y2)} \u2212 ${fmt(y1)}) / (${fmt(lnX2)} \u2212 ${fmt(lnX1)}) = ${fmt(slope)}`,
		},
		{
			label: messages.steps.result,
			expression: `y = ${fmt(result)}`,
		},
	];

	return { ok: true, result, position, steps };
}

/**
 * Bilinear (double) interpolation across a 2D grid.
 * Given four known points at the corners of a rectangle:
 *   Q11 = f(x1, y1), Q12 = f(x1, y2), Q21 = f(x2, y1), Q22 = f(x2, y2)
 * estimate f(x, y).
 */
export function bilinearInterpolate(
	x1: number,
	x2: number,
	y1: number,
	y2: number,
	q11: number,
	q12: number,
	q21: number,
	q22: number,
	x: number,
	y: number,
	messages: BilinearMessages
): CalcResult {
	for (const [name, v] of Object.entries({ x1, x2, y1, y2, q11, q12, q21, q22, x, y })) {
		if (!Number.isFinite(v)) {
			return { ok: false, error: messages.invalidNumber(name) };
		}
	}

	if (x1 === x2) {
		return { ok: false, error: messages.xEqual };
	}
	if (y1 === y2) {
		return { ok: false, error: messages.yEqual };
	}

	// Step 1: interpolate in x at y1 and y2
	const rX1 = q11 + ((x - x1) * (q21 - q11)) / (x2 - x1); // at y1
	const rX2 = q12 + ((x - x1) * (q22 - q12)) / (x2 - x1); // at y2

	// Step 2: interpolate in y between those two results
	const result = rX1 + ((y - y1) * (rX2 - rX1)) / (y2 - y1);

	const xPosition = positionOf(x, x1, x2);
	const yPosition = positionOf(y, y1, y2);
	const position: RangePosition =
		xPosition === "interpolated" && yPosition === "interpolated"
			? "interpolated"
			: xPosition !== "interpolated"
				? xPosition
				: yPosition;

	const steps: CalcStep[] = [
		{
			label: messages.steps.formula,
			expression:
				"f(x,y) \u2248 f(x,y\u2081)\u00b7(1\u2212t\u1d67) + f(x,y\u2082)\u00b7t\u1d67, interpolating in x first, then y",
		},
		{
			label: messages.steps.interpolateXAtY1,
			expression: `R\u2081 = ${fmt(q11)} + (${fmt(x)} \u2212 ${fmt(x1)}) \u00d7 (${fmt(q21)} \u2212 ${fmt(q11)}) / (${fmt(x2)} \u2212 ${fmt(x1)}) = ${fmt(rX1)}`,
		},
		{
			label: messages.steps.interpolateXAtY2,
			expression: `R\u2082 = ${fmt(q12)} + (${fmt(x)} \u2212 ${fmt(x1)}) \u00d7 (${fmt(q22)} \u2212 ${fmt(q12)}) / (${fmt(x2)} \u2212 ${fmt(x1)}) = ${fmt(rX2)}`,
		},
		{
			label: messages.steps.interpolateY,
			expression: `f(x,y) = ${fmt(rX1)} + (${fmt(y)} \u2212 ${fmt(y1)}) \u00d7 (${fmt(rX2)} \u2212 ${fmt(rX1)}) / (${fmt(y2)} \u2212 ${fmt(y1)})`,
		},
		{
			label: messages.steps.result,
			expression: `f(x,y) = ${fmt(result)}`,
		},
	];

	return { ok: true, result, position, steps };
}
