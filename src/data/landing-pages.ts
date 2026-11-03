// Focused landing pages, one per distinct search intent. Each entry feeds the single
// dynamic route in src/pages/[slug].astro. English only: these are not machine-translated
// into the other locales, so they are not listed in the hreflang sets.

export type PresetMode = "linear" | "log" | "bilinear";

export interface LandingPage {
	slug: string;
	/** Short link label for the footer and cross-links. */
	nav: string;
	/** One-line blurb for the homepage link list. */
	blurb: string;
	title: string;
	description: string;
	h1: string;
	intro: string;
	/** Values loaded into the calculator on page load. Never persisted. */
	preset: { mode: PresetMode; values: Record<string, string> };
	presetNote: string;
	/**
	 * Min-height classes for the result panel, so the preset result does not push the page down
	 * when it renders. Measured at 360-768px wide (steps wrap onto more lines on narrow screens).
	 */
	reserve: string;
	/**
	 * Body paragraphs may use [link text](/path/) and `inline code`. FAQ answers stay plain text
	 * because they are also emitted as JSON-LD.
	 */
	sections: Array<{
		heading: string;
		body: string[];
		steps?: string[];
		table?: { headers: string[]; rows: string[][] };
		/** Formulas shown in a copyable block after the body. */
		code?: string[];
	}>;
	faqs: Array<{ q: string; a: string }>;
	related: string[];
	/** ISO date the page content was last changed (real date, used for sitemap lastmod). */
	updated: string;
}

