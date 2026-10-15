import type { Dictionary } from "../dictionary";

export const pt: Dictionary = {
	meta: {
		title: "Calculadora de interpolação – linear, logarítmica e bilinear, passo a passo",
		description:
			"Estime valores entre pontos de dados conhecidos com interpolação linear, logarítmica ou dupla (bilinear). Cada resultado mostra todo o desenvolvimento, com exemplos resolvidos e orientação na escolha do método.",
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
			"Introduza os pontos de dados que conhece e obtenha uma estimativa para aquele que não conhece — com interpolação linear, logarítmica ou dupla (bilinear). Cada substituição e cada valor intermédio é apresentado, para que possa conferir a resposta em vez de confiar nela cegamente.",
	},

	calculator: {
		tablistLabel: "Modo de interpolação",
		tabLinear: "Linear",
		tabLog: "Logarítmica",
		tabBilinear: "Dupla (bilinear)",

		linearIntro: "Introduza dois pontos conhecidos e, em seguida, o valor de x para o qual quer estimar y.",
		logIntro:
			"Para dados em que y varia linearmente com ln(x), como valores que abrangem várias ordens de grandeza. Todos os valores de x têm de ser superiores a zero.",
		bilinearIntro:
			"Estime um valor dentro de uma tabela 2D a partir dos quatro valores conhecidos nos cantos da célula circundante (por exemplo, uma tabela de vapor).",

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
			title: "Fórmula da interpolação linear",
			intro:
				"Pressupõe uma reta entre dois pontos. Dados (x₁, y₁) e (x₂, y₂), o valor de y para qualquer x é:",
			formula: "y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁)",
			note:
				"Ideal para consultas em tabelas com espaçamento uniforme, conversões de unidades e qualquer relação que seja aproximadamente linear no intervalo que lhe interessa.",
		},
		log: {
			title: "Fórmula da interpolação logarítmica",
			intro:
				"Pressupõe que y varia linearmente com ln(x) em vez do próprio x — útil quando x abrange várias ordens de grandeza.",
			formula: "y = y₁ + (ln x − ln x₁) × (y₂ − y₁) / (ln x₂ − ln x₁)",
			note: "Comum para pH, decibéis, magnitude de Richter e outras medições em escala logarítmica.",
		},
		bilinear: {
			title: "Fórmula da interpolação dupla (bilinear)",
			intro:
				"Interpole primeiro em x ao longo de ambas as linhas conhecidas para obter R₁ (em y₁) e R₂ (em y₂) e, depois, interpole entre esses dois resultados em y:",
			formula: "f(x,y) = R₁ + (y − y₁) × (R₂ − R₁) / (y₂ − y₁)",
			note: "O método padrão para ler tabelas de vapor e outras tabelas de referência de engenharia 2D.",
		},
	},

	seoContent: {
		heading: "Como funciona a interpolação, com exemplos resolvidos",
		intro:
			"A interpolação estima um valor desconhecido que se situa entre valores que já conhece. É assim que se lê entre as linhas de uma tabela de engenharia, se preenche uma lacuna em dados medidos ou se converte uma leitura numa escala que só está indicada em determinados pontos. O método certo depende de como os seus dados se comportam entre esses pontos conhecidos. As secções que se seguem explicam os três métodos que esta calculadora suporta, apresentam um exemplo de cada que pode reproduzir na calculadora acima e abordam as fontes de erro mais comuns.",
		sections: [
			{
				heading: "Interpolação linear: exemplo resolvido",
				body: [
					"A interpolação linear pressupõe que os dados seguem uma reta entre dois pontos conhecidos (x₁, y₁) e (x₂, y₂). A fórmula é y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁): determina o declive entre os dois pontos e depois desloca-se ao longo desse declive de x₁ até ao seu x alvo.",
					"Exemplo: uma tabela indica y = 12.4 em x = 20 e y = 18.9 em x = 30, e precisa do valor em x = 24. O declive é (18.9 − 12.4) / (30 − 20) = 0.65 por unidade de x. O alvo está 4 unidades além de x₁, por isso y = 12.4 + 4 × 0.65 = 15.0. Introduza x₁ = 20, y₁ = 12.4, x₂ = 30, y₂ = 18.9 e x = 24 no separador Linear para ver os mesmos passos.",
				],
			},
			{
				heading: "Interpolação logarítmica: exemplo resolvido",
				body: [
					"Algumas grandezas variam por uma quantidade constante sempre que x é multiplicado por um fator fixo, em vez de sempre que x aumenta por uma quantidade fixa. O nível sonoro em decibéis, o pH e a magnitude dos sismos comportam-se todos assim. Para este tipo de dados, y é uma reta em relação a ln(x), pelo que a interpolação logarítmica aplica a fórmula linear a ln(x) em vez de x.",
					"Exemplo: uma intensidade sonora de 1 µW/m² corresponde a 60 dB e 100 µW/m² corresponde a 80 dB. Qual é o nível a 10 µW/m²? A interpolação logarítmica dá 60 + (ln 10 − ln 1) × (80 − 60) / (ln 100 − ln 1) = 70 dB, o que está exatamente correto, porque 10 está um fator de dez acima de 1 e um fator de dez abaixo de 100. Uma interpolação linear simples devolveria cerca de 61.8 dB, porque trata o 10 como estando apenas a 9% do caminho de 1 até 100. Usar o método errado em dados logarítmicos pode produzir erros desta ordem de grandeza.",
				],
			},
			{
				heading: "Interpolação dupla (bilinear): exemplo resolvido",
				body: [
					"As tabelas bidimensionais, como as tabelas de vapor sobreaquecido, listam um valor para cada combinação de uma variável de linha e uma variável de coluna. Quando ambas as suas entradas caem entre valores listados, precisa das quatro entradas de tabela circundantes: Q₁₁ = f(x₁, y₁), Q₂₁ = f(x₂, y₁), Q₁₂ = f(x₁, y₂) e Q₂₂ = f(x₂, y₂). A interpolação bilinear interpola primeiro em x ao longo de cada uma das duas linhas e depois interpola entre esses dois resultados em y.",
					"Exemplo: com x₁ = 10, x₂ = 20, y₁ = 100 e y₂ = 200, a tabela fornece Q₁₁ = 50, Q₂₁ = 70, Q₁₂ = 60 e Q₂₂ = 90. Para estimar f(14, 130), interpole primeiro ao longo de y₁: R₁ = 50 + (14 − 10) × (70 − 50) / 10 = 58. Depois ao longo de y₂: R₂ = 60 + 0.4 × (90 − 60) = 72. Por fim, interpole em y: f = 58 + (130 − 100) × (72 − 58) / 100 = 62.2. Interpolar primeiro em y e depois em x dá o mesmo 62.2.",
				],
			},
			{
				heading: "Como escolher um método",
				body: [
					"Use a interpolação linear quando os pontos conhecidos estão próximos uns dos outros e os dados parecem aproximadamente retos entre eles. Isto cobre a maioria das consultas em tabela. Use a interpolação logarítmica quando os valores de x abrangem um intervalo amplo (por exemplo, de 1 a 1.000) e os dados se dispõem numa reta num eixo x logarítmico. Use a interpolação dupla sempre que o valor depende de duas entradas ao mesmo tempo e está a ler a partir de uma grelha.",
					"Se estiver em dúvida, represente graficamente alguns valores de tabela vizinhos. Os pontos que ficam sobre uma reta em eixos comuns são adequados à interpolação linear. Os pontos que só se endireitam quando x é representado numa escala logarítmica são adequados à interpolação logarítmica.",
				],
			},
			{
				heading: "Exatidão e erros comuns",
				body: [
					"A interpolação linear só é exata quando os dados realmente formam uma reta. Para uma função f curva, o erro é no máximo (x₂ − x₁)² / 8 multiplicado pelo maior valor de |f″| entre os dois pontos. Na prática, isto significa que reduzir para metade o espaçamento entre os pontos conhecidos diminui o erro no pior caso para cerca de um quarto. Quando uma tabela oferece linhas mais finas perto do seu alvo, utilize-as.",
					"Os erros mais frequentes são confundir qual valor pertence a x₁ e qual pertence a x₂, misturar unidades (por exemplo, kPa numa linha e bar noutra) e ler Q₁₂ e Q₂₁ das células erradas de uma tabela 2D. Estimar fora do intervalo conhecido também é arriscado. A calculadora rotula esses resultados como extrapolados porque a reta ou curva assumida pode não continuar para além dos seus dados.",
				],
			},
		],
	},

	faq: {
		heading: "Perguntas frequentes",
		items: [
			{
				q: "O que é a interpolação?",
				a: "A interpolação consiste em estimar um valor desconhecido situado entre dois ou mais pontos de dados conhecidos, assumindo que uma forma simples, como uma reta, os liga. É comummente usada para ler valores entre as linhas listadas de tabelas de referência e para preencher lacunas em dados medidos.",
			},
			{
				q: "Qual é a fórmula da interpolação linear?",
				a: "y = y₁ + (x − x₁) × (y₂ − y₁) / (x₂ − x₁). A fração (y₂ − y₁) / (x₂ − x₁) é o declive da reta que passa pelos dois pontos conhecidos, e multiplicá-la por (x − x₁) indica quanto y se deslocou desde y₁ até ao momento em que chega a x.",
			},
			{
				q: "Quando é que a interpolação linear é suficientemente exata?",
				a: "Quando os pontos conhecidos estão próximos uns dos outros e os dados estão próximos de uma reta entre eles. Para uma relação curva, o erro cresce com o quadrado do espaçamento entre os pontos, por isso usar as linhas de tabela disponíveis mais próximas costuma importar mais do que a escolha do método.",
			},
			{
				q: "Quando devo usar interpolação logarítmica em vez de linear?",
				a: "Use-a quando y muda aproximadamente pela mesma quantidade sempre que x é multiplicado por um fator constante — por exemplo, decibéis face à intensidade sonora, ou pH face à concentração de iões de hidrogénio. Se os seus dados formam uma reta quando x é representado num eixo logarítmico, a interpolação logarítmica ajustar-se-á melhor do que a linear.",
			},
			{
				q: "Porque é que x tem de ser maior que zero na interpolação logarítmica?",
				a: "A interpolação logarítmica trabalha com ln(x), e o logaritmo natural só está definido para números positivos. Se os seus valores de x incluem zero ou negativos, os dados não podem estar numa escala logarítmica em x, e a interpolação linear é o método adequado.",
			},
			{
				q: "Como funciona a interpolação dupla (bilinear)?",
				a: "Utiliza os quatro valores conhecidos nos cantos da célula de tabela que contém o seu ponto alvo. Interpola em x ao longo da linha inferior (obtendo R₁) e da linha superior (obtendo R₂) e depois interpola entre R₁ e R₂ em y. O resultado é uma média ponderada dos quatro cantos, com os cantos mais próximos a terem maior peso.",
			},
			{
				q: "Faz diferença interpolar primeiro em x ou em y?",
				a: "Não. Na interpolação bilinear, fazer primeiro x e depois y dá exatamente o mesmo resultado que fazer primeiro y e depois x. O exemplo resolvido acima dá 62.2 em qualquer das ordens.",
			},
			{
				q: "Qual é a diferença entre interpolação e extrapolação?",
				a: "A interpolação estima um valor dentro do intervalo dos seus pontos conhecidos; a extrapolação estima um valor fora dele. A fórmula é a mesma, por isso a calculadora continua a devolver um número, mas rotula o resultado como extrapolado porque não há dados que confirmem que a tendência continua para além dos seus pontos conhecidos.",
			},
			{
				q: "Porque recebo um erro quando x₁ é igual a x₂?",
				a: "Todas as fórmulas aqui dividem por (x₂ − x₁), ou por (ln x₂ − ln x₁) no modo logarítmico. Quando os dois valores de x são iguais, isto é uma divisão por zero, e dois pontos com o mesmo x não podem definir uma reta. O mesmo se aplica a y₁ e y₂ na interpolação dupla.",
			},
			{
				q: "Qual é a precisão dos resultados?",
				a: "Os cálculos usam a aritmética de vírgula flutuante de dupla precisão padrão. Por legibilidade, os valores intermédios nos passos são arredondados a seis casas decimais, e o resultado final é apresentado com 12 algarismos significativos. Este arredondamento afeta apenas o que é apresentado; cada passo é calculado a partir dos valores não arredondados.",
			},
			{
				q: "Os números que introduzo são enviados ou armazenados em algum lugar?",
				a: "Não. Todos os cálculos são executados no seu navegador e os seus dados nunca são enviados para um servidor. Atualizar ou fechar a página apaga-os.",
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
			metaTitle: "Sobre – Interpolation Calculator Online",
			metaDescription:
				"Porque existe esta calculadora de interpolação, como os seus resultados são verificados e quem a mantém.",
			heading: "Sobre a calculadora de interpolação",
			intro:
				"A calculadora de interpolação é um projeto independente que estima valores entre pontos de dados conhecidos usando interpolação linear, logarítmica e dupla (bilinear). Mostra todos os passos do cálculo, para que possa conferir a resposta em vez de confiar nela cegamente.",
			sections: [
				{
					heading: "Porque existe este site",
					body: [
						"A interpolação surge constantemente nos estudos e na prática de engenharia: ao ler tabelas de vapor e de propriedades, ao trabalhar com gráficos de calibração ou ao preencher uma lacuna em dados medidos. A aritmética é simples, mas também é fácil de errar à mão. Os deslizes comuns incluem trocar x₁ e x₂, ler a célula errada de uma tabela 2D ou aplicar uma estimativa em linha reta a dados logarítmicos.",
						"A maioria das ferramentas online devolve apenas um número final, o que não deixa forma de detetar um erro de introdução. Esta calculadora mostra a fórmula, os seus valores substituídos, o declive e cada resultado intermédio, para que cada passo possa ser comparado com um manual ou com um cálculo à mão.",
					],
				},
				{
					heading: "Como os resultados são verificados",
					body: [
						"Os três métodos usam as fórmulas padrão dos manuais descritas na página inicial. Os resultados foram verificados face a cálculos à mão, incluindo os exemplos resolvidos da página inicial. A calculadora também trata explicitamente os casos limite, devolvendo uma mensagem clara em vez de um número sem sentido quando os valores de x são iguais ou quando uma entrada logarítmica é nula ou negativa. Quando um alvo cai fora do intervalo, o resultado é rotulado como extrapolado em vez de ser apresentado sem qualquer indicação.",
					],
				},
				{
					heading: "Privacidade desde a conceção",
					body: [
						"Todos os cálculos são executados no seu navegador. Os números que introduz nunca são enviados para um servidor, pelo que a calculadora funciona também com dados confidenciais ou não publicados. A Política de Privacidade explica o que o site efetivamente recolhe, como os cookies padrão de análise e de publicidade.",
					],
				},
				{
					heading: "Comentários",
					body: [
						"Se encontrar um resultado que pareça errado, uma explicação confusa ou um método que gostaria de ver adicionado, entre em contacto através da página de Contacto. Os relatórios que incluem os dados exatos que utilizou são os mais rápidos de investigar e corrigir.",
					],
				},
			],
		},

		privacy: {
			metaTitle: "Política de Privacidade – Interpolation Calculator Online",
			metaDescription:
				"Que informações o interpcalc.com recolhe, como são utilizados os cookies do Google Analytics e do Google AdSense e como recusá-los. Os dados introduzidos na calculadora nunca saem do seu navegador.",
			heading: "Política de Privacidade",
			intro:
				"Esta Política de Privacidade explica que informações o interpcalc.com (\"este site\", \"nós\") recolhe quando o visita, como são utilizadas e que escolhas tem à disposição.",
			sections: [
				{
					heading: "Dados introduzidos na calculadora",
					body: [
						"Os números que introduz na calculadora são processados inteiramente dentro do seu navegador utilizando JavaScript do lado do cliente. Nunca são enviados para os nossos servidores, armazenados numa base de dados ou partilhados com quem quer que seja. Atualizar ou fechar a página apaga-os.",
					],
				},
				{
					heading: "Análise",
					body: [
						"Este site utiliza o Google Analytics para compreender a utilização agregada, como quais as páginas visitadas, o país aproximado de onde provêm os visitantes e o tipo de dispositivo e navegador utilizado. O Google Analytics utiliza cookies e recolhe dados técnicos padrão, como o seu endereço IP, para produzir estes relatórios. Não recebe os valores que introduz na calculadora. Pode impedir que o Google Analytics recolha dados instalando o suplemento do navegador para desativação do Google Analytics (tools.google.com/dlpage/gaoptout).",
					],
				},
				{
					heading: "Publicidade",
					body: [
						"Este site utiliza o Google AdSense para apresentar anúncios. Fornecedores terceiros, incluindo a Google, utilizam cookies para publicar anúncios com base nas suas visitas anteriores a este e a outros sites. A utilização de cookies de publicidade pela Google permite que esta e os seus parceiros lhe apresentem anúncios com base nas suas visitas a este e a outros sites na Internet.",
						"Pode recusar a publicidade personalizada visitando as Definições de anúncios da Google (adssettings.google.com). Pode também recusar a utilização de cookies para publicidade personalizada por parte de alguns fornecedores terceiros em www.aboutads.info. Para mais informações sobre como a Google utiliza os dados, consulte policies.google.com/technologies/partner-sites.",
						"Aos visitantes no Espaço Económico Europeu, no Reino Unido e na Suíça poderá ser pedido consentimento antes de serem definidos cookies de publicidade personalizada, podendo alterar essa escolha a qualquer momento.",
					],
				},
				{
					heading: "Cookies e armazenamento local",
					body: [
						"Além dos cookies de análise e publicidade descritos acima, o site armazena uma única preferência no armazenamento local do seu navegador: a sua escolha de tema claro ou escuro. Pode bloquear ou eliminar cookies e o armazenamento local a qualquer momento através das definições do seu navegador. A calculadora continuará a funcionar.",
					],
				},
				{
					heading: "Alojamento",
					body: [
						"O site é alojado na Cloudflare, que processa dados de pedido padrão (como o endereço IP e o tipo de navegador) para entregar as páginas e proteger o site contra abusos.",
					],
				},
				{
					heading: "Privacidade das crianças",
					body: [
						"Este site não se dirige a crianças com menos de 13 anos e não recolhe intencionalmente informações pessoais delas. A calculadora não solicita quaisquer informações pessoais.",
					],
				},
				{
					heading: "Alterações a esta política",
					body: [
						"Podemos atualizar esta Política de Privacidade quando o site ou a legislação aplicável mudarem. As atualizações serão publicadas nesta página.",
					],
				},
				{
					heading: "Contacto",
					body: [
						"Se tiver dúvidas sobre esta Política de Privacidade, escreva para code.sudeepto@gmail.com.",
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
			email: "code.sudeepto@gmail.com",
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
