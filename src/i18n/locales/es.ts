import type { Dictionary } from "../dictionary";

export const es: Dictionary = {
	meta: {
		title: "Calculadora de interpolación – Lineal, logarítmica y bilineal, paso a paso",
		description:
			"Estima valores entre puntos de datos conocidos mediante interpolación lineal, logarítmica o doble (bilineal). Cada resultado muestra todo el desarrollo, con ejemplos resueltos y orientación para elegir el método.",
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
			"Introduce los puntos de datos que conoces y obtén una estimación del que no conoces, mediante interpolación lineal, logarítmica o doble (bilineal). Se muestra cada sustitución y cada valor intermedio, de modo que puedas comprobar la respuesta en lugar de darla por buena.",
	},

	calculator: {
		tablistLabel: "Modo de interpolación",
		tabLinear: "Lineal",
		tabLog: "Logarítmica",
		tabBilinear: "Doble (bilineal)",

		linearIntro: "Introduce dos puntos conocidos y, luego, el valor de x para el que quieres estimar y.",
		logIntro:
			"Para datos en los que y cambia linealmente con ln(x), como valores que abarcan varios órdenes de magnitud. Todos los valores de x deben ser mayores que cero.",
		bilinearIntro:
			"Estima un valor dentro de una tabla 2D a partir de los cuatro valores conocidos en las esquinas de la celda que lo rodea (por ejemplo, una tabla de vapor).",

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
			title: "Fórmula de interpolación lineal",
			intro:
				"Supone una línea recta entre dos puntos. Dados (x₁, y₁) y (x₂, y₂), el valor de y en cualquier x es:",
			formula: "y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁)",
			note:
				"Ideal para consultas en tablas con espaciado uniforme, conversiones de unidades y cualquier relación que sea aproximadamente recta en el rango que te interesa.",
		},
		log: {
			title: "Fórmula de interpolación logarítmica",
			intro:
				"Supone que y varía linealmente con ln(x) en lugar de con x en sí — útil cuando x abarca varios órdenes de magnitud.",
			formula: "y = y₁ + (ln x − ln x₁) × (y₂ − y₁) / (ln x₂ − ln x₁)",
			note: "Habitual en pH, decibelios, magnitud de Richter y otras mediciones en escala logarítmica.",
		},
		bilinear: {
			title: "Fórmula de interpolación doble (bilineal)",
			intro:
				"Primero se interpola en x a lo largo de las dos filas conocidas para obtener R₁ (en y₁) y R₂ (en y₂); después se interpola en y entre esos dos resultados:",
			formula: "f(x,y) = R₁ + (y − y₁) × (R₂ − R₁) / (y₂ − y₁)",
			note: "El método estándar para leer tablas de vapor y otras tablas de referencia de ingeniería en 2D.",
		},
	},

	seoContent: {
		heading: "Cómo funciona la interpolación, con ejemplos resueltos",
		intro:
			"La interpolación estima un valor desconocido que se sitúa entre valores que ya conoces. Es la forma de leer entre las filas de una tabla de ingeniería, rellenar un hueco en datos medidos o convertir una lectura de una escala que solo aparece en ciertos puntos. El método adecuado depende de cómo se comporten tus datos entre esos puntos conocidos. Las secciones siguientes explican los tres métodos que admite esta calculadora, desarrollan un ejemplo de cada uno que puedes reproducir en la calculadora de arriba y cubren las causas de error más habituales.",
		sections: [
			{
				heading: "Interpolación lineal: ejemplo resuelto",
				body: [
					"La interpolación lineal supone que los datos siguen una línea recta entre dos puntos conocidos (x₁, y₁) y (x₂, y₂). La fórmula es y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁): halla la pendiente entre los dos puntos y luego avanza a lo largo de esa pendiente desde x₁ hasta la x objetivo.",
					"Ejemplo: una tabla indica y = 12.4 en x = 20 e y = 18.9 en x = 30, y necesitas el valor en x = 24. La pendiente es (18.9 − 12.4) / (30 − 20) = 0.65 por unidad de x. El objetivo está 4 unidades por delante de x₁, así que y = 12.4 + 4 × 0.65 = 15.0. Introduce x₁ = 20, y₁ = 12.4, x₂ = 30, y₂ = 18.9 y x = 24 en la pestaña Lineal para ver los mismos pasos.",
				],
			},
			{
				heading: "Interpolación logarítmica: ejemplo resuelto",
				body: [
					"Algunas magnitudes cambian una cantidad constante cada vez que x se multiplica por un factor fijo, en lugar de cada vez que x aumenta en una cantidad fija. El nivel de sonido en decibelios, el pH y la magnitud de los terremotos se comportan así. Para este tipo de datos, y es una línea recta frente a ln(x), de modo que la interpolación logarítmica aplica la fórmula lineal a ln(x) en lugar de a x.",
					"Ejemplo: una intensidad sonora de 1 µW/m² corresponde a 60 dB y 100 µW/m² corresponde a 80 dB. ¿Cuál es el nivel en 10 µW/m²? La interpolación logarítmica da 60 + (ln 10 − ln 1) × (80 − 60) / (ln 100 − ln 1) = 70 dB, que es exactamente correcto, porque 10 está un factor de diez por encima de 1 y un factor de diez por debajo de 100. La interpolación lineal simple devolvería unos 61.8 dB, porque trata al 10 como si estuviera solo al 9 % del camino entre 1 y 100. Usar el método equivocado con datos logarítmicos puede producir errores tan grandes como este.",
				],
			},
			{
				heading: "Interpolación doble (bilineal): ejemplo resuelto",
				body: [
					"Las tablas bidimensionales, como las tablas de vapor sobrecalentado, indican un valor para cada combinación de una variable de fila y una variable de columna. Cuando ambos datos de entrada caen entre valores listados, necesitas las cuatro entradas de la tabla que los rodean: Q₁₁ = f(x₁, y₁), Q₂₁ = f(x₂, y₁), Q₁₂ = f(x₁, y₂) y Q₂₂ = f(x₂, y₂). La interpolación bilineal interpola primero en x a lo largo de cada una de las dos filas y luego interpola en y entre esos dos resultados.",
					"Ejemplo: con x₁ = 10, x₂ = 20, y₁ = 100 e y₂ = 200, la tabla da Q₁₁ = 50, Q₂₁ = 70, Q₁₂ = 60 y Q₂₂ = 90. Para estimar f(14, 130), interpola primero a lo largo de y₁: R₁ = 50 + (14 − 10) × (70 − 50) / 10 = 58. Después a lo largo de y₂: R₂ = 60 + 0.4 × (90 − 60) = 72. Por último, interpola en y: f = 58 + (130 − 100) × (72 − 58) / 100 = 62.2. Interpolar primero en y y luego en x da el mismo 62.2.",
				],
			},
			{
				heading: "Cómo elegir un método",
				body: [
					"Usa la interpolación lineal cuando los puntos conocidos estén próximos entre sí y los datos parezcan aproximadamente rectos entre ellos. Esto cubre la mayoría de las consultas en tablas. Usa la interpolación logarítmica cuando los valores de x abarquen un rango amplio (por ejemplo, de 1 a 1000) y los datos se representen como una línea recta en un eje x logarítmico. Usa la interpolación doble siempre que el valor dependa de dos entradas a la vez y estés leyendo desde una cuadrícula.",
					"Si tienes dudas, representa unos cuantos valores vecinos de la tabla. Los puntos que caen sobre una línea recta en ejes normales convienen a la interpolación lineal. Los puntos que solo se enderezan cuando x se representa en escala logarítmica convienen a la interpolación logarítmica.",
				],
			},
			{
				heading: "Precisión y errores frecuentes",
				body: [
					"La interpolación lineal solo es exacta cuando los datos son realmente una línea recta. Para una función curva f, el error es como máximo (x₂ − x₁)² / 8 multiplicado por el mayor valor de |f″| entre los dos puntos. En la práctica, esto significa que reducir a la mitad el espaciado entre tus puntos conocidos recorta el error en el peor de los casos a alrededor de una cuarta parte. Cuando una tabla ofrece filas más finas cerca de tu objetivo, úsalas.",
					"Los errores más frecuentes son confundir qué valor corresponde a x₁ y cuál a x₂, mezclar unidades (por ejemplo, kPa en una fila y bar en otra) y leer Q₁₂ y Q₂₁ de las celdas equivocadas de una tabla 2D. Estimar fuera del rango conocido también es arriesgado. La calculadora etiqueta esos resultados como extrapolados porque la línea recta o la curva supuesta puede no continuar más allá de tus datos.",
				],
			},
		],
	},

	faq: {
		heading: "Preguntas frecuentes",
		items: [
			{
				q: "¿Qué es la interpolación?",
				a: "La interpolación consiste en estimar un valor desconocido que se sitúa entre dos o más puntos de datos conocidos, suponiendo que una forma sencilla, como una línea recta, los conecta. Se usa habitualmente para leer valores entre las filas listadas de tablas de referencia y para rellenar huecos en datos medidos.",
			},
			{
				q: "¿Cuál es la fórmula de la interpolación lineal?",
				a: "y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁). La fracción (y₂ − y₁) / (x₂ − x₁) es la pendiente de la recta que pasa por los dos puntos conocidos, y multiplicarla por (x − x₁) indica cuánto se ha desplazado y desde y₁ al llegar a x.",
			},
			{
				q: "¿Cuándo es suficientemente precisa la interpolación lineal?",
				a: "Cuando los puntos conocidos están próximos entre sí y los datos se aproximan a una línea recta entre ellos. En una relación curva, el error crece con el cuadrado del espaciado entre puntos, así que usar las filas de tabla más cercanas disponibles suele importar más que la elección del método.",
			},
			{
				q: "¿Cuándo debo usar la interpolación logarítmica en lugar de la lineal?",
				a: "Úsala cuando y cambia aproximadamente la misma cantidad cada vez que x se multiplica por un factor constante, por ejemplo los decibelios frente a la intensidad sonora, o el pH frente a la concentración de iones de hidrógeno. Si tus datos forman una línea recta al representar x en un eje logarítmico, la interpolación logarítmica se ajustará mejor que la lineal.",
			},
			{
				q: "¿Por qué x debe ser mayor que cero en la interpolación logarítmica?",
				a: "La interpolación logarítmica trabaja con ln(x), y el logaritmo natural solo está definido para números positivos. Si tus valores de x incluyen cero o negativos, los datos no pueden estar en una escala logarítmica en x, y la interpolación lineal es el método apropiado.",
			},
			{
				q: "¿Cómo funciona la interpolación doble (bilineal)?",
				a: "Usa los cuatro valores conocidos en las esquinas de la celda de la tabla que contiene tu punto objetivo. Interpola en x a lo largo de la fila inferior (dando R₁) y de la fila superior (dando R₂), y luego interpola entre R₁ y R₂ en y. El resultado es una media ponderada de las cuatro esquinas, con mayor peso para las esquinas más cercanas.",
			},
			{
				q: "¿Importa si interpolo primero en x o en y?",
				a: "No. En la interpolación bilineal, hacerlo primero en x y luego en y da exactamente el mismo resultado que hacerlo primero en y y luego en x. El ejemplo resuelto de arriba da 62.2 en cualquier orden.",
			},
			{
				q: "¿Cuál es la diferencia entre interpolación y extrapolación?",
				a: "La interpolación estima un valor dentro del rango de tus puntos conocidos; la extrapolación estima uno fuera de él. La fórmula es la misma, así que la calculadora sigue devolviendo un número, pero etiqueta el resultado como extrapolado porque no hay datos que confirmen que la tendencia continúa más allá de tus puntos conocidos.",
			},
			{
				q: "¿Por qué obtengo un error cuando x₁ es igual a x₂?",
				a: "Todas las fórmulas de aquí dividen entre (x₂ − x₁), o entre (ln x₂ − ln x₁) en el modo logarítmico. Cuando los dos valores de x son iguales, esto es una división por cero, y dos puntos con la misma x no pueden definir una recta. Lo mismo aplica a y₁ e y₂ en la interpolación doble.",
			},
			{
				q: "¿Qué precisión tienen los resultados?",
				a: "Los cálculos usan aritmética estándar de coma flotante de doble precisión. Para facilitar la lectura, los valores intermedios de los pasos se redondean a seis decimales y el resultado final se muestra con 12 cifras significativas. Este redondeo solo afecta a lo que se muestra; cada paso se calcula a partir de los valores sin redondear.",
			},
			{
				q: "¿Los números que introduzco se envían o almacenan en algún sitio?",
				a: "No. Todos los cálculos se ejecutan en tu navegador y tus datos nunca se envían a un servidor. Actualizar o cerrar la página los borra.",
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
			metaTitle: "Acerca de – Interpolation Calculator",
			metaDescription:
				"Por qué existe esta calculadora de interpolación, cómo se comprueban sus resultados y quién la mantiene.",
			heading: "Acerca de Interpolation Calculator",
			intro:
				"Interpolation Calculator es un proyecto independiente que estima valores entre puntos de datos conocidos mediante interpolación lineal, logarítmica y doble (bilineal). Muestra cada paso del cálculo, de modo que puedas comprobar la respuesta en lugar de darla por buena.",
			sections: [
				{
					heading: "Por qué existe este sitio",
					body: [
						"La interpolación aparece constantemente en los estudios y en la práctica de la ingeniería: al leer tablas de vapor y de propiedades, al trabajar con gráficos de calibración o al rellenar un hueco en datos medidos. La aritmética es sencilla, pero también es fácil equivocarse al hacerla a mano. Los descuidos habituales incluyen intercambiar x₁ y x₂, leer la celda equivocada de una tabla 2D o aplicar una estimación en línea recta a datos que son logarítmicos.",
						"La mayoría de las herramientas en línea solo devuelven un número final, lo que no deja forma de detectar un error de entrada. Esta calculadora muestra la fórmula, tus valores sustituidos, la pendiente y cada resultado intermedio, de modo que cada paso pueda compararse con un libro de texto o con un cálculo a mano.",
					],
				},
				{
					heading: "Cómo se comprueban los resultados",
					body: [
						"Los tres métodos usan las fórmulas estándar de los libros de texto descritas en la página de inicio. Los resultados se han comprobado con cálculos a mano, incluidos los ejemplos resueltos de la página de inicio. La calculadora también gestiona los casos límite de forma explícita, devolviendo un mensaje claro en lugar de un número sin sentido cuando los valores de x son iguales o cuando una entrada logarítmica es cero o negativa. Cuando un objetivo cae fuera del rango, el resultado se etiqueta como extrapolado en lugar de mostrarse sin comentario.",
					],
				},
				{
					heading: "Privacidad por diseño",
					body: [
						"Todos los cálculos se ejecutan en tu navegador. Los números que introduces nunca se envían a un servidor, así que la calculadora también funciona con datos confidenciales o no publicados. La Política de privacidad explica qué recopila el sitio, como la analítica estándar y las cookies publicitarias.",
					],
				},
				{
					heading: "Comentarios",
					body: [
						"Si encuentras un resultado que parece incorrecto, una explicación confusa o un método que te gustaría que se añadiera, ponte en contacto a través de la página de Contacto. Los informes que incluyen los datos exactos que usaste son los más rápidos de investigar y corregir.",
					],
				},
			],
		},

		privacy: {
			metaTitle: "Política de privacidad – Interpolation Calculator",
			metaDescription:
				"Qué información recopila interpcalc.com, cómo se usan las cookies de Google Analytics y Google AdSense, y cómo excluirte. Los datos de la calculadora nunca salen de tu navegador.",
			heading: "Política de privacidad",
			intro:
				"Esta Política de privacidad explica qué información recopila interpcalc.com (\"este sitio\", \"nosotros\") cuando lo visitas, cómo se utiliza y qué opciones tienes.",
			sections: [
				{
					heading: "Datos introducidos en la calculadora",
					body: [
						"Los números que introduces en la calculadora se procesan por completo dentro de tu navegador mediante JavaScript del lado del cliente. Nunca se envían a nuestros servidores, se almacenan en una base de datos ni se comparten con nadie. Actualizar o cerrar la página los borra.",
					],
				},
				{
					heading: "Analítica",
					body: [
						"Este sitio usa Google Analytics para entender el uso agregado, como qué páginas se visitan, el país aproximado del que provienen los visitantes y el tipo de dispositivo y navegador utilizados. Google Analytics usa cookies y recopila datos técnicos estándar, como tu dirección IP, para elaborar estos informes. No recibe los valores que introduces en la calculadora. Puedes impedir que Google Analytics recopile datos instalando el complemento de inhabilitación para navegadores de Google Analytics (tools.google.com/dlpage/gaoptout).",
					],
				},
				{
					heading: "Publicidad",
					body: [
						"Este sitio usa Google AdSense para mostrar anuncios. Los proveedores externos, incluido Google, usan cookies para publicar anuncios basados en tus visitas anteriores a este sitio web y a otros sitios web. El uso de cookies publicitarias por parte de Google le permite, a él y a sus socios, mostrarte anuncios basados en tus visitas a este y a otros sitios de internet.",
						"Puedes excluirte de la publicidad personalizada visitando la Configuración de anuncios de Google (adssettings.google.com). También puedes excluirte del uso de cookies para publicidad personalizada por parte de algunos proveedores externos en www.aboutads.info. Para más información sobre cómo usa Google los datos, consulta policies.google.com/technologies/partner-sites.",
						"Es posible que a los visitantes del Espacio Económico Europeo, el Reino Unido y Suiza se les pida su consentimiento antes de instalar cookies de publicidad personalizada, y pueden cambiar esa elección en cualquier momento.",
					],
				},
				{
					heading: "Cookies y almacenamiento local",
					body: [
						"Aparte de las cookies de analítica y publicidad descritas arriba, el sitio guarda una única preferencia en el almacenamiento local de tu navegador: tu elección de tema claro u oscuro. Puedes bloquear o eliminar las cookies y el almacenamiento local en cualquier momento a través de la configuración de tu navegador. La calculadora seguirá funcionando.",
					],
				},
				{
					heading: "Alojamiento",
					body: [
						"El sitio está alojado en Cloudflare, que procesa datos de solicitud estándar (como la dirección IP y el tipo de navegador) para servir las páginas y proteger el sitio frente a abusos.",
					],
				},
				{
					heading: "Privacidad de los menores",
					body: [
						"Este sitio no está dirigido a menores de 13 años y no recopila conscientemente información personal de ellos. La calculadora no solicita ningún tipo de información personal.",
					],
				},
				{
					heading: "Cambios en esta política",
					body: [
						"Podemos actualizar esta Política de privacidad cuando cambie el sitio o la legislación aplicable. Las actualizaciones se publicarán en esta página.",
					],
				},
				{
					heading: "Contacto",
					body: [
						"Si tienes alguna pregunta sobre esta Política de privacidad, escribe a code.sudeepto@gmail.com.",
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
			email: "code.sudeepto@gmail.com",
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
