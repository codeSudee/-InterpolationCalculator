// Shape of a full site translation. Every locale must implement this type.
// Mathematical variable names (x1, y1, x2, y2, Q11, etc.) are intentionally
// left out of translated strings — labels use those symbols directly and only
// the surrounding words (e.g. "known point", "target value") are translated.

export interface CalcStepLabels {
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

export interface Dictionary {
	meta: {
		title: string;
		description: string;
	};

	header: {
		brand: string;
		navCalculator: string;
		navFaq: string;
		themeToggleLabel: string;
		languageLabel: string;
		skipToContent: string;
	};

	hero: {
		eyebrow: string;
		heading: string;
		subheading: string;
	};

	calculator: {
		tablistLabel: string;
		tabLinear: string;
		tabLog: string;
		tabBilinear: string;

		linearIntro: string;
		logIntro: string;
		bilinearIntro: string;

		labelX1: string;
		labelY1: string;
		labelX2: string;
		labelY2: string;
		labelXTarget: string;
		labelYTarget: string;
		labelQ11: string;
		labelQ12: string;
		labelQ21: string;
		labelQ22: string;

		resultEyebrow: string;
		resultEmpty: string;
		resultInterpolated: string;
		resultExtrapolated: string;
		extrapolationNote: string;

		steps: {
			linear: CalcStepLabels;
			log: CalcStepLabels;
			bilinear: CalcStepLabels;
		};

		errors: {
			invalidNumber: string; // use {field} placeholder
			xEqual: string;
			logDomain: string;
			logXEqual: string;
			bilinearXEqual: string;
			bilinearYEqual: string;
		};
	};

	explanation: {
		linear: {
			title: string;
			intro: string;
			formula: string;
			note: string;
		};
		log: {
			title: string;
			intro: string;
			formula: string;
			note: string;
		};
		bilinear: {
			title: string;
			intro: string;
			formula: string;
			note: string;
		};
	};

	seoContent: {
		heading: string;
		intro: string;
		sections: Array<{ heading: string; body: string[] }>;
	};

	faq: {
		heading: string;
		items: Array<{ q: string; a: string }>;
	};

	footer: {
		copyright: string; // use {year} placeholder
		disclaimer: string;
		navAbout: string;
		navPrivacy: string;
		navTerms: string;
		navContact: string;
	};

	legal: {
		backToHome: string;
		lastUpdated: string; // use {date} placeholder

		about: {
			metaTitle: string;
			metaDescription: string;
			heading: string;
			intro: string;
			sections: Array<{ heading: string; body: string[] }>;
		};

		privacy: {
			metaTitle: string;
			metaDescription: string;
			heading: string;
			intro: string;
			sections: Array<{ heading: string; body: string[] }>;
		};

		terms: {
			metaTitle: string;
			metaDescription: string;
			heading: string;
			intro: string;
			sections: Array<{ heading: string; body: string[] }>;
		};

		contact: {
			metaTitle: string;
			metaDescription: string;
			heading: string;
			intro: string;
			emailLabel: string;
			email: string;
			sections: Array<{ heading: string; body: string[] }>;
		};
	};

	errorPage: {
		notFound: {
			metaTitle: string;
			metaDescription: string;
			code: string;
			heading: string;
			body: string;
		};
		serverError: {
			metaTitle: string;
			metaDescription: string;
			code: string;
			heading: string;
			body: string;
		};
		backToHome: string;
		contactSupport: string;
	};
}
