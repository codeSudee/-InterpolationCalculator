import type { Dictionary } from "../dictionary";

export const it: Dictionary = {
	meta: {
		title: "Calcolatore di interpolazione – lineare, logaritmica e bilineare, passo dopo passo",
		description:
			"Stima valori compresi tra punti dati noti con l'interpolazione lineare, logaritmica o doppia (bilineare). Ogni risultato mostra l'intero procedimento, con esempi svolti e indicazioni sulla scelta del metodo.",
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
			"Inserisci i punti dati che conosci e ottieni una stima per quello che non conosci — con l'interpolazione lineare, logaritmica o doppia (bilineare). Ogni sostituzione e ogni valore intermedio viene mostrato, così puoi verificare la risposta invece di prenderla per buona.",
	},

	calculator: {
		tablistLabel: "Modalità di interpolazione",
		tabLinear: "Lineare",
		tabLog: "Logaritmica",
		tabBilinear: "Doppia (bilineare)",

		linearIntro: "Inserisci due punti noti, poi il valore x per cui vuoi stimare y.",
		logIntro:
			"Per dati in cui y varia linearmente con ln(x), come valori che abbracciano diversi ordini di grandezza. Tutti i valori di x devono essere maggiori di zero.",
		bilinearIntro:
			"Stima un valore all'interno di una tabella 2D a partire dai quattro valori noti agli angoli della cella circostante (ad esempio una tabella del vapore).",

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
			title: "Formula dell'interpolazione lineare",
			intro:
				"Presuppone una retta tra due punti. Dati (x₁, y₁) e (x₂, y₂), il valore di y in corrispondenza di un qualsiasi x è:",
			formula: "y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁)",
			note:
				"Ideale per la consultazione di tabelle a passo costante, le conversioni di unità e qualsiasi relazione approssimativamente rettilinea nell'intervallo che ti interessa.",
		},
		log: {
			title: "Formula dell'interpolazione logaritmica",
			intro:
				"Presuppone che y vari linearmente con ln(x) anziché con x stesso — utile quando x abbraccia diversi ordini di grandezza.",
			formula: "y = y₁ + (ln x − ln x₁) × (y₂ − y₁) / (ln x₂ − ln x₁)",
			note: "Comune per pH, decibel, magnitudo Richter e altre misurazioni in scala logaritmica.",
		},
		bilinear: {
			title: "Formula dell'interpolazione doppia (bilineare)",
			intro:
				"Interpola prima in x lungo entrambe le righe note per ottenere R₁ (a y₁) e R₂ (a y₂), poi interpola tra questi due risultati in y:",
			formula: "f(x,y) = R₁ + (y − y₁) × (R₂ − R₁) / (y₂ − y₁)",
			note: "Il metodo standard per leggere le tabelle del vapore e altre tabelle di riferimento tecniche 2D.",
		},
	},

	seoContent: {
		heading: "Come funziona l'interpolazione, con esempi svolti",
		intro:
			"L'interpolazione stima un valore sconosciuto che si trova tra valori già noti. È così che si legge tra le righe di una tabella tecnica, si colma una lacuna nei dati misurati o si converte una lettura su una scala indicata solo in certi punti. Il metodo giusto dipende da come si comportano i tuoi dati tra quei punti noti. Le sezioni che seguono spiegano i tre metodi supportati da questo calcolatore, propongono un esempio di ciascuno che puoi riprodurre nel calcolatore qui sopra e trattano le fonti di errore più comuni.",
		sections: [
			{
				heading: "Interpolazione lineare: esempio svolto",
				body: [
					"L'interpolazione lineare presuppone che i dati seguano una retta tra due punti noti (x₁, y₁) e (x₂, y₂). La formula è y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁): trova la pendenza tra i due punti, poi si sposta lungo tale pendenza da x₁ fino alla tua x obiettivo.",
					"Esempio: una tabella indica y = 12.4 a x = 20 e y = 18.9 a x = 30, e ti serve il valore a x = 24. La pendenza è (18.9 − 12.4) / (30 − 20) = 0.65 per unità di x. L'obiettivo è 4 unità oltre x₁, quindi y = 12.4 + 4 × 0.65 = 15.0. Inserisci x₁ = 20, y₁ = 12.4, x₂ = 30, y₂ = 18.9 e x = 24 nella scheda Lineare per vedere gli stessi passaggi.",
				],
			},
			{
				heading: "Interpolazione logaritmica: esempio svolto",
				body: [
					"Alcune grandezze cambiano di una quantità costante ogni volta che x viene moltiplicato per un fattore fisso, anziché ogni volta che x aumenta di una quantità fissa. Il livello sonoro in decibel, il pH e la magnitudo dei terremoti si comportano tutti così. Per questo tipo di dati, y è una retta rispetto a ln(x), quindi l'interpolazione logaritmica applica la formula lineare a ln(x) invece che a x.",
					"Esempio: un'intensità sonora di 1 µW/m² corrisponde a 60 dB e 100 µW/m² corrisponde a 80 dB. Qual è il livello a 10 µW/m²? L'interpolazione logaritmica dà 60 + (ln 10 − ln 1) × (80 − 60) / (ln 100 − ln 1) = 70 dB, che è esattamente corretto, perché 10 è un fattore dieci sopra 1 e un fattore dieci sotto 100. Una semplice interpolazione lineare restituirebbe circa 61.8 dB, perché tratta il 10 come se fosse solo al 9% del percorso da 1 a 100. Usare il metodo sbagliato su dati logaritmici può produrre errori di questa entità.",
				],
			},
			{
				heading: "Interpolazione doppia (bilineare): esempio svolto",
				body: [
					"Le tabelle bidimensionali, come le tabelle del vapore surriscaldato, elencano un valore per ogni combinazione di una variabile di riga e una di colonna. Quando entrambi i tuoi ingressi cadono tra valori elencati, ti servono le quattro voci di tabella circostanti: Q₁₁ = f(x₁, y₁), Q₂₁ = f(x₂, y₁), Q₁₂ = f(x₁, y₂) e Q₂₂ = f(x₂, y₂). L'interpolazione bilineare interpola prima in x lungo ciascuna delle due righe, poi interpola tra questi due risultati in y.",
					"Esempio: con x₁ = 10, x₂ = 20, y₁ = 100 e y₂ = 200, la tabella fornisce Q₁₁ = 50, Q₂₁ = 70, Q₁₂ = 60 e Q₂₂ = 90. Per stimare f(14, 130), interpola prima lungo y₁: R₁ = 50 + (14 − 10) × (70 − 50) / 10 = 58. Poi lungo y₂: R₂ = 60 + 0.4 × (90 − 60) = 72. Infine interpola in y: f = 58 + (130 − 100) × (72 − 58) / 100 = 62.2. Interpolando prima in y e poi in x si ottiene lo stesso 62.2.",
				],
			},
			{
				heading: "Come scegliere un metodo",
				body: [
					"Usa l'interpolazione lineare quando i punti noti sono vicini tra loro e i dati appaiono all'incirca rettilinei tra di essi. Questo copre la maggior parte delle consultazioni in tabella. Usa l'interpolazione logaritmica quando i valori di x abbracciano un ampio intervallo (ad esempio da 1 a 1.000) e i dati si dispongono lungo una retta su un asse x logaritmico. Usa l'interpolazione doppia ogni volta che il valore dipende da due ingressi contemporaneamente e stai leggendo da una griglia.",
					"Se hai dei dubbi, traccia alcuni valori di tabella vicini. I punti che si dispongono su una retta su assi ordinari si prestano all'interpolazione lineare. I punti che si raddrizzano solo quando x è tracciato su una scala logaritmica si prestano all'interpolazione logaritmica.",
				],
			},
			{
				heading: "Accuratezza ed errori comuni",
				body: [
					"L'interpolazione lineare è esatta solo quando i dati sono davvero una retta. Per una funzione f curva, l'errore è al massimo (x₂ − x₁)² / 8 moltiplicato per il valore massimo di |f″| tra i due punti. In pratica, ciò significa che dimezzare la distanza tra i punti noti riduce l'errore nel caso peggiore a circa un quarto. Quando una tabella offre righe più fitte vicino al tuo obiettivo, usale.",
					"Gli errori più frequenti sono confondere quale valore appartiene a x₁ e quale a x₂, mescolare le unità (ad esempio kPa in una riga e bar in un'altra) e leggere Q₁₂ e Q₂₁ dalle celle sbagliate di una tabella 2D. Anche stimare al di fuori dell'intervallo noto è rischioso. Il calcolatore etichetta questi risultati come estrapolati perché la retta o la curva ipotizzata potrebbe non proseguire oltre i tuoi dati.",
				],
			},
		],
	},

	faq: {
		heading: "Domande frequenti",
		items: [
			{
				q: "Che cos'è l'interpolazione?",
				a: "L'interpolazione consiste nello stimare un valore sconosciuto compreso tra due o più punti dati noti, supponendo che li colleghi una forma semplice, come una retta. Si usa comunemente per leggere valori tra le righe elencate nelle tabelle di riferimento e per colmare lacune nei dati misurati.",
			},
			{
				q: "Qual è la formula dell'interpolazione lineare?",
				a: "y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁). La frazione (y₂ − y₁) / (x₂ − x₁) è la pendenza della retta che passa per i due punti noti, e moltiplicarla per (x − x₁) indica di quanto y si è spostato da y₁ nel momento in cui raggiungi x.",
			},
			{
				q: "Quando l'interpolazione lineare è abbastanza accurata?",
				a: "Quando i punti noti sono vicini tra loro e i dati sono prossimi a una retta tra di essi. Per una relazione curva l'errore cresce con il quadrato della distanza tra i punti, quindi usare le righe di tabella disponibili più vicine di solito conta più della scelta del metodo.",
			},
			{
				q: "Quando dovrei usare l'interpolazione logaritmica invece di quella lineare?",
				a: "Usala quando y cambia all'incirca della stessa quantità ogni volta che x viene moltiplicato per un fattore costante — ad esempio i decibel rispetto all'intensità sonora, o il pH rispetto alla concentrazione di ioni idrogeno. Se i tuoi dati formano una retta quando x è tracciato su un asse logaritmico, l'interpolazione logaritmica si adatterà meglio di quella lineare.",
			},
			{
				q: "Perché x deve essere maggiore di zero per l'interpolazione logaritmica?",
				a: "L'interpolazione logaritmica lavora con ln(x), e il logaritmo naturale è definito solo per i numeri positivi. Se i tuoi valori di x includono zero o numeri negativi, i dati non possono trovarsi su una scala logaritmica in x, e l'interpolazione lineare è il metodo appropriato.",
			},
			{
				q: "Come funziona l'interpolazione doppia (bilineare)?",
				a: "Usa i quattro valori noti agli angoli della cella di tabella che contiene il tuo punto obiettivo. Interpola in x lungo la riga inferiore (ottenendo R₁) e la riga superiore (ottenendo R₂), poi interpola tra R₁ e R₂ in y. Il risultato è una media pesata dei quattro angoli, con gli angoli più vicini pesati maggiormente.",
			},
			{
				q: "Importa se interpolo prima in x o in y?",
				a: "No. Per l'interpolazione bilineare, procedere prima in x e poi in y dà esattamente lo stesso risultato di procedere prima in y e poi in x. L'esempio svolto qui sopra dà 62.2 in entrambi gli ordini.",
			},
			{
				q: "Qual è la differenza tra interpolazione ed estrapolazione?",
				a: "L'interpolazione stima un valore all'interno dell'intervallo dei tuoi punti noti; l'estrapolazione ne stima uno al di fuori. La formula è la stessa, quindi il calcolatore restituisce comunque un numero, ma etichetta il risultato come estrapolato perché non ci sono dati che confermino che l'andamento prosegua oltre i tuoi punti noti.",
			},
			{
				q: "Perché ottengo un errore quando x₁ è uguale a x₂?",
				a: "Ogni formula qui divide per (x₂ − x₁), o per (ln x₂ − ln x₁) in modalità logaritmica. Quando i due valori di x sono uguali si ha una divisione per zero, e due punti alla stessa x non possono definire una retta. Lo stesso vale per y₁ e y₂ nell'interpolazione doppia.",
			},
			{
				q: "Quanto sono precisi i risultati?",
				a: "I calcoli usano la consueta aritmetica in virgola mobile a doppia precisione. Per leggibilità, i valori intermedi nei passaggi sono arrotondati a sei cifre decimali e il risultato finale è mostrato con 12 cifre significative. Questo arrotondamento incide solo su ciò che viene visualizzato; ogni passaggio è calcolato a partire dai valori non arrotondati.",
			},
			{
				q: "I numeri che inserisco vengono inviati o memorizzati da qualche parte?",
				a: "No. Tutti i calcoli vengono eseguiti nel tuo browser e i tuoi dati non vengono mai inviati a un server. Aggiornando o chiudendo la pagina vengono cancellati.",
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
				"Perché esiste questo calcolatore di interpolazione, come vengono verificati i suoi risultati e chi lo mantiene.",
			heading: "Informazioni sul calcolatore di interpolazione",
			intro:
				"Il calcolatore di interpolazione è un progetto indipendente che stima valori compresi tra punti dati noti usando l'interpolazione lineare, logaritmica e doppia (bilineare). Mostra ogni passaggio del calcolo, così puoi verificare la risposta invece di prenderla per buona.",
			sections: [
				{
					heading: "Perché esiste questo sito",
					body: [
						"L'interpolazione ricorre di continuo negli studi e nella pratica ingegneristica: nella lettura di tabelle del vapore e delle proprietà, nel lavoro con curve di taratura o nel colmare una lacuna nei dati misurati. I calcoli sono semplici, ma è anche facile sbagliarli a mano. Gli errori tipici includono lo scambio tra x₁ e x₂, la lettura della cella sbagliata di una tabella 2D o l'applicazione di una stima rettilinea a dati logaritmici.",
						"La maggior parte degli strumenti online restituisce solo un numero finale, il che non lascia modo di individuare un errore di inserimento. Questo calcolatore mostra la formula, i valori sostituiti, la pendenza e ogni risultato intermedio, così ogni passaggio può essere confrontato con un libro di testo o con un calcolo a mano.",
					],
				},
				{
					heading: "Come vengono verificati i risultati",
					body: [
						"I tre metodi usano le formule standard dei libri di testo descritte nella pagina iniziale. I risultati sono stati verificati con calcoli a mano, compresi gli esempi svolti presenti nella pagina iniziale. Il calcolatore gestisce inoltre esplicitamente i casi limite, restituendo un messaggio chiaro invece di un numero privo di senso quando i valori di x sono uguali o quando un ingresso logaritmico è nullo o negativo. Quando un obiettivo cade fuori dall'intervallo, il risultato è etichettato come estrapolato anziché mostrato senza commento.",
					],
				},
				{
					heading: "Privacy by design",
					body: [
						"Tutti i calcoli vengono eseguiti nel tuo browser. I numeri che inserisci non vengono mai inviati a un server, quindi il calcolatore funziona anche con dati riservati o non pubblicati. L'Informativa sulla privacy spiega cosa il sito raccoglie effettivamente, come i consueti cookie di analisi e di pubblicità.",
					],
				},
				{
					heading: "Feedback",
					body: [
						"Se trovi un risultato che sembra errato, una spiegazione poco chiara o un metodo che vorresti veder aggiunto, mettiti in contatto tramite la pagina Contatti. Le segnalazioni che includono i valori esatti che hai utilizzato sono le più rapide da esaminare e correggere.",
					],
				},
			],
		},

		privacy: {
			metaTitle: "Informativa sulla privacy – Interpolation Calculator Online",
			metaDescription:
				"Quali informazioni raccoglie interpcalc.com, come vengono utilizzati i cookie di Google Analytics e Google AdSense e come disattivarli. I dati inseriti nel calcolatore non lasciano mai il tuo browser.",
			heading: "Informativa sulla privacy",
			intro:
				"Questa Informativa sulla privacy spiega quali informazioni interpcalc.com (\"questo sito\", \"noi\") raccoglie quando lo visiti, come vengono utilizzate e quali scelte hai a disposizione.",
			sections: [
				{
					heading: "Dati inseriti nel calcolatore",
					body: [
						"I numeri che inserisci nel calcolatore vengono elaborati interamente all'interno del tuo browser tramite JavaScript lato client. Non vengono mai inviati ai nostri server, memorizzati in un database o condivisi con chiunque. Aggiornando o chiudendo la pagina vengono cancellati.",
					],
				},
				{
					heading: "Analisi",
					body: [
						"Questo sito utilizza Google Analytics per comprendere l'utilizzo aggregato, ad esempio quali pagine vengono visitate, il paese approssimativo di provenienza dei visitatori e il tipo di dispositivo e browser utilizzato. Google Analytics utilizza cookie e raccoglie dati tecnici standard, come il tuo indirizzo IP, per produrre questi report. Non riceve i valori che inserisci nel calcolatore. Puoi impedire a Google Analytics di raccogliere dati installando il componente aggiuntivo del browser per la disattivazione di Google Analytics (tools.google.com/dlpage/gaoptout).",
					],
				},
				{
					heading: "Pubblicità",
					body: [
						"Questo sito utilizza Google AdSense per mostrare annunci pubblicitari. Fornitori terzi, tra cui Google, utilizzano cookie per pubblicare annunci in base alle tue visite precedenti a questo sito e ad altri siti web. L'uso dei cookie pubblicitari da parte di Google consente a Google e ai suoi partner di pubblicare annunci per te in base alle tue visite a questo e ad altri siti su Internet.",
						"Puoi disattivare la pubblicità personalizzata visitando le Impostazioni annunci di Google (adssettings.google.com). Puoi anche disattivare l'uso dei cookie per la pubblicità personalizzata da parte di alcuni fornitori terzi su www.aboutads.info. Per maggiori informazioni su come Google utilizza i dati, consulta policies.google.com/technologies/partner-sites.",
						"Ai visitatori nello Spazio economico europeo, nel Regno Unito e in Svizzera potrebbe essere richiesto il consenso prima che vengano impostati i cookie per la pubblicità personalizzata, e possono modificare tale scelta in qualsiasi momento.",
					],
				},
				{
					heading: "Cookie e archiviazione locale",
					body: [
						"Oltre ai cookie di analisi e pubblicità descritti sopra, il sito memorizza una sola preferenza nell'archiviazione locale del tuo browser: la scelta del tema chiaro o scuro. Puoi bloccare o eliminare cookie e archiviazione locale in qualsiasi momento tramite le impostazioni del browser. Il calcolatore continuerà a funzionare.",
					],
				},
				{
					heading: "Hosting",
					body: [
						"Il sito è ospitato su Cloudflare, che elabora dati di richiesta standard (come l'indirizzo IP e il tipo di browser) per fornire le pagine e proteggere il sito da abusi.",
					],
				},
				{
					heading: "Privacy dei minori",
					body: [
						"Questo sito non è rivolto a minori di 13 anni e non raccoglie consapevolmente informazioni personali da loro. Il calcolatore non richiede alcuna informazione personale.",
					],
				},
				{
					heading: "Modifiche a questa informativa",
					body: [
						"Potremmo aggiornare questa Informativa sulla privacy quando il sito o la legge applicabile cambiano. Gli aggiornamenti saranno pubblicati su questa pagina.",
					],
				},
				{
					heading: "Contatti",
					body: [
						"Se hai domande su questa Informativa sulla privacy, scrivi a code.sudeepto@gmail.com.",
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
			email: "code.sudeepto@gmail.com",
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
