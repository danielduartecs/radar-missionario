export interface QuizOption {
    texto: string
    valor: number
  }
  export interface QuizQuestion {
    id: number
    titulo: string
    descricao: string
    opcoes: QuizOption[]
  }
  
  export const perguntas: QuizQuestion[] = [
    {
      id: 1,
      titulo: "Fidelidade Bíblica",
      descricao: "A proposta afirma a exclusividade de Cristo e a autoridade plena das Escrituras?",
      opcoes: [
        { texto: "Totalmente: Cristo é o centro da proclamação e a Bíblia é norma absoluta", valor: 20 },
        { texto: "Parcialmente: há referência, mas com influências relativistas", valor: 10 },
        { texto: "Pouco: autoridade bíblica é secundária ou relativizada", valor: 0 }
      ]
    },
    {
      id: 2,
      titulo: "Hermenêutica Saudável",
      descricao: "O projeto utiliza interpretação bíblica fiel ao contexto original?",
      opcoes: [
        { texto: "Sim, usa abordagem histórico-gramatical com integridade", valor: 10 },
        { texto: "Parcialmente, mistura boa exegese com leituras ideológicas", valor: 5 },
        { texto: "Não, interpretações subjetivistas ou distorcidas são comuns", valor: 0 }
      ]
    },
    {
      id: 3,
      titulo: "Antissincretismo",
      descricao: "O projeto evita diluir o evangelho em elementos culturais incompatíveis?",
      opcoes: [
        { texto: "Sim, confronta práticas sincréticas", valor: 10 },
        { texto: "Em parte, há concessões culturais preocupantes", valor: 5 },
        { texto: "Não, adapta o evangelho de forma indiscriminada", valor: 0 }
      ]
    },
    {
      id: 4,
      titulo: "Contextualização Crítica",
      descricao: "A proposta contextualiza com discernimento bíblico?",
      opcoes: [
        { texto: "Sim, distingue o que é bíblico e o que é cultural", valor: 15 },
        { texto: "Em parte, mas falta clareza nos limites", valor: 7 },
        { texto: "Não, é mera adaptação cultural", valor: 0 }
      ]
    },
    {
      id: 5,
      titulo: "Transformação de Cosmovisão",
      descricao: "O projeto atua para mudar a cosmovisão secular para uma bíblica?",
      opcoes: [
        { texto: "Sim, com ações profundas e intencionais", valor: 10 },
        { texto: "Em parte, com foco mais comportamental que transformador", valor: 5 },
        { texto: "Não há intenção clara de transformação de cosmovisão", valor: 0 }
      ]
    },
    {
      id: 6,
      titulo: "Crítica à Cultura Contemporânea",
      descricao: "O projeto confronta valores como narcisismo, hedonismo e relativismo moral?",
      opcoes: [
        { texto: "Sim, com clareza e firmeza", valor: 10 },
        { texto: "Em parte, há concessões", valor: 5 },
        { texto: "Não, reafirma os valores da cultura dominante", valor: 0 }
      ]
    },
    {
      id: 7,
      titulo: "Centralidade na Missão",
      descricao: "A missão é centrada em Deus e na glória de Cristo?",
      opcoes: [
        { texto: "Sim, fundamentada na adoração e senhorio de Cristo", valor: 10 },
        { texto: "Parcialmente, foco no bem-estar humano e causas sociais", valor: 5 },
        { texto: "Não, a proposta é centrada no homem", valor: 0 }
      ]
    },
    {
      id: 8,
      titulo: "Ênfase nos Não Alcançados",
      descricao: "A proposta prioriza povos que nunca ouviram o evangelho?",
      opcoes: [
        { texto: "Sim, com estratégias específicas", valor: 10 },
        { texto: "Em parte, mas também atua em contextos saturados", valor: 5 },
        { texto: "Não há foco em não alcançados", valor: 0 }
      ]
    },
    {
      id: 9,
      titulo: "Postura Epistemológica",
      descricao: "A proposta reconhece limites humanos sem cair no relativismo?",
      opcoes: [
        { texto: "Sim, adota realismo crítico com humildade", valor: 5 },
        { texto: "Parcialmente, com linguagem ambígua", valor: 2 },
        { texto: "Não, relativiza a verdade", valor: 0 }
      ]
    }
  ]
  