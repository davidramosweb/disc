// DISC Test Questions - French Translation
// Based on ODAT (Open DISC Assessment Test) from OpenPsychometrics

export const questions = [
  // Dominance (D) - 4 questions
  {
    id: 1,
    text: "Je mets les gens sous pression.",
    category: "D"
  },
  {
    id: 2,
    text: "J'ai un fort besoin de pouvoir.",
    category: "D"
  },
  {
    id: 3,
    text: "J'essaie de surpasser les autres.",
    category: "D"
  },
  {
    id: 4,
    text: "Je suis toujours à la recherche de moyens de gagner de l'argent.",
    category: "D"
  },

  // Influence (I) - 4 questions
  {
    id: 5,
    text: "J'aime faire partie d'une foule bruyante.",
    category: "I"
  },
  {
    id: 6,
    text: "Je veux que les étrangers m'aiment.",
    category: "I"
  },
  {
    id: 7,
    text: "Je plaisante beaucoup.",
    category: "I"
  },
  {
    id: 8,
    text: "Je fais beaucoup de bruit.",
    category: "I"
  },

  // Steadiness (S) - 4 questions
  {
    id: 9,
    text: "J'hésite à critiquer les idées des autres.",
    category: "S"
  },
  {
    id: 10,
    text: "Je valorise la coopération plutôt que la compétition.",
    category: "S"
  },
  {
    id: 11,
    text: "Je veux juste que tout le monde soit égal.",
    category: "S"
  },
  {
    id: 12,
    text: "Je ne me vante que rarement.",
    category: "S"
  },

  // Compliance (C) - 4 questions
  {
    id: 13,
    text: "Je suis émotionnellement réservé(e).",
    category: "C"
  },
  {
    id: 14,
    text: "Je lis les petits caractères.",
    category: "C"
  },
  {
    id: 15,
    text: "J'aime l'ordre et la régularité.",
    category: "C"
  },
  {
    id: 16,
    text: "Ma première réaction face à une idée est d'en voir les défauts.",
    category: "C"
  }
]

// Likert scale options in French
export const likertOptions = [
  { value: 1, label: "Pas du tout d'accord" },
  { value: 2, label: "Pas d'accord" },
  { value: 3, label: "Neutre" },
  { value: 4, label: "D'accord" },
  { value: 5, label: "Tout à fait d'accord" }
]

// DISC type descriptions in French
export const discDescriptions = {
  D: {
    name: "Dominance",
    shortDescription: "Personnalité directe, orientée vers les résultats",
    fullDescription: "Les personnes avec un profil Dominance sont des leaders naturels. Elles sont directes, orientées vers les résultats et aiment relever des défis. Elles prennent des décisions rapidement et préfèrent avoir le contrôle des situations. Elles sont compétitives, ambitieuses et n'ont pas peur de prendre des risques pour atteindre leurs objectifs.",
    strengths: [
      "Prise de décision rapide",
      "Leadership naturel",
      "Orientation vers les résultats",
      "Capacité à relever des défis"
    ],
    challenges: [
      "Peut paraître autoritaire",
      "Impatience avec les autres",
      "Difficulté à déléguer",
      "Peut négliger les détails"
    ],
    color: "#E53935"
  },
  I: {
    name: "Influence",
    shortDescription: "Personnalité extravertie, sociale et optimiste",
    fullDescription: "Les personnes avec un profil Influence sont enthousiastes, optimistes et sociables. Elles excellent dans la communication et aiment être entourées de gens. Elles sont créatives, persuasives et motivent naturellement les autres. Elles préfèrent un environnement de travail collaboratif et convivial.",
    strengths: [
      "Excellente communication",
      "Capacité à motiver les autres",
      "Créativité et enthousiasme",
      "Création de réseaux"
    ],
    challenges: [
      "Peut manquer d'attention aux détails",
      "Difficulté à respecter les délais",
      "Trop optimiste parfois",
      "Peut éviter les confrontations"
    ],
    color: "#FFB300"
  },
  S: {
    name: "Stabilité",
    shortDescription: "Personnalité stable, patiente et coopérative",
    fullDescription: "Les personnes avec un profil Stabilité sont fiables, patientes et excellentes en travail d'équipe. Elles préfèrent un environnement stable et prévisible. Elles sont loyales, à l'écoute et savent créer une atmosphère harmonieuse. Elles excellent dans le soutien aux autres et la médiation.",
    strengths: [
      "Grande patience",
      "Excellent travail d'équipe",
      "Fiabilité et loyauté",
      "Capacité d'écoute"
    ],
    challenges: [
      "Résistance au changement",
      "Difficulté à dire non",
      "Peut éviter les conflits",
      "Lenteur dans la prise de décision"
    ],
    color: "#43A047"
  },
  C: {
    name: "Conformité",
    shortDescription: "Personnalité analytique, méthodique et précise",
    fullDescription: "Les personnes avec un profil Conformité sont analytiques, méthodiques et précises. Elles accordent une grande importance à la qualité et à l'exactitude. Elles sont réfléchies, organisées et excellent dans l'analyse de données et la résolution de problèmes complexes. Elles préfèrent travailler avec des procédures claires et des standards élevés.",
    strengths: [
      "Attention aux détails",
      "Analyse approfondie",
      "Organisation et méthode",
      "Haute qualité du travail"
    ],
    challenges: [
      "Peut être trop critique",
      "Perfectionnisme excessif",
      "Difficulté à prendre des risques",
      "Peut analyser trop longtemps"
    ],
    color: "#1E88E5"
  }
}
