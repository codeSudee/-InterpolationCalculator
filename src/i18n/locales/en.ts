import type { Dictionary } from "../dictionary";

export const en: Dictionary = {
	meta: {
		title: "Interpolation Calculator Online – Linear, Bilinear & Logarithmic",
		description:
			"Free interpolation calculator online with step-by-step results. Solve linear, double (bilinear), and logarithmic interpolation — a fast, accurate interpolation solver.",
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
			"A free interpolation calculator online for linear interpolation, double (bilinear) interpolation, and logarithmic interpolation. Enter your known points to calculate interpolation instantly and see exactly how the interpolation formula calculator derived the answer.",
	},

	calculator: {
		tablistLabel: "Interpolation mode",
		tabLinear: "Linear",
		tabLog: "Logarithmic",
		tabBilinear: "Double (bilinear)",

		linearIntro: "Linear interpolation calculator: enter two known points, then the x value you want to estimate y for.",
		logIntro:
			"Logarithmic interpolation calculator for data that follows a logarithmic curve along x. All x values must be greater than zero.",
		bilinearIntro:
			"Double (bilinear) interpolation calculator: interpolate across a 2D grid using four known values at the corners of a rectangle (e.g. steam tables).",

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
			title: "Linear interpolation calculator formula",
			intro:
				"Assumes a straight line between two points. Given (x₁, y₁) and (x₂, y₂), the y value at any x is:",
			formula: "y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁)",
			note:
				"Good for evenly-spaced table lookups, unit conversions, and any relationship that's approximately straight over the range you care about.",
		},
		log: {
			title: "Logarithmic interpolation calculator formula",
			intro:
				"Assumes y varies linearly with ln(x) rather than x itself — useful when x spans several orders of magnitude.",
			formula: "y = y₁ + (ln x − ln x₁) × (y₂ − y₁) / (ln x₂ − ln x₁)",
			note: "Common for pH, decibels, Richter magnitude, and other logarithmically-scaled measurements.",
		},
		bilinear: {
			title: "Double (bilinear) interpolation calculator formula",
			intro:
				"Interpolates across two dimensions using four known corner values — interpolate in x twice, then interpolate that result in y.",
			formula: "f(x,y) via f(x,y₁), f(x,y₂), then blend by y",
			note: "The standard method for reading steam tables and other 2D engineering reference tables.",
		},
	},

	seoContent: {
		heading: "Everything you need to calculate interpolation online",
		intro:
			"This interpolation calculator is a free, browser-based interpolation solver built for students, engineers, and data analysts who need to estimate a value between two known data points without setting up a spreadsheet formula. Unlike a typical linear interpolation online tool that only handles a single straight-line case, this interpolation formula calculator covers three distinct methods — linear, logarithmic, and double (bilinear) — and shows the full working behind every result, so you can verify the math instead of just trusting a black-box answer.",
		sections: [
			{
				heading: "A linear interpolation calculator for straight-line estimates",
				body: [
					"The linear interpolation calculator mode is the most common way to calculate interpolation. Give it two known points — (x₁, y₁) and (x₂, y₂) — plus the x value you want to estimate, and it applies the standard linear interpolation formula: y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁). This is the same approach used for reading between rows in an engineering table, converting units on a non-standard scale, or filling in a missing data point in a roughly linear dataset. Because everything runs client-side, this works as a linear interpolation online tool with no installation, no account, and no data leaving your browser.",
				],
			},
			{
				heading: "Logarithmic interpolation calculator for exponential-style data",
				body: [
					"Not every dataset is a straight line. When a quantity changes multiplicatively rather than additively — pH, decibels, earthquake magnitude, or any measurement that spans several orders of magnitude — a plain linear interpolation calculator will give you a skewed answer. The logarithmic interpolation calculator mode instead assumes y varies linearly with ln(x), which fits this kind of curve far more accurately. Enter your two known x/y pairs (with x values greater than zero) and the target x, and the interpolation solver walks through taking natural logs, computing the log-space slope, and applying it to return a realistic estimate.",
				],
			},
			{
				heading: "Double (bilinear) interpolation calculator for 2D grids",
				body: [
					"Some problems can't be solved with a single pair of points at all. Steam tables, air property charts, and other two-dimensional engineering references list a value at the intersection of a row and a column — meaning you often need to estimate a point that falls between four surrounding grid values. That's exactly what the double interpolation calculator (also called a bilinear interpolation calculator) is built for. Supply the four corner values Q₁₁, Q₁₂, Q₂₁, and Q₂₂ along with your target x and y, and the tool interpolates in x twice — once at y₁ and once at y₂ — then blends those two results in y to produce the final estimate, with every intermediate step shown.",
				],
			},
			{
				heading: "Why use this interpolation formula calculator",
				body: [
					"Most calculators that claim to calculate interpolation only return a final number, which makes it hard to catch a typo in your inputs or understand why an answer looks off. This interpolation calculator online tool shows every substitution, slope, and intermediate result, and it automatically flags when your target value falls outside your known data range — labeling that result as extrapolated rather than interpolated, since extrapolated estimates carry more uncertainty. It supports all three interpolation methods in one place, so you don't need to bounce between separate linear interpolation, logarithmic interpolation, and bilinear interpolation solvers for different parts of the same project.",
					"Whether you're a student checking homework, an engineer reading a steam table, or anyone who just needs to calculate interpolation for a one-off estimate, this tool is free, requires no sign-up, and works entirely in your browser — nothing is uploaded or stored on a server.",
				],
			},
		],
	},

	faq: {
		heading: "Frequently asked questions",
		items: [
			{
				q: "What is an interpolation calculator?",
				a: "An interpolation calculator is a tool that estimates an unknown value that falls between two (or more) known data points. Instead of manually applying the interpolation formula, you enter your known points and the target x (or x and y) value, and the calculator returns the estimated result — this tool also shows the full step-by-step working for linear, logarithmic, and double (bilinear) interpolation.",
			},
			{
				q: "How does a linear interpolation calculator work?",
				a: "A linear interpolation calculator assumes a straight line connects your two known points, (x₁, y₁) and (x₂, y₂). You enter those two points plus the x value you want to estimate y for, and the calculator applies the linear interpolation formula to find where that x falls proportionally along the line between y₁ and y₂.",
			},
			{
				q: "What is the linear interpolation formula?",
				a: "The linear interpolation formula is y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁). It calculates the slope between two known points (x₁, y₁) and (x₂, y₂), then applies that slope to the offset between x and x₁ to estimate y.",
			},
			{
				q: "When should I use linear interpolation?",
				a: "Use linear interpolation when your data is approximately a straight line over the range you care about — common for evenly-spaced table lookups, unit conversions, and estimating values between two closely-spaced measurements. It's the simplest and most widely used interpolation method, but it can be inaccurate if the true relationship curves significantly between your two known points.",
			},
			{
				q: "What is logarithmic interpolation?",
				a: "Logarithmic interpolation is a method that assumes y varies linearly with ln(x) rather than with x itself. It's used when data spans several orders of magnitude or changes multiplicatively rather than additively, since a straight-line (linear) fit would poorly approximate that kind of curve.",
			},
			{
				q: "When should I use logarithmic interpolation instead of linear interpolation?",
				a: "Use logarithmic interpolation when your data grows or decays multiplicatively rather than additively — common in pH scales, decibel/sound intensity, earthquake magnitude, and some financial or biological growth data. If plotting your data on a log-x scale looks like a straight line, logarithmic interpolation will usually fit better than linear.",
			},
			{
				q: "What is a double (bilinear) interpolation calculator?",
				a: "A double (bilinear) interpolation calculator estimates a value from a 2D grid of known points instead of just two. You provide four known corner values — Q₁₁, Q₁₂, Q₂₁, and Q₂₂ — along with your target x and y, and the calculator interpolates across both dimensions to return the estimated result.",
			},
			{
				q: "How does double (bilinear) interpolation work?",
				a: "Double (bilinear) interpolation works by interpolating twice in one direction and once in the other. First it interpolates in x at y₁ and again at y₂ to get two intermediate results, then it interpolates those two results in y to produce the final estimate — effectively blending all four corner values by how close the target point is to each one.",
			},
			{
				q: "What is double interpolation used for?",
				a: "Double interpolation is used for reading a value from a 2D grid of known points — for example, reading a property (like enthalpy) from a steam table where both pressure and temperature fall between listed rows and columns. It works by interpolating twice: once across x, then once across y.",
			},
			{
				q: "Can the interpolation calculator show step-by-step results?",
				a: "Yes. This calculator shows every step of the calculation — substituting your values, computing the slope (or log-slope, for logarithmic interpolation), and applying it to reach the final result — so you can verify the math yourself instead of just seeing a final number.",
			},
			{
				q: "What is the difference between interpolation and extrapolation?",
				a: "Interpolation estimates a value that falls between two known data points. Extrapolation estimates a value outside that range. Extrapolation uses the same formula but is inherently less reliable, since you're assuming the trend continues beyond the data you actually have.",
			},
			{
				q: "Why does the calculator say \u201cextrapolated\u201d instead of giving an error?",
				a: "A target x outside your two known points is still mathematically computable — the line or curve just gets extended past the data you gave it. The label is a warning, not an error: the math is fine, but the confidence in the result is lower the further you go from your known range.",
			},
			{
				q: "Why do I get an error when x1 equals x2?",
				a: "The interpolation formula divides by (x2 − x1). If x1 and x2 are the same, that's division by zero, which is mathematically undefined. You need two distinct x values to define a line (or curve) to interpolate along.",
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
			metaTitle: "About Us – Interpolation Calculator Online",
			metaDescription:
				"Learn about Interpolation Calculator Online, a free browser-based tool for linear, logarithmic, and bilinear interpolation with step-by-step results.",
			heading: "About Interpolation Calculator Online",
			intro:
				"Interpolation Calculator Online is a free, browser-based tool built to make estimating values between known data points fast, transparent, and accurate — without needing a spreadsheet or a textbook formula in front of you.",
			sections: [
				{
					heading: "Why we built this",
					body: [
						"Interpolation shows up everywhere: reading engineering tables, converting between measurement scales, filling in missing data points, and estimating values from steam tables or reference charts. Most calculators online only return a final number, which makes it hard to catch a mistake or understand how the answer was derived.",
						"We built this calculator to show the full working — every substitution, slope calculation, and intermediate result — so you can verify the math yourself, whether you're a student checking homework or an engineer double-checking a table lookup.",
					],
				},
				{
					heading: "What this tool does",
					body: [
						"This site provides three interpolation methods in one place: linear interpolation for straight-line estimates, logarithmic interpolation for data that spans several orders of magnitude, and double (bilinear) interpolation for two-dimensional grids like steam tables. Every calculation runs entirely in your browser — nothing you enter is uploaded to a server or stored anywhere.",
					],
				},
				{
					heading: "Who it's for",
					body: [
						"Students, engineers, scientists, and anyone who occasionally needs to calculate an interpolated value without setting up a spreadsheet. The tool is free, requires no account, and works on both desktop and mobile.",
					],
				},
			],
		},

		privacy: {
			metaTitle: "Privacy Policy – Interpolation Calculator Online",
			metaDescription:
				"Read the privacy policy for Interpolation Calculator Online. We don't collect or store the numbers you enter — all calculations run locally in your browser.",
			heading: "Privacy Policy",
			intro:
				"This Privacy Policy explains what information Interpolation Calculator Online (\"we\", \"this site\") collects when you use this website, and how it is used.",
			sections: [
				{
					heading: "Calculator inputs",
					body: [
						"The numbers you enter into the interpolation calculator are processed entirely within your browser using client-side JavaScript. They are never transmitted to our servers, stored in a database, or shared with any third party. Closing or refreshing the page clears everything you entered.",
					],
				},
				{
					heading: "Analytics and cookies",
					body: [
						"This site may use privacy-respecting analytics tools to understand aggregate traffic patterns (such as which pages are visited and which country visitors come from), in order to improve the site. These tools do not track your calculator inputs and do not build an individual profile of you. If cookies are used for analytics or advertising, your browser will typically allow you to block or clear them at any time through its settings.",
					],
				},
				{
					heading: "Third-party services",
					body: [
						"We may use third-party services (such as hosting providers, content delivery networks, or analytics providers) to operate this site. These providers may collect standard technical information, like your IP address and browser type, as part of delivering the website to you. We do not control the privacy practices of third-party services and encourage you to review their own privacy policies.",
					],
				},
				{
					heading: "Children's privacy",
					body: [
						"This site does not knowingly collect personal information from children. The calculator itself does not require or request any personal information to function.",
					],
				},
				{
					heading: "Changes to this policy",
					body: [
						"We may update this Privacy Policy from time to time to reflect changes to the site or applicable law. Any changes will be posted on this page.",
					],
				},
				{
					heading: "Contact us",
					body: [
						"If you have questions about this Privacy Policy, please visit our Contact page.",
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
			email: "support@interpcalc.com",
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
