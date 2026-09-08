import type { Dictionary } from "../dictionary";

export const es: Dictionary = {
	meta: {
		title: "Calculadora de interpolación online — Lineal, logarítmica y bilineal",
		description:
			"Calculadora de interpolación online y gratuita con el procedimiento paso a paso. Admite interpolación lineal, logarítmica y doble (bilineal), e indica automáticamente cuándo se trata de una extrapolación.",
	},

	header: {
		brand: "Calculadora de interpolación",
		navCalculator: "Calculadora",
		navFaq: "Preguntas frecuentes",
		themeToggleLabel: "Activar modo oscuro",
		languageLabel: "Idioma",
		skipToContent: "Saltar al contenido",
	},

	hero: {
		eyebrow: "Gratis · Sin registro · Funciona en tu navegador",
		heading: "Calculadora de interpolación, con los pasos a la vista",
		subheading:
			"Estima un valor entre dos puntos conocidos y observa exactamente cómo se obtuvo el resultado: lineal, logarítmico o sobre una cuadrícula 2D (bilineal).",
	},

	calculator: {
		tablistLabel: "Modo de interpolación",
		tabLinear: "Lineal",
		tabLog: "Logarítmica",
		tabBilinear: "Doble (bilineal)",

		linearIntro: "Introduce dos puntos conocidos y, luego, el valor de x para el que quieres estimar y.",
		logIntro:
			"Para datos que siguen una curva logarítmica a lo largo de x. Todos los valores de x deben ser mayores que cero.",
		bilinearIntro:
			"Interpola sobre una cuadrícula 2D: cuatro valores conocidos en las esquinas de un rectángulo (por ejemplo, tablas de vapor).",

		labelX1: "x₁",
		labelY1: "y₁",
		labelX2: "x₂",
		labelY2: "y₂",
		labelXTarget: "x (objetivo)",
		labelYTarget: "y (objetivo)",
		labelQ11: "Q₁₁ = f(x₁,y₁)",
		labelQ12: "Q₁₂ = f(x₁,y₂)",
		labelQ21: "Q₂₁ = f(x₂,y₁)",
		labelQ22: "Q₂₂ = f(x₂,y₂)",

		resultEyebrow: "Resultado",
		resultEmpty: "Introduce valores para ver el resultado interpolado y el procedimiento paso a paso.",
		resultInterpolated: "Interpolado",
		resultExtrapolated: "Extrapolado",
		extrapolationNote:
			"El valor objetivo queda fuera del rango de tus datos conocidos, por lo que se trata de una extrapolación, no de una interpolación. Las estimaciones extrapoladas son menos fiables, sobre todo si la relación subyacente no es realmente lineal o logarítmica en ese rango.",

		steps: {
			linear: {
				formula: "Fórmula",
				substitute: "Sustituye tus valores",
				computeSlope: "Calcula la pendiente",
				applySlope: "Aplica la pendiente al desplazamiento desde x₁",
				takeLogs: "",
				computeLogSlope: "",
				interpolateXAtY1: "",
				interpolateXAtY2: "",
				interpolateY: "",
				result: "Resultado",
			},
			log: {
				formula: "Fórmula",
				substitute: "Sustituye tus valores",
				computeSlope: "",
				applySlope: "",
				takeLogs: "Toma los logaritmos naturales de los valores de x",
				computeLogSlope: "Calcula la pendiente en el espacio logarítmico",
				interpolateXAtY1: "",
				interpolateXAtY2: "",
				interpolateY: "",
				result: "Resultado",
			},
			bilinear: {
				formula: "Fórmula",
				substitute: "",
				computeSlope: "",
				applySlope: "",
				takeLogs: "",
				computeLogSlope: "",
				interpolateXAtY1: "Interpola en x cuando y = y₁",
				interpolateXAtY2: "Interpola en x cuando y = y₂",
				interpolateY: "Interpola en y entre R₁ y R₂",
				result: "Resultado",
			},
		},

		errors: {
			invalidNumber: "Introduce un número válido para {field}.",
			xEqual:
				"x1 y x2 son iguales, por lo que la recta entre ellos queda indefinida (división por cero). Introduce dos valores de x distintos.",
			logDomain:
				"La interpolación logarítmica requiere que x₁, x₂ y x sean todos mayores que cero (el logaritmo no está definido para valores nulos o negativos).",
			logXEqual:
				"x1 y x2 son iguales, por lo que la curva logarítmica entre ellos queda indefinida (división por cero). Introduce dos valores de x distintos.",
			bilinearXEqual:
				"x1 y x2 son iguales, por lo que la cuadrícula tiene ancho cero (división por cero). Introduce dos valores de x distintos.",
			bilinearYEqual:
				"y1 y y2 son iguales, por lo que la cuadrícula tiene altura cero (división por cero). Introduce dos valores de y distintos.",
		},
	},

	explanation: {
		linear: {
			title: "Interpolación lineal",
			intro:
				"Supone una línea recta entre dos puntos. Dados (x₁, y₁) y (x₂, y₂), el valor de y en cualquier x es:",
			formula: "y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁)",
			note:
				"Ideal para consultas en tablas con espaciado uniforme, conversiones de unidades y cualquier relación que sea aproximadamente recta en el rango que te interesa.",
		},
		log: {
			title: "Interpolación logarítmica",
			intro:
				"Supone que y varía linealmente con ln(x) en lugar de con x en sí — útil cuando x abarca varios órdenes de magnitud.",
			formula: "y = y₁ + (ln x − ln x₁) × (y₂ − y₁) / (ln x₂ − ln x₁)",
			note: "Habitual en pH, decibelios, magnitud de Richter y otras mediciones en escala logarítmica.",
		},
		bilinear: {
			title: "Interpolación doble (bilineal)",
			intro:
				"Interpola en dos dimensiones usando cuatro valores conocidos en las esquinas — interpola dos veces en x y, luego, interpola ese resultado en y.",
			formula: "f(x,y) via f(x,y₁), f(x,y₂), then blend by y",
			note: "El método estándar para leer tablas de vapor y otras tablas de referencia de ingeniería en 2D.",
		},
	},

	seoContent: {
		heading: "Todo lo que necesitas para calcular interpolaciones en línea",
		intro:
			"Esta calculadora de interpolación es un solucionador de interpolación gratuito y basado en el navegador, pensado para estudiantes, ingenieros y analistas de datos que necesitan estimar un valor entre dos puntos de datos conocidos sin tener que montar una fórmula en una hoja de cálculo. A diferencia de una herramienta típica de interpolación lineal en línea que solo resuelve un único caso de línea recta, esta calculadora de fórmulas de interpolación cubre tres métodos distintos — lineal, logarítmico y doble (bilineal) — y muestra todo el desarrollo detrás de cada resultado, para que puedas verificar las matemáticas en lugar de fiarte de una respuesta de caja negra.",
		sections: [
			{
				heading: "Una calculadora de interpolación lineal para estimaciones en línea recta",
				body: [
					"El modo de calculadora de interpolación lineal es la forma más habitual de calcular interpolaciones. Le das dos puntos conocidos — (x₁, y₁) y (x₂, y₂) — junto con el valor de x que quieres estimar, y aplica la fórmula estándar de interpolación lineal: y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁). Es el mismo enfoque que se usa para leer entre filas de una tabla de ingeniería, convertir unidades en una escala no estándar o rellenar un dato faltante en un conjunto de datos aproximadamente lineal. Como todo se ejecuta del lado del cliente, funciona como una herramienta de interpolación lineal en línea sin instalación, sin cuenta y sin que ningún dato salga de tu navegador.",
				],
			},
			{
				heading: "Calculadora de interpolación logarítmica para datos de tipo exponencial",
				body: [
					"No todos los conjuntos de datos son una línea recta. Cuando una magnitud cambia de forma multiplicativa en lugar de aditiva — el pH, los decibelios, la magnitud de un terremoto o cualquier medición que abarque varios órdenes de magnitud — una simple calculadora de interpolación lineal te dará una respuesta sesgada. En cambio, el modo de calculadora de interpolación logarítmica asume que y varía linealmente con ln(x), lo que se ajusta mucho mejor a este tipo de curvas. Introduce tus dos pares conocidos de x/y (con valores de x mayores que cero) y la x objetivo, y el solucionador de interpolación recorre el cálculo de los logaritmos naturales, la pendiente en el espacio logarítmico y su aplicación para devolver una estimación realista.",
				],
			},
			{
				heading: "Calculadora de interpolación doble (bilineal) para cuadrículas 2D",
				body: [
					"Algunos problemas no se pueden resolver con un único par de puntos. Las tablas de vapor, las gráficas de propiedades del aire y otras referencias de ingeniería bidimensionales indican un valor en la intersección de una fila y una columna, lo que significa que a menudo necesitas estimar un punto que cae entre cuatro valores de cuadrícula que lo rodean. Precisamente para eso está diseñada la calculadora de interpolación doble (también llamada calculadora de interpolación bilineal). Proporciona los cuatro valores de las esquinas Q₁₁, Q₁₂, Q₂₁ y Q₂₂ junto con tu x e y objetivo, y la herramienta interpola en x dos veces — una en y₁ y otra en y₂ — para luego combinar esos dos resultados en y y producir la estimación final, mostrando cada paso intermedio.",
				],
			},
			{
				heading: "Por qué usar esta calculadora de fórmulas de interpolación",
				body: [
					"La mayoría de las calculadoras que afirman calcular interpolaciones solo devuelven un número final, lo que dificulta detectar un error de escritura en tus datos o entender por qué una respuesta parece incorrecta. Esta calculadora de interpolación en línea muestra cada sustitución, cada pendiente y cada resultado intermedio, y avisa automáticamente cuando tu valor objetivo queda fuera del rango de datos conocidos, etiquetando ese resultado como extrapolado en lugar de interpolado, ya que las estimaciones extrapoladas conllevan más incertidumbre. Admite los tres métodos de interpolación en un mismo lugar, así que no tienes que saltar entre solucionadores separados de interpolación lineal, interpolación logarítmica e interpolación bilineal para distintas partes del mismo proyecto.",
					"Tanto si eres un estudiante revisando la tarea, un ingeniero leyendo una tabla de vapor o cualquier persona que simplemente necesita calcular una interpolación para una estimación puntual, esta herramienta es gratuita, no requiere registro y funciona por completo en tu navegador: nada se sube ni se almacena en un servidor.",
				],
			},
		],
	},

	faq: {
		heading: "Preguntas frecuentes",
		items: [
			{
				q: "¿Qué es una calculadora de interpolación?",
				a: "Una calculadora de interpolación es una herramienta que estima un valor desconocido que se encuentra entre dos (o más) puntos de datos conocidos. En lugar de aplicar la fórmula de interpolación a mano, introduces tus puntos conocidos y el valor de x objetivo (o de x e y), y la calculadora devuelve el resultado estimado — además, esta herramienta muestra todo el desarrollo paso a paso para la interpolación lineal, logarítmica y doble (bilineal).",
			},
			{
				q: "¿Cómo funciona una calculadora de interpolación lineal?",
				a: "Una calculadora de interpolación lineal parte de la idea de que una línea recta une tus dos puntos conocidos, (x1, y1) y (x2, y2). Introduces esos dos puntos junto con el valor de x para el que quieres estimar y, y la calculadora aplica la fórmula de interpolación lineal para averiguar en qué punto proporcional de la recta, entre y1 e y2, cae ese valor de x.",
			},
			{
				q: "¿Cuál es la fórmula de interpolación lineal?",
				a: "La fórmula de interpolación lineal es y = y1 + (x − x1) × (y2 − y1) / (x2 − x1). Calcula la pendiente entre dos puntos conocidos (x1, y1) y (x2, y2) y luego aplica esa pendiente a la diferencia entre x y x1 para estimar y.",
			},
			{
				q: "¿Cuándo debo usar la interpolación lineal?",
				a: "Usa la interpolación lineal cuando tus datos se aproximan a una línea recta en el rango que te interesa — algo habitual en consultas de tablas con valores equiespaciados, conversiones de unidades y estimaciones entre dos mediciones muy próximas. Es el método de interpolación más sencillo y utilizado, pero puede resultar impreciso si la relación real se curva de forma significativa entre tus dos puntos conocidos.",
			},
			{
				q: "¿Qué es la interpolación logarítmica?",
				a: "La interpolación logarítmica es un método que parte de la idea de que y varía linealmente con ln(x) en lugar de con x directamente. Se emplea cuando los datos abarcan varios órdenes de magnitud o cambian de forma multiplicativa en vez de aditiva, ya que un ajuste de línea recta (lineal) aproximaría mal ese tipo de curva.",
			},
			{
				q: "¿Cuándo debo usar interpolación logarítmica en lugar de lineal?",
				a: "Usa la interpolación logarítmica cuando tus datos crecen o decrecen de forma multiplicativa y no aditiva — algo habitual en escalas de pH, intensidad de sonido en decibelios, magnitud de terremotos y algunos datos de crecimiento financiero o biológico. Si al representar tus datos en una escala logarítmica de x se ven como una línea recta, la interpolación logarítmica normalmente se ajustará mejor que la lineal.",
			},
			{
				q: "¿Qué es una calculadora de interpolación doble (bilineal)?",
				a: "Una calculadora de interpolación doble (bilineal) estima un valor a partir de una cuadrícula 2D de puntos conocidos, en lugar de solo dos. Proporcionas cuatro valores conocidos en las esquinas — Q11, Q12, Q21 y Q22 — junto con tus valores objetivo de x e y, y la calculadora interpola en ambas dimensiones para devolver el resultado estimado.",
			},
			{
				q: "¿Cómo funciona la interpolación doble (bilineal)?",
				a: "La interpolación doble (bilineal) funciona interpolando dos veces en una dirección y una vez en la otra. Primero interpola en x en y1 y de nuevo en y2 para obtener dos resultados intermedios, y luego interpola esos dos resultados en y para producir la estimación final — combinando en la práctica los cuatro valores de las esquinas según lo cerca que esté el punto objetivo de cada uno.",
			},
			{
				q: "¿Para qué se usa la interpolación doble?",
				a: "La interpolación doble se usa para leer un valor a partir de una cuadrícula 2D de puntos conocidos — por ejemplo, leer una propiedad (como la entalpía) en una tabla de vapor donde tanto la presión como la temperatura caen entre las filas y columnas listadas. Funciona interpolando dos veces: primero en x y luego en y.",
			},
			{
				q: "¿Puede la calculadora de interpolación mostrar los resultados paso a paso?",
				a: "Sí. Esta calculadora muestra cada paso del cálculo — la sustitución de tus valores, el cálculo de la pendiente (o de la pendiente logarítmica, en la interpolación logarítmica) y su aplicación para llegar al resultado final — de modo que puedas verificar las matemáticas por ti mismo en lugar de ver únicamente un número final.",
			},
			{
				q: "¿Cuál es la diferencia entre interpolación y extrapolación?",
				a: "La interpolación estima un valor que cae entre dos puntos de datos conocidos. La extrapolación estima un valor fuera de ese rango. La extrapolación usa la misma fórmula, pero es intrínsecamente menos fiable, ya que asumes que la tendencia continúa más allá de los datos que realmente tienes.",
			},
			{
				q: "¿Por qué la calculadora indica 'extrapolado' en lugar de dar un error?",
				a: "Un valor objetivo de x fuera de tus dos puntos conocidos sigue siendo matemáticamente calculable — la recta o la curva simplemente se prolonga más allá de los datos que le diste. La etiqueta es una advertencia, no un error: las matemáticas son correctas, pero la confianza en el resultado disminuye cuanto más te alejas de tu rango conocido.",
			},
			{
				q: "¿Por qué obtengo un error cuando x1 es igual a x2?",
				a: "La fórmula de interpolación divide entre (x2 − x1). Si x1 y x2 son iguales, eso implica una división por cero, que es matemáticamente indefinida. Necesitas dos valores de x distintos para definir una recta (o curva) sobre la que interpolar.",
			},
		],
	},

	footer: {
		copyright: "© {year} Interpolation Calculator Online. Todos los cálculos se realizan en tu navegador.",
		disclaimer: "Creada para estimaciones rápidas y verificables — no sustituye el criterio profesional de ingeniería.",
		navAbout: "Acerca de",
		navPrivacy: "Política de privacidad",
		navTerms: "Términos y condiciones",
		navContact: "Contacto",
	},

	legal: {
		backToHome: "Volver a la calculadora",
		lastUpdated: "Última actualización: {date}",

		about: {
			metaTitle: "Acerca de nosotros – Interpolation Calculator Online",
			metaDescription:
				"Conoce Interpolation Calculator Online, una herramienta gratuita basada en el navegador para interpolación lineal, logarítmica y bilineal con resultados paso a paso.",
			heading: "Acerca de Interpolation Calculator Online",
			intro:
				"Interpolation Calculator Online es una herramienta gratuita, basada en el navegador, creada para estimar valores entre puntos de datos conocidos de forma rápida, transparente y precisa, sin necesidad de una hoja de cálculo ni de una fórmula de un libro de texto a mano.",
			sections: [
				{
					heading: "Por qué la creamos",
					body: [
						"La interpolación aparece en todas partes: al leer tablas de ingeniería, convertir entre escalas de medición, completar puntos de datos faltantes y estimar valores a partir de tablas de vapor o gráficos de referencia. La mayoría de las calculadoras en línea solo devuelven un número final, lo que dificulta detectar un error o entender cómo se obtuvo la respuesta.",
						"Creamos esta calculadora para mostrar todo el procedimiento —cada sustitución, cálculo de pendiente y resultado intermedio— para que puedas verificar las operaciones por ti mismo, ya seas un estudiante revisando su tarea o un ingeniero comprobando la consulta de una tabla.",
					],
				},
				{
					heading: "Qué hace esta herramienta",
					body: [
						"Este sitio ofrece tres métodos de interpolación en un solo lugar: interpolación lineal para estimaciones en línea recta, interpolación logarítmica para datos que abarcan varios órdenes de magnitud e interpolación doble (bilineal) para cuadrículas bidimensionales como las tablas de vapor. Cada cálculo se ejecuta por completo en tu navegador: nada de lo que introduces se sube a un servidor ni se almacena en ningún lugar.",
					],
				},
				{
					heading: "Para quién es",
					body: [
						"Estudiantes, ingenieros, científicos y cualquier persona que ocasionalmente necesite calcular un valor interpolado sin tener que configurar una hoja de cálculo. La herramienta es gratuita, no requiere cuenta y funciona tanto en computadoras de escritorio como en dispositivos móviles.",
					],
				},
			],
		},

		privacy: {
			metaTitle: "Política de privacidad – Interpolation Calculator Online",
			metaDescription:
				"Lee la política de privacidad de Interpolation Calculator Online. No recopilamos ni almacenamos los números que introduces: todos los cálculos se realizan localmente en tu navegador.",
			heading: "Política de privacidad",
			intro:
				"Esta Política de privacidad explica qué información recopila Interpolation Calculator Online (\"nosotros\", \"este sitio\") cuando utilizas este sitio web y cómo se usa.",
			sections: [
				{
					heading: "Datos introducidos en la calculadora",
					body: [
						"Los números que introduces en la calculadora de interpolación se procesan por completo dentro de tu navegador mediante JavaScript del lado del cliente. Nunca se transmiten a nuestros servidores, se almacenan en una base de datos ni se comparten con terceros. Cerrar o actualizar la página borra todo lo que hayas introducido.",
					],
				},
				{
					heading: "Analítica y cookies",
					body: [
						"Este sitio puede utilizar herramientas de analítica respetuosas con la privacidad para comprender patrones de tráfico agregados (como qué páginas se visitan y de qué país provienen los visitantes), con el fin de mejorar el sitio. Estas herramientas no rastrean los datos que introduces en la calculadora ni crean un perfil individual sobre ti. Si se utilizan cookies con fines analíticos o publicitarios, tu navegador normalmente te permitirá bloquearlas o borrarlas en cualquier momento desde su configuración.",
					],
				},
				{
					heading: "Servicios de terceros",
					body: [
						"Podemos utilizar servicios de terceros (como proveedores de alojamiento, redes de distribución de contenido o proveedores de analítica) para operar este sitio. Estos proveedores pueden recopilar información técnica estándar, como tu dirección IP y tipo de navegador, como parte de la entrega del sitio web. No controlamos las prácticas de privacidad de los servicios de terceros y te animamos a revisar sus propias políticas de privacidad.",
					],
				},
				{
					heading: "Privacidad de los menores",
					body: [
						"Este sitio no recopila conscientemente información personal de menores. La calculadora en sí no requiere ni solicita ninguna información personal para funcionar.",
					],
				},
				{
					heading: "Cambios en esta política",
					body: [
						"Podemos actualizar esta Política de privacidad de vez en cuando para reflejar cambios en el sitio o en la legislación aplicable. Cualquier cambio se publicará en esta página.",
					],
				},
				{
					heading: "Contáctanos",
					body: [
						"Si tienes preguntas sobre esta Política de privacidad, visita nuestra página de Contacto.",
					],
				},
			],
		},

		terms: {
			metaTitle: "Términos y condiciones – Interpolation Calculator Online",
			metaDescription:
				"Términos y condiciones de uso de Interpolation Calculator Online, una calculadora de interpolación gratuita ofrecida tal cual con fines informativos y educativos.",
			heading: "Términos y condiciones",
			intro:
				"Al acceder o utilizar Interpolation Calculator Online, aceptas los siguientes términos. Si no estás de acuerdo con estos términos, no utilices este sitio.",
			sections: [
				{
					heading: "Uso de este sitio",
					body: [
						"Interpolation Calculator Online se ofrece de forma gratuita para uso personal, educativo y de referencia profesional. Puedes usar la calculadora para estimar valores interpolados y extrapolados a partir de tus propios datos.",
					],
				},
				{
					heading: "Sin garantía",
					body: [
						"Esta herramienta se ofrece \"tal cual\" y \"según disponibilidad\", sin garantías de ningún tipo, ya sean expresas o implícitas, incluidas, entre otras, las de exactitud, fiabilidad o idoneidad para un propósito particular. Aunque procuramos ofrecer resultados matemáticamente correctos, no garantizamos que los cálculos estén libres de errores ni que sean ininterrumpidos.",
					],
				},
				{
					heading: "No constituye asesoramiento profesional",
					body: [
						"Esta calculadora está pensada como una herramienta de referencia y educativa de uso general. No sustituye el criterio profesional de ingeniería, científico o financiero. Eres responsable de verificar de forma independiente cualquier resultado antes de basarte en él para el diseño de ingeniería, decisiones críticas para la seguridad, entregas académicas o cualquier otro uso importante.",
					],
				},
				{
					heading: "Limitación de responsabilidad",
					body: [
						"En la máxima medida permitida por la ley, no seremos responsables de daños directos, indirectos, incidentales o consecuentes derivados del uso o de la imposibilidad de uso de este sitio web o de sus resultados de cálculo.",
					],
				},
				{
					heading: "Propiedad intelectual",
					body: [
						"El diseño, la disposición y el contenido original de este sitio son propiedad de Interpolation Calculator Online. No puedes copiar, volver a publicar ni redistribuir partes sustanciales del sitio sin autorización.",
					],
				},
				{
					heading: "Cambios en estos términos",
					body: [
						"Podemos actualizar estos Términos y condiciones de vez en cuando. El uso continuado del sitio después de que se publiquen los cambios constituye la aceptación de los términos actualizados.",
					],
				},
			],
		},

		contact: {
			metaTitle: "Contáctanos – Interpolation Calculator Online",
			metaDescription:
				"Ponte en contacto con el equipo de Interpolation Calculator Online con preguntas, comentarios o informes de errores.",
			heading: "Contáctanos",
			intro:
				"¿Tienes una pregunta, encontraste un error o quieres sugerir una función? Nos gustaría saber de ti. Escríbenos a la dirección de correo electrónico que aparece abajo.",
			emailLabel: "Correo electrónico:",
			email: "support@interpcalc.com",
			sections: [
				{
					heading: "Comentarios e informes de errores",
					body: [
						"Si detectas un cálculo que parece incorrecto, incluye los datos exactos que usaste y el modo de interpolación (lineal, logarítmica o bilineal) para que podamos reproducir e investigar el problema.",
					],
				},
				{
					heading: "Tiempo de respuesta",
					body: [
						"Procuramos responder a los mensajes en unos pocos días hábiles.",
					],
				},
			],
		},
	},

	errorPage: {
		notFound: {
			metaTitle: "Página no encontrada (404) – Interpolation Calculator Online",
			metaDescription: "La página que buscas no existe o puede haber sido movida.",
			code: "404",
			heading: "Página no encontrada",
			body: "La página que buscas no existe o puede haber sido movida. Comprueba la URL o vuelve a la calculadora.",
		},
		serverError: {
			metaTitle: "Error del servidor (500) – Interpolation Calculator Online",
			metaDescription: "Algo salió mal de nuestro lado. Por favor, inténtalo de nuevo en un momento.",
			code: "500",
			heading: "Algo salió mal",
			body: "Se produjo un error inesperado al cargar esta página. Inténtalo de nuevo en un momento o vuelve a la calculadora.",
		},
		backToHome: "Volver a la calculadora",
		contactSupport: "Contactar con soporte",
	},
};
