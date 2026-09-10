export const CLINIC = {
  name: 'VittaVet',
  tagline: 'Clínica Veterinária',
  fullName: 'VittaVet Clínica Veterinária',
  city: 'Jaguaribe',
  state: 'CE',
  instagramHandle: '@vittavet',
  instagramUrl: 'https://instagram.com/vittavet',
  rating: '4,9',
  reviewsLabel: '+500 avaliações',
}

export const MESSAGES = {
  geral:
    'Olá! Vi o site da VittaVet e gostaria de agendar uma consulta veterinária.',
  especialidades:
    'Olá! Gostaria de mais informações sobre os serviços da VittaVet.',
  contato:
    'Olá! Gostaria de agendar uma consulta e tirar dúvidas sobre horários de atendimento.',
}

export const NAV_LINKS = [
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
]

export const HOURS = [
  { day: 'Segunda a sexta', time: '07:00 — 18:00', closed: false },
  { day: 'Sábado', time: '07:00 — 17:00', closed: false },
  { day: 'Domingo', time: 'Fechado', closed: true },
]

export const SPECIALTIES = [
  {
    number: '01',
    title: 'Consultas veterinárias',
    description:
      'Avaliação clínica geral para identificar o estado de saúde do animal e orientar os próximos passos.',
  },
  {
    number: '02',
    title: 'Medicina preventiva',
    description:
      'Acompanhamento periódico voltado à prevenção, com atenção ao histórico de cada animal.',
  },
  {
    number: '03',
    title: 'Dermatologia',
    description:
      'Avaliação de alterações de pele, pelagem e ouvidos, uma das especialidades da clínica.',
  },
  {
    number: '04',
    title: 'Exames e diagnóstico',
    description:
      'Solicitação de exames complementares conforme a avaliação clínica de cada caso.',
  },
  {
    number: '05',
    title: 'Atendimento de aves',
    description:
      'Consultas voltadas às particularidades clínicas e comportamentais das aves.',
  },
  {
    number: '06',
    title: 'Atendimento de equinos',
    description:
      'Avaliação clínica de equinos, considerando o porte e as necessidades da espécie.',
  },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Avaliação',
    description: 'Escuta do histórico contado pelo tutor e exame clínico inicial do animal.',
  },
  {
    number: '02',
    title: 'Investigação',
    description:
      'Levantamento de possíveis causas relacionadas ao quadro apresentado.',
  },
  {
    number: '03',
    title: 'Orientação',
    description: 'Explicação clara sobre o que foi observado e sobre os próximos passos.',
  },
  {
    number: '04',
    title: 'Acompanhamento',
    description:
      'Retorno e ajuste de conduta ao longo do processo, conforme a evolução do animal.',
  },
]

export const TESTIMONIAL_MAIN = {
  quote:
    'Fomos muito bem orientados sobre o que investigar e como acompanhar o tratamento do nosso cão. Explicações claras em cada retorno.',
  context: 'Tutora de paciente',
}

export const TESTIMONIALS_SECONDARY = [
  {
    quote: 'Explicaram cada etapa antes de qualquer procedimento.',
    context: 'Tutor de paciente',
  },
  {
    quote: 'Consegui entender o que estava incomodando o meu gato.',
    context: 'Tutora de paciente',
  },
]
