import type { Dictionary } from "../dictionary";

export const it: Dictionary = {
	meta: {
		title: "Calcolatore di interpolazione online — lineare, logaritmica e bilineare",
		description:
			"Calcolatore di interpolazione online gratuito con passaggi dettagliati. Supporta l'interpolazione lineare, logaritmica e doppia (bilineare), con segnalazione automatica dell'estrapolazione.",
	},

	header: {
		brand: "Calcolatore di interpolazione",
		navCalculator: "Calcolatore",
		navFaq: "FAQ",
		themeToggleLabel: "Attiva/disattiva la modalità scura",
		languageLabel: "Lingua",
		skipToContent: "Vai al contenuto",
	},

	hero: {
		eyebrow: "Gratuito · Senza registrazione · Funziona nel tuo browser",
		heading: "Calcolatore di interpolazione, con tutti i passaggi mostrati",
		subheading:
			"Stima un valore compreso tra due punti noti e scopri esattamente come è stato ricavato il risultato — lineare, logaritmico o su una griglia 2D (bilineare).",
	},

	calculator: {
		tablistLabel: "Modalità di interpolazione",
		tabLinear: "Lineare",
		tabLog: "Logaritmica",
		tabBilinear: "Doppia (bilineare)",

		linearIntro: "Inserisci due punti noti, poi il valore x per cui vuoi stimare y.",
		logIntro:
			"Per dati che seguono una curva logaritmica lungo x. Tutti i valori di x devono essere maggiori di zero.",
		bilinearIntro:
			"Interpola su una griglia 2D — quattro valori noti agli angoli di un rettangolo (ad esempio le tabelle del vapore).",

		labelX1: "x₁",
		labelY1: "y₁",
		labelX2: "x₂",
		labelY2: "y₂",
		labelXTarget: "x (obiettivo)",
		labelYTarget: "y (obiettivo)",
		labelQ11: "Q₁₁ = f(x₁,y₁)",
		labelQ12: "Q₁₂ = f(x₁,y₂)",
		labelQ21: "Q₂₁ = f(x₂,y₁)",
		labelQ22: "Q₂₂ = f(x₂,y₂)",

		resultEyebrow: "Risultato",
		resultEmpty: "Inserisci i valori per vedere il risultato interpolato e i passaggi dettagliati.",
		resultInterpolated: "Interpolato",
		resultExtrapolated: "Estrapolato",
		extrapolationNote:
			"Il valore obiettivo si trova al di fuori dell'intervallo dei tuoi dati noti, quindi si tratta di un'estrapolazione, non di un'interpolazione. Le stime estrapolate sono meno affidabili, soprattutto se la relazione sottostante non è realmente lineare/logaritmica in quell'intervallo.",

		steps: {
			linear: {
				formula: "Formula",
				substitute: "Sostituisci i tuoi valori",
				computeSlope: "Calcola la pendenza",
				applySlope: "Applica la pendenza allo scostamento da x₁",
				takeLogs: "",
				computeLogSlope: "",
				interpolateXAtY1: "",
				interpolateXAtY2: "",
				interpolateY: "",
				result: "Risultato",
			},
			log: {
				formula: "Formula",
				substitute: "Sostituisci i tuoi valori",
				computeSlope: "",
				applySlope: "",
				takeLogs: "Calcola il logaritmo naturale dei valori di x",
				computeLogSlope: "Calcola la pendenza nello spazio logaritmico",
				interpolateXAtY1: "",
				interpolateXAtY2: "",
				interpolateY: "",
				result: "Risultato",
			},
			bilinear: {
				formula: "Formula",
				substitute: "",
				computeSlope: "",
				applySlope: "",
				takeLogs: "",
				computeLogSlope: "",
				interpolateXAtY1: "Interpola in x per y = y₁",
				interpolateXAtY2: "Interpola in x per y = y₂",
				interpolateY: "Interpola in y tra R₁ e R₂",
				result: "Risultato",
			},
		},

		errors: {
			invalidNumber: "Inserisci un numero valido per {field}.",
			xEqual:
				"x1 e x2 sono uguali, quindi la retta che li unisce non è definita (divisione per zero). Inserisci due valori di x distinti.",
			logDomain:
				"L'interpolazione logaritmica richiede che x₁, x₂ e x siano tutti maggiori di zero (il logaritmo non è definito per valori nulli o negativi).",
			logXEqual:
				"x1 e x2 sono uguali, quindi la curva logaritmica che li unisce non è definita (divisione per zero). Inserisci due valori di x distinti.",
			bilinearXEqual:
				"x1 e x2 sono uguali, quindi la griglia ha larghezza nulla (divisione per zero). Inserisci due valori di x distinti.",
			bilinearYEqual:
				"y1 e y2 sono uguali, quindi la griglia ha altezza nulla (divisione per zero). Inserisci due valori di y distinti.",
		},
	},

	explanation: {
		linear: {
			title: "Interpolazione lineare",
			intro:
				"Presuppone una retta tra due punti. Dati (x₁, y₁) e (x₂, y₂), il valore di y in corrispondenza di un qualsiasi x è:",
			formula: "y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁)",
			note:
				"Ideale per la consultazione di tabelle a passo costante, le conversioni di unità e qualsiasi relazione approssimativamente rettilinea nell'intervallo che ti interessa.",
		},
		log: {
			title: "Interpolazione logaritmica",
			intro:
				"Presuppone che y vari linearmente con ln(x) anziché con x stesso — utile quando x abbraccia diversi ordini di grandezza.",
			formula: "y = y₁ + (ln x − ln x₁) × (y₂ − y₁) / (ln x₂ − ln x₁)",
			note: "Comune per pH, decibel, magnitudo Richter e altre misurazioni in scala logaritmica.",
		},
		bilinear: {
			title: "Interpolazione doppia (bilineare)",
			intro:
				"Interpola su due dimensioni utilizzando quattro valori noti agli angoli — si interpola due volte in x, poi si interpola quel risultato in y.",
			formula: "f(x,y) via f(x,y₁), f(x,y₂), then blend by y",
			note: "Il metodo standard per leggere le tabelle del vapore e altre tabelle di riferimento tecniche 2D.",
		},
	},

	seoContent: {
		heading: "Tutto ciò che ti serve per calcolare l'interpolazione online",
		intro:
			"Questo calcolatore di interpolazione è un risolutore di interpolazione gratuito e basato su browser, pensato per studenti, ingegneri e analisti di dati che devono stimare un valore compreso tra due punti dati noti senza impostare una formula in un foglio di calcolo. A differenza di un tipico strumento di interpolazione lineare online che gestisce soltanto un unico caso rettilineo, questo calcolatore della formula di interpolazione copre tre metodi distinti — lineare, logaritmico e doppio (bilineare) — e mostra tutti i passaggi dietro ogni risultato, così puoi verificare i calcoli invece di fidarti ciecamente di una risposta a scatola chiusa.",
		sections: [
			{
				heading: "Un calcolatore di interpolazione lineare per stime rettilinee",
				body: [
					"La modalità calcolatore di interpolazione lineare è il modo più comune di calcolare l'interpolazione. Fornisci due punti noti — (x₁, y₁) e (x₂, y₂) — insieme al valore x che vuoi stimare, e applica la formula standard dell'interpolazione lineare: y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁). È lo stesso approccio usato per leggere tra le righe di una tabella tecnica, convertire unità su una scala non standard oppure completare un dato mancante in un insieme di dati approssimativamente lineare. Poiché tutto viene eseguito lato client, funziona come strumento di interpolazione lineare online senza installazione, senza account e senza che alcun dato esca dal tuo browser.",
				],
			},
			{
				heading: "Calcolatore di interpolazione logaritmica per dati di tipo esponenziale",
				body: [
					"Non tutti gli insiemi di dati seguono una retta. Quando una grandezza varia in modo moltiplicativo anziché additivo — pH, decibel, magnitudo dei terremoti o qualsiasi misura che copra diversi ordini di grandezza — un semplice calcolatore di interpolazione lineare ti darà una risposta distorta. La modalità calcolatore di interpolazione logaritmica presuppone invece che y vari linearmente con ln(x), il che si adatta molto più accuratamente a questo tipo di curva. Inserisci le tue due coppie x/y note (con valori x maggiori di zero) e la x obiettivo, e il risolutore di interpolazione ti guida passo dopo passo nel calcolo dei logaritmi naturali, della pendenza nello spazio logaritmico e della sua applicazione per restituire una stima realistica.",
				],
			},
			{
				heading: "Calcolatore di interpolazione doppia (bilineare) per griglie 2D",
				body: [
					"Alcuni problemi non si possono risolvere affatto con una sola coppia di punti. Le tabelle del vapore, i diagrammi delle proprietà dell'aria e altri riferimenti tecnici bidimensionali riportano un valore all'intersezione di una riga e una colonna — il che significa che spesso devi stimare un punto che ricade tra quattro valori circostanti della griglia. È esattamente ciò per cui è stato creato il calcolatore di interpolazione doppia (chiamato anche calcolatore di interpolazione bilineare). Fornisci i quattro valori agli angoli Q₁₁, Q₁₂, Q₂₁ e Q₂₂ insieme alla tua x e y obiettivo, e lo strumento interpola in x due volte — una a y₁ e una a y₂ — poi fonde questi due risultati in y per produrre la stima finale, mostrando ogni passaggio intermedio.",
				],
			},
			{
				heading: "Perché usare questo calcolatore della formula di interpolazione",
				body: [
					"La maggior parte dei calcolatori che dichiarano di calcolare l'interpolazione restituisce solo un numero finale, il che rende difficile individuare un errore di battitura nei dati inseriti o capire perché una risposta sembri sbagliata. Questo strumento di calcolatore di interpolazione online mostra ogni sostituzione, pendenza e risultato intermedio, e segnala automaticamente quando il tuo valore obiettivo cade al di fuori dell'intervallo dei dati noti — etichettando quel risultato come estrapolato anziché interpolato, poiché le stime estrapolate comportano una maggiore incertezza. Supporta tutti e tre i metodi di interpolazione in un unico posto, così non devi passare da un risolutore all'altro per l'interpolazione lineare, l'interpolazione logaritmica e l'interpolazione bilineare in parti diverse dello stesso progetto.",
					"Che tu sia uno studente che verifica i compiti, un ingegnere che consulta una tabella del vapore o chiunque abbia semplicemente bisogno di calcolare l'interpolazione per una stima occasionale, questo strumento è gratuito, non richiede registrazione e funziona interamente nel tuo browser — nulla viene caricato o memorizzato su un server.",
				],
			},
		],
	},

	faq: {
		heading: "Domande frequenti",
		items: [
			{
				q: "Che cos'è un calcolatore di interpolazione?",
				a: "Un calcolatore di interpolazione è uno strumento che stima un valore sconosciuto compreso tra due (o più) punti dati noti. Invece di applicare manualmente la formula di interpolazione, inserisci i tuoi punti noti e il valore x obiettivo (oppure x e y), e il calcolatore restituisce il risultato stimato — questo strumento mostra anche l'intero procedimento passo dopo passo per l'interpolazione lineare, logaritmica e doppia (bilineare).",
			},
			{
				q: "Come funziona un calcolatore di interpolazione lineare?",
				a: "Un calcolatore di interpolazione lineare presuppone che una retta colleghi i tuoi due punti noti, (x1, y1) e (x2, y2). Inserisci quei due punti più il valore x per cui vuoi stimare y, e il calcolatore applica la formula di interpolazione lineare per individuare dove quel valore x si colloca proporzionalmente lungo la retta tra y1 e y2.",
			},
			{
				q: "Qual è la formula dell'interpolazione lineare?",
				a: "La formula dell'interpolazione lineare è y = y1 + (x − x1) × (y2 − y1) / (x2 − x1). Calcola la pendenza tra due punti noti (x1, y1) e (x2, y2), quindi applica tale pendenza allo scarto tra x e x1 per stimare y.",
			},
			{
				q: "Quando dovrei usare l'interpolazione lineare?",
				a: "Usa l'interpolazione lineare quando i tuoi dati seguono approssimativamente una retta nell'intervallo che ti interessa — cosa comune per la consultazione di tabelle a intervalli regolari, le conversioni di unità e la stima di valori tra due misurazioni ravvicinate. È il metodo di interpolazione più semplice e diffuso, ma può risultare impreciso se la relazione reale presenta curvature significative tra i tuoi due punti noti.",
			},
			{
				q: "Che cos'è l'interpolazione logaritmica?",
				a: "L'interpolazione logaritmica è un metodo che presuppone che y vari linearmente rispetto a ln(x) anziché rispetto a x stesso. Si usa quando i dati coprono diversi ordini di grandezza o variano in modo moltiplicativo anziché additivo, poiché un adattamento a retta (lineare) approssimerebbe male quel tipo di curva.",
			},
			{
				q: "Quando dovrei usare l'interpolazione logaritmica invece di quella lineare?",
				a: "Usa l'interpolazione logaritmica quando i tuoi dati crescono o decrescono in modo moltiplicativo anziché additivo — cosa comune per le scale di pH, l'intensità sonora in decibel, la magnitudo dei terremoti e alcuni dati di crescita finanziaria o biologica. Se tracciando i tuoi dati su una scala x logaritmica ottieni una retta, l'interpolazione logaritmica di solito si adatta meglio di quella lineare.",
			},
			{
				q: "Che cos'è un calcolatore di interpolazione doppia (bilineare)?",
				a: "Un calcolatore di interpolazione doppia (bilineare) stima un valore a partire da una griglia 2D di punti noti anziché da soli due. Fornisci quattro valori noti agli angoli — Q11, Q12, Q21 e Q22 — insieme ai tuoi valori x e y obiettivo, e il calcolatore interpola su entrambe le dimensioni per restituire il risultato stimato.",
			},
			{
				q: "Come funziona l'interpolazione doppia (bilineare)?",
				a: "L'interpolazione doppia (bilineare) funziona interpolando due volte in una direzione e una volta nell'altra. Prima interpola lungo x in corrispondenza di y1 e di nuovo di y2 per ottenere due risultati intermedi, poi interpola questi due risultati lungo y per produrre la stima finale — combinando di fatto tutti e quattro i valori agli angoli in base a quanto il punto obiettivo è vicino a ciascuno.",
			},
			{
				q: "A cosa serve l'interpolazione doppia?",
				a: "L'interpolazione doppia serve a leggere un valore da una griglia 2D di punti noti — ad esempio, la lettura di una proprietà (come l'entalpia) da una tabella del vapore in cui sia la pressione sia la temperatura cadono tra righe e colonne elencate. Funziona interpolando due volte: prima lungo x, poi lungo y.",
			},
			{
				q: "Il calcolatore di interpolazione può mostrare i risultati passo dopo passo?",
				a: "Sì. Questo calcolatore mostra ogni passaggio del calcolo — la sostituzione dei tuoi valori, il calcolo della pendenza (o della pendenza logaritmica, per l'interpolazione logaritmica) e la sua applicazione fino al risultato finale — così puoi verificare tu stesso i calcoli invece di vedere solo un numero finale.",
			},
			{
				q: "Qual è la differenza tra interpolazione ed estrapolazione?",
				a: "L'interpolazione stima un valore compreso tra due punti dati noti. L'estrapolazione stima un valore al di fuori di quell'intervallo. L'estrapolazione usa la stessa formula, ma è intrinsecamente meno affidabile, perché presupponi che l'andamento prosegua oltre i dati di cui disponi effettivamente.",
			},
			{
				q: "Perché il calcolatore indica «estrapolato» anziché restituire un errore?",
				a: "Un valore obiettivo x esterno ai tuoi due punti noti è comunque calcolabile matematicamente — la retta o la curva viene semplicemente estesa oltre i dati forniti. L'etichetta è un avviso, non un errore: la matematica è corretta, ma l'affidabilità del risultato diminuisce quanto più ti allontani dall'intervallo noto.",
			},
			{
				q: "Perché ottengo un errore quando x1 è uguale a x2?",
				a: "La formula di interpolazione divide per (x2 − x1). Se x1 e x2 coincidono, si ha una divisione per zero, che è matematicamente indefinita. Servono due valori di x distinti per definire una retta (o una curva) lungo cui interpolare.",
			},
		],
	},

	footer: {
		copyright: "© {year} Interpolation Calculator Online. Tutti i calcoli vengono eseguiti nel tuo browser.",
		disclaimer: "Pensato per stime rapide e verificabili — non sostituisce il giudizio di un professionista dell'ingegneria.",
		navAbout: "Chi siamo",
		navPrivacy: "Informativa sulla privacy",
		navTerms: "Termini e condizioni",
		navContact: "Contatti",
	},

	legal: {
		backToHome: "Torna alla calcolatrice",
		lastUpdated: "Ultimo aggiornamento: {date}",

		about: {
			metaTitle: "Chi siamo – Interpolation Calculator Online",
			metaDescription:
				"Scopri Interpolation Calculator Online, uno strumento gratuito basato su browser per l'interpolazione lineare, logaritmica e bilineare con risultati passo dopo passo.",
			heading: "Informazioni su Interpolation Calculator Online",
			intro:
				"Interpolation Calculator Online è uno strumento gratuito basato su browser, creato per rendere la stima dei valori tra punti dati noti rapida, trasparente e accurata — senza bisogno di un foglio di calcolo o di una formula da manuale davanti a te.",
			sections: [
				{
					heading: "Perché lo abbiamo creato",
					body: [
						"L'interpolazione è presente ovunque: nella lettura di tabelle ingegneristiche, nella conversione tra scale di misura, nel completamento di punti dati mancanti e nella stima di valori da tabelle del vapore o grafici di riferimento. La maggior parte delle calcolatrici online restituisce solo un numero finale, il che rende difficile individuare un errore o capire come si è arrivati al risultato.",
						"Abbiamo creato questa calcolatrice per mostrare tutti i passaggi — ogni sostituzione, calcolo della pendenza e risultato intermedio — così puoi verificare tu stesso i calcoli, che tu sia uno studente che controlla i compiti o un ingegnere che ricontrolla una consultazione in tabella.",
					],
				},
				{
					heading: "Cosa fa questo strumento",
					body: [
						"Questo sito offre tre metodi di interpolazione in un unico posto: l'interpolazione lineare per stime a linea retta, l'interpolazione logaritmica per dati che spaziano su diversi ordini di grandezza e l'interpolazione doppia (bilineare) per griglie bidimensionali come le tabelle del vapore. Ogni calcolo viene eseguito interamente nel tuo browser — nulla di ciò che inserisci viene caricato su un server o memorizzato altrove.",
					],
				},
				{
					heading: "A chi è rivolto",
					body: [
						"A studenti, ingegneri, scienziati e a chiunque abbia occasionalmente bisogno di calcolare un valore interpolato senza dover impostare un foglio di calcolo. Lo strumento è gratuito, non richiede alcun account e funziona sia su desktop che su dispositivi mobili.",
					],
				},
			],
		},

		privacy: {
			metaTitle: "Informativa sulla privacy – Interpolation Calculator Online",
			metaDescription:
				"Leggi l'informativa sulla privacy di Interpolation Calculator Online. Non raccogliamo né memorizziamo i numeri che inserisci — tutti i calcoli vengono eseguiti localmente nel tuo browser.",
			heading: "Informativa sulla privacy",
			intro:
				"Questa Informativa sulla privacy spiega quali informazioni Interpolation Calculator Online (\"noi\", \"questo sito\") raccoglie quando utilizzi questo sito web e come vengono utilizzate.",
			sections: [
				{
					heading: "Dati inseriti nella calcolatrice",
					body: [
						"I numeri che inserisci nella calcolatrice di interpolazione vengono elaborati interamente all'interno del tuo browser tramite JavaScript lato client. Non vengono mai trasmessi ai nostri server, memorizzati in un database o condivisi con terze parti. Chiudendo o aggiornando la pagina, tutto ciò che hai inserito viene cancellato.",
					],
				},
				{
					heading: "Analisi e cookie",
					body: [
						"Questo sito può utilizzare strumenti di analisi rispettosi della privacy per comprendere i modelli di traffico aggregati (come quali pagine vengono visitate e da quale paese provengono i visitatori), al fine di migliorare il sito. Questi strumenti non tracciano i dati inseriti nella calcolatrice e non creano un profilo individuale di te. Se vengono utilizzati cookie per analisi o pubblicità, il tuo browser ti consentirà in genere di bloccarli o cancellarli in qualsiasi momento tramite le sue impostazioni.",
					],
				},
				{
					heading: "Servizi di terze parti",
					body: [
						"Potremmo utilizzare servizi di terze parti (come provider di hosting, reti di distribuzione dei contenuti o fornitori di analisi) per gestire questo sito. Questi fornitori possono raccogliere informazioni tecniche standard, come il tuo indirizzo IP e il tipo di browser, nell'ambito della fornitura del sito web. Non controlliamo le pratiche sulla privacy dei servizi di terze parti e ti invitiamo a consultare le loro informative sulla privacy.",
					],
				},
				{
					heading: "Privacy dei minori",
					body: [
						"Questo sito non raccoglie consapevolmente informazioni personali dai minori. La calcolatrice stessa non richiede né necessita di alcuna informazione personale per funzionare.",
					],
				},
				{
					heading: "Modifiche a questa informativa",
					body: [
						"Potremmo aggiornare periodicamente questa Informativa sulla privacy per riflettere modifiche al sito o alla legge applicabile. Eventuali modifiche verranno pubblicate su questa pagina.",
					],
				},
				{
					heading: "Contattaci",
					body: [
						"Se hai domande su questa Informativa sulla privacy, visita la nostra pagina Contatti.",
					],
				},
			],
		},

		terms: {
			metaTitle: "Termini e condizioni – Interpolation Calculator Online",
			metaDescription:
				"Termini e condizioni per l'utilizzo di Interpolation Calculator Online, una calcolatrice di interpolazione gratuita fornita così com'è per scopi informativi ed educativi.",
			heading: "Termini e condizioni",
			intro:
				"Accedendo o utilizzando Interpolation Calculator Online, accetti i seguenti termini. Se non accetti questi termini, ti preghiamo di non utilizzare questo sito.",
			sections: [
				{
					heading: "Utilizzo di questo sito",
					body: [
						"Interpolation Calculator Online è fornito gratuitamente per uso personale, educativo e di riferimento professionale. Puoi utilizzare la calcolatrice per stimare valori interpolati ed estrapolati dai tuoi dati.",
					],
				},
				{
					heading: "Nessuna garanzia",
					body: [
						"Questo strumento è fornito \"così com'è\" e \"come disponibile\", senza garanzie di alcun tipo, esplicite o implicite, incluse a titolo esemplificativo l'accuratezza, l'affidabilità o l'idoneità per uno scopo particolare. Pur puntando a risultati matematicamente corretti, non garantiamo che i calcoli siano privi di errori o ininterrotti.",
					],
				},
				{
					heading: "Non è una consulenza professionale",
					body: [
						"Questa calcolatrice è concepita come strumento di riferimento e didattico di uso generale. Non sostituisce il giudizio professionale in ambito ingegneristico, scientifico o finanziario. Sei responsabile della verifica indipendente di qualsiasi risultato prima di farvi affidamento per la progettazione ingegneristica, decisioni critiche per la sicurezza, elaborati accademici o qualsiasi altro uso rilevante.",
					],
				},
				{
					heading: "Limitazione di responsabilità",
					body: [
						"Nella misura massima consentita dalla legge, non saremo responsabili per eventuali danni diretti, indiretti, incidentali o consequenziali derivanti dall'uso o dall'impossibilità di utilizzare questo sito web o i suoi risultati di calcolo.",
					],
				},
				{
					heading: "Proprietà intellettuale",
					body: [
						"Il design, il layout e i contenuti originali di questo sito sono di proprietà di Interpolation Calculator Online. Non puoi copiare, ripubblicare o ridistribuire porzioni sostanziali del sito senza autorizzazione.",
					],
				},
				{
					heading: "Modifiche a questi termini",
					body: [
						"Potremmo aggiornare periodicamente questi Termini e condizioni. L'uso continuato del sito dopo la pubblicazione delle modifiche costituisce accettazione dei termini aggiornati.",
					],
				},
			],
		},

		contact: {
			metaTitle: "Contattaci – Interpolation Calculator Online",
			metaDescription:
				"Mettiti in contatto con il team di Interpolation Calculator Online per domande, feedback o segnalazioni di bug.",
			heading: "Contattaci",
			intro:
				"Hai una domanda, hai trovato un bug o vuoi suggerire una funzionalità? Ci farebbe piacere sentirti. Contattaci all'indirizzo email qui sotto.",
			emailLabel: "Email:",
			email: "support@interpcalc.com",
			sections: [
				{
					heading: "Feedback e segnalazioni di bug",
					body: [
						"Se noti un calcolo che sembra errato, includi i valori esatti che hai utilizzato e la modalità di interpolazione (lineare, logaritmica o bilineare) così da poter riprodurre e analizzare il problema.",
					],
				},
				{
					heading: "Tempi di risposta",
					body: [
						"Cerchiamo di rispondere ai messaggi entro pochi giorni lavorativi.",
					],
				},
			],
		},
	},

	errorPage: {
		notFound: {
			metaTitle: "Pagina non trovata (404) – Interpolation Calculator Online",
			metaDescription: "La pagina che stai cercando non esiste o potrebbe essere stata spostata.",
			code: "404",
			heading: "Pagina non trovata",
			body: "La pagina che stai cercando non esiste o potrebbe essere stata spostata. Controlla l'URL oppure torna alla calcolatrice.",
		},
		serverError: {
			metaTitle: "Errore del server (500) – Interpolation Calculator Online",
			metaDescription: "Qualcosa è andato storto da parte nostra. Riprova tra qualche istante.",
			code: "500",
			heading: "Qualcosa è andato storto",
			body: "Si è verificato un errore imprevisto durante il caricamento di questa pagina. Riprova tra qualche istante oppure torna alla calcolatrice.",
		},
		backToHome: "Torna alla calcolatrice",
		contactSupport: "Contatta il supporto",
	},
};
