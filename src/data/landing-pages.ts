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
	sections: Array<{ heading: string; body: string[] }>;
	faqs: Array<{ q: string; a: string }>;
	related: string[];
	/** ISO date the page content was last changed (real date, used for sitemap lastmod). */
	updated: string;
}

export const landingPages: LandingPage[] = [
	{
		slug: "linear-interpolation-calculator",
		nav: "Linear interpolation",
		blurb: "Two known points, one target x. The everyday table lookup.",
		title: "Linear Interpolation Calculator – Find y Between Two Points",
		description:
			"Free linear interpolation calculator: enter two known points and a target x to get y, with the formula and every step shown. Includes a worked table-lookup example.",
		h1: "Linear Interpolation Calculator",
		intro:
			"Use this calculator when you know two points and need the value at an x that sits between them, such as reading a property table at a temperature that isn't listed. The calculator below is preloaded with a real table lookup. Change any number to try your own data.",
		preset: {
			mode: "linear",
			values: { "lin-x1": "20", "lin-y1": "998.21", "lin-x2": "30", "lin-y2": "995.65", "lin-x": "25" },
		},
		presetNote: "Preloaded: density of water at 25 °C, from table values at 20 °C and 30 °C.",
		sections: [
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
					"Put the lower table row in x₁ and y₁, the upper row in x₂ and y₂, and the x you want in the target field. The order of the two points does not matter as long as each y stays with its own x. When the target lies between x₁ and x₂ the result is badged Interpolated. If it lies outside, the badge reads Extrapolated, which means the answer is a projection beyond your data and deserves less trust.",
				],
			},
			{
				heading: "Choosing the two rows",
				body: [
					"Pick the rows that sit immediately on either side of your target. The closer together they are, the closer the data is to a straight line between them, and the smaller the error. If the values in your table change by large factors from row to row (for example, spacing of 1, 10, 100), a straight line is a poor fit and the logarithmic calculator is the better tool.",
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
		related: ["interpolation-formula", "logarithmic-interpolation-calculator", "extrapolation-calculator"],
		updated: "2026-10-22",
	},
	{
		slug: "logarithmic-interpolation-calculator",
		nav: "Logarithmic interpolation",
		blurb: "For data that is straight on a log x-axis, such as frequency or concentration.",
		title: "Logarithmic Interpolation Calculator – Log-Scale x Values",
		description:
			"Free logarithmic interpolation calculator for data that is linear in ln(x). Includes a frequency-response worked example, the formula, and when to pick log over linear.",
		h1: "Logarithmic Interpolation Calculator",
		intro:
			"When x spans several orders of magnitude and y changes by a steady amount for each multiplication of x, a straight line on ordinary axes gives the wrong answer. This calculator interpolates against ln(x) instead. It is preloaded with a frequency-response example.",
		preset: {
			mode: "log",
			values: { "log-x1": "10", "log-y1": "2", "log-x2": "1000", "log-y2": "5", "log-x": "100" },
		},
		presetNote: "Preloaded: a sensor reading of 2.0 at 10 Hz and 5.0 at 1000 Hz, estimated at 100 Hz.",
		sections: [
			{
				heading: "Worked example: a reading between two frequencies",
				body: [
					"A sensor output reads 2.0 at 10 Hz and 5.0 at 1000 Hz, and the response plots as a straight line when frequency is on a logarithmic axis. To estimate the reading at 100 Hz, take natural logs: ln 10 = 2.3026, ln 100 = 4.6052, ln 1000 = 6.9078. The target is (4.6052 − 2.3026) / (6.9078 − 2.3026) = 0.5 of the way across in log space, so y = 2.0 + 0.5 × (5.0 − 2.0) = 3.5.",
					"Plain linear interpolation would treat 100 Hz as only (100 − 10) / (1000 − 10) = 9.1% of the way across and return about 2.27. The two answers differ by more than 50%, so the choice of method matters far more than rounding here.",
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
		updated: "2026-10-22",
	},
	{
		slug: "bilinear-interpolation-calculator",
		nav: "Bilinear (double) interpolation",
		blurb: "Four corner values of a 2D table cell, two targets.",
		title: "Bilinear (Double) Interpolation Calculator – 2D Tables",
		description:
			"Free bilinear interpolation calculator for 2D tables and grids. Enter the four corner values and your x and y to get the result with each step, plus a worked example.",
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
		sections: [
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
					"The method is standard for reading superheated steam tables, refrigerant tables, calibration grids and any two-input lookup. It is also the basis of simple image and map resampling. The result is exact when the underlying function has the form a + bx + cy + dxy, and an approximation otherwise. If the target falls outside the cell, the result is labelled Extrapolated.",
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
		related: ["steam-table-interpolation-calculator", "linear-interpolation-calculator", "interpolation-formula"],
		updated: "2026-10-22",
	},
	{
		slug: "steam-table-interpolation-calculator",
		nav: "Steam table interpolation",
		blurb: "Single interpolation for saturated tables, double for superheated.",
		title: "Steam Table Interpolation Calculator – Single & Double",
		description:
			"How to interpolate steam tables: single interpolation for saturated values and double interpolation for superheated steam, with a worked saturation-pressure example.",
		h1: "Steam Table Interpolation Calculator",
		intro:
			"Thermodynamics courses and plant calculations constantly need steam properties at a temperature or pressure that the table skips. Saturated tables need one interpolation; superheated tables need two. The calculator below is preloaded with a saturation-pressure lookup.",
		preset: {
			mode: "linear",
			values: { "lin-x1": "100", "lin-y1": "101.42", "lin-x2": "110", "lin-y2": "143.38", "lin-x": "105" },
		},
		presetNote: "Preloaded: saturation pressure (kPa) at 105 °C from rows at 100 °C and 110 °C.",
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
					"Superheated tables list properties such as specific volume, internal energy, enthalpy and entropy for combinations of pressure and temperature. When both your pressure and your temperature fall between listed values, locate the four surrounding entries. In the Double (bilinear) tab, treat temperature as x, pressure as y, and enter the four table values as the corners.",
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
		updated: "2026-10-22",
	},
	{
		slug: "extrapolation-calculator",
		nav: "Extrapolation",
		blurb: "Extend a line past your two known points, with the caveats.",
		title: "Extrapolation Calculator – Linear Extrapolation Beyond Data",
		description:
			"Free linear extrapolation calculator: extend a straight line past your two known points to estimate y outside the data range, with steps and reliability caveats.",
		h1: "Extrapolation Calculator",
		intro:
			"Extrapolation estimates a value outside the range of the data you have. The arithmetic is the same as interpolation, but the answer is less reliable. This calculator labels any result outside your known points as extrapolated. It is preloaded with an example that extends a line beyond its second point.",
		preset: {
			mode: "linear",
			values: { "lin-x1": "2", "lin-y1": "14", "lin-x2": "6", "lin-y2": "22", "lin-x": "9" },
		},
		presetNote: "Preloaded: points (2, 14) and (6, 22), extended to x = 9.",
		sections: [
			{
				heading: "How linear extrapolation works",
				body: [
					"Linear extrapolation extends the straight line through two known points. With (2, 14) and (6, 22), the slope is (22 − 14) / (6 − 2) = 2 per unit of x. The target x = 9 is 7 units past x₁, so y = 14 + 7 × 2 = 28. The formula is the one used for interpolation: only the position of the target changes, and the result badge switches from Interpolated to Extrapolated.",
				],
			},
			{
				heading: "Why extrapolation is riskier",
				body: [
					"Between two known points, the data is at least pinned down at both ends. Beyond them, nothing constrains the curve, and any bend in the underlying relationship makes the straight-line error grow with distance. Growth that levels off, equipment that saturates, and processes that change regime are all cases where a line drawn from two points can be badly wrong.",
					"As a rule of thumb, extending by a fraction of the spacing between your two points is usually reasonable, while extending by several times that spacing deserves strong caution. Treat the result as a rough projection and say so when you report it.",
				],
			},
			{
				heading: "Better options when you have more data",
				body: [
					"If you have more than two points, fit a trend line using all of them rather than relying on two. If you know the physics, use a model that matches it. If your data grows by a roughly constant factor per step in x, the logarithmic calculator is a better fit than a straight line, as long as all x values are positive.",
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
		related: ["linear-interpolation-calculator", "logarithmic-interpolation-calculator", "interpolation-formula"],
		updated: "2026-10-22",
	},
	{
		slug: "interpolation-formula",
		nav: "Interpolation formula",
		blurb: "Where the formula comes from, in slope and weighted-average form.",
		title: "Interpolation Formula – Linear, Log & Bilinear Explained",
		description:
			"The interpolation formula derived step by step, with the weighted-average form, the logarithmic and bilinear versions, and a calculator preloaded with a worked example.",
		h1: "The Interpolation Formula, Step by Step",
		intro:
			"The linear interpolation formula is short, but it is easier to remember and to check when you see where it comes from. This page derives it, shows the equivalent weighted-average form, and explains how the logarithmic and bilinear versions follow from it. The calculator is preloaded with the example used below.",
		preset: {
			mode: "linear",
			values: { "lin-x1": "1", "lin-y1": "5", "lin-x2": "4", "lin-y2": "11", "lin-x": "3" },
		},
		presetNote: "Preloaded: points (1, 5) and (4, 11), evaluated at x = 3.",
		sections: [
			{
				heading: "Deriving the formula",
				body: [
					"Any point (x, y) on the straight line through (x₁, y₁) and (x₂, y₂) has the same slope to (x₁, y₁) as the second point does: (y − y₁) / (x − x₁) = (y₂ − y₁) / (x₂ − x₁). Multiply both sides by (x − x₁) and add y₁ to get y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁). This is the two-point form of the equation of a line.",
					"With (1, 5) and (4, 11) the slope is (11 − 5) / (4 − 1) = 2, so at x = 3 the formula gives y = 5 + (3 − 1) × 2 = 9.",
				],
			},
			{
				heading: "The weighted-average form",
				body: [
					"Define t = (x − x₁) / (x₂ − x₁), the fraction of the way from x₁ to x₂. Then y = (1 − t) × y₁ + t × y₂. At x₁ the fraction is 0 and the result is y₁, at x₂ it is 1 and the result is y₂, and between them the result blends the two.",
					"In the example, t = (3 − 1) / (4 − 1) = 2/3, so y = (1/3) × 5 + (2/3) × 11 = 27/3 = 9, the same answer. Interpolation corresponds to t between 0 and 1. A t outside that range means extrapolation.",
				],
			},
			{
				heading: "Logarithmic, bilinear and inverse versions",
				body: [
					"The logarithmic version computes t from logarithms: t = (ln x − ln x₁) / (ln x₂ − ln x₁), then uses the same blend of y₁ and y₂. The bilinear version applies the blend twice, once in x along each of two rows, and once in y between the two results.",
					"To go the other way and find x for a given y, solve the same equation for x: x = x₁ + (y − y₁) × (x₂ − x₁) / (y₂ − y₁). The inverse interpolation page shows how to do this with the calculator by swapping the roles of x and y.",
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
		related: ["linear-interpolation-calculator", "inverse-interpolation-calculator", "logarithmic-interpolation-calculator"],
		updated: "2026-10-22",
	},
	{
		slug: "inverse-interpolation-calculator",
		nav: "Inverse interpolation",
		blurb: "Find the x that gives a target y.",
		title: "Inverse Interpolation Calculator – Find x for a Given y",
		description:
			"Find the x value that gives a target y between two known points. Swap the roles of x and y in the calculator; includes the formula and a worked sensor example.",
		h1: "Inverse Interpolation Calculator",
		intro:
			"Sometimes the question runs backwards: you know the output and want the input that produces it. This is inverse interpolation. You can do it with the linear calculator by swapping which quantity goes in the x fields. The calculator below is preloaded with a worked sensor example.",
		preset: {
			mode: "linear",
			values: { "lin-x1": "20", "lin-y1": "0.5", "lin-x2": "70", "lin-y2": "2.5", "lin-x": "45" },
		},
		presetNote: "Preloaded: temperatures 20 °C and 70 °C entered as x, with sensor voltages 0.5 V and 2.5 V entered as y.",
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
		updated: "2026-10-22",
	},
];

export function getLandingPage(slug: string): LandingPage | undefined {
	return landingPages.find((p) => p.slug === slug);
}
