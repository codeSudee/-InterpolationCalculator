import type { Dictionary } from "../dictionary";

export const en: Dictionary = {
	meta: {
		title: "Interpolation Calculator – Linear, Logarithmic & Bilinear, Step by Step",
		description:
			"Estimate values between known data points with linear, logarithmic, or double (bilinear) interpolation. Every result shows the full working, with worked examples and guidance on choosing a method.",
	},

	header: {
		brand: "Interpolation Calculator",
		navCalculator: "Calculator",
		navFaq: "FAQ",
		themeToggleLabel: "Toggle dark mode",
		languageLabel: "Language",
		skipToContent: "Skip to content",
	},

	hero: {
		eyebrow: "Free · No sign-up · Runs in your browser",
		heading: "Interpolation Calculator with Step-by-Step Results",
		subheading:
			"Enter the data points you know and get an estimate for the one you don't — using linear, logarithmic, or double (bilinear) interpolation. Every substitution and intermediate value is shown, so you can check the answer instead of taking it on trust.",
	},

	calculator: {
		tablistLabel: "Interpolation mode",
		tabLinear: "Linear",
		tabLog: "Logarithmic",
		tabBilinear: "Double (bilinear)",

		linearIntro: "Enter two known points, then the x value you want to estimate y for.",
		logIntro:
			"For data where y changes linearly with ln(x), such as values spanning several orders of magnitude. All x values must be greater than zero.",
		bilinearIntro:
			"Estimate a value inside a 2D table from the four known values at the corners of the surrounding cell (for example, a steam table).",

		labelX1: "x₁",
		labelY1: "y₁",
		labelX2: "x₂",
		labelY2: "y₂",
		labelXTarget: "x (target)",
		labelYTarget: "y (target)",
		labelQ11: "Q₁₁ = f(x₁,y₁)",
		labelQ12: "Q₁₂ = f(x₁,y₂)",
		labelQ21: "Q₂₁ = f(x₂,y₁)",
		labelQ22: "Q₂₂ = f(x₂,y₂)",

		resultEyebrow: "Result",
		resultEmpty: "Enter values to see the interpolated result and step-by-step working.",
		resultInterpolated: "Interpolated",
		resultExtrapolated: "Extrapolated",
		extrapolationNote:
			"The target value falls outside your known data range, so this is an extrapolation, not an interpolation. Extrapolated estimates are less reliable, especially if the underlying relationship isn't truly linear/logarithmic across that range.",

		steps: {
			linear: {
				formula: "Formula",
				substitute: "Substitute your values",
				computeSlope: "Compute the slope",
				applySlope: "Apply the slope to the offset from x₁",
				takeLogs: "",
				computeLogSlope: "",
				interpolateXAtY1: "",
				interpolateXAtY2: "",
				interpolateY: "",
				result: "Result",
			},
			log: {
				formula: "Formula",
				substitute: "Substitute your values",
				computeSlope: "",
				applySlope: "",
				takeLogs: "Take natural logs of the x values",
				computeLogSlope: "Compute the log-space slope",
				interpolateXAtY1: "",
				interpolateXAtY2: "",
				interpolateY: "",
				result: "Result",
			},
			bilinear: {
				formula: "Formula",
				substitute: "",
				computeSlope: "",
				applySlope: "",
				takeLogs: "",
				computeLogSlope: "",
				interpolateXAtY1: "Interpolate in x at y = y₁",
				interpolateXAtY2: "Interpolate in x at y = y₂",
				interpolateY: "Interpolate in y between R₁ and R₂",
				result: "Result",
			},
		},

		errors: {
			invalidNumber: "Enter a valid number for {field}.",
			xEqual:
				"x1 and x2 are equal, so the line between them is undefined (division by zero). Enter two distinct x values.",
			logDomain:
				"Logarithmic interpolation requires x₁, x₂, and x to all be greater than zero (log is undefined for zero or negative values).",
			logXEqual:
				"x1 and x2 are equal, so the logarithmic curve between them is undefined (division by zero). Enter two distinct x values.",
			bilinearXEqual:
				"x1 and x2 are equal, so the grid has zero width (division by zero). Enter two distinct x values.",
			bilinearYEqual:
				"y1 and y2 are equal, so the grid has zero height (division by zero). Enter two distinct y values.",
		},
	},

	explanation: {
		linear: {
			title: "Linear interpolation formula",
			intro:
				"Assumes a straight line between two points. Given (x₁, y₁) and (x₂, y₂), the y value at any x is:",
			formula: "y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁)",
			note:
				"Good for evenly-spaced table lookups, unit conversions, and any relationship that's approximately straight over the range you care about.",
		},
		log: {
			title: "Logarithmic interpolation formula",
			intro:
				"Assumes y varies linearly with ln(x) rather than x itself — useful when x spans several orders of magnitude.",
			formula: "y = y₁ + (ln x − ln x₁) × (y₂ − y₁) / (ln x₂ − ln x₁)",
			note: "Common for pH, decibels, Richter magnitude, and other logarithmically-scaled measurements.",
		},
		bilinear: {
			title: "Double (bilinear) interpolation formula",
			intro:
				"First interpolate in x along both known rows to get R₁ (at y₁) and R₂ (at y₂), then interpolate between those two results in y:",
			formula: "f(x,y) = R₁ + (y − y₁) × (R₂ − R₁) / (y₂ − y₁)",
			note: "The standard method for reading steam tables and other 2D engineering reference tables.",
		},
	},

	seoContent: {
		heading: "How interpolation works, with worked examples",
		intro:
			"Interpolation estimates an unknown value that lies between values you already know. It is how you read between the rows of an engineering table, fill a gap in measured data, or convert a reading on a scale that is only listed at certain points. The right method depends on how your data behaves between those known points. The sections below explain the three methods this calculator supports, walk through an example of each that you can reproduce in the calculator above, and cover the most common sources of error.",
		sections: [
			{
				heading: "Linear interpolation: worked example",
				body: [
					"Linear interpolation assumes the data follows a straight line between two known points (x₁, y₁) and (x₂, y₂). The formula is y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁): it finds the slope between the two points, then moves along that slope from x₁ to your target x.",
					"Example: a table lists y = 12.4 at x = 20 and y = 18.9 at x = 30, and you need the value at x = 24. The slope is (18.9 − 12.4) / (30 − 20) = 0.65 per unit of x. The target is 4 units past x₁, so y = 12.4 + 4 × 0.65 = 15.0. Enter x₁ = 20, y₁ = 12.4, x₂ = 30, y₂ = 18.9 and x = 24 in the Linear tab to see the same steps.",
				],
			},
			{
				heading: "Logarithmic interpolation: worked example",
				body: [
					"Some quantities change by a constant amount each time x is multiplied by a fixed factor, rather than each time x increases by a fixed amount. Sound level in decibels, pH, and earthquake magnitude all behave this way. For this kind of data, y is a straight line against ln(x), so logarithmic interpolation applies the linear formula to ln(x) instead of x.",
					"Example: a sound intensity of 1 µW/m² corresponds to 60 dB and 100 µW/m² corresponds to 80 dB. What is the level at 10 µW/m²? Logarithmic interpolation gives 60 + (ln 10 − ln 1) × (80 − 60) / (ln 100 − ln 1) = 70 dB, which is exactly right, because 10 is one factor of ten above 1 and one factor of ten below 100. Plain linear interpolation would return about 61.8 dB, because it treats 10 as being only 9% of the way from 1 to 100. Using the wrong method on logarithmic data can produce errors this large.",
				],
			},
			{
				heading: "Double (bilinear) interpolation: worked example",
				body: [
					"Two-dimensional tables, such as superheated steam tables, list a value for every combination of a row variable and a column variable. When both of your inputs fall between listed values, you need the four surrounding table entries: Q₁₁ = f(x₁, y₁), Q₂₁ = f(x₂, y₁), Q₁₂ = f(x₁, y₂) and Q₂₂ = f(x₂, y₂). Bilinear interpolation first interpolates in x along each of the two rows, then interpolates between those two results in y.",
					"Example: with x₁ = 10, x₂ = 20, y₁ = 100 and y₂ = 200, the table gives Q₁₁ = 50, Q₂₁ = 70, Q₁₂ = 60 and Q₂₂ = 90. To estimate f(14, 130), first interpolate along y₁: R₁ = 50 + (14 − 10) × (70 − 50) / 10 = 58. Then along y₂: R₂ = 60 + 0.4 × (90 − 60) = 72. Finally interpolate in y: f = 58 + (130 − 100) × (72 − 58) / 100 = 62.2. Interpolating in y first and then x gives the same 62.2.",
				],
			},
			{
				heading: "Choosing a method",
				body: [
					"Use linear interpolation when the known points are close together and the data looks roughly straight between them. This covers most table lookups. Use logarithmic interpolation when the x values span a wide range (for example 1 to 1,000) and the data plots as a straight line on a logarithmic x-axis. Use double interpolation whenever the value depends on two inputs at once and you are reading from a grid.",
					"If you are unsure, plot a few neighbouring table values. Points that lie on a straight line on ordinary axes suit linear interpolation. Points that only straighten out when x is plotted on a log scale suit logarithmic interpolation.",
				],
			},
			{
				heading: "Accuracy and common mistakes",
				body: [
					"Linear interpolation is exact only when the data really is a straight line. For a curved function f, the error is at most (x₂ − x₁)² / 8 multiplied by the largest value of |f″| between the two points. In practice, this means halving the spacing between your known points cuts the worst-case error to about a quarter. When a table offers finer rows near your target, use them.",
					"The most frequent mistakes are mixing up which value belongs to x₁ and which to x₂, mixing units (for example kPa in one row and bar in another), and reading Q₁₂ and Q₂₁ from the wrong cells of a 2D table. Estimating outside the known range is also risky. The calculator labels those results as extrapolated because the assumed straight line or curve may not continue beyond your data.",
				],
			},
		],
	},

	faq: {
		heading: "Frequently asked questions",
		items: [
			{
				q: "What is interpolation?",
				a: "Interpolation is estimating an unknown value that lies between two or more known data points by assuming a simple shape, such as a straight line, connects them. It is commonly used to read values between the listed rows of reference tables and to fill gaps in measured data.",
			},
			{
				q: "What is the linear interpolation formula?",
				a: "y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁). The fraction (y₂ − y₁) / (x₂ − x₁) is the slope of the line through the two known points, and multiplying it by (x − x₁) gives how far y has moved from y₁ by the time you reach x.",
			},
			{
				q: "When is linear interpolation accurate enough?",
				a: "When the known points are close together and the data is close to a straight line between them. For a curved relationship the error grows with the square of the spacing between points, so using the nearest available table rows usually matters more than the choice of method.",
			},
			{
				q: "When should I use logarithmic interpolation instead of linear?",
				a: "Use it when y changes by roughly the same amount each time x is multiplied by a constant factor — for example decibels versus sound intensity, or pH versus hydrogen-ion concentration. If your data forms a straight line when x is plotted on a logarithmic axis, logarithmic interpolation will fit it better than linear interpolation.",
			},
			{
				q: "Why must x be greater than zero for logarithmic interpolation?",
				a: "Logarithmic interpolation works with ln(x), and the natural logarithm is only defined for positive numbers. If your x values include zero or negatives, the data cannot be on a logarithmic scale in x, and linear interpolation is the appropriate method.",
			},
			{
				q: "How does double (bilinear) interpolation work?",
				a: "It uses the four known values at the corners of the table cell that contains your target point. It interpolates in x along the lower row (giving R₁) and the upper row (giving R₂), then interpolates between R₁ and R₂ in y. The result is a weighted average of the four corners, with nearer corners weighted more heavily.",
			},
			{
				q: "Does it matter whether I interpolate in x or y first?",
				a: "No. For bilinear interpolation, doing x first and then y gives exactly the same result as doing y first and then x. The worked example above gives 62.2 in either order.",
			},
			{
				q: "What is the difference between interpolation and extrapolation?",
				a: "Interpolation estimates a value inside the range of your known points; extrapolation estimates one outside it. The formula is the same, so the calculator still returns a number, but it labels the result as extrapolated because there is no data confirming the trend continues past your known points.",
			},
			{
				q: "Why do I get an error when x₁ equals x₂?",
				a: "Every formula here divides by (x₂ − x₁), or by (ln x₂ − ln x₁) in logarithmic mode. When the two x values are equal this is division by zero, and two points at the same x cannot define a line. The same applies to y₁ and y₂ in double interpolation.",
			},
			{
				q: "How precise are the results?",
				a: "Calculations use standard double-precision floating-point arithmetic. For readability, the intermediate values in the steps are rounded to six decimal places, and the final result is shown to 12 significant digits. This rounding only affects what is displayed; each step is computed from the unrounded values.",
			},
			{
				q: "Are the numbers I enter sent or stored anywhere?",
				a: "No. All calculations run in your browser, and your inputs are never sent to a server. Refreshing or closing the page clears them.",
			},
		],
	},

	footer: {
		copyright: "© {year} Interpolation Calculator Online. All calculations run in your browser.",
		disclaimer: "Built for quick, verifiable estimates — not a substitute for professional engineering judgment.",
		navAbout: "About",
		navPrivacy: "Privacy Policy",
		navTerms: "Terms & Conditions",
		navContact: "Contact",
	},

	legal: {
		backToHome: "Back to calculator",
		lastUpdated: "Last updated: {date}",

		about: {
			metaTitle: "About – Interpolation Calculator",
			metaDescription:
				"Why this interpolation calculator exists, how its results are checked, and who maintains it.",
			heading: "About Interpolation Calculator",
			intro:
				"Interpolation Calculator is an independent project that estimates values between known data points using linear, logarithmic, and double (bilinear) interpolation. It shows every step of the calculation, so you can check the answer instead of taking it on trust.",
			sections: [
				{
					heading: "Why this site exists",
					body: [
						"Interpolation comes up constantly in coursework and engineering practice: reading steam and property tables, working with calibration charts, or filling a gap in measured data. The arithmetic is simple, but it is also easy to get wrong by hand. Common slips include swapping x₁ and x₂, reading the wrong cell of a 2D table, or applying a straight-line estimate to data that is logarithmic.",
						"Most online tools only return a final number, which leaves no way to spot an input mistake. This calculator shows the formula, your substituted values, the slope, and every intermediate result, so each step can be compared with a textbook or hand calculation.",
					],
				},
				{
					heading: "How results are checked",
					body: [
						"The three methods use the standard textbook formulas described on the home page. Results have been checked against hand calculations, including the worked examples on the home page. The calculator also handles edge cases explicitly, returning a clear message instead of a meaningless number when x values are equal or when a logarithmic input is zero or negative. When a target falls outside the range, the result is labelled as extrapolated rather than shown without comment.",
					],
				},
				{
					heading: "Privacy by design",
					body: [
						"All calculations run in your browser. The numbers you enter are never sent to a server, so the calculator also works on confidential or unpublished data. The Privacy Policy explains what the site does collect, such as standard analytics and advertising cookies.",
					],
				},
				{
					heading: "Feedback",
					body: [
						"If you find a result that looks wrong, a confusing explanation, or a method you would like added, please get in touch through the Contact page. Reports that include the exact inputs you used are the quickest to investigate and fix.",
					],
				},
			],
		},

		privacy: {
			metaTitle: "Privacy Policy – Interpolation Calculator",
			metaDescription:
				"What information interpcalc.com collects, how Google Analytics and Google AdSense cookies are used, and how to opt out. Calculator inputs never leave your browser.",
			heading: "Privacy Policy",
			intro:
				"This Privacy Policy explains what information interpcalc.com (\"this site\", \"we\") collects when you visit, how it is used, and the choices you have.",
			sections: [
				{
					heading: "Calculator inputs",
					body: [
						"The numbers you enter into the calculator are processed entirely within your browser using client-side JavaScript. They are never sent to our servers, stored in a database, or shared with anyone. Refreshing or closing the page clears them.",
					],
				},
				{
					heading: "Analytics",
					body: [
						"This site uses Google Analytics to understand aggregate usage, such as which pages are visited, the approximate country visitors come from, and the type of device and browser used. Google Analytics uses cookies and collects standard technical data, such as your IP address, to produce these reports. It does not receive the values you enter into the calculator. You can prevent Google Analytics from collecting data by installing the Google Analytics Opt-out Browser Add-on (tools.google.com/dlpage/gaoptout).",
					],
				},
				{
					heading: "Advertising",
					body: [
						"This site uses Google AdSense to display advertisements. Third-party vendors, including Google, use cookies to serve ads based on your previous visits to this website and other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visits to this and other sites on the internet.",
						"You can opt out of personalised advertising by visiting Google Ads Settings (adssettings.google.com). You can also opt out of some third-party vendors' use of cookies for personalised advertising at www.aboutads.info. For more information about how Google uses data, see policies.google.com/technologies/partner-sites.",
						"Visitors in the European Economic Area, the United Kingdom, and Switzerland may be asked for consent before personalised advertising cookies are set, and can change that choice at any time.",
					],
				},
				{
					heading: "Cookies and local storage",
					body: [
						"Apart from the analytics and advertising cookies described above, the site stores a single preference in your browser's local storage: your light or dark theme choice. You can block or delete cookies and local storage at any time through your browser settings. The calculator will continue to work.",
					],
				},
				{
					heading: "Hosting",
					body: [
						"The site is hosted on Cloudflare, which processes standard request data (such as IP address and browser type) to deliver pages and protect the site against abuse.",
					],
				},
				{
					heading: "Children's privacy",
					body: [
						"This site is not directed at children under 13 and does not knowingly collect personal information from them. The calculator does not ask for any personal information.",
					],
				},
				{
					heading: "Changes to this policy",
					body: [
						"We may update this Privacy Policy when the site or applicable law changes. Updates will be posted on this page.",
					],
				},
				{
					heading: "Contact",
					body: [
						"If you have any questions about this Privacy Policy, email code.sudeepto@gmail.com.",
					],
				},
			],
		},

		terms: {
			metaTitle: "Terms & Conditions – Interpolation Calculator Online",
			metaDescription:
				"Terms and conditions for using Interpolation Calculator Online, a free interpolation calculator provided as-is for informational and educational purposes.",
			heading: "Terms & Conditions",
			intro:
				"By accessing or using Interpolation Calculator Online, you agree to the following terms. If you do not agree with these terms, please do not use this site.",
			sections: [
				{
					heading: "Use of this site",
					body: [
						"Interpolation Calculator Online is provided free of charge for personal, educational, and professional reference use. You may use the calculator to estimate interpolated and extrapolated values from your own data.",
					],
				},
				{
					heading: "No warranty",
					body: [
						"This tool is provided \"as is\" and \"as available\", without warranties of any kind, either express or implied, including but not limited to accuracy, reliability, or fitness for a particular purpose. While we aim for mathematically correct results, we do not guarantee that calculations will be error-free or uninterrupted.",
					],
				},
				{
					heading: "Not professional advice",
					body: [
						"This calculator is intended as a general-purpose reference and educational tool. It is not a substitute for professional engineering, scientific, or financial judgment. You are responsible for independently verifying any result before relying on it for engineering design, safety-critical decisions, academic submissions, or any other consequential use.",
					],
				},
				{
					heading: "Limitation of liability",
					body: [
						"To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of, or inability to use, this website or its calculation results.",
					],
				},
				{
					heading: "Intellectual property",
					body: [
						"The design, layout, and original content of this site are owned by Interpolation Calculator Online. You may not copy, republish, or redistribute substantial portions of the site without permission.",
					],
				},
				{
					heading: "Changes to these terms",
					body: [
						"We may update these Terms & Conditions from time to time. Continued use of the site after changes are posted constitutes acceptance of the updated terms.",
					],
				},
			],
		},

		contact: {
			metaTitle: "Contact Us – Interpolation Calculator Online",
			metaDescription:
				"Get in touch with the Interpolation Calculator Online team with questions, feedback, or bug reports.",
			heading: "Contact Us",
			intro:
				"Have a question, found a bug, or want to suggest a feature? We'd like to hear from you. Reach out using the email address below.",
			emailLabel: "Email:",
			email: "code.sudeepto@gmail.com",
			sections: [
				{
					heading: "Feedback and bug reports",
					body: [
						"If you notice a calculation that looks incorrect, please include the exact inputs you used and the interpolation mode (linear, logarithmic, or bilinear) so we can reproduce and investigate the issue.",
					],
				},
				{
					heading: "Response time",
					body: [
						"We aim to respond to messages within a few business days.",
					],
				},
			],
		},
	},

	errorPage: {
		notFound: {
			metaTitle: "Page Not Found (404) – Interpolation Calculator Online",
			metaDescription: "The page you're looking for doesn't exist or may have been moved.",
			code: "404",
			heading: "Page not found",
			body: "The page you're looking for doesn't exist or may have been moved. Check the URL, or head back to the calculator.",
		},
		serverError: {
			metaTitle: "Server Error (500) – Interpolation Calculator Online",
			metaDescription: "Something went wrong on our end. Please try again in a moment.",
			code: "500",
			heading: "Something went wrong",
			body: "We hit an unexpected error while loading this page. Please try again in a moment, or head back to the calculator.",
		},
		backToHome: "Back to calculator",
		contactSupport: "Contact support",
	},
};
