import type { Dictionary } from "../dictionary";

export const fr: Dictionary = {
	meta: {
		title: "Calculateur d'interpolation – linéaire, logarithmique et bilinéaire, étape par étape",
		description:
			"Estimez des valeurs entre des points de données connus par interpolation linéaire, logarithmique ou double (bilinéaire). Chaque résultat détaille l'ensemble des calculs, avec des exemples résolus et des conseils pour choisir une méthode.",
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
			"Saisissez les points de données que vous connaissez et obtenez une estimation de celui que vous ignorez — par interpolation linéaire, logarithmique ou double (bilinéaire). Chaque substitution et chaque valeur intermédiaire est affichée, de sorte que vous pouvez vérifier la réponse plutôt que de la croire sur parole.",
	},

	calculator: {
		tablistLabel: "Mode d'interpolation",
		tabLinear: "Linéaire",
		tabLog: "Logarithmique",
		tabBilinear: "Double (bilinéaire)",

		linearIntro: "Saisissez deux points connus, puis la valeur x pour laquelle vous souhaitez estimer y.",
		logIntro:
			"Pour des données où y varie linéairement avec ln(x), comme des valeurs couvrant plusieurs ordres de grandeur. Toutes les valeurs x doivent être strictement positives.",
		bilinearIntro:
			"Estimez une valeur à l'intérieur d'une table 2D à partir des quatre valeurs connues aux coins de la cellule qui l'entoure (par exemple, une table de vapeur).",

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
			title: "Formule de l'interpolation linéaire",
			intro:
				"Suppose une droite entre deux points. Étant donné (x₁, y₁) et (x₂, y₂), la valeur de y pour n'importe quel x est :",
			formula: "y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁)",
			note:
				"Idéale pour les recherches dans des tables à intervalles réguliers, les conversions d'unités et toute relation approximativement linéaire sur la plage qui vous intéresse.",
		},
		log: {
			title: "Formule de l'interpolation logarithmique",
			intro:
				"Suppose que y varie linéairement avec ln(x) plutôt qu'avec x lui-même — utile lorsque x couvre plusieurs ordres de grandeur.",
			formula: "y = y₁ + (ln x − ln x₁) × (y₂ − y₁) / (ln x₂ − ln x₁)",
			note: "Courante pour le pH, les décibels, la magnitude de Richter et d'autres mesures à échelle logarithmique.",
		},
		bilinear: {
			title: "Formule de l'interpolation double (bilinéaire)",
			intro:
				"On interpole d'abord en x le long des deux lignes connues pour obtenir R₁ (à y₁) et R₂ (à y₂), puis on interpole en y entre ces deux résultats :",
			formula: "f(x,y) = R₁ + (y − y₁) × (R₂ − R₁) / (y₂ − y₁)",
			note: "La méthode standard pour lire les tables de vapeur et autres tables de référence techniques 2D.",
		},
	},

	seoContent: {
		heading: "Comment fonctionne l'interpolation, avec des exemples résolus",
		intro:
			"L'interpolation estime une valeur inconnue située entre des valeurs que vous connaissez déjà. C'est ainsi que l'on lit entre les lignes d'une table technique, que l'on comble un trou dans des données mesurées ou que l'on convertit une lecture sur une échelle qui n'est indiquée qu'à certains points. La bonne méthode dépend de la façon dont vos données se comportent entre ces points connus. Les sections ci-dessous expliquent les trois méthodes prises en charge par ce calculateur, déroulent un exemple de chacune que vous pouvez reproduire dans le calculateur ci-dessus et abordent les sources d'erreur les plus courantes.",
		sections: [
			{
				heading: "Interpolation linéaire : exemple résolu",
				body: [
					"L'interpolation linéaire suppose que les données suivent une droite entre deux points connus (x₁, y₁) et (x₂, y₂). La formule est y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁) : elle détermine la pente entre les deux points, puis se déplace le long de cette pente de x₁ jusqu'à votre x cible.",
					"Exemple : une table indique y = 12.4 à x = 20 et y = 18.9 à x = 30, et vous avez besoin de la valeur à x = 24. La pente vaut (18.9 − 12.4) / (30 − 20) = 0.65 par unité de x. La cible se situe 4 unités au-delà de x₁, donc y = 12.4 + 4 × 0.65 = 15.0. Saisissez x₁ = 20, y₁ = 12.4, x₂ = 30, y₂ = 18.9 et x = 24 dans l'onglet Linéaire pour voir les mêmes étapes.",
				],
			},
			{
				heading: "Interpolation logarithmique : exemple résolu",
				body: [
					"Certaines grandeurs varient d'une quantité constante chaque fois que x est multiplié par un facteur fixe, plutôt que chaque fois que x augmente d'une quantité fixe. Le niveau sonore en décibels, le pH et la magnitude des séismes se comportent tous ainsi. Pour ce type de données, y est une droite en fonction de ln(x), de sorte que l'interpolation logarithmique applique la formule linéaire à ln(x) au lieu de x.",
					"Exemple : une intensité sonore de 1 µW/m² correspond à 60 dB et 100 µW/m² correspond à 80 dB. Quel est le niveau à 10 µW/m² ? L'interpolation logarithmique donne 60 + (ln 10 − ln 1) × (80 − 60) / (ln 100 − ln 1) = 70 dB, ce qui est exactement juste, car 10 est un facteur dix au-dessus de 1 et un facteur dix en dessous de 100. Une simple interpolation linéaire renverrait environ 61.8 dB, car elle traite 10 comme n'étant qu'à 9 % du chemin entre 1 et 100. Employer la mauvaise méthode sur des données logarithmiques peut produire des erreurs de cette ampleur.",
				],
			},
			{
				heading: "Interpolation double (bilinéaire) : exemple résolu",
				body: [
					"Les tables à deux dimensions, comme les tables de vapeur surchauffée, indiquent une valeur pour chaque combinaison d'une variable de ligne et d'une variable de colonne. Lorsque vos deux entrées se situent entre des valeurs répertoriées, vous avez besoin des quatre entrées de table qui les entourent : Q₁₁ = f(x₁, y₁), Q₂₁ = f(x₂, y₁), Q₁₂ = f(x₁, y₂) et Q₂₂ = f(x₂, y₂). L'interpolation bilinéaire interpole d'abord en x le long de chacune des deux lignes, puis interpole en y entre ces deux résultats.",
					"Exemple : avec x₁ = 10, x₂ = 20, y₁ = 100 et y₂ = 200, la table donne Q₁₁ = 50, Q₂₁ = 70, Q₁₂ = 60 et Q₂₂ = 90. Pour estimer f(14, 130), interpolez d'abord le long de y₁ : R₁ = 50 + (14 − 10) × (70 − 50) / 10 = 58. Puis le long de y₂ : R₂ = 60 + 0.4 × (90 − 60) = 72. Enfin, interpolez en y : f = 58 + (130 − 100) × (72 − 58) / 100 = 62.2. Interpoler d'abord en y, puis en x, donne le même 62.2.",
				],
			},
			{
				heading: "Choisir une méthode",
				body: [
					"Utilisez l'interpolation linéaire lorsque les points connus sont proches les uns des autres et que les données semblent à peu près droites entre eux. Cela couvre la plupart des consultations de tables. Utilisez l'interpolation logarithmique lorsque les valeurs de x s'étendent sur une large plage (par exemple de 1 à 1 000) et que les données se tracent en droite sur un axe x logarithmique. Utilisez l'interpolation double dès que la valeur dépend de deux entrées à la fois et que vous lisez dans une grille.",
					"En cas de doute, tracez quelques valeurs voisines de la table. Les points qui s'alignent sur une droite sur des axes ordinaires conviennent à l'interpolation linéaire. Les points qui ne se redressent que lorsque x est tracé sur une échelle logarithmique conviennent à l'interpolation logarithmique.",
				],
			},
			{
				heading: "Précision et erreurs courantes",
				body: [
					"L'interpolation linéaire n'est exacte que lorsque les données forment réellement une droite. Pour une fonction courbe f, l'erreur vaut au plus (x₂ − x₁)² / 8 multiplié par la plus grande valeur de |f″| entre les deux points. En pratique, cela signifie que diviser par deux l'écart entre vos points connus réduit l'erreur maximale à environ un quart. Lorsqu'une table propose des lignes plus fines près de votre cible, utilisez-les.",
					"Les erreurs les plus fréquentes consistent à confondre quelle valeur revient à x₁ et laquelle à x₂, à mélanger les unités (par exemple des kPa dans une ligne et des bar dans une autre) et à lire Q₁₂ et Q₂₁ dans les mauvaises cellules d'une table 2D. Estimer en dehors de la plage connue est également risqué. Le calculateur étiquette ces résultats comme extrapolés, car la droite ou la courbe supposée peut ne pas se prolonger au-delà de vos données.",
				],
			},
		],
	},

	faq: {
		heading: "Questions fréquentes",
		items: [
			{
				q: "Qu'est-ce que l'interpolation ?",
				a: "L'interpolation consiste à estimer une valeur inconnue située entre deux points de données connus ou davantage, en supposant qu'une forme simple, comme une droite, les relie. On l'utilise couramment pour lire des valeurs entre les lignes répertoriées des tables de référence et pour combler des trous dans des données mesurées.",
			},
			{
				q: "Quelle est la formule de l'interpolation linéaire ?",
				a: "y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁). La fraction (y₂ − y₁) / (x₂ − x₁) est la pente de la droite passant par les deux points connus, et la multiplier par (x − x₁) donne de combien y s'est déplacé depuis y₁ une fois arrivé à x.",
			},
			{
				q: "Quand l'interpolation linéaire est-elle suffisamment précise ?",
				a: "Lorsque les points connus sont proches les uns des autres et que les données se rapprochent d'une droite entre eux. Pour une relation courbe, l'erreur croît avec le carré de l'écart entre les points, si bien qu'utiliser les lignes de table les plus proches disponibles importe généralement plus que le choix de la méthode.",
			},
			{
				q: "Quand faut-il utiliser l'interpolation logarithmique plutôt que linéaire ?",
				a: "Utilisez-la lorsque y varie à peu près de la même quantité chaque fois que x est multiplié par un facteur constant — par exemple les décibels par rapport à l'intensité sonore, ou le pH par rapport à la concentration en ions hydrogène. Si vos données forment une droite lorsque x est tracé sur un axe logarithmique, l'interpolation logarithmique s'ajustera mieux que l'interpolation linéaire.",
			},
			{
				q: "Pourquoi x doit-il être strictement positif pour l'interpolation logarithmique ?",
				a: "L'interpolation logarithmique fonctionne avec ln(x), et le logarithme naturel n'est défini que pour les nombres positifs. Si vos valeurs de x comprennent zéro ou des négatifs, les données ne peuvent pas être sur une échelle logarithmique en x, et l'interpolation linéaire est la méthode appropriée.",
			},
			{
				q: "Comment fonctionne l'interpolation double (bilinéaire) ?",
				a: "Elle utilise les quatre valeurs connues aux coins de la cellule de table qui contient votre point cible. Elle interpole en x le long de la ligne inférieure (donnant R₁) et de la ligne supérieure (donnant R₂), puis interpole entre R₁ et R₂ en y. Le résultat est une moyenne pondérée des quatre coins, les coins les plus proches ayant un poids plus important.",
			},
			{
				q: "L'ordre d'interpolation, en x ou en y d'abord, a-t-il une importance ?",
				a: "Non. Pour l'interpolation bilinéaire, procéder en x puis en y donne exactement le même résultat que procéder en y puis en x. L'exemple résolu ci-dessus donne 62.2 dans un ordre comme dans l'autre.",
			},
			{
				q: "Quelle est la différence entre l'interpolation et l'extrapolation ?",
				a: "L'interpolation estime une valeur à l'intérieur de la plage de vos points connus ; l'extrapolation en estime une à l'extérieur. La formule est la même, si bien que le calculateur renvoie tout de même un nombre, mais il étiquette le résultat comme extrapolé, car aucune donnée ne confirme que la tendance se poursuit au-delà de vos points connus.",
			},
			{
				q: "Pourquoi une erreur apparaît-elle lorsque x₁ est égal à x₂ ?",
				a: "Chaque formule ici divise par (x₂ − x₁), ou par (ln x₂ − ln x₁) en mode logarithmique. Lorsque les deux valeurs de x sont égales, il s'agit d'une division par zéro, et deux points ayant le même x ne peuvent pas définir une droite. Il en va de même pour y₁ et y₂ dans l'interpolation double.",
			},
			{
				q: "Quelle est la précision des résultats ?",
				a: "Les calculs utilisent l'arithmétique standard à virgule flottante en double précision. Pour la lisibilité, les valeurs intermédiaires des étapes sont arrondies à six décimales, et le résultat final est affiché avec 12 chiffres significatifs. Cet arrondi n'affecte que l'affichage ; chaque étape est calculée à partir des valeurs non arrondies.",
			},
			{
				q: "Les nombres que je saisis sont-ils envoyés ou stockés quelque part ?",
				a: "Non. Tous les calculs s'exécutent dans votre navigateur, et vos saisies ne sont jamais envoyées à un serveur. Actualiser ou fermer la page les efface.",
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
			metaTitle: "À propos – Interpolation Calculator",
			metaDescription:
				"Pourquoi ce calculateur d'interpolation existe, comment ses résultats sont vérifiés et qui le maintient.",
			heading: "À propos d'Interpolation Calculator",
			intro:
				"Interpolation Calculator est un projet indépendant qui estime des valeurs entre des points de données connus par interpolation linéaire, logarithmique et double (bilinéaire). Il affiche chaque étape du calcul, de sorte que vous pouvez vérifier la réponse plutôt que de la croire sur parole.",
			sections: [
				{
					heading: "Pourquoi ce site existe",
					body: [
						"L'interpolation revient sans cesse dans les études et dans la pratique de l'ingénierie : lecture de tables de vapeur et de propriétés, utilisation de courbes d'étalonnage ou comblement d'un trou dans des données mesurées. L'arithmétique est simple, mais il est aussi facile de se tromper en la faisant à la main. Les erreurs courantes consistent à intervertir x₁ et x₂, à lire la mauvaise cellule d'une table 2D ou à appliquer une estimation en ligne droite à des données qui sont logarithmiques.",
						"La plupart des outils en ligne ne renvoient qu'un chiffre final, ce qui ne laisse aucun moyen de repérer une erreur de saisie. Ce calculateur affiche la formule, vos valeurs substituées, la pente et chaque résultat intermédiaire, de sorte que chaque étape peut être comparée à un manuel ou à un calcul manuel.",
					],
				},
				{
					heading: "Comment les résultats sont vérifiés",
					body: [
						"Les trois méthodes utilisent les formules standard des manuels décrites sur la page d'accueil. Les résultats ont été vérifiés par rapport à des calculs manuels, y compris les exemples résolus de la page d'accueil. Le calculateur gère aussi explicitement les cas limites, en renvoyant un message clair au lieu d'un nombre dénué de sens lorsque les valeurs de x sont égales ou lorsqu'une entrée logarithmique est nulle ou négative. Lorsqu'une cible tombe en dehors de la plage, le résultat est étiqueté comme extrapolé plutôt qu'affiché sans commentaire.",
					],
				},
				{
					heading: "Confidentialité par conception",
					body: [
						"Tous les calculs s'exécutent dans votre navigateur. Les nombres que vous saisissez ne sont jamais envoyés à un serveur, de sorte que le calculateur fonctionne aussi sur des données confidentielles ou non publiées. La politique de confidentialité explique ce que le site collecte réellement, comme les statistiques standard et les cookies publicitaires.",
					],
				},
				{
					heading: "Vos retours",
					body: [
						"Si vous trouvez un résultat qui semble erroné, une explication confuse ou une méthode que vous aimeriez voir ajoutée, contactez-nous via la page Contact. Les signalements qui incluent les valeurs exactes que vous avez utilisées sont les plus rapides à examiner et à corriger.",
					],
				},
			],
		},

		privacy: {
			metaTitle: "Politique de confidentialité – Interpolation Calculator",
			metaDescription:
				"Quelles informations interpcalc.com collecte, comment les cookies de Google Analytics et de Google AdSense sont utilisés, et comment s'y opposer. Les données de la calculatrice ne quittent jamais votre navigateur.",
			heading: "Politique de confidentialité",
			intro:
				"Cette politique de confidentialité explique quelles informations interpcalc.com (\"ce site\", \"nous\") collecte lorsque vous le visitez, comment elles sont utilisées et quels choix s'offrent à vous.",
			sections: [
				{
					heading: "Données saisies dans le calculateur",
					body: [
						"Les nombres que vous saisissez dans le calculateur sont traités entièrement au sein de votre navigateur à l'aide de JavaScript côté client. Ils ne sont jamais envoyés à nos serveurs, stockés dans une base de données ni partagés avec qui que ce soit. Actualiser ou fermer la page les efface.",
					],
				},
				{
					heading: "Statistiques",
					body: [
						"Ce site utilise Google Analytics pour comprendre l'usage agrégé, comme les pages visitées, le pays approximatif d'où proviennent les visiteurs, ainsi que le type d'appareil et de navigateur utilisés. Google Analytics utilise des cookies et collecte des données techniques standard, comme votre adresse IP, pour produire ces rapports. Il ne reçoit pas les valeurs que vous saisissez dans le calculateur. Vous pouvez empêcher Google Analytics de collecter des données en installant le module complémentaire de désactivation de Google Analytics pour navigateur (tools.google.com/dlpage/gaoptout).",
					],
				},
				{
					heading: "Publicité",
					body: [
						"Ce site utilise Google AdSense pour afficher des publicités. Des fournisseurs tiers, dont Google, utilisent des cookies pour diffuser des annonces en fonction de vos visites antérieures sur ce site web et sur d'autres sites web. L'utilisation de cookies publicitaires par Google lui permet, ainsi qu'à ses partenaires, de vous proposer des annonces en fonction de vos visites sur ce site et sur d'autres sites d'Internet.",
						"Vous pouvez refuser la publicité personnalisée en vous rendant dans les paramètres des annonces Google (adssettings.google.com). Vous pouvez également refuser l'utilisation de cookies à des fins de publicité personnalisée par certains fournisseurs tiers sur www.aboutads.info. Pour en savoir plus sur la façon dont Google utilise les données, consultez policies.google.com/technologies/partner-sites.",
						"Les visiteurs de l'Espace économique européen, du Royaume-Uni et de la Suisse peuvent être invités à donner leur consentement avant que des cookies de publicité personnalisée ne soient déposés, et peuvent modifier ce choix à tout moment.",
					],
				},
				{
					heading: "Cookies et stockage local",
					body: [
						"En dehors des cookies de statistiques et de publicité décrits ci-dessus, le site enregistre une seule préférence dans le stockage local de votre navigateur : votre choix de thème clair ou sombre. Vous pouvez bloquer ou supprimer les cookies et le stockage local à tout moment via les paramètres de votre navigateur. Le calculateur continuera de fonctionner.",
					],
				},
				{
					heading: "Hébergement",
					body: [
						"Le site est hébergé sur Cloudflare, qui traite des données de requête standard (comme l'adresse IP et le type de navigateur) pour livrer les pages et protéger le site contre les abus.",
					],
				},
				{
					heading: "Confidentialité des enfants",
					body: [
						"Ce site ne s'adresse pas aux enfants de moins de 13 ans et ne collecte pas sciemment d'informations personnelles auprès d'eux. Le calculateur ne demande aucune information personnelle.",
					],
				},
				{
					heading: "Modifications de cette politique",
					body: [
						"Nous pouvons mettre à jour cette politique de confidentialité lorsque le site ou la législation applicable évolue. Les mises à jour seront publiées sur cette page.",
					],
				},
				{
					heading: "Contact",
					body: [
						"Si vous avez des questions concernant cette politique de confidentialité, écrivez à code.sudeepto@gmail.com.",
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
			email: "code.sudeepto@gmail.com",
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
