import { Meditation } from "../models/meditation.model";

export const MEDITATION_MOCK: Meditation[] = [
  {
    id: '1',
    title: 'Conexão Corporal',
    description: `Essa meditação ajuda a cultivar uma conexão interna, promovendo um sentimento de acolhimento e amor-próprio.`,
    source: "“Conecte-se ao seu corpo e você encontrará uma porta para a paz interior.” (Capítulo 6: O Corpo Interior)",
    tutorial: [
      { step: "Sente-se ou fique em pé com as mãos sobre o coração." },
      { step: "Respire fundo e sinta sua presença no momento." },
      { step: "Permita-se sentir as emoções que surgem e simplesmente esteja presente." }
    ],
    moodRecommended: 'Inspirado'
  },
  {
    id: '2',
    title: 'Observação Detalhada',
    description: `Essa prática pode ajudar a esclarecer uma mente confusa, direcionando a atenção para fora e quebrando padrões mentais.`,
    source: "“Ao direcionar sua atenção para o exterior, você pode se libertar do domínio da mente.” (Capítulo 1: Você não é sua mente)",
    tutorial: [
      { step: "Pause por um momento em um ambiente familiar." },
      { step: "Olhe ao redor e observe três detalhes que você nunca notou." },
      { step: "Reserve um tempo para apreciar cada detalhe." }
    ],
    moodRecommended: 'Confuso'
  },
  {
    id: '3',
    title: 'Liberação da Tensão',
    description: `Essa meditação é eficaz para aliviar o estresse acumulado no corpo.`,
    source: "“A tensão acumulada no corpo é frequentemente um sinal de resistência ao momento presente.” (Capítulo 6: O Corpo Interior)",
    tutorial: [
      { step: "Sente-se ou fique de pé confortavelmente." },
      { step: "Respire fundo três vezes, relaxando os ombros." },
      { step: "Observe onde você carrega tensão no corpo e faça um esforço consciente para liberá-la." }
    ],
    moodRecommended: 'Estressado'
  },
  {
    id: '4',
    title: 'Silêncio Interior',
    description: `Essa meditação ajuda a acalmar a mente e reduzir a ansiedade, criando um espaço para o silêncio interior.`,
    source: "“Uma simples pausa, sem pensamentos, pode abrir espaço para a quietude interior.” (Capítulo 1: Você não é sua mente)",
    tutorial: [
      { step: "Encontre um lugar tranquilo." },
      { step: "Fique parado por 10 segundos, focando apenas na sua respiração." },
      { step: "Sinta a passagem do ar e observe como seu corpo se sente enquanto respira." }
    ],
    moodRecommended: 'Ansioso'
  },
  {
    id: '5',
    title: 'Respiração Consciente',
    description: `Essa meditação ajuda a cultivar a gratidão, promovendo um sentimento de conexão com a vida.`,
    source: "Tolle fala sobre a importância de permanecer no agora, e a gratidão é uma maneira poderosa de se ancorar nesse momento.",
    tutorial: [
      { step: "Encontre um espaço calmo e confortável." },
      { step: "Respire fundo, sentindo o ar entrando e saindo do seu corpo." },
      { step: "Agradeça a cada respiração, sentindo gratidão pelo momento presente." }
    ],
    moodRecommended: 'Grato'
  }
];

