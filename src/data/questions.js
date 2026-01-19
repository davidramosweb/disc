// DISC Test Questions - French Translation
// Based on Situation-Based DISC Assessment from teamazing.com

/**
 * 28 situational questions with 4 options each
 * Each option maps to a DISC type based on the scoring table
 */
export const questions = [
  {
    id: 1,
    text: "Laquelle de ces propositions décrit le mieux votre façon de travailler ?",
    options: [
      { id: "A", text: "Je prends les rênes et je vise des résultats rapides.", type: "D" },
      { id: "B", text: "Je motive les autres et je garde une ambiance positive.", type: "I" },
      { id: "C", text: "Je privilégie le travail d’équipe et j’aide les autres.", type: "S" },
      { id: "D", text: "Je veille à la qualité et je respecte les procédures.", type: "C" }
    ]
  },
  {
    id: 2,
    text: "Comment gérez-vous les échéances ?",
    options: [
      { id: "A", text: "Je m’en sers comme moteur pour rester dynamique.", type: "I" },
      { id: "B", text: "Je mets la pression pour finir en avance.", type: "D" },
      { id: "C", text: "Je m’organise pour respecter les délais sans stress.", type: "S" },
      { id: "D", text: "Je relis et je vérifie tout avant de rendre le travail.", type: "C" }
    ]
  },
  {
    id: 3,
    text: "Quel est votre style de leadership ?",
    options: [
      { id: "A", text: "À l’écoute et patient.", type: "S" },
      { id: "B", text: "Direct et axé sur les objectifs.", type: "D" },
      { id: "C", text: "Charismatique et fédérateur.", type: "I" },
      { id: "D", text: "Analytique et méthodique.", type: "C" }
    ]
  },
  {
    id: 4,
    text: "Comment réagissez-vous quand un projet prend du retard ?",
    options: [
      { id: "A", text: "Je travaille avec les autres, calmement, pour rattraper le retard.", type: "S" },
      { id: "B", text: "Je revois le plan pour identifier le problème et le corriger.", type: "C" },
      { id: "C", text: "Je remobilise l’équipe et je redonne de l’élan.", type: "I" },
      { id: "D", text: "Je reprends la main et je pousse l’équipe à rattraper le retard.", type: "D" }
    ]
  },
  {
    id: 5,
    text: "Qu’est-ce qui vous motive le plus au travail ?",
    options: [
      { id: "A", text: "La qualité et la précision.", type: "C" },
      { id: "B", text: "La stabilité et une bonne entente dans l’équipe.", type: "S" },
      { id: "C", text: "Atteindre des objectifs ambitieux.", type: "D" },
      { id: "D", text: "La reconnaissance et les échanges avec les autres.", type: "I" }
    ]
  },
  {
    id: 6,
    text: "Comment abordez-vous la résolution d’un problème ?",
    options: [
      { id: "A", text: "J'analyse le problème en profondeur avant d'agir.", type: "C" },
      { id: "B", text: "Je cherche une solution qui convienne à tout le monde.", type: "S" },
      { id: "C", text: "Je brainstorme avec les autres et je fais preuve de créativité.", type: "I" },
      { id: "D", text: "Je vais droit au but et je trouve vite la solution la plus efficace.", type: "D" }
    ]
  },
  {
    id: 7,
    text: "Quand vous communiquez, vous préférez…",
    options: [
      { id: "A", text: "Être direct et aller à l’essentiel.", type: "D" },
      { id: "B", text: "Être attentionné et encourageant.", type: "S" },
      { id: "C", text: "Être précis et donner des détails.", type: "C" },
      { id: "D", text: "Être enthousiaste et entraînant.", type: "I" }
    ]
  },
  {
    id: 8,
    text: "Comment gérez-vous les critiques ?",
    options: [
      { id: "A", text: "J'en discute ouvertement et passe rapidement à autre chose.", type: "I" },
      { id: "B", text: "Je les analyse pour m’améliorer.", type: "C" },
      { id: "C", text: "Je prends du recul et je pense à l’impact sur l’équipe.", type: "S" },
      { id: "D", text: "Je réponds directement et j’agis si besoin.", type: "D" }
    ]
  },
  {
    id: 9,
    text: "Comment prenez-vous vos décisions ?",
    options: [
      { id: "A", text: "Je base mes décisions sur les données et une analyse approfondie.", type: "C" },
      { id: "B", text: "Je tranche vite et je décide.", type: "D" },
      { id: "C", text: "Je préfère prendre mon temps et éviter les risques.", type: "S" },
      { id: "D", text: "Je demande l’avis des autres et je prends leurs retours en compte.", type: "I" }
    ]
  },
  {
    id: 10,
    text: "Face à un contretemps, vous réagissez plutôt…",
    options: [
      { id: "A", text: "Je redouble d’efforts pour le surmonter.", type: "D" },
      { id: "B", text: "Je reste calme et j’ajuste ma façon de faire.", type: "S" },
      { id: "C", text: "Je garde le moral et j’encourage les autres.", type: "I" },
      { id: "D", text: "J’analyse ce qui n’a pas marché et je vois comment l’éviter la prochaine fois.", type: "C" }
    ]
  },
  {
    id: 11,
    text: "En équipe, vous préférez…",
    options: [
      { id: "A", text: "Veiller aux détails et à la qualité.", type: "C" },
      { id: "B", text: "Je soutiens les autres et aide à maintenir l'harmonie.", type: "S" },
      { id: "C", text: "Collaborer et maintenir l’énergie du groupe.", type: "I" },
      { id: "D", text: "Prendre le lead et faire avancer l’équipe.", type: "D" }
    ]
  },
  {
    id: 12,
    text: "Comment gérez-vous le stress au travail ?",
    options: [
      { id: "A", text: "Je me recentre et je m’organise davantage.", type: "C" },
      { id: "B", text: "Je reste calme et je m’appuie sur mes routines.", type: "S" },
      { id: "C", text: "J’utilise l’humour et le positif pour relâcher la pression.", type: "I" },
      { id: "D", text: "Je fonce et j’affronte le défi.", type: "D" }
    ]
  },
  {
    id: 13,
    text: "Quel est votre rapport au changement ?",
    options: [
      { id: "A", text: "Je l’accueille et je prends les devants pour m’adapter.", type: "D" },
      { id: "B", text: "J'analyse l'impact et planifie en conséquence.", type: "C" },
      { id: "C", text: "Je vois une opportunité et j’embarque les autres.", type: "I" },
      { id: "D", text: "Je préfère des changements progressifs, sans bouleverser la routine.", type: "S" }
    ]
  },
  {
    id: 14,
    text: "Quand vous commencez une nouvelle tâche, comment débutez-vous ?",
    options: [
      { id: "A", text: "Je sollicite des idées et je brainstorme.", type: "I" },
      { id: "B", text: "Je fais des recherches et planifie avant d'agir.", type: "C" },
      { id: "C", text: "Je me lance tout de suite.", type: "D" },
      { id: "D", text: "Je me prépare et j’avance pas à pas.", type: "S" }
    ]
  },
  {
    id: 15,
    text: "En cas de conflit, vous…",
    options: [
      { id: "A", text: "Je le confronte directement et je cherche une solution rapide.", type: "D" },
      { id: "B", text: "Je cherche une issue apaisée qui convienne à chacun.", type: "S" },
      { id: "C", text: "J’essaie de détendre l’atmosphère et de garder le ton léger.", type: "I" },
      { id: "D", text: "J’analyse la situation et je trouve une solution rationnelle.", type: "C" }
    ]
  },
  {
    id: 16,
    text: "Qu'est-ce qui vous pousse à réussir ?",
    options: [
      { id: "A", text: "Viser l’excellence et la précision.", type: "C" },
      { id: "B", text: "Gagner et obtenir les meilleurs résultats.", type: "D" },
      { id: "C", text: "Inspirer et entraîner les autres.", type: "I" },
      { id: "D", text: "Être quelqu’un de fiable sur qui on peut compter.", type: "S" }
    ]
  },
  {
    id: 17,
    text: "Comment accueillez-vous les retours des autres ?",
    options: [
      { id: "A", text: "Je les prends en compte et j’ajuste si nécessaire.", type: "D" },
      { id: "B", text: "Je les examine attentivement et j’améliore mon travail.", type: "C" },
      { id: "C", text: "Je les apprécie et je m’en sers pour progresser.", type: "I" },
      { id: "D", text: "Je les prends à cœur et je m’adapte pour préserver l’harmonie.", type: "S" }
    ]
  },
  {
    id: 18,
    text: "Quelle est votre approche de la planification ?",
    options: [
      { id: "A", text: "Je me fixe des objectifs ambitieux et je trace les étapes.", type: "D" },
      { id: "B", text: "Je fais un plan détaillé et je le suis de près.", type: "C" },
      { id: "C", text: "Je planifie pour assurer de la régularité.", type: "S" },
      { id: "D", text: "Je fais un plan flexible, avec de la place pour l’imprévu.", type: "I" }
    ]
  },
  {
    id: 19,
    text: "Comment priorisez-vous vos tâches ?",
    options: [
      { id: "A", text: "Je commence par l’essentiel.", type: "D" },
      { id: "B", text: "J'ordonne les tâches selon leur importance logique.", type: "C" },
      { id: "C", text: "Je privilégie ce qui garantit la stabilité.", type: "S" },
      { id: "D", text: "Je privilégie ce qui implique de la collaboration.", type: "I" }
    ]
  },
  {
    id: 20,
    text: "Comment décririez-vous votre façon de travailler ?",
    options: [
      { id: "A", text: "Minutieux(se) et très attentif(ve) aux détails.", type: "C" },
      { id: "B", text: "Dynamique et tourné(e) vers les autres.", type: "I" },
      { id: "C", text: "Ambitieux(se) et axé(e) sur les résultats.", type: "D" },
      { id: "D", text: "Fiable et constant(e).", type: "S" }
    ]
  },
  {
    id: 21,
    text: "Quelle forme de reconnaissance préférez-vous ?",
    options: [
      { id: "A", text: "Une reconnaissance discrète, en privé.", type: "S" },
      { id: "B", text: "Une reconnaissance publique de mes réussites.", type: "D" },
      { id: "C", text: "Qu’on reconnaisse la qualité et la précision de mon travail.", type: "C" },
      { id: "D", text: "Des retours positifs et une reconnaissance sociale.", type: "I" }
    ]
  },
  {
    id: 22,
    text: "Comment abordez-vous l'apprentissage de nouvelles compétences ?",
    options: [
      { id: "A", text: "En échangeant et en apprenant en groupe.", type: "I" },
      { id: "B", text: "En pratiquant : j’apprends en faisant.", type: "D" },
      { id: "C", text: "En me documentant et en m’entraînant jusqu’à maîtriser.", type: "C" },
      { id: "D", text: "De façon progressive et méthodique.", type: "S" }
    ]
  },
  {
    id: 23,
    text: "Quelle est votre réaction face aux règles ou directives strictes ?",
    options: [
      { id: "A", text: "Je les respecte et je les applique.", type: "C" },
      { id: "B", text: "Je m’y tiens pour maintenir l’ordre.", type: "S" },
      { id: "C", text: "Je les adapte au contexte.", type: "I" },
      { id: "D", text: "Je les suis si elles servent l’objectif.", type: "D" }
    ]
  },
  {
    id: 24,
    text: "Comment gérez-vous votre temps ?",
    options: [
      { id: "A", text: "Je trouve un équilibre entre le travail et les échanges.", type: "I" },
      { id: "B", text: "Je me concentre sur ce qui apporte le plus de résultats.", type: "D" },
      { id: "C", text: "Je planifie mon agenda pour être efficace et précis.", type: "C" },
      { id: "D", text: "Je m’en tiens à une routine.", type: "S" }
    ]
  },
  {
    id: 25,
    text: "Quelle est votre approche face au risque ?",
    options: [
      { id: "A", text: "Je prends des risques calculés pour avancer.", type: "D" },
      { id: "B", text: "J’évalue les risques en détail avant de décider.", type: "C" },
      { id: "C", text: "Je préfère éviter les risques et rester dans la stabilité.", type: "S" },
      { id: "D", text: "Je prends des risques si ça ouvre des opportunités stimulantes.", type: "I" }
    ]
  },
  {
    id: 26,
    text: "Face à un nouveau défi au travail, vous…",
    options: [
      { id: "A", text: "J’analyse le défi en détail avant d’agir.", type: "C" },
      { id: "B", text: "Je cherche une solution créative avec les autres.", type: "I" },
      { id: "C", text: "Je prends les rênes et j’attaque de front.", type: "D" },
      { id: "D", text: "J’avance prudemment en pensant à l’impact sur les autres.", type: "S" }
    ]
  },
  {
    id: 27,
    text: "Quel rôle prenez-vous généralement dans les discussions de groupe ?",
    options: [
      { id: "A", text: "Je participe avec enthousiasme et j’encourage les autres.", type: "I" },
      { id: "B", text: "J’apporte des idées réfléchies, basées sur des faits.", type: "C" },
      { id: "C", text: "Je mène la discussion et je donne la direction.", type: "D" },
      { id: "D", text: "J’écoute et je soutiens quand c’est utile.", type: "S" }
    ]
  },
  {
    id: 28,
    text: "Comment réagissez-vous à un changement soudain dans un projet ?",
    options: [
      { id: "A", text: "Je le rends stimulant et positif.", type: "I" },
      { id: "B", text: "J’évalue l’impact sur le plan avant d’avancer.", type: "C" },
      { id: "C", text: "Je veux comprendre pourquoi et je m’adapte progressivement.", type: "S" },
      { id: "D", text: "Je m’adapte vite et je fais avancer les choses.", type: "D" }
    ]
  }
]

// DISC type descriptions in French (unchanged)
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
