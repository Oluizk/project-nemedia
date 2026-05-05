export const catalog = [
  {
    id: 1,
    title: 'Oppenheimer',
    meta: 'Christopher Nolan · 2023',
    type: 'filme',
    rating: 5,
    emoji: '🎬',
    hasClip: true,
    description:
      'A história do físico J. Robert Oppenheimer e seu papel central no Projeto Manhattan, que desenvolveu a primeira bomba atômica durante a Segunda Guerra Mundial.',
    clips: [
      { name: 'Trailer oficial', duration: '3:02' },
      { name: 'Cena da detonação', duration: '2:45' },
    ],
    saves: 1240,
    reviews: [
      {
        user: 'marina_reads',
        avatar: '🧑',
        rating: 5,
        text: 'Uma obra-prima cinematográfica. Nolan no seu melhor.',
      },
      {
        user: 'pedro_cinefilo',
        avatar: '👤',
        rating: 5,
        text: 'Cillian Murphy entregou uma performance inesquecível.',
      },
    ],
  },
  {
    id: 2,
    title: 'Sapiens',
    meta: 'Yuval Noah Harari · 2011',
    type: 'livro',
    rating: 5,
    emoji: '📚',
    hasClip: false,
    description:
      'Uma breve história da humanidade, traçando o desenvolvimento da espécie humana desde a Idade da Pedra até o presente.',
    clips: [],
    saves: 980,
    reviews: [
      {
        user: 'ana_books',
        avatar: '👩',
        rating: 5,
        text: 'Leitura obrigatória para qualquer pessoa curiosa sobre a nossa história.',
      },
    ],
  },
  {
    id: 3,
    title: 'The Bear',
    meta: 'Christopher Storer · 2022',
    type: 'série',
    rating: 5,
    emoji: '📺',
    hasClip: true,
    description:
      'Um chef de Chicago retorna à sua cidade natal para administrar o restaurante de sanduíches da família após uma tragédia familiar.',
    clips: [
      { name: 'Episódio 7 - Longa sequência', duration: '18:00' },
      { name: 'Trailer da 2ª temporada', duration: '2:15' },
    ],
    saves: 876,
    reviews: [
      {
        user: 'carol_series',
        avatar: '🙋',
        rating: 5,
        text: 'A série mais tensa e bonita dos últimos anos.',
      },
    ],
  },
  {
    id: 4,
    title: 'Huberman Lab',
    meta: 'Andrew Huberman · 2021',
    type: 'podcast',
    rating: 4,
    emoji: '🎙️',
    hasClip: true,
    description:
      'Podcast de ciência e saúde do neurocientista Andrew Huberman, explorando como o cérebro e o corpo funcionam e como otimizá-los.',
    clips: [{ name: 'Protocolo de sono', duration: '5:30' }],
    saves: 654,
    reviews: [
      {
        user: 'joao_saude',
        avatar: '👨',
        rating: 4,
        text: 'Conteúdo extremamente rico e bem embasado cientificamente.',
      },
    ],
  },
  {
    id: 5,
    title: 'Duna: Parte 2',
    meta: 'Denis Villeneuve · 2024',
    type: 'filme',
    rating: 5,
    emoji: '🎬',
    hasClip: true,
    description:
      'Paul Atreides se une a Chani e aos Fremen enquanto busca vingança contra os conspiradores que destruíram sua família.',
    clips: [
      { name: 'Cena da arena', duration: '4:20' },
      { name: 'Trailer final', duration: '2:58' },
    ],
    saves: 1120,
    reviews: [
      {
        user: 'lucas_sci',
        avatar: '🧔',
        rating: 5,
        text: 'Villeneuve criou algo épico e grandioso. Cinema de verdade.',
      },
    ],
  },
  {
    id: 6,
    title: 'Velozes e Furiosos',
    meta: 'Rob Cohen · 2001',
    type: 'filme',
    rating: 3,
    emoji: '🎬',
    hasClip: false,
    description:
      'Um policial disfarçado se infiltra no mundo das corridas de rua ilegais em Los Angeles.',
    clips: [],
    saves: 421,
    reviews: [
      {
        user: 'rafa_action',
        avatar: '🤩',
        rating: 3,
        text: 'Clássico do cinema de ação dos anos 2000. Nostalgia pura.',
      },
    ],
  },
  {
    id: 7,
    title: 'O Problema dos 3 Corpos',
    meta: 'Liu Cixin · 2008',
    type: 'livro',
    rating: 5,
    emoji: '📚',
    hasClip: false,
    description:
      'Uma trilogia épica de ficção científica que mistura física quântica, história chinesa e o contato com uma civilização alienígena.',
    clips: [],
    saves: 734,
    reviews: [
      {
        user: 'bia_scifi',
        avatar: '🤓',
        rating: 5,
        text: 'A ficção científica mais ambiciosa que já li. Simplesmente incrível.',
      },
    ],
  },
  {
    id: 8,
    title: 'Estoicismo Prático',
    meta: 'Ryan Holiday · 2016',
    type: 'livro',
    rating: 4,
    emoji: '📚',
    hasClip: false,
    description:
      'Uma exploração prática da filosofia estoica, com lições diárias baseadas nos ensinamentos de Marco Aurélio, Epicteto e Sêneca.',
    clips: [],
    saves: 512,
    reviews: [
      {
        user: 'tiago_filosofia',
        avatar: '🧠',
        rating: 4,
        text: 'Mudou minha perspectiva sobre controle e resiliência.',
      },
    ],
  },
  {
    id: 9,
    title: 'Lex Fridman Podcast',
    meta: 'Lex Fridman · 2018',
    type: 'podcast',
    rating: 4,
    emoji: '🎙️',
    hasClip: true,
    description:
      'Conversas longas e profundas com cientistas, engenheiros, artistas e pensadores sobre inteligência artificial, ciência e a condição humana.',
    clips: [{ name: 'Entrevista Elon Musk', duration: '8:45' }],
    saves: 589,
    reviews: [
      {
        user: 'marcos_ia',
        avatar: '🤖',
        rating: 4,
        text: 'As entrevistas mais profundas e intelectualmente estimulantes.',
      },
    ],
  },
  {
    id: 10,
    title: 'Kurzgesagt',
    meta: 'Kurzgesagt Studio · 2013',
    type: 'vídeo',
    rating: 5,
    emoji: '🎥',
    hasClip: true,
    description:
      'Canal de animações educativas que explica conceitos complexos de ciência, filosofia e tecnologia de forma visualmente deslumbrante.',
    clips: [
      { name: 'O paradoxo de Fermi', duration: '6:12' },
      { name: 'Buracos negros explicados', duration: '7:04' },
    ],
    saves: 892,
    reviews: [
      {
        user: 'sofia_edu',
        avatar: '👧',
        rating: 5,
        text: 'Melhor canal educativo do YouTube. Animações incríveis.',
      },
    ],
  },
  {
    id: 11,
    title: 'Succession',
    meta: 'Jesse Armstrong · 2018',
    type: 'série',
    rating: 5,
    emoji: '📺',
    hasClip: true,
    description:
      'A família Roy, dona de um conglomerado de mídia global, trava batalhas sangrentas pelo controle do império familiar.',
    clips: [
      { name: 'Cena final da 4ª temporada', duration: '5:15' },
      { name: 'Melhores momentos Logan', duration: '4:30' },
    ],
    saves: 1050,
    reviews: [
      {
        user: 'fernanda_drama',
        avatar: '🎭',
        rating: 5,
        text: 'A melhor série da última década. Escrita impecável.',
      },
    ],
  },
  {
    id: 12,
    title: 'A Arte de Fazer Acontecer',
    meta: 'David Allen · 2001',
    type: 'livro',
    rating: 4,
    emoji: '📚',
    hasClip: false,
    description:
      'Um método prático de produtividade conhecido como GTD (Getting Things Done) que ajuda a organizar tarefas e reduzir o estresse mental.',
    clips: [],
    saves: 445,
    reviews: [
      {
        user: 'gabriel_prod',
        avatar: '💼',
        rating: 4,
        text: 'Transformou completamente minha forma de trabalhar e organizar projetos.',
      },
    ],
  },
]

