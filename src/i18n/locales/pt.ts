import type { Dictionary } from "../dictionary";

export const pt: Dictionary = {
	meta: {
		title: "Calculadora de Interpolação Online — Linear, Logarítmica e Bilinear",
		description:
			"Calculadora de interpolação online gratuita com resolução passo a passo. Suporta interpolação linear, logarítmica e dupla (bilinear), com identificação automática de extrapolação.",
	},

	header: {
		brand: "Calculadora de Interpolação",
		navCalculator: "Calculadora",
		navFaq: "Perguntas frequentes",
		themeToggleLabel: "Alternar modo escuro",
		languageLabel: "Idioma",
		skipToContent: "Ir para o conteúdo",
	},

	hero: {
		eyebrow: "Gratuita · Sem registo · Funciona no seu navegador",
		heading: "Calculadora de interpolação, com os passos apresentados",
		subheading:
			"Estime um valor entre dois pontos conhecidos e veja exatamente como a resposta foi obtida — linear, logarítmica ou numa grelha 2D (bilinear).",
	},

	calculator: {
		tablistLabel: "Modo de interpolação",
		tabLinear: "Linear",
		tabLog: "Logarítmica",
		tabBilinear: "Dupla (bilinear)",

		linearIntro: "Introduza dois pontos conhecidos e, em seguida, o valor de x para o qual quer estimar y.",
		logIntro:
			"Para dados que seguem uma curva logarítmica ao longo de x. Todos os valores de x têm de ser superiores a zero.",
		bilinearIntro:
			"Interpole numa grelha 2D — quatro valores conhecidos nos cantos de um retângulo (por exemplo, tabelas de vapor).",

		labelX1: "x₁",
		labelY1: "y₁",
		labelX2: "x₂",
		labelY2: "y₂",
		labelXTarget: "x (alvo)",
		labelYTarget: "y (alvo)",
		labelQ11: "Q₁₁ = f(x₁,y₁)",
		labelQ12: "Q₁₂ = f(x₁,y₂)",
		labelQ21: "Q₂₁ = f(x₂,y₁)",
		labelQ22: "Q₂₂ = f(x₂,y₂)",

		resultEyebrow: "Resultado",
		resultEmpty: "Introduza valores para ver o resultado interpolado e a resolução passo a passo.",
		resultInterpolated: "Interpolado",
		resultExtrapolated: "Extrapolado",
		extrapolationNote:
			"O valor alvo encontra-se fora do intervalo dos seus dados conhecidos, por isso trata-se de uma extrapolação e não de uma interpolação. As estimativas extrapoladas são menos fiáveis, sobretudo se a relação subjacente não for verdadeiramente linear/logarítmica ao longo desse intervalo.",

		steps: {
			linear: {
				formula: "Fórmula",
				substitute: "Substitua os seus valores",
				computeSlope: "Calcule o declive",
				applySlope: "Aplique o declive ao desvio a partir de x₁",
				takeLogs: "",
				computeLogSlope: "",
				interpolateXAtY1: "",
				interpolateXAtY2: "",
				interpolateY: "",
				result: "Resultado",
			},
			log: {
				formula: "Fórmula",
				substitute: "Substitua os seus valores",
				computeSlope: "",
				applySlope: "",
				takeLogs: "Calcule os logaritmos naturais dos valores de x",
				computeLogSlope: "Calcule o declive no espaço logarítmico",
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
				interpolateXAtY1: "Interpole em x com y = y₁",
				interpolateXAtY2: "Interpole em x com y = y₂",
				interpolateY: "Interpole em y entre R₁ e R₂",
				result: "Resultado",
			},
		},

		errors: {
			invalidNumber: "Introduza um número válido para {field}.",
			xEqual:
				"x1 e x2 são iguais, pelo que a reta entre eles fica indefinida (divisão por zero). Introduza dois valores de x distintos.",
			logDomain:
				"A interpolação logarítmica exige que x₁, x₂ e x sejam todos superiores a zero (o logaritmo é indefinido para valores nulos ou negativos).",
			logXEqual:
				"x1 e x2 são iguais, pelo que a curva logarítmica entre eles fica indefinida (divisão por zero). Introduza dois valores de x distintos.",
			bilinearXEqual:
				"x1 e x2 são iguais, pelo que a grelha tem largura nula (divisão por zero). Introduza dois valores de x distintos.",
			bilinearYEqual:
				"y1 e y2 são iguais, pelo que a grelha tem altura nula (divisão por zero). Introduza dois valores de y distintos.",
		},
	},

	explanation: {
		linear: {
			title: "Interpolação linear",
			intro:
				"Pressupõe uma reta entre dois pontos. Dados (x₁, y₁) e (x₂, y₂), o valor de y para qualquer x é:",
			formula: "y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁)",
			note:
				"Ideal para consultas em tabelas com espaçamento uniforme, conversões de unidades e qualquer relação que seja aproximadamente linear no intervalo que lhe interessa.",
		},
		log: {
			title: "Interpolação logarítmica",
			intro:
				"Pressupõe que y varia linearmente com ln(x) em vez do próprio x — útil quando x abrange várias ordens de grandeza.",
			formula: "y = y₁ + (ln x − ln x₁) × (y₂ − y₁) / (ln x₂ − ln x₁)",
			note: "Comum para pH, decibéis, magnitude de Richter e outras medições em escala logarítmica.",
		},
		bilinear: {
			title: "Interpolação dupla (bilinear)",
			intro:
				"Interpola em duas dimensões utilizando quatro valores conhecidos nos cantos — interpole em x duas vezes e, depois, interpole esse resultado em y.",
			formula: "f(x,y) via f(x,y₁), f(x,y₂), then blend by y",
			note: "O método padrão para ler tabelas de vapor e outras tabelas de referência de engenharia 2D.",
		},
	},

	seoContent: {
		heading: "Tudo o que precisa para calcular interpolação online",
		intro:
			"Esta calculadora de interpolação é um solucionador de interpolação gratuito e baseado no navegador, criado para estudantes, engenheiros e analistas de dados que precisam estimar um valor entre dois pontos de dados conhecidos sem montar uma fórmula numa folha de cálculo. Ao contrário de uma ferramenta típica de interpolação linear online, que lida apenas com um único caso de linha reta, esta calculadora de fórmulas de interpolação abrange três métodos distintos — linear, logarítmico e duplo (bilinear) — e mostra todo o desenvolvimento por detrás de cada resultado, para que possa verificar as contas em vez de simplesmente confiar numa resposta de caixa-preta.",
		sections: [
			{
				heading: "Uma calculadora de interpolação linear para estimativas em linha reta",
				body: [
					"O modo de calculadora de interpolação linear é a forma mais comum de calcular interpolação. Forneça-lhe dois pontos conhecidos — (x₁, y₁) e (x₂, y₂) — mais o valor de x que pretende estimar, e ela aplica a fórmula padrão de interpolação linear: y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁). Esta é a mesma abordagem usada para ler entre as linhas de uma tabela de engenharia, converter unidades numa escala não padronizada ou preencher um ponto de dados em falta num conjunto de dados aproximadamente linear. Como tudo corre no lado do cliente, isto funciona como uma ferramenta de interpolação linear online sem instalação, sem conta e sem que nenhum dado saia do seu navegador.",
				],
			},
			{
				heading: "Calculadora de interpolação logarítmica para dados de estilo exponencial",
				body: [
					"Nem todos os conjuntos de dados formam uma linha reta. Quando uma grandeza varia de forma multiplicativa em vez de aditiva — pH, decibéis, magnitude de sismos ou qualquer medição que abranja várias ordens de grandeza —, uma simples calculadora de interpolação linear dar-lhe-á uma resposta distorcida. Em vez disso, o modo de calculadora de interpolação logarítmica assume que y varia linearmente com ln(x), o que se ajusta a este tipo de curva com muito maior precisão. Introduza os seus dois pares conhecidos de x/y (com valores de x maiores que zero) e o x alvo, e o solucionador de interpolação percorre o cálculo dos logaritmos naturais, calcula o declive no espaço logarítmico e aplica-o para devolver uma estimativa realista.",
				],
			},
			{
				heading: "Calculadora de interpolação dupla (bilinear) para grelhas 2D",
				body: [
					"Alguns problemas não podem ser resolvidos apenas com um único par de pontos. As tabelas de vapor, os gráficos de propriedades do ar e outras referências de engenharia bidimensionais listam um valor na interseção de uma linha e de uma coluna — o que significa que muitas vezes precisa de estimar um ponto que fica entre quatro valores de grelha circundantes. É exatamente para isso que serve a calculadora de interpolação dupla (também chamada calculadora de interpolação bilinear). Forneça os quatro valores dos cantos Q₁₁, Q₁₂, Q₂₁ e Q₂₂ juntamente com o seu x e y alvo, e a ferramenta interpola em x duas vezes — uma em y₁ e outra em y₂ — e depois combina esses dois resultados em y para produzir a estimativa final, com todos os passos intermédios apresentados.",
				],
			},
			{
				heading: "Porquê usar esta calculadora de fórmulas de interpolação",
				body: [
					"A maioria das calculadoras que afirmam calcular interpolação devolve apenas um número final, o que torna difícil detetar um erro de digitação nos seus dados de entrada ou perceber por que motivo uma resposta parece estranha. Esta ferramenta de calculadora de interpolação online mostra cada substituição, cada declive e cada resultado intermédio, e sinaliza automaticamente quando o seu valor alvo fica fora do intervalo dos seus dados conhecidos — rotulando esse resultado como extrapolado em vez de interpolado, uma vez que as estimativas extrapoladas comportam maior incerteza. Suporta os três métodos de interpolação num só lugar, para que não precise de saltar entre solucionadores separados de interpolação linear, interpolação logarítmica e interpolação bilinear para diferentes partes do mesmo projeto.",
					"Quer seja um estudante a verificar os trabalhos de casa, um engenheiro a ler uma tabela de vapor ou qualquer pessoa que apenas precisa de calcular interpolação para uma estimativa pontual, esta ferramenta é gratuita, não exige registo e funciona inteiramente no seu navegador — nada é carregado nem armazenado num servidor.",
				],
			},
		],
	},

	faq: {
		heading: "Perguntas frequentes",
		items: [
			{
				q: "O que é uma calculadora de interpolação?",
				a: "Uma calculadora de interpolação é uma ferramenta que estima um valor desconhecido situado entre dois (ou mais) pontos de dados conhecidos. Em vez de aplicar manualmente a fórmula de interpolação, introduz os seus pontos conhecidos e o valor alvo de x (ou de x e y), e a calculadora devolve o resultado estimado — esta ferramenta mostra ainda todos os passos, detalhadamente, para a interpolação linear, logarítmica e dupla (bilinear).",
			},
			{
				q: "Como funciona uma calculadora de interpolação linear?",
				a: "Uma calculadora de interpolação linear assume que uma reta liga os seus dois pontos conhecidos, (x1, y1) e (x2, y2). Introduz esses dois pontos, mais o valor de x para o qual pretende estimar y, e a calculadora aplica a fórmula de interpolação linear para determinar onde esse x se situa, proporcionalmente, ao longo da reta entre y1 e y2.",
			},
			{
				q: "Qual é a fórmula da interpolação linear?",
				a: "A fórmula da interpolação linear é y = y1 + (x − x1) × (y2 − y1) / (x2 − x1). Calcula o declive entre dois pontos conhecidos, (x1, y1) e (x2, y2), e depois aplica esse declive à distância entre x e x1 para estimar y.",
			},
			{
				q: "Quando devo usar interpolação linear?",
				a: "Use a interpolação linear quando os seus dados forem aproximadamente uma reta no intervalo que lhe interessa — algo comum em consultas de tabelas com espaçamento uniforme, conversões de unidades e na estimativa de valores entre duas medições próximas. É o método de interpolação mais simples e mais utilizado, mas pode ser impreciso se a verdadeira relação apresentar uma curvatura acentuada entre os seus dois pontos conhecidos.",
			},
			{
				q: "O que é a interpolação logarítmica?",
				a: "A interpolação logarítmica é um método que assume que y varia linearmente com ln(x) e não com o próprio x. Utiliza-se quando os dados abrangem várias ordens de grandeza ou mudam de forma multiplicativa em vez de aditiva, já que um ajuste em linha reta (linear) aproximaria mal esse tipo de curva.",
			},
			{
				q: "Quando devo usar interpolação logarítmica em vez de linear?",
				a: "Use a interpolação logarítmica quando os seus dados crescem ou decaem de forma multiplicativa e não aditiva — algo comum em escalas de pH, decibéis/intensidade sonora, magnitude de sismos e alguns dados de crescimento financeiro ou biológico. Se, ao representar os seus dados numa escala logarítmica em x, o gráfico parecer uma reta, a interpolação logarítmica costuma ajustar-se melhor do que a linear.",
			},
			{
				q: "O que é uma calculadora de interpolação dupla (bilinear)?",
				a: "Uma calculadora de interpolação dupla (bilinear) estima um valor a partir de uma grelha 2D de pontos conhecidos, em vez de apenas dois. Fornece quatro valores conhecidos nos cantos — Q11, Q12, Q21 e Q22 — juntamente com os seus valores alvo de x e y, e a calculadora interpola nas duas dimensões para devolver o resultado estimado.",
			},
			{
				q: "Como funciona a interpolação dupla (bilinear)?",
				a: "A interpolação dupla (bilinear) funciona interpolando duas vezes numa direção e uma vez na outra. Primeiro interpola em x, em y1 e novamente em y2, para obter dois resultados intermédios; depois interpola esses dois resultados em y para produzir a estimativa final — combinando, na prática, os quatro valores dos cantos consoante a proximidade do ponto alvo a cada um deles.",
			},
			{
				q: "Para que serve a interpolação dupla?",
				a: "A interpolação dupla serve para ler um valor a partir de uma grelha 2D de pontos conhecidos — por exemplo, ao ler uma propriedade (como a entalpia) numa tabela de vapor em que tanto a pressão como a temperatura ficam entre as linhas e colunas listadas. Funciona interpolando duas vezes: primeiro em x e depois em y.",
			},
			{
				q: "A calculadora de interpolação consegue mostrar os resultados passo a passo?",
				a: "Sim. Esta calculadora mostra todos os passos do cálculo — a substituição dos seus valores, o cálculo do declive (ou do declive logarítmico, no caso da interpolação logarítmica) e a sua aplicação até chegar ao resultado final — para que possa verificar você mesmo as contas, em vez de ver apenas um número final.",
			},
			{
				q: "Qual é a diferença entre interpolação e extrapolação?",
				a: "A interpolação estima um valor situado entre dois pontos de dados conhecidos. A extrapolação estima um valor fora desse intervalo. A extrapolação usa a mesma fórmula, mas é intrinsecamente menos fiável, uma vez que se está a assumir que a tendência continua para além dos dados que realmente tem.",
			},
			{
				q: "Porque é que a calculadora indica \"extrapolado\" em vez de dar um erro?",
				a: "Um x alvo fora dos seus dois pontos conhecidos continua a ser matematicamente calculável — a reta ou curva é simplesmente prolongada para além dos dados que forneceu. A indicação é um aviso, não um erro: a matemática está correta, mas a confiança no resultado diminui à medida que se afasta do intervalo conhecido.",
			},
			{
				q: "Porque recebo um erro quando x1 é igual a x2?",
				a: "A fórmula de interpolação divide por (x2 − x1). Se x1 e x2 forem iguais, isso corresponde a uma divisão por zero, que é matematicamente indefinida. São necessários dois valores de x distintos para definir uma reta (ou curva) ao longo da qual interpolar.",
			},
		],
	},

	footer: {
		copyright: "© {year} Interpolation Calculator Online. Todos os cálculos são executados no seu navegador.",
		disclaimer: "Concebida para estimativas rápidas e verificáveis — não substitui o juízo profissional de um engenheiro.",
		navAbout: "Sobre",
		navPrivacy: "Política de Privacidade",
		navTerms: "Termos e Condições",
		navContact: "Contacto",
	},

	legal: {
		backToHome: "Voltar à calculadora",
		lastUpdated: "Última atualização: {date}",

		about: {
			metaTitle: "Sobre Nós – Interpolation Calculator Online",
			metaDescription:
				"Saiba mais sobre o Interpolation Calculator Online, uma ferramenta gratuita baseada no navegador para interpolação linear, logarítmica e bilinear com resultados passo a passo.",
			heading: "Sobre o Interpolation Calculator Online",
			intro:
				"O Interpolation Calculator Online é uma ferramenta gratuita, baseada no navegador, criada para tornar a estimativa de valores entre pontos de dados conhecidos rápida, transparente e precisa — sem necessidade de uma folha de cálculo ou de uma fórmula de manual à sua frente.",
			sections: [
				{
					heading: "Porque criámos isto",
					body: [
						"A interpolação aparece em todo o lado: na leitura de tabelas de engenharia, na conversão entre escalas de medição, no preenchimento de pontos de dados em falta e na estimativa de valores a partir de tabelas de vapor ou tabelas de referência. A maioria das calculadoras online devolve apenas um número final, o que torna difícil detetar um erro ou compreender como a resposta foi obtida.",
						"Criámos esta calculadora para mostrar todo o desenvolvimento — cada substituição, cálculo de declive e resultado intermédio — para que possa verificar a matemática por si próprio, quer seja um estudante a conferir os trabalhos de casa ou um engenheiro a fazer dupla verificação da consulta de uma tabela.",
					],
				},
				{
					heading: "O que esta ferramenta faz",
					body: [
						"Este site disponibiliza três métodos de interpolação num só lugar: interpolação linear para estimativas em linha reta, interpolação logarítmica para dados que abrangem várias ordens de grandeza e interpolação dupla (bilinear) para grelhas bidimensionais como as tabelas de vapor. Todos os cálculos são executados inteiramente no seu navegador — nada do que introduz é enviado para um servidor ou armazenado em qualquer lugar.",
					],
				},
				{
					heading: "Para quem é",
					body: [
						"Estudantes, engenheiros, cientistas e qualquer pessoa que ocasionalmente precise de calcular um valor interpolado sem configurar uma folha de cálculo. A ferramenta é gratuita, não exige conta e funciona tanto em computador como em dispositivos móveis.",
					],
				},
			],
		},

		privacy: {
			metaTitle: "Política de Privacidade – Interpolation Calculator Online",
			metaDescription:
				"Leia a política de privacidade do Interpolation Calculator Online. Não recolhemos nem armazenamos os números que introduz — todos os cálculos são executados localmente no seu navegador.",
			heading: "Política de Privacidade",
			intro:
				"Esta Política de Privacidade explica que informações o Interpolation Calculator Online (\"nós\", \"este site\") recolhe quando utiliza este website, e como são utilizadas.",
			sections: [
				{
					heading: "Dados introduzidos na calculadora",
					body: [
						"Os números que introduz na calculadora de interpolação são processados inteiramente dentro do seu navegador utilizando JavaScript do lado do cliente. Nunca são transmitidos para os nossos servidores, armazenados numa base de dados ou partilhados com terceiros. Fechar ou atualizar a página apaga tudo o que introduziu.",
					],
				},
				{
					heading: "Análise e cookies",
					body: [
						"Este site pode utilizar ferramentas de análise que respeitam a privacidade para compreender padrões de tráfego agregados (como quais as páginas visitadas e de que país provêm os visitantes), a fim de melhorar o site. Estas ferramentas não rastreiam os dados que introduz na calculadora nem constroem um perfil individual sobre si. Se forem utilizados cookies para análise ou publicidade, o seu navegador normalmente permitir-lhe-á bloqueá-los ou apagá-los a qualquer momento através das suas definições.",
					],
				},
				{
					heading: "Serviços de terceiros",
					body: [
						"Podemos utilizar serviços de terceiros (como fornecedores de alojamento, redes de distribuição de conteúdos ou fornecedores de análise) para operar este site. Estes fornecedores podem recolher informações técnicas padrão, como o seu endereço IP e o tipo de navegador, como parte da entrega do website. Não controlamos as práticas de privacidade dos serviços de terceiros e recomendamos que consulte as respetivas políticas de privacidade.",
					],
				},
				{
					heading: "Privacidade das crianças",
					body: [
						"Este site não recolhe intencionalmente informações pessoais de crianças. A própria calculadora não exige nem solicita quaisquer informações pessoais para funcionar.",
					],
				},
				{
					heading: "Alterações a esta política",
					body: [
						"Podemos atualizar esta Política de Privacidade periodicamente para refletir alterações no site ou na legislação aplicável. Quaisquer alterações serão publicadas nesta página.",
					],
				},
				{
					heading: "Contacte-nos",
					body: [
						"Se tiver dúvidas sobre esta Política de Privacidade, visite a nossa página de Contacto.",
					],
				},
			],
		},

		terms: {
			metaTitle: "Termos e Condições – Interpolation Calculator Online",
			metaDescription:
				"Termos e condições de utilização do Interpolation Calculator Online, uma calculadora de interpolação gratuita fornecida no estado em que se encontra para fins informativos e educativos.",
			heading: "Termos e Condições",
			intro:
				"Ao aceder ou utilizar o Interpolation Calculator Online, concorda com os termos que se seguem. Se não concordar com estes termos, não utilize este site.",
			sections: [
				{
					heading: "Utilização deste site",
					body: [
						"O Interpolation Calculator Online é disponibilizado gratuitamente para uso pessoal, educativo e de referência profissional. Pode utilizar a calculadora para estimar valores interpolados e extrapolados a partir dos seus próprios dados.",
					],
				},
				{
					heading: "Ausência de garantia",
					body: [
						"Esta ferramenta é fornecida \"no estado em que se encontra\" e \"conforme disponível\", sem garantias de qualquer tipo, expressas ou implícitas, incluindo, entre outras, exatidão, fiabilidade ou adequação a um fim específico. Embora procuremos obter resultados matematicamente corretos, não garantimos que os cálculos estejam isentos de erros ou sejam ininterruptos.",
					],
				},
				{
					heading: "Não constitui aconselhamento profissional",
					body: [
						"Esta calculadora destina-se a ser uma ferramenta de referência e educativa de uso geral. Não substitui o juízo profissional de engenharia, científico ou financeiro. É da sua responsabilidade verificar de forma independente qualquer resultado antes de o utilizar como base para projetos de engenharia, decisões críticas para a segurança, trabalhos académicos ou qualquer outra utilização com consequências.",
					],
				},
				{
					heading: "Limitação de responsabilidade",
					body: [
						"Na máxima medida permitida por lei, não seremos responsáveis por quaisquer danos diretos, indiretos, incidentais ou consequentes decorrentes da utilização, ou da impossibilidade de utilização, deste website ou dos seus resultados de cálculo.",
					],
				},
				{
					heading: "Propriedade intelectual",
					body: [
						"O design, o layout e o conteúdo original deste site são propriedade do Interpolation Calculator Online. Não pode copiar, republicar ou redistribuir partes substanciais do site sem autorização.",
					],
				},
				{
					heading: "Alterações a estes termos",
					body: [
						"Podemos atualizar estes Termos e Condições periodicamente. A utilização continuada do site após a publicação das alterações constitui a aceitação dos termos atualizados.",
					],
				},
			],
		},

		contact: {
			metaTitle: "Contacte-nos – Interpolation Calculator Online",
			metaDescription:
				"Entre em contacto com a equipa do Interpolation Calculator Online com questões, comentários ou relatórios de erros.",
			heading: "Contacte-nos",
			intro:
				"Tem uma questão, encontrou um erro ou quer sugerir uma funcionalidade? Gostaríamos de o ouvir. Contacte-nos através do endereço de email abaixo.",
			emailLabel: "Email:",
			email: "support@interpcalc.com",
			sections: [
				{
					heading: "Comentários e relatórios de erros",
					body: [
						"Se reparar num cálculo que pareça incorreto, inclua os dados exatos que utilizou e o modo de interpolação (linear, logarítmico ou bilinear) para que possamos reproduzir e investigar o problema.",
					],
				},
				{
					heading: "Tempo de resposta",
					body: [
						"Procuramos responder às mensagens no prazo de alguns dias úteis.",
					],
				},
			],
		},
	},

	errorPage: {
		notFound: {
			metaTitle: "Página não encontrada (404) – Interpolation Calculator Online",
			metaDescription: "A página que procura não existe ou pode ter sido movida.",
			code: "404",
			heading: "Página não encontrada",
			body: "A página que procura não existe ou pode ter sido movida. Verifique o URL ou volte para a calculadora.",
		},
		serverError: {
			metaTitle: "Erro do servidor (500) – Interpolation Calculator Online",
			metaDescription: "Algo correu mal do nosso lado. Tente novamente dentro de momentos.",
			code: "500",
			heading: "Algo correu mal",
			body: "Ocorreu um erro inesperado ao carregar esta página. Tente novamente dentro de momentos ou volte para a calculadora.",
		},
		backToHome: "Voltar para a calculadora",
		contactSupport: "Contactar o suporte",
	},
};
