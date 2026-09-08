import type { Dictionary } from "../dictionary";

export const de: Dictionary = {
	meta: {
		title: "Interpolationsrechner Online — Linear, Logarithmisch & Bilinear",
		description:
			"Kostenloser Online-Interpolationsrechner mit Schritt-für-Schritt-Rechenweg. Unterstützt lineare, logarithmische und doppelte (bilineare) Interpolation und kennzeichnet Extrapolationen automatisch.",
	},

	header: {
		brand: "Interpolationsrechner",
		navCalculator: "Rechner",
		navFaq: "FAQ",
		themeToggleLabel: "Dunkelmodus umschalten",
		languageLabel: "Sprache",
		skipToContent: "Zum Inhalt springen",
	},

	hero: {
		eyebrow: "Kostenlos · Ohne Anmeldung · Läuft im Browser",
		heading: "Interpolationsrechner — mit angezeigtem Rechenweg",
		subheading:
			"Schätze einen Wert zwischen zwei bekannten Punkten und sieh genau, wie das Ergebnis zustande kommt — linear, logarithmisch oder über ein 2D-Gitter (bilinear).",
	},

	calculator: {
		tablistLabel: "Interpolationsmodus",
		tabLinear: "Linear",
		tabLog: "Logarithmisch",
		tabBilinear: "Doppelt (bilinear)",

		linearIntro: "Gib zwei bekannte Punkte ein und dann den x-Wert, für den du y schätzen möchtest.",
		logIntro:
			"Für Daten, die entlang x einer logarithmischen Kurve folgen. Alle x-Werte müssen größer als null sein.",
		bilinearIntro:
			"Interpoliere über ein 2D-Gitter — vier bekannte Werte an den Ecken eines Rechtecks (z. B. Dampftabellen).",

		labelX1: "x₁",
		labelY1: "y₁",
		labelX2: "x₂",
		labelY2: "y₂",
		labelXTarget: "x (Zielwert)",
		labelYTarget: "y (Zielwert)",
		labelQ11: "Q₁₁ = f(x₁,y₁)",
		labelQ12: "Q₁₂ = f(x₁,y₂)",
		labelQ21: "Q₂₁ = f(x₂,y₁)",
		labelQ22: "Q₂₂ = f(x₂,y₂)",

		resultEyebrow: "Ergebnis",
		resultEmpty: "Gib Werte ein, um das interpolierte Ergebnis und den Schritt-für-Schritt-Rechenweg zu sehen.",
		resultInterpolated: "Interpoliert",
		resultExtrapolated: "Extrapoliert",
		extrapolationNote:
			"Der Zielwert liegt außerhalb deines bekannten Datenbereichs, es handelt sich also um eine Extrapolation, nicht um eine Interpolation. Extrapolierte Schätzungen sind weniger zuverlässig, besonders wenn der zugrunde liegende Zusammenhang über diesen Bereich nicht wirklich linear/logarithmisch ist.",

		steps: {
			linear: {
				formula: "Formel",
				substitute: "Setze deine Werte ein",
				computeSlope: "Berechne die Steigung",
				applySlope: "Wende die Steigung auf den Abstand von x₁ an",
				takeLogs: "",
				computeLogSlope: "",
				interpolateXAtY1: "",
				interpolateXAtY2: "",
				interpolateY: "",
				result: "Ergebnis",
			},
			log: {
				formula: "Formel",
				substitute: "Setze deine Werte ein",
				computeSlope: "",
				applySlope: "",
				takeLogs: "Bilde den natürlichen Logarithmus der x-Werte",
				computeLogSlope: "Berechne die Steigung im Log-Raum",
				interpolateXAtY1: "",
				interpolateXAtY2: "",
				interpolateY: "",
				result: "Ergebnis",
			},
			bilinear: {
				formula: "Formel",
				substitute: "",
				computeSlope: "",
				applySlope: "",
				takeLogs: "",
				computeLogSlope: "",
				interpolateXAtY1: "Interpoliere in x bei y = y₁",
				interpolateXAtY2: "Interpoliere in x bei y = y₂",
				interpolateY: "Interpoliere in y zwischen R₁ und R₂",
				result: "Ergebnis",
			},
		},

		errors: {
			invalidNumber: "Gib eine gültige Zahl für {field} ein.",
			xEqual:
				"x1 und x2 sind gleich, daher ist die Gerade zwischen ihnen nicht definiert (Division durch null). Gib zwei verschiedene x-Werte ein.",
			logDomain:
				"Die logarithmische Interpolation setzt voraus, dass x₁, x₂ und x alle größer als null sind (der Logarithmus ist für null oder negative Werte nicht definiert).",
			logXEqual:
				"x1 und x2 sind gleich, daher ist die logarithmische Kurve zwischen ihnen nicht definiert (Division durch null). Gib zwei verschiedene x-Werte ein.",
			bilinearXEqual:
				"x1 und x2 sind gleich, daher hat das Gitter die Breite null (Division durch null). Gib zwei verschiedene x-Werte ein.",
			bilinearYEqual:
				"y1 und y2 sind gleich, daher hat das Gitter die Höhe null (Division durch null). Gib zwei verschiedene y-Werte ein.",
		},
	},

	explanation: {
		linear: {
			title: "Lineare Interpolation",
			intro:
				"Nimmt eine Gerade zwischen zwei Punkten an. Gegeben (x₁, y₁) und (x₂, y₂), ergibt sich der y-Wert an einem beliebigen x als:",
			formula: "y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁)",
			note:
				"Gut geeignet für gleichmäßig verteilte Tabellenabfragen, Einheitenumrechnungen und jeden Zusammenhang, der über den betrachteten Bereich näherungsweise geradlinig verläuft.",
		},
		log: {
			title: "Logarithmische Interpolation",
			intro:
				"Nimmt an, dass y linear mit ln(x) statt mit x selbst variiert — nützlich, wenn x mehrere Größenordnungen umfasst.",
			formula: "y = y₁ + (ln x − ln x₁) × (y₂ − y₁) / (ln x₂ − ln x₁)",
			note: "Üblich für pH-Werte, Dezibel, die Richter-Magnitude und andere logarithmisch skalierte Messgrößen.",
		},
		bilinear: {
			title: "Doppelte (bilineare) Interpolation",
			intro:
				"Interpoliert über zwei Dimensionen mithilfe von vier bekannten Eckwerten — zweimal in x interpolieren und dieses Ergebnis dann in y interpolieren.",
			formula: "f(x,y) via f(x,y₁), f(x,y₂), then blend by y",
			note: "Die Standardmethode zum Ablesen von Dampftabellen und anderen 2D-Referenztabellen im Ingenieurwesen.",
		},
	},

	seoContent: {
		heading: "Alles, was du zur Online-Berechnung von Interpolationen brauchst",
		intro:
			"Dieser Interpolationsrechner ist ein kostenloser, browserbasierter Interpolationslöser für Studierende, Ingenieurinnen und Ingenieure sowie Datenanalysten, die einen Wert zwischen zwei bekannten Datenpunkten schätzen möchten, ohne dafür eine Tabellenkalkulationsformel aufzusetzen. Anders als ein typisches Online-Tool zur linearen Interpolation, das nur einen einzelnen Geradenfall abdeckt, beherrscht dieser Interpolationsformel-Rechner drei verschiedene Verfahren — lineare, logarithmische und doppelte (bilineare) Interpolation — und zeigt zu jedem Ergebnis den vollständigen Rechenweg, damit du die Mathematik nachprüfen kannst, statt einer Blackbox-Antwort einfach zu vertrauen.",
		sections: [
			{
				heading: "Ein linearer Interpolationsrechner für Schätzungen entlang einer Geraden",
				body: [
					"Der Modus des linearen Interpolationsrechners ist die gebräuchlichste Art, eine Interpolation zu berechnen. Gib ihm zwei bekannte Punkte — (x₁, y₁) und (x₂, y₂) — sowie den x-Wert, den du schätzen möchtest, und er wendet die standardmäßige lineare Interpolationsformel an: y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁). Das ist derselbe Ansatz, den man zum Ablesen zwischen zwei Zeilen einer technischen Tabelle, zum Umrechnen von Einheiten auf einer nicht standardisierten Skala oder zum Ergänzen eines fehlenden Datenpunkts in einem annähernd linearen Datensatz verwendet. Da alles clientseitig läuft, funktioniert dies als Online-Tool zur linearen Interpolation ohne Installation, ohne Konto und ohne dass Daten deinen Browser verlassen.",
				],
			},
			{
				heading: "Logarithmischer Interpolationsrechner für exponentiell verlaufende Daten",
				body: [
					"Nicht jeder Datensatz verläuft entlang einer Geraden. Wenn sich eine Größe multiplikativ statt additiv verändert — pH-Wert, Dezibel, Erdbebenmagnitude oder jede Messgröße, die sich über mehrere Größenordnungen erstreckt — liefert ein einfacher linearer Interpolationsrechner ein verzerrtes Ergebnis. Der Modus des logarithmischen Interpolationsrechners geht stattdessen davon aus, dass y linear mit ln(x) variiert, was zu dieser Art von Kurve deutlich besser passt. Gib deine zwei bekannten x/y-Paare (mit x-Werten größer als null) und den gesuchten x-Wert ein, und der Interpolationslöser durchläuft das Bilden der natürlichen Logarithmen, die Berechnung der Steigung im Log-Raum und deren Anwendung, um eine realistische Schätzung zurückzugeben.",
				],
			},
			{
				heading: "Doppelter (bilinearer) Interpolationsrechner für 2D-Gitter",
				body: [
					"Manche Aufgaben lassen sich überhaupt nicht mit einem einzelnen Punktepaar lösen. Dampftabellen, Diagramme zu Lufteigenschaften und andere zweidimensionale technische Referenzwerke geben einen Wert am Schnittpunkt einer Zeile und einer Spalte an — das heißt, du musst oft einen Punkt schätzen, der zwischen vier umgebenden Gitterwerten liegt. Genau dafür ist der doppelte Interpolationsrechner (auch bilinearer Interpolationsrechner genannt) gemacht. Gib die vier Eckwerte Q₁₁, Q₁₂, Q₂₁ und Q₂₂ zusammen mit deinem gesuchten x und y an, und das Tool interpoliert zweimal in x — einmal bei y₁ und einmal bei y₂ — und mischt diese beiden Ergebnisse anschließend in y, um die endgültige Schätzung zu erzeugen, wobei jeder Zwischenschritt angezeigt wird.",
				],
			},
			{
				heading: "Warum diesen Interpolationsformel-Rechner verwenden",
				body: [
					"Die meisten Rechner, die von sich behaupten, eine Interpolation zu berechnen, geben nur eine Endzahl zurück, wodurch es schwerfällt, einen Tippfehler in deinen Eingaben zu erkennen oder zu verstehen, warum ein Ergebnis merkwürdig aussieht. Dieses Online-Tool des Interpolationsrechners zeigt jede Einsetzung, jede Steigung und jedes Zwischenergebnis und weist automatisch darauf hin, wenn dein Zielwert außerhalb deines bekannten Datenbereichs liegt — es kennzeichnet dieses Ergebnis dann als extrapoliert statt als interpoliert, da extrapolierte Schätzungen mit größerer Unsicherheit behaftet sind. Es unterstützt alle drei Interpolationsverfahren an einem Ort, sodass du nicht zwischen separaten Lösern für lineare Interpolation, logarithmische Interpolation und bilineare Interpolation hin- und herwechseln musst, um verschiedene Teile desselben Projekts zu bearbeiten.",
					"Ob du als Studierende oder Studierender Hausaufgaben überprüfst, als Ingenieurin oder Ingenieur eine Dampftabelle abliest oder einfach eine Interpolation für eine einmalige Schätzung berechnen musst — dieses Tool ist kostenlos, erfordert keine Anmeldung und läuft vollständig in deinem Browser: Nichts wird hochgeladen oder auf einem Server gespeichert.",
				],
			},
		],
	},

	faq: {
		heading: "Häufig gestellte Fragen",
		items: [
			{
				q: "Was ist ein Interpolationsrechner?",
				a: "Ein Interpolationsrechner ist ein Werkzeug, das einen unbekannten Wert schätzt, der zwischen zwei (oder mehr) bekannten Datenpunkten liegt. Statt die Interpolationsformel von Hand anzuwenden, gibst du deine bekannten Punkte und den Ziel-x-Wert (oder x und y) ein, und der Rechner liefert das geschätzte Ergebnis — dieses Werkzeug zeigt außerdem den vollständigen Rechenweg Schritt für Schritt für die lineare, logarithmische und doppelte (bilineare) Interpolation.",
			},
			{
				q: "Wie funktioniert ein linearer Interpolationsrechner?",
				a: "Ein linearer Interpolationsrechner geht davon aus, dass eine Gerade deine beiden bekannten Punkte (x1, y1) und (x2, y2) verbindet. Du gibst diese beiden Punkte sowie den x-Wert ein, für den du y schätzen möchtest, und der Rechner wendet die lineare Interpolationsformel an, um zu bestimmen, wo dieses x proportional auf der Geraden zwischen y1 und y2 liegt.",
			},
			{
				q: "Wie lautet die lineare Interpolationsformel?",
				a: "Die lineare Interpolationsformel lautet y = y1 + (x − x1) × (y2 − y1) / (x2 − x1). Sie berechnet die Steigung zwischen zwei bekannten Punkten (x1, y1) und (x2, y2) und wendet diese Steigung dann auf den Abstand zwischen x und x1 an, um y zu schätzen.",
			},
			{
				q: "Wann sollte ich die lineare Interpolation verwenden?",
				a: "Verwende die lineare Interpolation, wenn deine Daten über den betrachteten Bereich näherungsweise eine Gerade bilden — üblich bei gleichmäßig abgestuften Tabellenwerten, Einheitenumrechnungen und beim Schätzen von Werten zwischen zwei eng beieinanderliegenden Messungen. Sie ist die einfachste und am weitesten verbreitete Interpolationsmethode, kann aber ungenau werden, wenn der tatsächliche Zusammenhang zwischen deinen beiden bekannten Punkten deutlich gekrümmt ist.",
			},
			{
				q: "Was ist die logarithmische Interpolation?",
				a: "Die logarithmische Interpolation ist eine Methode, die davon ausgeht, dass y linear von ln(x) statt von x selbst abhängt. Sie wird eingesetzt, wenn Daten mehrere Größenordnungen umfassen oder sich multiplikativ statt additiv verändern, da eine geradlinige (lineare) Anpassung eine solche Kurve nur schlecht abbilden würde.",
			},
			{
				q: "Wann sollte ich die logarithmische statt der linearen Interpolation verwenden?",
				a: "Verwende die logarithmische Interpolation, wenn deine Daten multiplikativ statt additiv wachsen oder abnehmen — häufig bei pH-Skalen, Dezibel/Schallintensität, Erdbebenmagnitude sowie manchen finanziellen oder biologischen Wachstumsdaten. Wenn deine Daten auf einer logarithmischen x-Achse wie eine Gerade aussehen, passt die logarithmische Interpolation meist besser als die lineare.",
			},
			{
				q: "Was ist ein Rechner für doppelte (bilineare) Interpolation?",
				a: "Ein Rechner für doppelte (bilineare) Interpolation schätzt einen Wert aus einem 2D-Gitter bekannter Punkte statt aus nur zwei. Du gibst vier bekannte Eckwerte — Q11, Q12, Q21 und Q22 — zusammen mit deinem Ziel-x und -y ein, und der Rechner interpoliert über beide Dimensionen, um das geschätzte Ergebnis zu liefern.",
			},
			{
				q: "Wie funktioniert die doppelte (bilineare) Interpolation?",
				a: "Die doppelte (bilineare) Interpolation funktioniert, indem zweimal in einer Richtung und einmal in der anderen interpoliert wird. Zuerst wird in x bei y1 und noch einmal bei y2 interpoliert, um zwei Zwischenergebnisse zu erhalten, anschließend werden diese beiden Ergebnisse in y interpoliert, um die endgültige Schätzung zu erzeugen — dabei werden alle vier Eckwerte danach gewichtet, wie nah der Zielpunkt an jedem von ihnen liegt.",
			},
			{
				q: "Wofür wird die doppelte Interpolation verwendet?",
				a: "Die doppelte Interpolation wird verwendet, um einen Wert aus einem 2D-Gitter bekannter Punkte abzulesen — zum Beispiel das Ablesen einer Größe (etwa der Enthalpie) aus einer Dampftabelle, bei der sowohl Druck als auch Temperatur zwischen den aufgeführten Zeilen und Spalten liegen. Sie funktioniert durch zweimaliges Interpolieren: einmal entlang x und dann einmal entlang y.",
			},
			{
				q: "Kann der Interpolationsrechner die Ergebnisse Schritt für Schritt anzeigen?",
				a: "Ja. Dieser Rechner zeigt jeden Schritt der Berechnung — das Einsetzen deiner Werte, das Berechnen der Steigung (oder der Log-Steigung bei der logarithmischen Interpolation) und deren Anwendung bis zum Endergebnis — sodass du die Rechnung selbst nachvollziehen kannst, statt nur eine fertige Zahl zu sehen.",
			},
			{
				q: "Was ist der Unterschied zwischen Interpolation und Extrapolation?",
				a: "Die Interpolation schätzt einen Wert, der zwischen zwei bekannten Datenpunkten liegt. Die Extrapolation schätzt einen Wert außerhalb dieses Bereichs. Die Extrapolation verwendet dieselbe Formel, ist aber grundsätzlich weniger zuverlässig, da du annimmst, dass sich der Trend über die tatsächlich vorhandenen Daten hinaus fortsetzt.",
			},
			{
				q: "Warum zeigt der Rechner „extrapoliert“ an, statt einen Fehler zu melden?",
				a: "Ein Ziel-x außerhalb deiner beiden bekannten Punkte lässt sich mathematisch dennoch berechnen — die Gerade oder Kurve wird einfach über die eingegebenen Daten hinaus verlängert. Der Hinweis ist eine Warnung, kein Fehler: Die Rechnung ist korrekt, aber die Sicherheit des Ergebnisses nimmt ab, je weiter du dich von deinem bekannten Bereich entfernst.",
			},
			{
				q: "Warum erhalte ich einen Fehler, wenn x1 gleich x2 ist?",
				a: "Die Interpolationsformel dividiert durch (x2 − x1). Wenn x1 und x2 gleich sind, ist das eine Division durch null, die mathematisch nicht definiert ist. Du brauchst zwei verschiedene x-Werte, um eine Gerade (oder Kurve) zu definieren, entlang der interpoliert wird.",
			},
		],
	},

	footer: {
		copyright: "© {year} Interpolation Calculator Online. Alle Berechnungen laufen in deinem Browser.",
		disclaimer: "Für schnelle, überprüfbare Schätzungen gedacht — kein Ersatz für professionelles ingenieurtechnisches Urteil.",
		navAbout: "Über uns",
		navPrivacy: "Datenschutzerklärung",
		navTerms: "Allgemeine Geschäftsbedingungen",
		navContact: "Kontakt",
	},

	legal: {
		backToHome: "Zurück zum Rechner",
		lastUpdated: "Zuletzt aktualisiert: {date}",

		about: {
			metaTitle: "Über uns – Interpolation Calculator Online",
			metaDescription:
				"Erfahre mehr über Interpolation Calculator Online, ein kostenloses browserbasiertes Tool für lineare, logarithmische und bilineare Interpolation mit schrittweisen Ergebnissen.",
			heading: "Über Interpolation Calculator Online",
			intro:
				"Interpolation Calculator Online ist ein kostenloses, browserbasiertes Tool, das entwickelt wurde, um das Schätzen von Werten zwischen bekannten Datenpunkten schnell, transparent und genau zu machen — ohne dass du eine Tabellenkalkulation oder eine Lehrbuchformel vor dir brauchst.",
			sections: [
				{
					heading: "Warum wir das entwickelt haben",
					body: [
						"Interpolation begegnet einem überall: beim Lesen technischer Tabellen, beim Umrechnen zwischen Maßeinheiten, beim Ergänzen fehlender Datenpunkte und beim Schätzen von Werten aus Dampftafeln oder Referenzdiagrammen. Die meisten Online-Rechner geben nur eine Endzahl zurück, was es schwer macht, einen Fehler zu erkennen oder nachzuvollziehen, wie das Ergebnis zustande kam.",
						"Wir haben diesen Rechner entwickelt, um den vollständigen Rechenweg zu zeigen — jede Einsetzung, jede Steigungsberechnung und jedes Zwischenergebnis — damit du die Mathematik selbst überprüfen kannst, egal ob du als Studierender Hausaufgaben kontrollierst oder als Ingenieur eine Tabellenrecherche doppelt prüfst.",
					],
				},
				{
					heading: "Was dieses Tool leistet",
					body: [
						"Diese Website bietet drei Interpolationsmethoden an einem Ort: lineare Interpolation für geradlinige Schätzungen, logarithmische Interpolation für Daten, die sich über mehrere Größenordnungen erstrecken, und doppelte (bilineare) Interpolation für zweidimensionale Raster wie Dampftafeln. Jede Berechnung läuft vollständig in deinem Browser — nichts, was du eingibst, wird auf einen Server hochgeladen oder irgendwo gespeichert.",
					],
				},
				{
					heading: "Für wen es gedacht ist",
					body: [
						"Studierende, Ingenieure, Wissenschaftler und alle, die gelegentlich einen interpolierten Wert berechnen müssen, ohne eine Tabellenkalkulation einzurichten. Das Tool ist kostenlos, erfordert kein Konto und funktioniert sowohl auf dem Desktop als auch auf dem Mobilgerät.",
					],
				},
			],
		},

		privacy: {
			metaTitle: "Datenschutzerklärung – Interpolation Calculator Online",
			metaDescription:
				"Lies die Datenschutzerklärung von Interpolation Calculator Online. Wir erfassen oder speichern die von dir eingegebenen Zahlen nicht — alle Berechnungen laufen lokal in deinem Browser.",
			heading: "Datenschutzerklärung",
			intro:
				"Diese Datenschutzerklärung erläutert, welche Informationen Interpolation Calculator Online (\"wir\", \"diese Website\") erfasst, wenn du diese Website nutzt, und wie diese verwendet werden.",
			sections: [
				{
					heading: "Eingaben im Rechner",
					body: [
						"Die Zahlen, die du in den Interpolationsrechner eingibst, werden vollständig in deinem Browser mit clientseitigem JavaScript verarbeitet. Sie werden niemals an unsere Server übertragen, in einer Datenbank gespeichert oder an Dritte weitergegeben. Beim Schließen oder Neuladen der Seite wird alles Eingegebene gelöscht.",
					],
				},
				{
					heading: "Analyse und Cookies",
					body: [
						"Diese Website kann datenschutzfreundliche Analysetools verwenden, um aggregierte Verkehrsmuster zu verstehen (etwa welche Seiten besucht werden und aus welchem Land die Besucher kommen), um die Website zu verbessern. Diese Tools verfolgen deine Rechnereingaben nicht und erstellen kein individuelles Profil von dir. Falls Cookies für Analyse oder Werbung verwendet werden, erlaubt dir dein Browser in der Regel, sie jederzeit über seine Einstellungen zu blockieren oder zu löschen.",
					],
				},
				{
					heading: "Dienste von Drittanbietern",
					body: [
						"Wir können Dienste von Drittanbietern (wie Hosting-Anbieter, Content-Delivery-Netzwerke oder Analyseanbieter) nutzen, um diese Website zu betreiben. Diese Anbieter können im Rahmen der Bereitstellung der Website standardmäßige technische Informationen erfassen, wie deine IP-Adresse und deinen Browsertyp. Wir haben keinen Einfluss auf die Datenschutzpraktiken von Drittanbieterdiensten und empfehlen dir, deren eigene Datenschutzerklärungen zu lesen.",
					],
				},
				{
					heading: "Datenschutz für Kinder",
					body: [
						"Diese Website erfasst wissentlich keine personenbezogenen Daten von Kindern. Der Rechner selbst benötigt oder verlangt keine personenbezogenen Daten, um zu funktionieren.",
					],
				},
				{
					heading: "Änderungen dieser Erklärung",
					body: [
						"Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, um Änderungen an der Website oder am geltenden Recht zu berücksichtigen. Alle Änderungen werden auf dieser Seite veröffentlicht.",
					],
				},
				{
					heading: "Kontakt",
					body: [
						"Wenn du Fragen zu dieser Datenschutzerklärung hast, besuche bitte unsere Kontaktseite.",
					],
				},
			],
		},

		terms: {
			metaTitle: "Allgemeine Geschäftsbedingungen – Interpolation Calculator Online",
			metaDescription:
				"Allgemeine Geschäftsbedingungen für die Nutzung von Interpolation Calculator Online, einem kostenlosen Interpolationsrechner, der wie besehen zu Informations- und Bildungszwecken bereitgestellt wird.",
			heading: "Allgemeine Geschäftsbedingungen",
			intro:
				"Durch den Zugriff auf oder die Nutzung von Interpolation Calculator Online stimmst du den folgenden Bedingungen zu. Wenn du mit diesen Bedingungen nicht einverstanden bist, nutze diese Website bitte nicht.",
			sections: [
				{
					heading: "Nutzung dieser Website",
					body: [
						"Interpolation Calculator Online wird kostenlos für die persönliche, bildungsbezogene und berufliche Referenznutzung bereitgestellt. Du darfst den Rechner verwenden, um interpolierte und extrapolierte Werte aus deinen eigenen Daten zu schätzen.",
					],
				},
				{
					heading: "Keine Gewährleistung",
					body: [
						"Dieses Tool wird \"wie besehen\" und \"wie verfügbar\" bereitgestellt, ohne jegliche ausdrückliche oder stillschweigende Gewährleistung, einschließlich, aber nicht beschränkt auf Genauigkeit, Zuverlässigkeit oder Eignung für einen bestimmten Zweck. Auch wenn wir mathematisch korrekte Ergebnisse anstreben, garantieren wir nicht, dass die Berechnungen fehlerfrei oder unterbrechungsfrei sind.",
					],
				},
				{
					heading: "Keine professionelle Beratung",
					body: [
						"Dieser Rechner ist als allgemeines Referenz- und Bildungstool gedacht. Er ist kein Ersatz für professionelles ingenieurtechnisches, wissenschaftliches oder finanzielles Urteil. Du bist dafür verantwortlich, jedes Ergebnis unabhängig zu überprüfen, bevor du dich bei technischen Konstruktionen, sicherheitskritischen Entscheidungen, akademischen Abgaben oder jeder anderen folgenreichen Nutzung darauf verlässt.",
					],
				},
				{
					heading: "Haftungsbeschränkung",
					body: [
						"Soweit gesetzlich zulässig, haften wir nicht für direkte, indirekte, zufällige oder Folgeschäden, die sich aus der Nutzung oder der Unmöglichkeit der Nutzung dieser Website oder ihrer Berechnungsergebnisse ergeben.",
					],
				},
				{
					heading: "Geistiges Eigentum",
					body: [
						"Das Design, das Layout und die ursprünglichen Inhalte dieser Website gehören Interpolation Calculator Online. Du darfst wesentliche Teile der Website ohne Genehmigung nicht kopieren, erneut veröffentlichen oder weiterverbreiten.",
					],
				},
				{
					heading: "Änderungen dieser Bedingungen",
					body: [
						"Wir können diese Allgemeinen Geschäftsbedingungen von Zeit zu Zeit aktualisieren. Die fortgesetzte Nutzung der Website nach der Veröffentlichung von Änderungen gilt als Annahme der aktualisierten Bedingungen.",
					],
				},
			],
		},

		contact: {
			metaTitle: "Kontakt – Interpolation Calculator Online",
			metaDescription:
				"Nimm mit dem Team von Interpolation Calculator Online Kontakt auf – bei Fragen, Feedback oder Fehlerberichten.",
			heading: "Kontakt",
			intro:
				"Hast du eine Frage, einen Fehler gefunden oder möchtest eine Funktion vorschlagen? Wir würden gerne von dir hören. Melde dich über die untenstehende E-Mail-Adresse.",
			emailLabel: "E-Mail:",
			email: "support@interpcalc.com",
			sections: [
				{
					heading: "Feedback und Fehlerberichte",
					body: [
						"Wenn dir eine Berechnung auffällt, die falsch aussieht, gib bitte die genauen von dir verwendeten Eingaben und den Interpolationsmodus (linear, logarithmisch oder bilinear) an, damit wir das Problem nachvollziehen und untersuchen können.",
					],
				},
				{
					heading: "Antwortzeit",
					body: [
						"Wir bemühen uns, Nachrichten innerhalb weniger Werktage zu beantworten.",
					],
				},
			],
		},
	},

	errorPage: {
		notFound: {
			metaTitle: "Seite nicht gefunden (404) – Interpolation Calculator Online",
			metaDescription: "Die gesuchte Seite existiert nicht oder wurde möglicherweise verschoben.",
			code: "404",
			heading: "Seite nicht gefunden",
			body: "Die gesuchte Seite existiert nicht oder wurde möglicherweise verschoben. Überprüfe die URL oder gehe zurück zum Rechner.",
		},
		serverError: {
			metaTitle: "Serverfehler (500) – Interpolation Calculator Online",
			metaDescription: "Auf unserer Seite ist etwas schiefgelaufen. Bitte versuche es gleich noch einmal.",
			code: "500",
			heading: "Etwas ist schiefgelaufen",
			body: "Beim Laden dieser Seite ist ein unerwarteter Fehler aufgetreten. Bitte versuche es gleich noch einmal oder gehe zurück zum Rechner.",
		},
		backToHome: "Zurück zum Rechner",
		contactSupport: "Support kontaktieren",
	},
};
