import type { Dictionary } from "../dictionary";

export const de: Dictionary = {
	meta: {
		title: "Interpolationsrechner – Linear, Logarithmisch & Bilinear, Schritt für Schritt",
		description:
			"Schätze Werte zwischen bekannten Datenpunkten mit linearer, logarithmischer oder doppelter (bilinearer) Interpolation. Jedes Ergebnis zeigt den vollständigen Rechenweg, mit durchgerechneten Beispielen und Hilfe bei der Methodenwahl.",
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
			"Gib die Datenpunkte ein, die du kennst, und erhalte eine Schätzung für den, den du nicht kennst — mit linearer, logarithmischer oder doppelter (bilinearer) Interpolation. Jede Einsetzung und jeder Zwischenwert wird angezeigt, sodass du die Antwort überprüfen kannst, statt ihr blind zu vertrauen.",
	},

	calculator: {
		tablistLabel: "Interpolationsmodus",
		tabLinear: "Linear",
		tabLog: "Logarithmisch",
		tabBilinear: "Doppelt (bilinear)",

		linearIntro: "Gib zwei bekannte Punkte ein und dann den x-Wert, für den du y schätzen möchtest.",
		logIntro:
			"Für Daten, bei denen sich y linear mit ln(x) ändert, etwa bei Werten über mehrere Größenordnungen. Alle x-Werte müssen größer als null sein.",
		bilinearIntro:
			"Schätze einen Wert innerhalb einer 2D-Tabelle aus den vier bekannten Werten an den Ecken der umgebenden Zelle (zum Beispiel einer Dampftabelle).",

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
			title: "Formel der linearen Interpolation",
			intro:
				"Nimmt eine Gerade zwischen zwei Punkten an. Gegeben (x₁, y₁) und (x₂, y₂), ergibt sich der y-Wert an einem beliebigen x als:",
			formula: "y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁)",
			note:
				"Gut geeignet für gleichmäßig verteilte Tabellenabfragen, Einheitenumrechnungen und jeden Zusammenhang, der über den betrachteten Bereich näherungsweise geradlinig verläuft.",
		},
		log: {
			title: "Formel der logarithmischen Interpolation",
			intro:
				"Nimmt an, dass y linear mit ln(x) statt mit x selbst variiert — nützlich, wenn x mehrere Größenordnungen umfasst.",
			formula: "y = y₁ + (ln x − ln x₁) × (y₂ − y₁) / (ln x₂ − ln x₁)",
			note: "Üblich für pH-Werte, Dezibel, die Richter-Magnitude und andere logarithmisch skalierte Messgrößen.",
		},
		bilinear: {
			title: "Formel der doppelten (bilinearen) Interpolation",
			intro:
				"Interpoliere zunächst in x entlang beider bekannter Zeilen, um R₁ (bei y₁) und R₂ (bei y₂) zu erhalten, und interpoliere dann zwischen diesen beiden Ergebnissen in y:",
			formula: "f(x,y) = R₁ + (y − y₁) × (R₂ − R₁) / (y₂ − y₁)",
			note: "Die Standardmethode zum Ablesen von Dampftabellen und anderen 2D-Referenztabellen im Ingenieurwesen.",
		},
	},

	seoContent: {
		heading: "Wie Interpolation funktioniert, mit durchgerechneten Beispielen",
		intro:
			"Interpolation schätzt einen unbekannten Wert, der zwischen bereits bekannten Werten liegt. So liest man zwischen den Zeilen einer technischen Tabelle, füllt eine Lücke in Messdaten oder rechnet einen Messwert auf einer Skala um, die nur an bestimmten Punkten angegeben ist. Die richtige Methode hängt davon ab, wie sich deine Daten zwischen diesen bekannten Punkten verhalten. Die folgenden Abschnitte erläutern die drei Methoden, die dieser Rechner unterstützt, führen zu jeder ein Beispiel vor, das du im Rechner oben nachvollziehen kannst, und behandeln die häufigsten Fehlerquellen.",
		sections: [
			{
				heading: "Lineare Interpolation: durchgerechnetes Beispiel",
				body: [
					"Die lineare Interpolation nimmt an, dass die Daten zwischen zwei bekannten Punkten (x₁, y₁) und (x₂, y₂) einer Geraden folgen. Die Formel lautet y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁): Sie bestimmt die Steigung zwischen den beiden Punkten und bewegt sich dann entlang dieser Steigung von x₁ zu deinem Ziel-x.",
					"Beispiel: Eine Tabelle gibt y = 12.4 bei x = 20 und y = 18.9 bei x = 30 an, und du brauchst den Wert bei x = 24. Die Steigung ist (18.9 − 12.4) / (30 − 20) = 0.65 pro Einheit von x. Das Ziel liegt 4 Einheiten hinter x₁, also y = 12.4 + 4 × 0.65 = 15.0. Gib x₁ = 20, y₁ = 12.4, x₂ = 30, y₂ = 18.9 und x = 24 im Tab „Linear“ ein, um dieselben Schritte zu sehen.",
				],
			},
			{
				heading: "Logarithmische Interpolation: durchgerechnetes Beispiel",
				body: [
					"Manche Größen ändern sich um einen konstanten Betrag, jedes Mal wenn x mit einem festen Faktor multipliziert wird, statt jedes Mal, wenn x um einen festen Betrag zunimmt. Der Schallpegel in Dezibel, der pH-Wert und die Erdbebenmagnitude verhalten sich alle so. Für diese Art von Daten ist y eine Gerade über ln(x), sodass die logarithmische Interpolation die lineare Formel auf ln(x) statt auf x anwendet.",
					"Beispiel: Eine Schallintensität von 1 µW/m² entspricht 60 dB und 100 µW/m² entspricht 80 dB. Wie hoch ist der Pegel bei 10 µW/m²? Die logarithmische Interpolation ergibt 60 + (ln 10 − ln 1) × (80 − 60) / (ln 100 − ln 1) = 70 dB, was genau richtig ist, denn 10 liegt einen Faktor zehn über 1 und einen Faktor zehn unter 100. Eine einfache lineare Interpolation würde etwa 61.8 dB liefern, weil sie 10 so behandelt, als läge es nur 9 % des Weges von 1 nach 100. Die falsche Methode auf logarithmischen Daten kann Fehler in dieser Größenordnung erzeugen.",
				],
			},
			{
				heading: "Doppelte (bilineare) Interpolation: durchgerechnetes Beispiel",
				body: [
					"Zweidimensionale Tabellen, etwa Tabellen für überhitzten Dampf, geben einen Wert für jede Kombination aus einer Zeilen- und einer Spaltenvariable an. Wenn beide deiner Eingaben zwischen aufgeführten Werten liegen, brauchst du die vier umgebenden Tabelleneinträge: Q₁₁ = f(x₁, y₁), Q₂₁ = f(x₂, y₁), Q₁₂ = f(x₁, y₂) und Q₂₂ = f(x₂, y₂). Die bilineare Interpolation interpoliert zuerst in x entlang jeder der beiden Zeilen und dann zwischen diesen beiden Ergebnissen in y.",
					"Beispiel: Mit x₁ = 10, x₂ = 20, y₁ = 100 und y₂ = 200 gibt die Tabelle Q₁₁ = 50, Q₂₁ = 70, Q₁₂ = 60 und Q₂₂ = 90 an. Um f(14, 130) zu schätzen, interpoliere zunächst entlang y₁: R₁ = 50 + (14 − 10) × (70 − 50) / 10 = 58. Dann entlang y₂: R₂ = 60 + 0.4 × (90 − 60) = 72. Schließlich interpoliere in y: f = 58 + (130 − 100) × (72 − 58) / 100 = 62.2. Interpoliert man zuerst in y und dann in x, ergibt sich dieselben 62.2.",
				],
			},
			{
				heading: "Die richtige Methode wählen",
				body: [
					"Verwende die lineare Interpolation, wenn die bekannten Punkte nahe beieinander liegen und die Daten zwischen ihnen annähernd geradlinig aussehen. Das deckt die meisten Tabellenabfragen ab. Verwende die logarithmische Interpolation, wenn die x-Werte einen weiten Bereich umfassen (zum Beispiel 1 bis 1.000) und die Daten auf einer logarithmischen x-Achse als Gerade erscheinen. Verwende die doppelte Interpolation immer dann, wenn der Wert von zwei Eingaben gleichzeitig abhängt und du aus einem Gitter abliest.",
					"Wenn du unsicher bist, trage einige benachbarte Tabellenwerte auf. Punkte, die auf gewöhnlichen Achsen auf einer Geraden liegen, eignen sich für die lineare Interpolation. Punkte, die sich erst dann strecken, wenn x auf einer logarithmischen Skala aufgetragen wird, eignen sich für die logarithmische Interpolation.",
				],
			},
			{
				heading: "Genauigkeit und häufige Fehler",
				body: [
					"Die lineare Interpolation ist nur dann exakt, wenn die Daten tatsächlich eine Gerade bilden. Für eine gekrümmte Funktion f beträgt der Fehler höchstens (x₂ − x₁)² / 8 multipliziert mit dem größten Wert von |f″| zwischen den beiden Punkten. In der Praxis heißt das: Halbiert man den Abstand zwischen den bekannten Punkten, sinkt der schlimmstmögliche Fehler auf etwa ein Viertel. Wenn eine Tabelle feinere Zeilen in der Nähe deines Ziels bietet, nutze sie.",
					"Die häufigsten Fehler sind, zu verwechseln, welcher Wert zu x₁ und welcher zu x₂ gehört, Einheiten zu vermischen (zum Beispiel kPa in einer Zeile und bar in einer anderen) und Q₁₂ und Q₂₁ aus den falschen Zellen einer 2D-Tabelle abzulesen. Auch das Schätzen außerhalb des bekannten Bereichs ist riskant. Der Rechner kennzeichnet solche Ergebnisse als extrapoliert, weil die angenommene Gerade oder Kurve über deine Daten hinaus möglicherweise nicht weiterläuft.",
				],
			},
		],
	},

	faq: {
		heading: "Häufig gestellte Fragen",
		items: [
			{
				q: "Was ist Interpolation?",
				a: "Interpolation ist das Schätzen eines unbekannten Werts, der zwischen zwei oder mehr bekannten Datenpunkten liegt, indem man annimmt, dass sie durch eine einfache Form verbunden sind, etwa eine Gerade. Sie wird häufig verwendet, um Werte zwischen den aufgeführten Zeilen von Referenztabellen abzulesen und Lücken in Messdaten zu füllen.",
			},
			{
				q: "Wie lautet die Formel der linearen Interpolation?",
				a: "y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁). Der Bruch (y₂ − y₁) / (x₂ − x₁) ist die Steigung der Geraden durch die beiden bekannten Punkte, und die Multiplikation mit (x − x₁) ergibt, wie weit sich y bis zum Erreichen von x von y₁ entfernt hat.",
			},
			{
				q: "Wann ist die lineare Interpolation genau genug?",
				a: "Wenn die bekannten Punkte nahe beieinander liegen und die Daten zwischen ihnen nahezu eine Gerade bilden. Bei einem gekrümmten Zusammenhang wächst der Fehler mit dem Quadrat des Abstands zwischen den Punkten, sodass es meist wichtiger ist, die nächstgelegenen verfügbaren Tabellenzeilen zu verwenden, als die Methode zu wechseln.",
			},
			{
				q: "Wann sollte ich statt der linearen die logarithmische Interpolation verwenden?",
				a: "Verwende sie, wenn sich y um ungefähr denselben Betrag ändert, jedes Mal wenn x mit einem konstanten Faktor multipliziert wird — zum Beispiel Dezibel gegenüber Schallintensität oder pH-Wert gegenüber Wasserstoffionenkonzentration. Wenn deine Daten eine Gerade bilden, sobald x auf einer logarithmischen Achse aufgetragen wird, passt die logarithmische Interpolation besser als die lineare.",
			},
			{
				q: "Warum muss x für die logarithmische Interpolation größer als null sein?",
				a: "Die logarithmische Interpolation arbeitet mit ln(x), und der natürliche Logarithmus ist nur für positive Zahlen definiert. Wenn deine x-Werte null oder negative Werte enthalten, können die Daten in x nicht auf einer logarithmischen Skala liegen, und die lineare Interpolation ist die passende Methode.",
			},
			{
				q: "Wie funktioniert die doppelte (bilineare) Interpolation?",
				a: "Sie verwendet die vier bekannten Werte an den Ecken der Tabellenzelle, die deinen Zielpunkt enthält. Sie interpoliert in x entlang der unteren Zeile (das ergibt R₁) und der oberen Zeile (das ergibt R₂) und interpoliert dann zwischen R₁ und R₂ in y. Das Ergebnis ist ein gewichteter Mittelwert der vier Ecken, wobei nähere Ecken stärker gewichtet werden.",
			},
			{
				q: "Ist es wichtig, ob ich zuerst in x oder in y interpoliere?",
				a: "Nein. Bei der bilinearen Interpolation liefert zuerst x und dann y genau dasselbe Ergebnis wie zuerst y und dann x. Das durchgerechnete Beispiel oben ergibt in beiden Reihenfolgen 62.2.",
			},
			{
				q: "Was ist der Unterschied zwischen Interpolation und Extrapolation?",
				a: "Die Interpolation schätzt einen Wert innerhalb des Bereichs deiner bekannten Punkte; die Extrapolation schätzt einen außerhalb davon. Die Formel ist dieselbe, daher liefert der Rechner weiterhin eine Zahl, kennzeichnet das Ergebnis aber als extrapoliert, weil keine Daten bestätigen, dass sich der Trend über deine bekannten Punkte hinaus fortsetzt.",
			},
			{
				q: "Warum erhalte ich einen Fehler, wenn x₁ gleich x₂ ist?",
				a: "Jede Formel hier dividiert durch (x₂ − x₁) oder im logarithmischen Modus durch (ln x₂ − ln x₁). Wenn die beiden x-Werte gleich sind, ist dies eine Division durch null, und zwei Punkte beim selben x können keine Gerade definieren. Dasselbe gilt für y₁ und y₂ bei der doppelten Interpolation.",
			},
			{
				q: "Wie genau sind die Ergebnisse?",
				a: "Die Berechnungen verwenden die standardmäßige Gleitkommaarithmetik mit doppelter Genauigkeit. Zur besseren Lesbarkeit werden die Zwischenwerte in den Schritten auf sechs Nachkommastellen gerundet, und das Endergebnis wird mit 12 signifikanten Stellen angezeigt. Diese Rundung betrifft nur die Anzeige; jeder Schritt wird aus den ungerundeten Werten berechnet.",
			},
			{
				q: "Werden die von mir eingegebenen Zahlen irgendwo gesendet oder gespeichert?",
				a: "Nein. Alle Berechnungen laufen in deinem Browser, und deine Eingaben werden niemals an einen Server gesendet. Beim Aktualisieren oder Schließen der Seite werden sie gelöscht.",
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
				"Warum es diesen Interpolationsrechner gibt, wie seine Ergebnisse überprüft werden und wer ihn betreut.",
			heading: "Über den Interpolationsrechner",
			intro:
				"Der Interpolationsrechner ist ein unabhängiges Projekt, das Werte zwischen bekannten Datenpunkten mit linearer, logarithmischer und doppelter (bilinearer) Interpolation schätzt. Er zeigt jeden Rechenschritt, sodass du die Antwort überprüfen kannst, statt ihr blind zu vertrauen.",
			sections: [
				{
					heading: "Warum es diese Website gibt",
					body: [
						"Interpolation kommt in Studium und Ingenieurpraxis ständig vor: beim Ablesen von Dampf- und Stofftabellen, beim Arbeiten mit Kalibrierdiagrammen oder beim Füllen einer Lücke in Messdaten. Die Rechnung ist einfach, aber von Hand auch leicht fehleranfällig. Häufige Ausrutscher sind das Vertauschen von x₁ und x₂, das Ablesen der falschen Zelle einer 2D-Tabelle oder das Anwenden einer Geradenschätzung auf logarithmische Daten.",
						"Die meisten Online-Tools geben nur eine Endzahl zurück, sodass sich ein Eingabefehler nicht erkennen lässt. Dieser Rechner zeigt die Formel, deine eingesetzten Werte, die Steigung und jedes Zwischenergebnis, sodass sich jeder Schritt mit einem Lehrbuch oder einer Handrechnung vergleichen lässt.",
					],
				},
				{
					heading: "Wie die Ergebnisse überprüft werden",
					body: [
						"Die drei Methoden verwenden die standardmäßigen Lehrbuchformeln, die auf der Startseite beschrieben sind. Die Ergebnisse wurden mit Handrechnungen abgeglichen, einschließlich der durchgerechneten Beispiele auf der Startseite. Der Rechner behandelt außerdem Sonderfälle ausdrücklich und gibt eine klare Meldung statt einer sinnlosen Zahl aus, wenn die x-Werte gleich sind oder wenn eine logarithmische Eingabe null oder negativ ist. Wenn ein Zielwert außerhalb des Bereichs liegt, wird das Ergebnis als extrapoliert gekennzeichnet, statt es kommentarlos anzuzeigen.",
					],
				},
				{
					heading: "Datenschutz by design",
					body: [
						"Alle Berechnungen laufen in deinem Browser. Die von dir eingegebenen Zahlen werden niemals an einen Server gesendet, sodass der Rechner auch mit vertraulichen oder unveröffentlichten Daten funktioniert. Die Datenschutzerklärung erläutert, was die Website tatsächlich erfasst, etwa standardmäßige Analyse- und Werbe-Cookies.",
					],
				},
				{
					heading: "Feedback",
					body: [
						"Wenn dir ein Ergebnis falsch vorkommt, eine Erklärung verwirrend ist oder du dir eine zusätzliche Methode wünschst, melde dich bitte über die Kontaktseite. Berichte, die die genauen von dir verwendeten Eingaben enthalten, lassen sich am schnellsten untersuchen und beheben.",
					],
				},
			],
		},

		privacy: {
			metaTitle: "Datenschutzerklärung – Interpolation Calculator Online",
			metaDescription:
				"Welche Informationen interpcalc.com erfasst, wie Cookies von Google Analytics und Google AdSense verwendet werden und wie du widersprechen kannst. Rechnereingaben verlassen niemals deinen Browser.",
			heading: "Datenschutzerklärung",
			intro:
				"Diese Datenschutzerklärung erläutert, welche Informationen interpcalc.com (\"diese Website\", \"wir\") beim Besuch erfasst, wie sie verwendet werden und welche Wahlmöglichkeiten du hast.",
			sections: [
				{
					heading: "Eingaben im Rechner",
					body: [
						"Die Zahlen, die du in den Rechner eingibst, werden vollständig in deinem Browser mit clientseitigem JavaScript verarbeitet. Sie werden niemals an unsere Server gesendet, in einer Datenbank gespeichert oder an Dritte weitergegeben. Beim Aktualisieren oder Schließen der Seite werden sie gelöscht.",
					],
				},
				{
					heading: "Analyse",
					body: [
						"Diese Website verwendet Google Analytics, um die aggregierte Nutzung zu verstehen, etwa welche Seiten besucht werden, aus welchem Land die Besucher ungefähr kommen und welche Art von Gerät und Browser verwendet wird. Google Analytics verwendet Cookies und erfasst standardmäßige technische Daten, wie deine IP-Adresse, um diese Berichte zu erstellen. Es erhält nicht die Werte, die du in den Rechner eingibst. Du kannst verhindern, dass Google Analytics Daten erfasst, indem du das Google Analytics Opt-out-Browser-Add-on (tools.google.com/dlpage/gaoptout) installierst.",
					],
				},
				{
					heading: "Werbung",
					body: [
						"Diese Website verwendet Google AdSense, um Werbung anzuzeigen. Drittanbieter, einschließlich Google, verwenden Cookies, um Anzeigen basierend auf deinen früheren Besuchen dieser und anderer Websites zu schalten. Die Verwendung von Werbe-Cookies durch Google ermöglicht es Google und seinen Partnern, dir Anzeigen basierend auf deinen Besuchen dieser und anderer Websites im Internet zu schalten.",
						"Du kannst personalisierte Werbung deaktivieren, indem du die Google-Anzeigeneinstellungen (adssettings.google.com) besuchst. Du kannst der Verwendung von Cookies durch einige Drittanbieter für personalisierte Werbung auch unter www.aboutads.info widersprechen. Weitere Informationen dazu, wie Google Daten verwendet, findest du unter policies.google.com/technologies/partner-sites.",
						"Besucher im Europäischen Wirtschaftsraum, im Vereinigten Königreich und in der Schweiz werden möglicherweise um Einwilligung gebeten, bevor Cookies für personalisierte Werbung gesetzt werden, und können diese Wahl jederzeit ändern.",
					],
				},
				{
					heading: "Cookies und lokaler Speicher",
					body: [
						"Abgesehen von den oben beschriebenen Analyse- und Werbe-Cookies speichert die Website eine einzige Einstellung im lokalen Speicher deines Browsers: deine Wahl zwischen hellem und dunklem Design. Du kannst Cookies und lokalen Speicher jederzeit über deine Browsereinstellungen blockieren oder löschen. Der Rechner funktioniert weiterhin.",
					],
				},
				{
					heading: "Hosting",
					body: [
						"Die Website wird auf Cloudflare gehostet, das standardmäßige Anfragedaten (etwa IP-Adresse und Browsertyp) verarbeitet, um Seiten auszuliefern und die Website vor Missbrauch zu schützen.",
					],
				},
				{
					heading: "Datenschutz für Kinder",
					body: [
						"Diese Website richtet sich nicht an Kinder unter 13 Jahren und erfasst wissentlich keine personenbezogenen Daten von ihnen. Der Rechner fragt keine personenbezogenen Daten ab.",
					],
				},
				{
					heading: "Änderungen dieser Erklärung",
					body: [
						"Wir können diese Datenschutzerklärung aktualisieren, wenn sich die Website oder das geltende Recht ändert. Aktualisierungen werden auf dieser Seite veröffentlicht.",
					],
				},
				{
					heading: "Kontakt",
					body: [
						"Wenn du Fragen zu dieser Datenschutzerklärung hast, schreibe an code.sudeepto@gmail.com.",
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
			email: "code.sudeepto@gmail.com",
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
