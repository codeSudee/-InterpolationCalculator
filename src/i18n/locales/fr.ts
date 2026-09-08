import type { Dictionary } from "../dictionary";

export const fr: Dictionary = {
	meta: {
		title: "Calculateur d'interpolation en ligne — linéaire, logarithmique et bilinéaire",
		description:
			"Calculateur d'interpolation gratuit en ligne avec démonstration étape par étape. Prend en charge l'interpolation linéaire, logarithmique et double (bilinéaire), avec identification automatique de l'extrapolation.",
	},

	header: {
		brand: "Calculateur d'interpolation",
		navCalculator: "Calculateur",
		navFaq: "FAQ",
		themeToggleLabel: "Activer le mode sombre",
		languageLabel: "Langue",
		skipToContent: "Aller au contenu",
	},

	hero: {
		eyebrow: "Gratuit · Sans inscription · Fonctionne dans votre navigateur",
		heading: "Calculateur d'interpolation, avec les étapes détaillées",
		subheading:
			"Estimez une valeur comprise entre deux points connus et découvrez exactement comment le résultat a été obtenu — de façon linéaire, logarithmique ou sur une grille 2D (bilinéaire).",
	},

	calculator: {
		tablistLabel: "Mode d'interpolation",
		tabLinear: "Linéaire",
		tabLog: "Logarithmique",
		tabBilinear: "Double (bilinéaire)",

		linearIntro: "Saisissez deux points connus, puis la valeur x pour laquelle vous souhaitez estimer y.",
		logIntro:
			"Pour des données qui suivent une courbe logarithmique selon x. Toutes les valeurs x doivent être strictement positives.",
		bilinearIntro:
			"Interpolez sur une grille 2D — quatre valeurs connues aux coins d'un rectangle (par exemple, les tables de vapeur).",

		labelX1: "x₁",
		labelY1: "y₁",
		labelX2: "x₂",
		labelY2: "y₂",
		labelXTarget: "x (cible)",
		labelYTarget: "y (cible)",
		labelQ11: "Q₁₁ = f(x₁,y₁)",
		labelQ12: "Q₁₂ = f(x₁,y₂)",
		labelQ21: "Q₂₁ = f(x₂,y₁)",
		labelQ22: "Q₂₂ = f(x₂,y₂)",

		resultEyebrow: "Résultat",
		resultEmpty: "Saisissez des valeurs pour voir le résultat interpolé et la démonstration étape par étape.",
		resultInterpolated: "Interpolé",
		resultExtrapolated: "Extrapolé",
		extrapolationNote:
			"La valeur cible se situe en dehors de la plage de vos données connues : il s'agit donc d'une extrapolation, et non d'une interpolation. Les estimations extrapolées sont moins fiables, surtout si la relation sous-jacente n'est pas véritablement linéaire ou logarithmique sur cette plage.",

		steps: {
			linear: {
				formula: "Formule",
				substitute: "Remplacez par vos valeurs",
				computeSlope: "Calculez la pente",
				applySlope: "Appliquez la pente à l'écart par rapport à x₁",
				takeLogs: "",
				computeLogSlope: "",
				interpolateXAtY1: "",
				interpolateXAtY2: "",
				interpolateY: "",
				result: "Résultat",
			},
			log: {
				formula: "Formule",
				substitute: "Remplacez par vos valeurs",
				computeSlope: "",
				applySlope: "",
				takeLogs: "Prenez les logarithmes naturels des valeurs x",
				computeLogSlope: "Calculez la pente dans l'espace logarithmique",
				interpolateXAtY1: "",
				interpolateXAtY2: "",
				interpolateY: "",
				result: "Résultat",
			},
			bilinear: {
				formula: "Formule",
				substitute: "",
				computeSlope: "",
				applySlope: "",
				takeLogs: "",
				computeLogSlope: "",
				interpolateXAtY1: "Interpolez en x pour y = y₁",
				interpolateXAtY2: "Interpolez en x pour y = y₂",
				interpolateY: "Interpolez en y entre R₁ et R₂",
				result: "Résultat",
			},
		},

		errors: {
			invalidNumber: "Saisissez un nombre valide pour {field}.",
			xEqual:
				"x1 et x2 sont égaux, la droite qui les relie est donc indéfinie (division par zéro). Saisissez deux valeurs x distinctes.",
			logDomain:
				"L'interpolation logarithmique exige que x₁, x₂ et x soient tous strictement positifs (le logarithme est indéfini pour les valeurs nulles ou négatives).",
			logXEqual:
				"x1 et x2 sont égaux, la courbe logarithmique qui les relie est donc indéfinie (division par zéro). Saisissez deux valeurs x distinctes.",
			bilinearXEqual:
				"x1 et x2 sont égaux, la grille a donc une largeur nulle (division par zéro). Saisissez deux valeurs x distinctes.",
			bilinearYEqual:
				"y1 et y2 sont égaux, la grille a donc une hauteur nulle (division par zéro). Saisissez deux valeurs y distinctes.",
		},
	},

	explanation: {
		linear: {
			title: "Interpolation linéaire",
			intro:
				"Suppose une droite entre deux points. Étant donné (x₁, y₁) et (x₂, y₂), la valeur de y pour n'importe quel x est :",
			formula: "y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁)",
			note:
				"Idéale pour les recherches dans des tables à intervalles réguliers, les conversions d'unités et toute relation approximativement linéaire sur la plage qui vous intéresse.",
		},
		log: {
			title: "Interpolation logarithmique",
			intro:
				"Suppose que y varie linéairement avec ln(x) plutôt qu'avec x lui-même — utile lorsque x couvre plusieurs ordres de grandeur.",
			formula: "y = y₁ + (ln x − ln x₁) × (y₂ − y₁) / (ln x₂ − ln x₁)",
			note: "Courante pour le pH, les décibels, la magnitude de Richter et d'autres mesures à échelle logarithmique.",
		},
		bilinear: {
			title: "Interpolation double (bilinéaire)",
			intro:
				"Interpole sur deux dimensions à l'aide de quatre valeurs connues aux coins — on interpole deux fois en x, puis on interpole ce résultat en y.",
			formula: "f(x,y) via f(x,y₁), f(x,y₂), then blend by y",
			note: "La méthode standard pour lire les tables de vapeur et autres tables de référence techniques 2D.",
		},
	},

	seoContent: {
		heading: "Tout ce qu\'il vous faut pour calculer une interpolation en ligne",
		intro:
			"Cette calculatrice d\'interpolation est un solveur d\'interpolation gratuit et directement accessible dans le navigateur, conçu pour les étudiants, les ingénieurs et les analystes de données qui doivent estimer une valeur comprise entre deux points de données connus sans avoir à créer une formule de tableur. Contrairement à un outil d\'interpolation linéaire en ligne classique qui ne gère qu\'un seul cas en ligne droite, cette calculatrice de formule d\'interpolation couvre trois méthodes distinctes — linéaire, logarithmique et double (bilinéaire) — et affiche l\'intégralité des calculs derrière chaque résultat, afin que vous puissiez vérifier les mathématiques au lieu de vous fier aveuglément à une réponse issue d\'une boîte noire.",
		sections: [
			{
				heading: "Une calculatrice d\'interpolation linéaire pour les estimations en ligne droite",
				body: [
					"Le mode calculatrice d\'interpolation linéaire est la façon la plus courante de calculer une interpolation. Donnez-lui deux points connus — (x₁, y₁) et (x₂, y₂) — ainsi que la valeur de x que vous souhaitez estimer, et il applique la formule d\'interpolation linéaire standard : y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁). C\'est la même approche que celle utilisée pour lire entre les lignes d\'une table technique, convertir des unités sur une échelle non standard ou compléter une donnée manquante dans un jeu de données à peu près linéaire. Comme tout s\'exécute côté client, cela fonctionne comme un outil d\'interpolation linéaire en ligne, sans installation, sans compte et sans qu\'aucune donnée ne quitte votre navigateur.",
				],
			},
			{
				heading: "Calculatrice d\'interpolation logarithmique pour les données de type exponentiel",
				body: [
					"Tous les jeux de données ne suivent pas une ligne droite. Lorsqu\'une grandeur évolue de manière multiplicative plutôt qu\'additive — le pH, les décibels, la magnitude des séismes ou toute mesure qui s\'étend sur plusieurs ordres de grandeur — une simple calculatrice d\'interpolation linéaire vous donnera une réponse faussée. Le mode calculatrice d\'interpolation logarithmique suppose plutôt que y varie linéairement avec ln(x), ce qui correspond bien plus fidèlement à ce type de courbe. Saisissez vos deux couples x/y connus (avec des valeurs de x supérieures à zéro) ainsi que le x cible, et le solveur d\'interpolation détaille chaque étape : le calcul des logarithmes naturels, la détermination de la pente dans l\'espace logarithmique, puis son application pour renvoyer une estimation réaliste.",
				],
			},
			{
				heading: "Calculatrice d\'interpolation double (bilinéaire) pour les grilles 2D",
				body: [
					"Certains problèmes ne peuvent tout simplement pas être résolus avec un seul couple de points. Les tables de vapeur, les diagrammes de propriétés de l\'air et d\'autres références techniques à deux dimensions indiquent une valeur à l\'intersection d\'une ligne et d\'une colonne — ce qui signifie que vous devez souvent estimer un point situé entre quatre valeurs de grille voisines. C\'est précisément à cela que sert la calculatrice d\'interpolation double (également appelée calculatrice d\'interpolation bilinéaire). Fournissez les quatre valeurs aux coins Q₁₁, Q₁₂, Q₂₁ et Q₂₂ ainsi que vos coordonnées x et y cibles, et l\'outil interpole deux fois en x — une fois à y₁ et une fois à y₂ — puis combine ces deux résultats en y pour produire l\'estimation finale, en affichant chaque étape intermédiaire.",
				],
			},
			{
				heading: "Pourquoi utiliser cette calculatrice de formule d\'interpolation",
				body: [
					"La plupart des calculatrices qui prétendent calculer une interpolation ne renvoient qu\'un chiffre final, ce qui rend difficile de repérer une faute de frappe dans vos données ou de comprendre pourquoi un résultat semble incorrect. Cet outil de calculatrice d\'interpolation en ligne affiche chaque substitution, chaque pente et chaque résultat intermédiaire, et il signale automatiquement lorsque votre valeur cible se situe en dehors de votre plage de données connue — en étiquetant alors ce résultat comme extrapolé plutôt qu\'interpolé, car les estimations extrapolées comportent une plus grande incertitude. Il prend en charge les trois méthodes d\'interpolation au même endroit, si bien que vous n\'avez pas besoin de jongler entre des solveurs distincts d\'interpolation linéaire, d\'interpolation logarithmique et d\'interpolation bilinéaire pour différentes parties d\'un même projet.",
					"Que vous soyez un étudiant qui vérifie ses devoirs, un ingénieur qui consulte une table de vapeur ou simplement quelqu\'un qui a besoin de calculer une interpolation pour une estimation ponctuelle, cet outil est gratuit, ne nécessite aucune inscription et fonctionne entièrement dans votre navigateur — rien n\'est téléversé ni stocké sur un serveur.",
				],
			},
		],
	},

	faq: {
		heading: "Questions fréquentes",
		items: [
			{
				q: "Qu\'est-ce qu\'une calculatrice d\'interpolation ?",
				a: "Une calculatrice d\'interpolation est un outil qui estime une valeur inconnue située entre deux points de données connus (ou davantage). Au lieu d\'appliquer manuellement la formule d\'interpolation, vous saisissez vos points connus et la valeur cible x (ou x et y), et la calculatrice renvoie le résultat estimé — cet outil affiche également tout le détail des étapes pour l\'interpolation linéaire, logarithmique et double (bilinéaire).",
			},
			{
				q: "Comment fonctionne une calculatrice d\'interpolation linéaire ?",
				a: "Une calculatrice d\'interpolation linéaire suppose qu\'une droite relie vos deux points connus, (x1, y1) et (x2, y2). Vous saisissez ces deux points ainsi que la valeur x pour laquelle vous souhaitez estimer y, et la calculatrice applique la formule d\'interpolation linéaire pour déterminer où ce x se situe proportionnellement sur la droite entre y1 et y2.",
			},
			{
				q: "Quelle est la formule de l\'interpolation linéaire ?",
				a: "La formule de l\'interpolation linéaire est y = y1 + (x − x1) × (y2 − y1) / (x2 − x1). Elle calcule la pente entre deux points connus (x1, y1) et (x2, y2), puis applique cette pente à l\'écart entre x et x1 afin d\'estimer y.",
			},
			{
				q: "Quand faut-il utiliser l\'interpolation linéaire ?",
				a: "Utilisez l\'interpolation linéaire lorsque vos données forment approximativement une droite sur la plage qui vous intéresse — c\'est courant pour la consultation de tables à intervalles réguliers, les conversions d\'unités et l\'estimation de valeurs entre deux mesures rapprochées. C\'est la méthode d\'interpolation la plus simple et la plus répandue, mais elle peut manquer de précision si la relation réelle se courbe fortement entre vos deux points connus.",
			},
			{
				q: "Qu\'est-ce que l\'interpolation logarithmique ?",
				a: "L\'interpolation logarithmique est une méthode qui suppose que y varie linéairement avec ln(x) plutôt qu\'avec x lui-même. On l\'utilise lorsque les données s\'étendent sur plusieurs ordres de grandeur ou évoluent de façon multiplicative plutôt qu\'additive, car un ajustement linéaire (en ligne droite) approximerait mal ce type de courbe.",
			},
			{
				q: "Quand faut-il utiliser l\'interpolation logarithmique plutôt que l\'interpolation linéaire ?",
				a: "Utilisez l\'interpolation logarithmique lorsque vos données croissent ou décroissent de façon multiplicative plutôt qu\'additive — c\'est courant pour les échelles de pH, l\'intensité sonore en décibels, la magnitude des séismes et certaines données de croissance financière ou biologique. Si vos données forment une droite lorsqu\'elles sont tracées sur une échelle x logarithmique, l\'interpolation logarithmique sera généralement mieux adaptée que l\'interpolation linéaire.",
			},
			{
				q: "Qu\'est-ce qu\'une calculatrice d\'interpolation double (bilinéaire) ?",
				a: "Une calculatrice d\'interpolation double (bilinéaire) estime une valeur à partir d\'une grille 2D de points connus, et non de deux points seulement. Vous fournissez quatre valeurs connues aux coins — Q11, Q12, Q21 et Q22 — ainsi que vos cibles x et y, et la calculatrice interpole selon les deux dimensions pour renvoyer le résultat estimé.",
			},
			{
				q: "Comment fonctionne l\'interpolation double (bilinéaire) ?",
				a: "L\'interpolation double (bilinéaire) fonctionne en interpolant deux fois dans une direction et une fois dans l\'autre. Elle interpole d\'abord en x à y1, puis de nouveau en x à y2 pour obtenir deux résultats intermédiaires, avant d\'interpoler ces deux résultats en y afin de produire l\'estimation finale — mélangeant ainsi les quatre valeurs des coins selon la proximité du point cible avec chacune d\'elles.",
			},
			{
				q: "À quoi sert l\'interpolation double ?",
				a: "L\'interpolation double sert à lire une valeur dans une grille 2D de points connus — par exemple, pour lire une propriété (comme l\'enthalpie) dans une table de vapeur où la pression et la température se situent toutes deux entre des lignes et des colonnes répertoriées. Elle procède par une double interpolation : d\'abord en x, puis en y.",
			},
			{
				q: "La calculatrice d\'interpolation peut-elle afficher les résultats étape par étape ?",
				a: "Oui. Cette calculatrice affiche chaque étape du calcul — la substitution de vos valeurs, le calcul de la pente (ou de la pente logarithmique, pour l\'interpolation logarithmique) et son application jusqu\'au résultat final — afin que vous puissiez vérifier vous-même les calculs au lieu de ne voir qu\'un chiffre final.",
			},
			{
				q: "Quelle est la différence entre l\'interpolation et l\'extrapolation ?",
				a: "L\'interpolation estime une valeur comprise entre deux points de données connus. L\'extrapolation estime une valeur en dehors de cette plage. L\'extrapolation utilise la même formule, mais elle est intrinsèquement moins fiable, car vous supposez que la tendance se poursuit au-delà des données dont vous disposez réellement.",
			},
			{
				q: "Pourquoi la calculatrice indique-t-elle « extrapolé » au lieu d\'afficher une erreur ?",
				a: "Une cible x située en dehors de vos deux points connus reste calculable mathématiquement — la droite ou la courbe est simplement prolongée au-delà des données que vous avez fournies. L\'étiquette est un avertissement, pas une erreur : le calcul est correct, mais la confiance dans le résultat diminue à mesure que l\'on s\'éloigne de la plage connue.",
			},
			{
				q: "Pourquoi une erreur apparaît-elle lorsque x1 est égal à x2 ?",
				a: "La formule d\'interpolation divise par (x2 − x1). Si x1 et x2 sont identiques, il s\'agit d\'une division par zéro, qui est mathématiquement indéfinie. Vous avez besoin de deux valeurs x distinctes pour définir une droite (ou une courbe) le long de laquelle interpoler.",
			},
		],
	},

	footer: {
		copyright: "© {year} Interpolation Calculator Online. Tous les calculs s'exécutent dans votre navigateur.",
		disclaimer: "Conçu pour des estimations rapides et vérifiables — ne remplace pas le jugement d'un ingénieur professionnel.",
		navAbout: "À propos",
		navPrivacy: "Politique de confidentialité",
		navTerms: "Conditions générales",
		navContact: "Contact",
	},

	legal: {
		backToHome: "Retour au calculateur",
		lastUpdated: "Dernière mise à jour : {date}",

		about: {
			metaTitle: "À propos – Interpolation Calculator Online",
			metaDescription:
				"Découvrez Interpolation Calculator Online, un outil gratuit basé sur le navigateur pour l'interpolation linéaire, logarithmique et bilinéaire avec des résultats détaillés étape par étape.",
			heading: "À propos d'Interpolation Calculator Online",
			intro:
				"Interpolation Calculator Online est un outil gratuit, basé sur le navigateur, conçu pour estimer les valeurs entre des points de données connus de manière rapide, transparente et précise — sans avoir besoin d'un tableur ou d'une formule tirée d'un manuel sous les yeux.",
			sections: [
				{
					heading: "Pourquoi nous avons créé cet outil",
					body: [
						"L'interpolation est présente partout : lecture de tables d'ingénierie, conversion entre échelles de mesure, comblement de points de données manquants et estimation de valeurs à partir de tables de vapeur ou de tableaux de référence. La plupart des calculateurs en ligne ne renvoient qu'un chiffre final, ce qui rend difficile de repérer une erreur ou de comprendre comment la réponse a été obtenue.",
						"Nous avons créé ce calculateur pour montrer l'intégralité du raisonnement — chaque substitution, chaque calcul de pente et chaque résultat intermédiaire — afin que vous puissiez vérifier les calculs vous-même, que vous soyez un étudiant contrôlant ses devoirs ou un ingénieur vérifiant une consultation de table.",
					],
				},
				{
					heading: "Ce que fait cet outil",
					body: [
						"Ce site propose trois méthodes d'interpolation en un seul endroit : l'interpolation linéaire pour les estimations en ligne droite, l'interpolation logarithmique pour les données qui s'étendent sur plusieurs ordres de grandeur, et l'interpolation double (bilinéaire) pour les grilles bidimensionnelles telles que les tables de vapeur. Chaque calcul s'exécute entièrement dans votre navigateur — rien de ce que vous saisissez n'est téléversé vers un serveur ni stocké où que ce soit.",
					],
				},
				{
					heading: "À qui il s'adresse",
					body: [
						"Aux étudiants, ingénieurs, scientifiques et à quiconque a occasionnellement besoin de calculer une valeur interpolée sans configurer un tableur. L'outil est gratuit, ne nécessite aucun compte et fonctionne aussi bien sur ordinateur que sur mobile.",
					],
				},
			],
		},

		privacy: {
			metaTitle: "Politique de confidentialité – Interpolation Calculator Online",
			metaDescription:
				"Consultez la politique de confidentialité d'Interpolation Calculator Online. Nous ne collectons ni ne stockons les nombres que vous saisissez — tous les calculs s'exécutent localement dans votre navigateur.",
			heading: "Politique de confidentialité",
			intro:
				"Cette politique de confidentialité explique quelles informations Interpolation Calculator Online (« nous », « ce site ») collecte lorsque vous utilisez ce site web, et comment elles sont utilisées.",
			sections: [
				{
					heading: "Données saisies dans le calculateur",
					body: [
						"Les nombres que vous saisissez dans le calculateur d'interpolation sont traités entièrement au sein de votre navigateur à l'aide de JavaScript côté client. Ils ne sont jamais transmis à nos serveurs, stockés dans une base de données ni partagés avec un tiers. Fermer ou actualiser la page efface tout ce que vous avez saisi.",
					],
				},
				{
					heading: "Analyses et cookies",
					body: [
						"Ce site peut utiliser des outils d'analyse respectueux de la vie privée pour comprendre les tendances de trafic globales (comme les pages visitées et le pays d'origine des visiteurs), afin d'améliorer le site. Ces outils ne suivent pas les données que vous saisissez dans le calculateur et ne constituent pas de profil individuel vous concernant. Si des cookies sont utilisés à des fins d'analyse ou de publicité, votre navigateur vous permet généralement de les bloquer ou de les effacer à tout moment via ses paramètres.",
					],
				},
				{
					heading: "Services tiers",
					body: [
						"Nous pouvons faire appel à des services tiers (tels que des hébergeurs, des réseaux de diffusion de contenu ou des fournisseurs d'analyse) pour exploiter ce site. Ces fournisseurs peuvent collecter des informations techniques standard, comme votre adresse IP et votre type de navigateur, dans le cadre de la livraison du site web. Nous ne contrôlons pas les pratiques de confidentialité des services tiers et vous encourageons à consulter leurs propres politiques de confidentialité.",
					],
				},
				{
					heading: "Confidentialité des enfants",
					body: [
						"Ce site ne collecte pas sciemment d'informations personnelles auprès des enfants. Le calculateur lui-même ne requiert ni ne demande aucune information personnelle pour fonctionner.",
					],
				},
				{
					heading: "Modifications de cette politique",
					body: [
						"Nous pouvons mettre à jour cette politique de confidentialité de temps à autre afin de refléter les modifications apportées au site ou à la législation applicable. Toute modification sera publiée sur cette page.",
					],
				},
				{
					heading: "Nous contacter",
					body: [
						"Si vous avez des questions concernant cette politique de confidentialité, veuillez consulter notre page Contact.",
					],
				},
			],
		},

		terms: {
			metaTitle: "Conditions générales – Interpolation Calculator Online",
			metaDescription:
				"Conditions générales d'utilisation d'Interpolation Calculator Online, un calculateur d'interpolation gratuit fourni en l'état à des fins d'information et d'éducation.",
			heading: "Conditions générales",
			intro:
				"En accédant à Interpolation Calculator Online ou en l'utilisant, vous acceptez les conditions suivantes. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.",
			sections: [
				{
					heading: "Utilisation de ce site",
					body: [
						"Interpolation Calculator Online est fourni gratuitement pour un usage de référence personnel, éducatif et professionnel. Vous pouvez utiliser le calculateur pour estimer des valeurs interpolées et extrapolées à partir de vos propres données.",
					],
				},
				{
					heading: "Absence de garantie",
					body: [
						"Cet outil est fourni « en l'état » et « selon disponibilité », sans garantie d'aucune sorte, expresse ou implicite, y compris mais sans s'y limiter, l'exactitude, la fiabilité ou l'adéquation à un usage particulier. Bien que nous visions des résultats mathématiquement corrects, nous ne garantissons pas que les calculs seront exempts d'erreurs ou ininterrompus.",
					],
				},
				{
					heading: "Ne constitue pas un conseil professionnel",
					body: [
						"Ce calculateur est conçu comme un outil de référence et d'éducation à usage général. Il ne remplace pas le jugement professionnel en matière d'ingénierie, scientifique ou financier. Il vous incombe de vérifier de manière indépendante tout résultat avant de vous y fier pour une conception d'ingénierie, des décisions critiques pour la sécurité, des travaux universitaires ou tout autre usage à conséquence.",
					],
				},
				{
					heading: "Limitation de responsabilité",
					body: [
						"Dans toute la mesure permise par la loi, nous ne saurions être tenus responsables des dommages directs, indirects, accessoires ou consécutifs résultant de l'utilisation ou de l'impossibilité d'utiliser ce site web ou ses résultats de calcul.",
					],
				},
				{
					heading: "Propriété intellectuelle",
					body: [
						"La conception, la mise en page et le contenu original de ce site appartiennent à Interpolation Calculator Online. Vous ne pouvez pas copier, republier ni redistribuer des portions substantielles du site sans autorisation.",
					],
				},
				{
					heading: "Modifications de ces conditions",
					body: [
						"Nous pouvons mettre à jour ces conditions générales de temps à autre. La poursuite de l'utilisation du site après la publication des modifications vaut acceptation des conditions mises à jour.",
					],
				},
			],
		},

		contact: {
			metaTitle: "Contact – Interpolation Calculator Online",
			metaDescription:
				"Contactez l'équipe d'Interpolation Calculator Online pour toute question, tout retour ou tout signalement de bogue.",
			heading: "Nous contacter",
			intro:
				"Vous avez une question, découvert un bogue ou souhaitez suggérer une fonctionnalité ? Nous aimerions vous entendre. Contactez-nous à l'adresse e-mail ci-dessous.",
			emailLabel: "E-mail :",
			email: "support@interpcalc.com",
			sections: [
				{
					heading: "Retours et signalements de bogues",
					body: [
						"Si vous remarquez un calcul qui semble incorrect, veuillez indiquer les valeurs exactes que vous avez utilisées ainsi que le mode d'interpolation (linéaire, logarithmique ou bilinéaire) afin que nous puissions reproduire et examiner le problème.",
					],
				},
				{
					heading: "Délai de réponse",
					body: [
						"Nous nous efforçons de répondre aux messages sous quelques jours ouvrables.",
					],
				},
			],
		},
	},

	errorPage: {
		notFound: {
			metaTitle: "Page introuvable (404) – Interpolation Calculator Online",
			metaDescription: "La page que vous recherchez n'existe pas ou a peut-être été déplacée.",
			code: "404",
			heading: "Page introuvable",
			body: "La page que vous recherchez n'existe pas ou a peut-être été déplacée. Vérifiez l'URL ou retournez à la calculatrice.",
		},
		serverError: {
			metaTitle: "Erreur serveur (500) – Interpolation Calculator Online",
			metaDescription: "Une erreur est survenue de notre côté. Merci de réessayer dans un instant.",
			code: "500",
			heading: "Un problème est survenu",
			body: "Une erreur inattendue s'est produite lors du chargement de cette page. Merci de réessayer dans un instant, ou de retourner à la calculatrice.",
		},
		backToHome: "Retour à la calculatrice",
		contactSupport: "Contacter le support",
	},
};