export const shorts = [
  {
    id: 1,
    mediaId: 1,
    caption:
      'A cena mais tensa do filme. Nolan conseguiu capturar a magnitude daquele momento histórico de um jeito único. 🎬',
    user: '@marina_reads',
    avatar: '🧑',
    likes: '12.4k',
    comments: '342',
    saves: '1.8k',
    progress: 45,
  },
  {
    id: 2,
    mediaId: 3,
    caption:
      'O episódio mais estressante da TV. 18 minutos de puro caos na cozinha sem cortes. Obra de arte absoluta. 🍳',
    user: '@carol_series',
    avatar: '🙋',
    likes: '8.7k',
    comments: '215',
    saves: '992',
    progress: 72,
  },
  {
    id: 3,
    mediaId: 5,
    caption:
      'Villeneuve criou algo épico com Duna 2. A fotografia é de outro mundo. Literalmente. 🏜️',
    user: '@lucas_sci',
    avatar: '🧔',
    likes: '15.2k',
    comments: '508',
    saves: '2.1k',
    progress: 30,
  },
  {
    id: 4,
    mediaId: 10,
    caption:
      'O paradoxo de Fermi explicado em 6 minutos. Uma das questões mais perturbadoras da astronomia moderna. 🌌',
    user: '@sofia_edu',
    avatar: '👧',
    likes: '9.3k',
    comments: '187',
    saves: '1.4k',
    progress: 88,
  },
  {
    id: 5,
    mediaId: 11,
    caption:
      'A cena final de Succession. Sem spoilers, mas prepara o coração. A melhor série dos últimos anos terminou perfeitamente. 👑',
    user: '@fernanda_drama',
    avatar: '🎭',
    likes: '18.6k',
    comments: '732',
    saves: '3.2k',
    progress: 55,
  },
]

export const activities = [
  {
    id: 1,
    user: 'marina_reads',
    avatar: '🧑',
    action: 'adicionou ao catálogo',
    mediaId: 1,
    time: 'há 2 minutos',
  },
  {
    id: 2,
    user: 'pedro_cinefilo',
    avatar: '👤',
    action: 'avaliou com ★★★★★',
    mediaId: 5,
    time: 'há 15 minutos',
  },
  {
    id: 3,
    user: 'ana_books',
    avatar: '👩',
    action: 'salvou na lista',
    mediaId: 7,
    time: 'há 1 hora',
  },
  {
    id: 4,
    user: 'carol_series',
    avatar: '🙋',
    action: 'adicionou um clipe a',
    mediaId: 3,
    time: 'há 3 horas',
  },
  {
    id: 5,
    user: 'lucas_sci',
    avatar: '🧔',
    action: 'recomendou',
    mediaId: 10,
    time: 'há 5 horas',
  },
]