export const landingPages: LandingPage[] = [
	{
		slug: "linear-interpolation-calculator",
		nav: "Linear interpolation calculator",
		blurb: "Two known points, one target x. The everyday table lookup.",
		title: "Linear Interpolation Calculator – Find y Between Two Points",
		description:
			"Free linear interpolation calculator: enter two known points and a target x to get y, with the formula and every step shown, plus a worked example.",
		h1: "Linear Interpolation Calculator",
		intro:
			"Use this calculator when you know two points and need the value at an x that sits between them, such as reading a property table at a temperature that isn't listed. The calculator below is preloaded with a real table lookup. Change any number to try your own data.",
		preset: {
			mode: "linear",
			values: { "lin-x1": "20", "lin-y1": "998.21", "lin-x2": "30", "lin-y2": "995.65", "lin-x": "25" },
		},
		presetNote: "Preloaded: density of water at 25 °C, from table values at 20 °C and 30 °C.",
		reserve: "min-h-[29.5rem] sm:min-h-[26rem]",
		sections: [
			{
				heading: "The linear interpolation formula",
				body: [
					"Given two known points (x₁, y₁) and (x₂, y₂), the value of y at a target x is the first y plus the slope times the distance from x₁. The [interpolation formula guide](/interpolation-formula/) shows where this comes from.",
				],
				code: ["y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁)"],
			},
			{
				heading: "Worked example: density of water at 25 °C",
				body: [
					"Reference tables list the density of water as about 998.21 kg/m³ at 20 °C and 995.65 kg/m³ at 30 °C. To estimate the density at 25 °C, first find the slope: (995.65 − 998.21) / (30 − 20) = −0.256 kg/m³ per °C. The target is 5 °C past the first point, so the density is 998.21 + 5 × (−0.256) = 996.93 kg/m³.",
					"The tabulated value at 25 °C is about 997.05 kg/m³, so the straight-line estimate is off by roughly 0.12 kg/m³, or 0.012%. That is typical when a curve bends gently across a short gap: over ten degrees it is almost straight, so the error is tiny relative to the value.",
				],
			},
			{
				heading: "Entering your own numbers",
				body: [
					"Put the lower table row in x₁ and y₁, the upper row in x₂ and y₂, and the x you want in the target field. The order of the two points does not matter as long as each y stays with its own x. When the target lies between x₁ and x₂ the result is badged Interpolated. If it lies outside, the badge reads Extrapolated, which means the answer is a projection beyond your data and deserves less trust. The [extrapolation calculator](/extrapolation-calculator/) page explains when to rely on it.",
				],
			},
			{
				heading: "Choosing the two rows",
				body: [
					"Pick the rows that sit immediately on either side of your target. The closer together they are, the closer the data is to a straight line between them, and the smaller the error. If the values in your table change by large factors from row to row (for example, spacing of 1, 10, 100), a straight line is a poor fit and the [logarithmic interpolation calculator](/logarithmic-interpolation-calculator/) is the better tool.",
					"If your value depends on two inputs, so the target falls between both the rows and the columns of a table, use the [bilinear (double) interpolation calculator](/bilinear-interpolation-calculator/). To do any of this in a spreadsheet, see [interpolation in Excel](/interpolation-in-excel/).",
				],
			},
		],
		faqs: [
			{
				q: "Do x₁ and x₂ have to be in ascending order?",
				a: "No. The formula gives the same answer in either order, as long as each y value stays paired with its own x value. Swapping both points leaves the result unchanged.",
			},
			{
				q: "Can I use negative numbers or decimals?",
				a: "Yes. Any real numbers work, including negatives and decimals. The only restriction is that x₁ and x₂ cannot be equal, because the slope would divide by zero.",
			},
			{
				q: "My table has many rows. Which two should I enter?",
				a: "Enter the two rows that bracket your target value. Using the nearest pair gives a better estimate than using rows that are further apart, because the data has less room to curve away from the straight line.",
			},
		],
		related: ["how-to-interpolate", "interpolation-formula", "bilinear-interpolation-calculator", "logarithmic-interpolation-calculator", "extrapolation-calculator"],
		updated: "2026-11-03",
	},
	{
		slug: "logarithmic-interpolation-calculator",
		nav: "Logarithmic interpolation calculator",
		blurb: "For data that is straight on a log x-axis, such as frequency or concentration.",
		title: "Logarithmic (Log-Linear) Interpolation Calculator & Formula",
		description:
			"Free logarithmic (log-linear) interpolation calculator for data linear in ln(x), with the formula, a worked example and when to pick log over linear.",
		h1: "Logarithmic Interpolation Calculator",
		intro:
			"When x spans several orders of magnitude and y changes by a steady amount for each multiplication of x, a straight line on ordinary axes gives the wrong answer. This calculator interpolates against ln(x) instead. It is preloaded with a frequency-response example.",
		preset: {
			mode: "log",
			values: { "log-x1": "10", "log-y1": "2", "log-x2": "1000", "log-y2": "5", "log-x": "100" },
		},
		presetNote: "Preloaded: a sensor reading of 2.0 at 10 Hz and 5.0 at 1000 Hz, estimated at 100 Hz.",
		reserve: "min-h-[31rem] sm:min-h-[26rem]",
		sections: [
			{
				heading: "Worked example: a reading between two frequencies",
				body: [
					"A sensor output reads 2.0 at 10 Hz and 5.0 at 1000 Hz, and the response plots as a straight line when frequency is on a logarithmic axis. To estimate the reading at 100 Hz, take natural logs: ln 10 = 2.3026, ln 100 = 4.6052, ln 1000 = 6.9078. The target is (4.6052 − 2.3026) / (6.9078 − 2.3026) = 0.5 of the way across in log space, so y = 2.0 + 0.5 × (5.0 − 2.0) = 3.5.",
					"Plain [linear interpolation](/linear-interpolation-calculator/) would treat 100 Hz as only (100 − 10) / (1000 − 10) = 9.1% of the way across and return about 2.27. The two answers differ by more than 50%, so the choice of method matters far more than rounding here.",
				],
			},
			{
				heading: "Natural log or base 10?",
				body: [
					"The calculator uses natural logarithms, but the base has no effect on the result. In the ratio (ln x − ln x₁) / (ln x₂ − ln x₁) the conversion factor between bases appears in the numerator and denominator and cancels. A hand calculation with log₁₀ gives the same answer.",
				],
			},
			{
				heading: "Restrictions and log–log data",
				body: [
					"All three x values (x₁, x₂ and the target) must be greater than zero, because the logarithm is undefined otherwise. The y values can be any real numbers, including negatives.",
					"If both axes are logarithmic (a log–log plot), enter ln(y₁) and ln(y₂) in the y fields instead of y₁ and y₂. The result is then ln(y), and raising e to that power gives the y value you want.",
				],
			},
		],
		faqs: [
			{
				q: "Does the logarithm base matter?",
				a: "No. Natural logs and base-10 logs give identical results, because the base cancels in the ratio of log differences that sets the interpolation fraction.",
			},
			{
				q: "Can y be negative in logarithmic interpolation?",
				a: "Yes. Only the x values must be positive. The y values are interpolated linearly against ln(x), so they can be zero, negative or positive.",
			},
			{
				q: "How do I interpolate log–log data?",
				a: "Take the natural log of each y value yourself and enter those in the y fields. The calculator takes the log of x for you. Raise e to the result to convert back to a y value.",
			},
		],
		related: ["linear-interpolation-calculator", "interpolation-formula", "extrapolation-calculator"],
		updated: "2026-11-03",
	},
	{
		slug: "bilinear-interpolation-calculator",
		nav: "Bilinear (double) interpolation calculator",
		blurb: "Four corner values of a 2D table cell, two targets.",
		title: "Bilinear (Double) Interpolation Calculator – 2D Tables",
		description:
			"Free bilinear (double) interpolation calculator for 2D tables. Enter four corner values and your x and y to get the result, the formula and each step.",
		h1: "Bilinear (Double) Interpolation Calculator",
		intro:
			"Bilinear interpolation, often called double interpolation in engineering courses, estimates a value that depends on two inputs when both fall between the rows and columns of a table. Enter the four surrounding table values and the calculator shows each step. It is preloaded with a unit-square example.",
		preset: {
			mode: "bilinear",
			values: {
				"bi-x1": "0",
				"bi-x2": "1",
				"bi-y1": "0",
				"bi-y2": "1",
				"bi-q11": "10",
				"bi-q12": "30",
				"bi-q21": "20",
				"bi-q22": "40",
				"bi-x": "0.25",
				"bi-y": "0.5",
			},
		},
		presetNote: "Preloaded: corner values 10, 20, 30 and 40 on a unit square, estimated at x = 0.25, y = 0.5.",
		reserve: "min-h-[31rem] sm:min-h-[26rem]",
		sections: [
			{
				heading: "What is bilinear interpolation?",
				body: [
					"Bilinear interpolation estimates a value at a point inside a rectangle from the values at its four corners. It runs [linear interpolation](/linear-interpolation-calculator/) along x on two rows, then once more along y between those two results. Engineering courses usually call this double interpolation, and it is the same calculation.",
				],
			},
			{
				heading: "The bilinear interpolation formula",
				body: [
					"Here Q₁₁ is the value at (x₁, y₁), Q₂₁ at (x₂, y₁), Q₁₂ at (x₁, y₂) and Q₂₂ at (x₂, y₂). The formula is a weighted average of the corners, and the weight on each corner grows as the target moves toward it.",
				],
				code: ["f(x, y) = [ Q₁₁(x₂ − x)(y₂ − y) + Q₂₁(x − x₁)(y₂ − y) + Q₁₂(x₂ − x)(y − y₁) + Q₂₂(x − x₁)(y − y₁) ] / [ (x₂ − x₁)(y₂ − y₁) ]"],
			},
			{
				heading: "Worked example from a 2D table",
				body: [
					"Suppose you need the value at x = 150 and y = 12 from this table. Neither input appears in it, so both directions need interpolating.",
					"At y = 10, x = 150 is halfway from 100 to 200, so the value is 3 + 0.5 × (5 − 3) = 4. At y = 20 the same step gives 7 + 0.5 × (11 − 7) = 9. Then y = 12 is 0.2 of the way from 10 to 20, so the result is 4 + 0.2 × (9 − 4) = 5.",
				],
				table: {
					headers: ["y \\ x", "x = 100", "x = 200"],
					rows: [
						["y = 10", "3", "5"],
						["y = 20", "7", "11"],
					],
				},
			},
			{
				heading: "Worked example on a unit square",
				body: [
					"Take a cell with x from 0 to 1 and y from 0 to 1. The corner values are Q₁₁ = f(0, 0) = 10, Q₂₁ = f(1, 0) = 20, Q₁₂ = f(0, 1) = 30 and Q₂₂ = f(1, 1) = 40. To estimate f(0.25, 0.5), interpolate in x along the bottom row: R₁ = 10 + 0.25 × (20 − 10) = 12.5. Then along the top row: R₂ = 30 + 0.25 × (40 − 30) = 32.5. Finally interpolate between them in y: f = 12.5 + 0.5 × (32.5 − 12.5) = 22.5.",
					"The same answer comes from a weighted average of the corners. The weights are (1 − 0.25)(1 − 0.5) = 0.375 for Q₁₁, 0.25 × 0.5 = 0.125 for Q₂₁, 0.375 for Q₁₂ and 0.125 for Q₂₂. Then 10 × 0.375 + 20 × 0.125 + 30 × 0.375 + 40 × 0.125 = 22.5. Corners nearer the target carry more weight.",
				],
			},
			{
				heading: "Reading the corners correctly",
				body: [
					"In Qᵢⱼ the first subscript refers to x and the second to y, so Q₁₂ is the value at x₁ and y₂. Mixing up Q₁₂ and Q₂₁ is the most common mistake with 2D tables, especially when the table lists one variable down the rows and the other across the columns. Write the four values on paper at their (x, y) positions before entering them.",
				],
			},
			{
				heading: "Where double interpolation applies",
				body: [
					"The method is standard for reading [superheated steam tables](/steam-table-interpolation-calculator/), refrigerant tables, calibration grids and any two-input lookup. It is also the basis of simple image and map resampling. The result is exact when the underlying function has the form a + bx + cy + dxy, and an approximation otherwise. If the target falls outside the cell, the result is labelled Extrapolated.",
				],
			},
		],
		faqs: [
			{
				q: "Is double interpolation the same as bilinear interpolation?",
				a: "Yes. In engineering textbooks, double interpolation means interpolating linearly in one variable and then again in the other. That is exactly bilinear interpolation, and the order of the two steps does not change the result.",
			},
			{
				q: "What if my target is not inside a single cell?",
				a: "Choose the cell that contains the target and enter its four corners. If the target is outside the whole table, no cell contains it and any result is an extrapolation, which the calculator labels as such.",
			},
			{
				q: "What if one of my inputs matches a table value exactly?",
				a: "Then you only need a single interpolation along the other variable. Use the linear calculator with the two table values on that row or column. The bilinear calculator also works, but the second row's weight is zero.",
			},
		],
		related: ["steam-table-interpolation-calculator", "linear-interpolation-calculator", "interpolation-formula", "interpolation-in-excel"],
		updated: "2026-11-03",
	},
	{
		slug: "steam-table-interpolation-calculator",
		nav: "Steam table interpolation",
		blurb: "Single interpolation for saturated tables, double for superheated.",
		title: "Steam Table Interpolation Calculator – Single & Double",
		description:
			"How to interpolate steam tables: single interpolation for saturated values, double for superheated steam, with a calculator and a worked example.",
		h1: "Steam Table Interpolation Calculator",
		intro:
			"Thermodynamics courses and plant calculations constantly need steam properties at a temperature or pressure that the table skips. Saturated tables need one interpolation; superheated tables need two. The calculator below is preloaded with a saturation-pressure lookup.",
		preset: {
			mode: "linear",
			values: { "lin-x1": "100", "lin-y1": "101.42", "lin-x2": "110", "lin-y2": "143.38", "lin-x": "105" },
		},
		presetNote: "Preloaded: saturation pressure (kPa) at 105 °C from rows at 100 °C and 110 °C.",
		reserve: "min-h-[31rem] sm:min-h-[26rem]",
		sections: [
			{
				heading: "Single interpolation: saturated water",
				body: [
					"Textbook saturation tables list a pressure of about 101.42 kPa at 100 °C and 143.38 kPa at 110 °C. At 105 °C the straight-line estimate is 101.42 + 0.5 × (143.38 − 101.42) = 122.40 kPa.",
					"The same tables list about 120.90 kPa at 105 °C, so the interpolated value is roughly 1.2% high. Saturation pressure rises faster than a straight line as temperature increases, so a line between rows ten degrees apart overshoots. Table values differ slightly between publications, so use the numbers from your own table. If you need more accuracy than a percent or so, use the closest rows available or a property library.",
				],
			},
			{
				heading: "Double interpolation: superheated steam",
				body: [
					"Superheated tables list properties such as specific volume, internal energy, enthalpy and entropy for combinations of pressure and temperature. When both your pressure and your temperature fall between listed values, locate the four surrounding entries. In the Double (bilinear) tab of the [bilinear interpolation calculator](/bilinear-interpolation-calculator/), treat temperature as x, pressure as y, and enter the four table values as the corners.",
					"By hand, the steps are: interpolate in temperature at the lower pressure, interpolate in temperature at the higher pressure, then interpolate between those two results in pressure. All four entries must come from the same region of the table. Do not mix a superheated value with a saturated or compressed-liquid one, because properties change abruptly across a phase boundary.",
				],
			},
			{
				heading: "Where the error comes from",
				body: [
					"Specific volume of superheated steam falls roughly in proportion to 1/P, which is a curve, so a straight line between widely spaced pressures overestimates it. Tables with finer spacing near your state give better answers. Whenever the table offers a closer row, use it.",
				],
			},
		],
		faqs: [
			{
				q: "Which calculator tab do I use for steam tables?",
				a: "Use the Linear tab for saturated tables, where properties depend on one variable (temperature or pressure). Use the Double (bilinear) tab for superheated tables, where properties depend on both pressure and temperature.",
			},
			{
				q: "How accurate is table interpolation compared with software?",
				a: "Errors of around a percent are common when table rows are spaced widely, as the saturation example shows. Software implementing the IAPWS formulations avoids interpolation error entirely, so prefer it when you need high precision.",
			},
			{
				q: "Can I interpolate across the saturated and superheated regions?",
				a: "No. Properties change abruptly at the phase boundary, so every point you interpolate between must be in the same region. If your state is near the saturation line, take both rows from the same side of it.",
			},
		],
		related: ["bilinear-interpolation-calculator", "linear-interpolation-calculator", "interpolation-formula"],
		updated: "2026-11-03",
	},
	{
		slug: "extrapolation-calculator",
		nav: "Extrapolation calculator",
		blurb: "Extend a line past your two known points, with the caveats.",
		title: "Extrapolation Calculator – Linear Extrapolation Beyond Data",
		description:
			"Free linear extrapolation calculator: extend a line past two known points to estimate y outside your data, with the formula, steps and caveats.",
		h1: "Extrapolation Calculator",
		intro:
			"Extrapolation estimates a value outside the range of the data you have. The arithmetic is the same as interpolation, but the answer is less reliable. This calculator labels any result outside your known points as extrapolated. It is preloaded with an example that extends a line beyond its second point.",
		preset: {
			mode: "linear",
			values: { "lin-x1": "2", "lin-y1": "14", "lin-x2": "6", "lin-y2": "22", "lin-x": "9" },
		},
		presetNote: "Preloaded: points (2, 14) and (6, 22), extended to x = 9.",
		reserve: "min-h-[39rem] sm:min-h-[31rem]",
		sections: [
			{
				heading: "How linear extrapolation works",
				code: ["y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁)"],
				body: [
					"Linear extrapolation extends the straight line through two known points. With (2, 14) and (6, 22), the slope is (22 − 14) / (6 − 2) = 2 per unit of x. The target x = 9 is 7 units past x₁, so y = 14 + 7 × 2 = 28. The formula is the one used for interpolation: only the position of the target changes, and the result badge switches from Interpolated to Extrapolated.",
				],
			},
			{
				heading: "Why extrapolation is riskier",
				body: [
					"Between two known points, the data is at least pinned down at both ends. Beyond them, nothing constrains the curve, and any bend in the underlying relationship makes the straight-line error grow with distance. Growth that levels off, equipment that saturates, and processes that change regime are all cases where a line drawn from two points can be badly wrong.",
					"As a rule of thumb, extending by a fraction of the spacing between your two points is usually reasonable, while extending by several times that spacing deserves strong caution. Treat the result as a rough projection and say so when you report it.",
					"[Interpolation vs extrapolation](/interpolation-vs-extrapolation/) compares the two methods side by side, with an example showing how fast the error grows.",
				],
			},
			{
				heading: "Better options when you have more data",
				body: [
					"If you have more than two points, fit a trend line using all of them rather than relying on two. If you know the physics, use a model that matches it. If your data grows by a roughly constant factor per step in x, the [logarithmic interpolation calculator](/logarithmic-interpolation-calculator/) is a better fit than a straight line, as long as all x values are positive.",
				],
			},
		],
		faqs: [
			{
				q: "Why does the calculator say Extrapolated?",
				a: "It means the target x lies outside the range between x₁ and x₂. The calculation is still valid as a straight-line projection, but nothing in your data confirms the trend continues that far.",
			},
			{
				q: "Can this calculator forecast future values?",
				a: "It draws a straight line through two points and reads off a value, which is not the same as a forecast model. For time series with noise, seasonality or curvature, use more data and a fitting method suited to it.",
			},
			{
				q: "Can I extrapolate with the logarithmic or double tabs?",
				a: "Yes. Both tabs label results outside the known range as extrapolated. The logarithmic tab still needs all x values to be positive, and the double tab extrapolates beyond the edges of the four-corner cell.",
			},
		],
		related: ["interpolation-vs-extrapolation", "linear-interpolation-calculator", "logarithmic-interpolation-calculator", "interpolation-formula"],
		updated: "2026-11-03",
	},
	{
		slug: "interpolation-formula",
		nav: "Interpolation formula",
		blurb: "Where the formula comes from, in slope and weighted-average form.",
		title: "Interpolation Formula – Linear, Log & Bilinear Explained",
		description:
			"The interpolation formula derived step by step, with the weighted-average form, log and bilinear versions, and a calculator with a worked example.",
		h1: "The Interpolation Formula, Step by Step",
		intro:
			"The linear interpolation formula is short, but it is easier to remember and to check when you see where it comes from. This page derives it, shows the equivalent weighted-average form, and explains how the logarithmic and bilinear versions follow from it. The calculator is preloaded with the example used below.",
		preset: {
			mode: "linear",
			values: { "lin-x1": "1", "lin-y1": "5", "lin-x2": "4", "lin-y2": "11", "lin-x": "3" },
		},
		presetNote: "Preloaded: points (1, 5) and (4, 11), evaluated at x = 3.",
		reserve: "min-h-[28rem] sm:min-h-[26rem]",
		sections: [
			{
				heading: "Deriving the formula",
				body: [
					"Any point (x, y) on the straight line through (x₁, y₁) and (x₂, y₂) has the same slope to (x₁, y₁) as the second point does: (y − y₁) / (x − x₁) = (y₂ − y₁) / (x₂ − x₁). Multiply both sides by (x − x₁) and add y₁ to get y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁). This is the two-point form of the equation of a line.",
					"With (1, 5) and (4, 11) the slope is (11 − 5) / (4 − 1) = 2, so at x = 3 the formula gives y = 5 + (3 − 1) × 2 = 9. For the same method as a checklist, see [how to interpolate](/how-to-interpolate/).",
				],
			},
			{
				heading: "The weighted-average form",
				body: [
					"Define t = (x − x₁) / (x₂ − x₁), the fraction of the way from x₁ to x₂. Then y = (1 − t) × y₁ + t × y₂. At x₁ the fraction is 0 and the result is y₁, at x₂ it is 1 and the result is y₂, and between them the result blends the two.",
					"In the example, t = (3 − 1) / (4 − 1) = 2/3, so y = (1/3) × 5 + (2/3) × 11 = 27/3 = 9, the same answer. Interpolation corresponds to t between 0 and 1. A t outside that range means [extrapolation](/extrapolation-calculator/).",
				],
			},
			{
				heading: "Logarithmic, bilinear and inverse versions",
				body: [
					"The [logarithmic version](/logarithmic-interpolation-calculator/) computes t from logarithms: t = (ln x − ln x₁) / (ln x₂ − ln x₁), then uses the same blend of y₁ and y₂. The [bilinear version](/bilinear-interpolation-calculator/) applies the blend twice, once in x along each of two rows, and once in y between the two results.",
					"To go the other way and find x for a given y, solve the same equation for x: x = x₁ + (y − y₁) × (x₂ − x₁) / (y₂ − y₁). The [inverse interpolation](/inverse-interpolation-calculator/) page shows how to do this with the calculator by swapping the roles of x and y.",
				],
			},
		],
		faqs: [
			{
				q: "Why is the formula written in two different ways?",
				a: "The slope form and the weighted-average form are algebraically identical. The slope form shows the rate of change, which suits hand calculation. The weighted form shows interpolation as a blend of two values, which makes it easier to extend to log and 2D versions.",
			},
			{
				q: "What is t in the interpolation formula?",
				a: "It is the fraction of the way from x₁ to x₂ at which your target lies. A value of 0 puts the target at x₁, 1 puts it at x₂, and 0.5 puts it exactly halfway. Values outside 0 to 1 mean the target is outside the known range.",
			},
			{
				q: "Is the interpolation formula the same as the equation of a line?",
				a: "Yes. Linear interpolation is the two-point form of the equation of a straight line, used to read a y value at a given x. It is exact if the data lies on a straight line, and an approximation otherwise.",
			},
		],
		related: ["how-to-interpolate", "linear-interpolation-calculator", "inverse-interpolation-calculator", "bilinear-interpolation-calculator", "logarithmic-interpolation-calculator"],
		updated: "2026-11-03",
	},
	{
		slug: "inverse-interpolation-calculator",
		nav: "Inverse interpolation",
		blurb: "Find the x that gives a target y.",
		title: "Inverse Interpolation Calculator – Find x for a Given y",
		description:
			"Find the x value that gives a target y between two known points, using the inverse interpolation formula, a calculator and a worked sensor example.",
		h1: "Inverse Interpolation Calculator",
		intro:
			"Sometimes the question runs backwards: you know the output and want the input that produces it. This is inverse interpolation. You can do it with the linear calculator by swapping which quantity goes in the x fields. The calculator below is preloaded with a worked sensor example.",
		preset: {
			mode: "linear",
			values: { "lin-x1": "20", "lin-y1": "0.5", "lin-x2": "70", "lin-y2": "2.5", "lin-x": "45" },
		},
		presetNote: "Preloaded: temperatures 20 °C and 70 °C entered as x, with sensor voltages 0.5 V and 2.5 V entered as y.",
		reserve: "min-h-[29.5rem] sm:min-h-[26rem]",
		sections: [
			{
				heading: "Running the calculator in reverse",
				body: [
					"Suppose a temperature sensor outputs 0.5 V at 20 °C and 2.5 V at 70 °C, and you want the voltage at which the temperature is 45 °C. The calculator takes x as the known quantity and returns y, so enter the temperatures in the x fields and the voltages in the y fields. Then enter 45 as the target x.",
					"The slope is (2.5 − 0.5) / (70 − 20) = 0.04 V per °C, and the result is 0.5 + (45 − 20) × 0.04 = 1.5 V. The roles of the columns are a matter of labelling only: the calculator treats whichever column you place in x as the input.",
				],
			},
			{
				heading: "The inverse formula",
				body: [
					"Written directly, the inverse form solves the line equation for x: x = x₁ + (y − y₁) × (x₂ − x₁) / (y₂ − y₁). Here y is the value you know, and the result is the x that produces it. For two points this is the exact inverse of the line through them, so putting the result back into the forward formula returns your original value.",
				],
			},
			{
				heading: "Limits to keep in mind",
				body: [
					"Inverse lookup only makes sense where y moves in one direction between your two rows. If the table rises and then falls, the same y can occur at two different x values, so choose rows from the part of the table you actually care about. As with forward interpolation, the estimate is best when the rows are close together and the data is nearly straight between them.",
				],
			},
		],
		faqs: [
			{
				q: "Is inverse interpolation just solving for x?",
				a: "Yes. It is the same line equation rearranged to give x from y. Swapping which column you enter as x in the calculator achieves exactly that without rearranging anything yourself.",
			},
			{
				q: "Do I get the same answer if I interpolate the other way round?",
				a: "For the same two points, yes, because both directions use the same straight line. Differences only appear if you pick different table rows for each direction, or if the real relationship curves between them.",
			},
			{
				q: "Can I do inverse interpolation on logarithmic data?",
				a: "Not directly, because the logarithmic tab takes the log of the x field. To find x on a log scale for a known y, use the Linear tab: enter your y values as the x fields and the natural logs of your x values as the y fields. The result is ln of the x you want, so raise e to that power.",
			},
		],
		related: ["interpolation-formula", "linear-interpolation-calculator", "logarithmic-interpolation-calculator"],
		updated: "2026-11-03",
	},
	{
		slug: "interpolation-vs-extrapolation",
		nav: "Interpolation vs extrapolation",
		blurb: "The same formula with very different reliability, compared with an example.",
		title: "Interpolation vs Extrapolation: Differences and Examples",
		description:
			"Interpolation estimates inside your data and extrapolation beyond it. See the differences, a worked example of the error, and when to trust each.",
		h1: "Interpolation vs Extrapolation",
		intro:
			"Interpolation estimates a value inside the range of your known data. Extrapolation estimates a value outside that range. Both can use the same formula, but interpolation is usually much more reliable, because known points pin the estimate down on both sides. The calculator below labels every result as one or the other.",
		preset: {
			mode: "linear",
			values: { "lin-x1": "2", "lin-y1": "4", "lin-x2": "4", "lin-y2": "16", "lin-x": "3" },
		},
		presetNote: "Preloaded: points (2, 4) and (4, 16) on the curve y = x², evaluated at x = 3. Change the target to 10 and the badge switches to Extrapolated.",
		reserve: "min-h-[29.5rem] sm:min-h-[26rem]",
		sections: [
			{
				heading: "The main differences",
				body: [
					"The difference comes down to where the target sits relative to your data, and that decides how far you can trust the answer.",
				],
				table: {
					headers: ["", "Interpolation", "Extrapolation"],
					rows: [
						["Target position", "Between known points", "Outside known points"],
						["Linear formula", "y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁)", "The same formula"],
						["Fraction t between the points", "From 0 to 1", "Below 0 or above 1"],
						["Reliability", "Usually good when the points are close together", "Falls as the target moves away from the data"],
						["Typical use", "Reading between the rows of a table", "Rough projections beyond measured data"],
					],
				},
			},
			{
				heading: "Worked example: the same line, inside and outside the data",
				body: [
					"Take two points on the curve y = x²: (2, 4) and (4, 16). The straight line through them has a slope of (16 − 4) / (4 − 2) = 6. Because the true curve is known here, you can see the size of the error at each target.",
					"Inside the data the line misses by 1. Beyond it, the miss reaches 48 at x = 10, and at x = 0 the line predicts a negative value for a curve that never goes below zero. Nothing in the two points warns you about this, which is why an extrapolated figure needs a stated caveat.",
				],
				table: {
					headers: ["Target x", "Type", "Straight-line estimate", "True value (x²)", "Error"],
					rows: [
						["3", "Interpolation", "10", "9", "1"],
						["5", "Extrapolation", "22", "25", "3"],
						["10", "Extrapolation", "52", "100", "48"],
						["0", "Extrapolation", "−8", "0", "8"],
					],
				},
			},
			{
				heading: "When to use each",
				body: [
					"Use [linear interpolation](/linear-interpolation-calculator/) whenever you have known values on both sides of your target, such as adjacent rows in a table. If the data curves, tighten the gap between the points or use a method that matches its shape, such as [logarithmic interpolation](/logarithmic-interpolation-calculator/).",
					"Use [extrapolation](/extrapolation-calculator/) only when you have no data at the target and can give a reason to expect the trend to continue. Extending a short way past the data is often reasonable. Extending by several times the spacing between your points deserves real caution, and more data or a physical model is the better choice if either is available.",
				],
			},
		],
		faqs: [
			{
				q: "What is the difference between interpolation and extrapolation?",
				a: "Interpolation estimates a value between known data points. Extrapolation estimates a value beyond them. The arithmetic can be identical, but extrapolation has no data on the far side of the target to confirm the trend.",
			},
			{
				q: "Is extrapolation always less accurate than interpolation?",
				a: "Usually, but not always. If the data truly lies on a straight line, both are exact. Interpolation can also be poor when the known points are far apart and the data curves between them.",
			},
			{
				q: "How can I tell which one I am doing?",
				a: "Check whether the target lies between the smallest and largest known x values. If it does, you are interpolating. If it does not, you are extrapolating. The calculator shows this on a badge next to each result.",
			},
		],
		related: ["extrapolation-calculator", "linear-interpolation-calculator", "how-to-interpolate", "interpolation-formula"],
		updated: "2026-11-03",
	},
	{
		slug: "how-to-interpolate",
		nav: "How to interpolate",
		blurb: "The method as four steps, with worked examples you can follow by hand.",
		title: "How to Interpolate: Step-by-Step Method and Examples",
		description:
			"How to interpolate between two values in four steps: find the points either side, work out the fraction and apply it, with worked examples.",
		h1: "How to Interpolate Between Two Values",
		intro:
			"To interpolate, find the two known values on either side of your target, work out how far along the gap your target sits, and move the same fraction of the way between the two results. The steps below work by hand or on any basic calculator, and the calculator on this page is preloaded with the first example so you can check your working.",
		preset: {
			mode: "linear",
			values: { "lin-x1": "50", "lin-y1": "2.4", "lin-x2": "70", "lin-y2": "3.1", "lin-x": "62" },
		},
		presetNote: "Preloaded: a sensor reading of 2.40 V at 50 °C and 3.10 V at 70 °C, estimated at 62 °C.",
		reserve: "min-h-[29.5rem] sm:min-h-[26rem]",
		sections: [
			{
				heading: "The four steps",
				body: [
					"Call your target x, the known values on either side x₁ and x₂, and their results y₁ and y₂. Written as one line, these steps are the [linear interpolation formula](/interpolation-formula/).",
				],
				steps: [
					"Find the two known points that sit immediately on either side of your target.",
					"Work out the fraction of the way along: (x − x₁) / (x₂ − x₁).",
					"Multiply that fraction by the gap between the results: (y₂ − y₁).",
					"Add the answer to y₁. The result should lie between y₁ and y₂, which is a quick check on your working.",
				],
			},
			{
				heading: "Worked example: reading between table rows",
				body: [
					"This illustrative calibration table has no row for 62 °C, so the reading has to be estimated from the rows either side.",
					"The target is (62 − 50) / (70 − 50) = 0.6 of the way along. The gap between the readings is 3.10 − 2.40 = 0.70 V, and 0.6 × 0.70 = 0.42 V. Adding that to the lower reading gives 2.40 + 0.42 = 2.82 V, which lies between the two rows as it should.",
				],
				table: {
					headers: ["Temperature (°C)", "Sensor output (V)"],
					rows: [
						["50", "2.40"],
						["62", "2.82 (interpolated)"],
						["70", "3.10"],
					],
				},
			},
			{
				heading: "When the values decrease",
				body: [
					"The method is the same when y falls as x rises, and the gap simply comes out negative. With y = 50 at x = 10 and y = 30 at x = 20, the target x = 14 is 0.4 of the way along. The gap is 30 − 50 = −20, and 0.4 × (−20) = −8, so the result is 50 − 8 = 42. Keep the minus sign, since dropping it is a common mistake and gives 58, which is outside the range of the two values.",
				],
			},
			{
				heading: "Interpolating between two numbers",
				body: [
					"The exact midpoint between two numbers is their average, so halfway between 40 and 60 is 50. To fill in several evenly spaced values, divide the gap by the number of intervals you want. Four values between 40 and 60 make five intervals, each 20 / 5 = 4 wide, which gives 44, 48, 52 and 56.",
				],
			},
			{
				heading: "When a straight line is not enough",
				body: [
					"Straight-line interpolation works best when the two points are close together. If x spans several orders of magnitude, use [logarithmic interpolation](/logarithmic-interpolation-calculator/). If the value depends on two inputs, as in a superheated [steam table](/steam-table-interpolation-calculator/), use [bilinear (double) interpolation](/bilinear-interpolation-calculator/). If your target is beyond the data, you are [extrapolating](/interpolation-vs-extrapolation/), and the result deserves more caution. For a spreadsheet version, see [interpolation in Excel](/interpolation-in-excel/).",
				],
			},
		],
		faqs: [
			{
				q: "What is the easiest way to interpolate?",
				a: "Work out what fraction of the way your target sits between the two known x values, then move that same fraction of the way between the two y values. For example, a target halfway between the x values gives the average of the y values.",
			},
			{
				q: "Which two points should I use?",
				a: "Use the pair immediately on either side of your target. The closer together they are, the less room the data has to curve away from a straight line, so the estimate is usually better.",
			},
			{
				q: "How can I check an interpolated answer?",
				a: "A true interpolation always lands between the two known y values. If your answer falls outside them, check the signs and that each y value is paired with the correct x value. You can also enter the numbers into the calculator on this page.",
			},
		],
		related: ["linear-interpolation-calculator", "interpolation-formula", "interpolation-in-excel", "interpolation-vs-extrapolation"],
		updated: "2026-11-03",
	},
	{
		slug: "interpolation-in-excel",
		nav: "Interpolation in Excel",
		blurb: "Formulas to copy for two points, whole tables, log data and 2D tables.",
		title: "Interpolation in Excel: Linear Formulas for Any Table",
		description:
			"How to interpolate in Excel: a two-point formula, FORECAST.LINEAR, and a lookup formula for whole tables, with logarithmic and double versions to copy.",
		h1: "How to Interpolate in Excel",
		intro:
			"Excel has no INTERPOLATE function, but a short formula does the same job. This page gives formulas to copy for two points, for a whole table, and for logarithmic and double interpolation. The calculator below is preloaded with the same numbers as the first examples, so you can use it to check your spreadsheet.",
		preset: {
			mode: "linear",
			values: { "lin-x1": "20", "lin-y1": "998.21", "lin-x2": "30", "lin-y2": "995.65", "lin-x": "25" },
		},
		presetNote: "Preloaded: density of water at 25 °C from the 20 °C and 30 °C rows, the same lookup as the spreadsheet examples.",
		reserve: "min-h-[29.5rem] sm:min-h-[26rem]",
		sections: [
			{
				heading: "Interpolating between two points",
				body: [
					"Put the two known x values in `A2` and `A3`, their y values in `B2` and `B3`, and your target x in `E1`. This is the [linear interpolation formula](/interpolation-formula/) written with cell references, and it works in every version of Excel. With 20 and 30 in column A, 998.21 and 995.65 in column B, and 25 in `E1`, it returns 996.93.",
				],
				code: ["=B2+(E1-A2)*(B3-B2)/(A3-A2)"],
			},
			{
				heading: "Using FORECAST.LINEAR",
				body: [
					"`FORECAST.LINEAR` needs Excel 2016 or later. In older versions, use `FORECAST` with the same arguments. Give it only the two rows on either side of your target. If you pass a longer range, it fits a regression line through all of those points, which is a different calculation and generally will not pass through your table values.",
				],
				code: ["=FORECAST.LINEAR(E1,B2:B3,A2:A3)"],
			},
			{
				heading: "Interpolating anywhere in a table",
				body: [
					"To avoid picking the rows by hand, let `MATCH` find them. Using this table in `A2:B5` with the target in `E1`, the first formula below needs Excel 2021 or Microsoft 365. The second works from Excel 2016 onward.",
					"Column A must be sorted in ascending order, because `MATCH` with a match type of 1 relies on it. The target must be at or above the first x value and below the last one. A target outside that range returns an error, which is useful, since it stops you extrapolating by accident.",
				],
				table: {
					headers: ["A: Temperature (°C)", "B: Density of water (kg/m³, approx.)"],
					rows: [
						["10", "999.70"],
						["20", "998.21"],
						["30", "995.65"],
						["40", "992.22"],
					],
				},
				code: [
					"=LET(i,MATCH(E1,A2:A5,1),x1,INDEX(A2:A5,i),x2,INDEX(A2:A5,i+1),y1,INDEX(B2:B5,i),y2,INDEX(B2:B5,i+1),y1+(E1-x1)*(y2-y1)/(x2-x1))",
					"=FORECAST.LINEAR(E1,INDEX(B2:B5,MATCH(E1,A2:A5,1)):INDEX(B2:B5,MATCH(E1,A2:A5,1)+1),INDEX(A2:A5,MATCH(E1,A2:A5,1)):INDEX(A2:A5,MATCH(E1,A2:A5,1)+1))",
				],
			},
			{
				heading: "Logarithmic interpolation in Excel",
				body: [
					"For data that is straight on a logarithmic x-axis, take the natural log of each x value. With 10 and 1000 in column A, 2 and 5 in column B, and 100 in `E1`, this returns 3.5. All x values must be greater than zero. The [logarithmic interpolation calculator](/logarithmic-interpolation-calculator/) explains when to use this method.",
				],
				code: ["=B2+(LN(E1)-LN(A2))*(B3-B2)/(LN(A3)-LN(A2))"],
			},
			{
				heading: "Double interpolation in Excel",
				body: [
					"Lay out the table with the two x values across the top in `B1` and `C1`, the two y values down the side in `A2` and `A3`, and the four table values in `B2:C3`. Put the target x in `E1` and the target y in `E2`. With 100 and 200 across the top, 10 and 20 down the side, values of 3, 5, 7 and 11, and targets of 150 and 12, this returns 5, matching the example on the [bilinear interpolation calculator](/bilinear-interpolation-calculator/) page.",
				],
				code: ["=(B2*(C1-E1)*(A3-E2)+C2*(E1-B1)*(A3-E2)+B3*(C1-E1)*(E2-A2)+C3*(E1-B1)*(E2-A2))/((C1-B1)*(A3-A2))"],
			},
		],
		faqs: [
			{
				q: "Does Excel have an interpolation function?",
				a: "There is no function named INTERPOLATE. For linear interpolation, use the two-point formula on this page or give FORECAST.LINEAR just the two rows either side of your target.",
			},
			{
				q: "Why does FORECAST.LINEAR give a different answer from my table?",
				a: "If you pass it more than two rows, it fits one regression line through all of them instead of connecting the two nearest points. The line then generally misses your table values. Pass only the two rows around the target.",
			},
			{
				q: "Do these formulas work in Google Sheets?",
				a: "Yes. Google Sheets supports the same functions used here, including LET, MATCH, INDEX and FORECAST.LINEAR, so you can paste the formulas in and keep the same cell layout.",
			},
		],
		related: ["how-to-interpolate", "linear-interpolation-calculator", "bilinear-interpolation-calculator", "logarithmic-interpolation-calculator"],
		updated: "2026-11-03",
	},
];

export function getLandingPage(slug: string): LandingPage | undefined {
	return landingPages.find((p) => p.slug === slug);
}