export const MEDITATION_MOCK_2: Meditation[] = [
  {
    id: '1',
    title: 'Pequena Reflexão sobre um Hábito Positivo',
    description: `Gaste 2 minutos refletindo sobre um hábito positivo que você gostaria de implementar. Pense em um passo pequeno e concreto para iniciar esse hábito, como beber um copo de água ao acordar.`,
    source: `Baseado em "Hábito Atômico" de James Clear.`,
    tutorial: [
      { step: "Sente-se em um lugar tranquilo." },
      { step: "Refleta sobre um hábito positivo que deseja implementar." },
      { step: "Anote um pequeno passo concreto para iniciar esse hábito." }
    ],
    moodRecommended: 'Ansioso'
  },
  {
    id: '2',
    title: 'Visualização de Pequenas Conquistas',
    description: `Gaste 3 minutos visualizando uma pequena vitória que você deseja alcançar. Imagine-se completando essa ação com sucesso e como se sentirá ao final.`,
    source: `Baseado em "Hábito Atômico" de James Clear.`,
    tutorial: [
      { step: "Feche os olhos e respire fundo." },
      { step: "Visualize uma pequena vitória que deseja alcançar." },
      { step: "Sinta a emoção de completar essa conquista." }
    ],
    moodRecommended: 'Inspirado'
  },
  {
    id: '3',
    title: 'Exercício de Gratidão de um Minuto',
    description: `Tire 1 minuto para pensar em algo positivo que aconteceu no seu dia ou algo pelo qual você se sente grato.`,
    source: `Baseado em práticas de gratidão recomendadas por vários autores.`,
    tutorial: [
      { step: "Pare e respire fundo." },
      { step: "Pense em algo pelo qual você é grato." },
      { step: "Permita-se sentir essa gratidão por um momento." }
    ],
    moodRecommended: 'Grato'
  },
  {
    id: '4',
    title: 'Declutter de 3 Itens',
    description: `Tire 5 minutos para organizar algo ao seu redor e separe três itens para doar ou descartar.`,
    source: `Baseado em "Hábito Atômico" de James Clear.`,
    tutorial: [
      { step: "Escolha uma área para organizar." },
      { step: "Separe três itens que você não usa mais." },
      { step: "Doe ou descarte esses itens." }
    ],
    moodRecommended: 'Estressado'
  },
  {
    id: '5',
    title: 'Pergunta de Autoconhecimento',
    description: `Pergunte a si mesmo: “O que posso fazer hoje que deixará meu futuro 1% melhor?”. Pense em uma resposta rápida e em como pode aplicar isso hoje.`,
    source: `Baseado em princípios de autoconhecimento.`,
    tutorial: [
      { step: "Reserve um momento para refletir." },
      { step: "Faça a pergunta a si mesmo." },
      { step: "Anote uma ação concreta que pode tomar hoje." }
    ],
    moodRecommended: 'Confuso'
  },
  {
    id: '6',
    title: 'Respiração Focada em Metas',
    description: `Durante 2 minutos, faça uma respiração profunda e, ao exalar, pense em uma meta importante para você. Ao final, anote um pequeno passo em direção a essa meta.`,
    source: `Baseado em práticas de foco e atenção.`,
    tutorial: [
      { step: "Sente-se confortavelmente e respire fundo." },
      { step: "Ao exalar, pense em uma meta importante." },
      { step: "Escreva um pequeno passo que você pode dar em direção a essa meta." }
    ],
    moodRecommended: 'Estressado'
  },
  {
    id: '7',
    title: 'Exercício de “Parar e Observar”',
    description: `Pare por 1 minuto em qualquer atividade do seu dia e observe seus pensamentos ou emoções sem julgá-los.`,
    source: `Baseado em práticas de mindfulness.`,
    tutorial: [
      { step: "Escolha uma atividade para pausar." },
      { step: "Feche os olhos e respire fundo." },
      { step: "Observe seus pensamentos e emoções sem julgá-los." }
    ],
    moodRecommended: 'Estressado'
  },
  {
    id: '8',
    title: 'Reforço Positivo ao Final do Dia',
    description: `Tire 2 minutos para pensar em uma pequena vitória do seu dia. Celebre mentalmente essa conquista, por menor que seja.`,
    source: `Baseado em práticas de autoafirmação.`,
    tutorial: [
      { step: "Reserve um momento para refletir sobre seu dia." },
      { step: "Identifique uma pequena vitória." },
      { step: "Celebre essa conquista em sua mente." }
    ],
    moodRecommended: 'Grato'
  }
];
