// DISC Test Questions - French Translation
// Based on Situation-Based DISC Assessment from teamazing.com

/**
 * 28 situational questions with 4 options each
 * Each option maps to a DISC type based on the scoring table
 */
export const questions = [
  {
    id: 1,
    text: "Quelle est votre approche du travail ?",
    options: [
      { id: "A", text: "Je prends les choses en main et vise des résultats rapides.", type: "D" },
      { id: "B", text: "Je motive les autres et maintiens une atmosphère positive.", type: "I" },
      { id: "C", text: "Je me concentre sur le travail d'équipe et soutiens les autres.", type: "S" },
      { id: "D", text: "Je garantis la précision et suis les processus.", type: "C" }
    ]
  },
  {
    id: 2,
    text: "Comment gérez-vous les délais ?",
    options: [
      { id: "A", text: "Je les utilise comme motivation pour maintenir l'énergie.", type: "I" },
      { id: "B", text: "Je pousse pour les respecter en avance.", type: "D" },
      { id: "C", text: "Je planifie soigneusement pour les respecter sans stress.", type: "S" },
      { id: "D", text: "Je vérifie les détails pour m'assurer que tout est correct avant de soumettre.", type: "C" }
    ]
  },
  {
    id: 3,
    text: "Quel est votre style de leadership ?",
    options: [
      { id: "A", text: "Soutenant et patient.", type: "S" },
      { id: "B", text: "Direct et orienté vers les objectifs.", type: "D" },
      { id: "C", text: "Charismatique et engageant.", type: "I" },
      { id: "D", text: "Analytique et méthodique.", type: "C" }
    ]
  },
  {
    id: 4,
    text: "Comment réagissez-vous quand un projet prend du retard ?",
    options: [
      { id: "A", text: "Je travaille avec les autres pour résoudre calmement les retards.", type: "S" },
      { id: "B", text: "Je réévalue le plan pour identifier et corriger les problèmes.", type: "C" },
      { id: "C", text: "Je mobilise l'équipe et remonte le moral pour se remettre sur la bonne voie.", type: "I" },
      { id: "D", text: "Je prends le contrôle et pousse l'équipe à rattraper le retard.", type: "D" }
    ]
  },
  {
    id: 5,
    text: "Qu'est-ce qui vous motive le plus dans un environnement de travail ?",
    options: [
      { id: "A", text: "La précision et la qualité du travail.", type: "C" },
      { id: "B", text: "La stabilité et une équipe harmonieuse.", type: "S" },
      { id: "C", text: "Atteindre des objectifs ambitieux.", type: "D" },
      { id: "D", text: "La reconnaissance et les interactions sociales.", type: "I" }
    ]
  },
  {
    id: 6,
    text: "Comment abordez-vous la résolution de problèmes ?",
    options: [
      { id: "A", text: "J'analyse le problème en profondeur avant d'agir.", type: "C" },
      { id: "B", text: "Je cherche une solution avec laquelle tout le monde est à l'aise.", type: "S" },
      { id: "C", text: "Je fais du brainstorming avec les autres et pense de manière créative.", type: "I" },
      { id: "D", text: "Je trouve rapidement la solution la plus efficace.", type: "D" }
    ]
  },
  {
    id: 7,
    text: "En matière de communication, quelle est votre préférence ?",
    options: [
      { id: "A", text: "Être direct et aller droit au but.", type: "D" },
      { id: "B", text: "Être attentionné et soutenant.", type: "S" },
      { id: "C", text: "Être clair et détaillé.", type: "C" },
      { id: "D", text: "Être enthousiaste et engageant.", type: "I" }
    ]
  },
  {
    id: 8,
    text: "Comment gérez-vous les critiques ?",
    options: [
      { id: "A", text: "J'en discute ouvertement et passe rapidement à autre chose.", type: "I" },
      { id: "B", text: "Je l'évalue soigneusement pour améliorer ma performance.", type: "C" },
      { id: "C", text: "J'y réfléchis et considère comment cela affecte l'équipe.", type: "S" },
      { id: "D", text: "Je l'aborde directement et agis si nécessaire.", type: "D" }
    ]
  },
  {
    id: 9,
    text: "Quelle est votre approche de la prise de décision ?",
    options: [
      { id: "A", text: "Je base mes décisions sur les données et une analyse approfondie.", type: "C" },
      { id: "B", text: "Je prends des choix rapides et décisifs.", type: "D" },
      { id: "C", text: "Je préfère prendre mon temps et éviter les risques.", type: "S" },
      { id: "D", text: "Je consulte les autres et considère leur avis.", type: "I" }
    ]
  },
  {
    id: 10,
    text: "Quand vous faites face à un revers, comment réagissez-vous généralement ?",
    options: [
      { id: "A", text: "Je pousse plus fort pour le surmonter.", type: "D" },
      { id: "B", text: "Je reste calme et ajuste mon approche.", type: "S" },
      { id: "C", text: "Je reste positif et encourage les autres.", type: "I" },
      { id: "D", text: "J'analyse ce qui a mal tourné et planifie pour l'éviter à l'avenir.", type: "C" }
    ]
  },
  {
    id: 11,
    text: "Comment préférez-vous travailler en équipe ?",
    options: [
      { id: "A", text: "Je me concentre sur les détails et assure la qualité.", type: "C" },
      { id: "B", text: "Je soutiens les autres et aide à maintenir l'harmonie.", type: "S" },
      { id: "C", text: "Je collabore et garde l'équipe motivée.", type: "I" },
      { id: "D", text: "Je dirige et fais avancer le groupe.", type: "D" }
    ]
  },
  {
    id: 12,
    text: "Comment gérez-vous le stress au travail ?",
    options: [
      { id: "A", text: "Je deviens plus concentré et organisé.", type: "C" },
      { id: "B", text: "Je reste calme et me fie à mes routines pour gérer le stress.", type: "S" },
      { id: "C", text: "J'utilise l'humour et la pensée positive pour désamorcer la tension.", type: "I" },
      { id: "D", text: "Je m'attaque aux défis de front et continue d'avancer.", type: "D" }
    ]
  },
  {
    id: 13,
    text: "Quelle est votre approche du changement ?",
    options: [
      { id: "A", text: "Je l'embrasse et prends les devants pour m'adapter.", type: "D" },
      { id: "B", text: "J'analyse l'impact et planifie en conséquence.", type: "C" },
      { id: "C", text: "Je le vois comme une opportunité et encourage les autres à y participer.", type: "I" },
      { id: "D", text: "Je préfère des changements graduels qui ne perturbent pas la routine.", type: "S" }
    ]
  },
  {
    id: 14,
    text: "Quand vous commencez une nouvelle tâche, comment débutez-vous ?",
    options: [
      { id: "A", text: "Je recueille l'avis des autres et fais du brainstorming.", type: "I" },
      { id: "B", text: "Je fais des recherches et planifie avant d'agir.", type: "C" },
      { id: "C", text: "Je me lance et agis immédiatement.", type: "D" },
      { id: "D", text: "Je me prépare soigneusement et procède de manière constante.", type: "S" }
    ]
  },
  {
    id: 15,
    text: "Comment réagissez-vous généralement face à un conflit ?",
    options: [
      { id: "A", text: "Je le confronte directement et le résous rapidement.", type: "D" },
      { id: "B", text: "Je cherche une résolution pacifique qui satisfait tout le monde.", type: "S" },
      { id: "C", text: "J'essaie d'apaiser les choses et de garder une atmosphère légère.", type: "I" },
      { id: "D", text: "J'analyse la situation et trouve une solution logique.", type: "C" }
    ]
  },
  {
    id: 16,
    text: "Qu'est-ce qui vous pousse à réussir ?",
    options: [
      { id: "A", text: "La poursuite de l'excellence et de la précision.", type: "C" },
      { id: "B", text: "Le désir de gagner et d'obtenir les meilleurs résultats.", type: "D" },
      { id: "C", text: "La chance d'inspirer et de diriger les autres.", type: "I" },
      { id: "D", text: "La satisfaction d'être fiable et digne de confiance.", type: "S" }
    ]
  },
  {
    id: 17,
    text: "Comment gérez-vous les retours des autres ?",
    options: [
      { id: "A", text: "Je les considère et apporte des changements si nécessaire.", type: "D" },
      { id: "B", text: "Je les évalue soigneusement et affine mon travail.", type: "C" },
      { id: "C", text: "Je les apprécie et les utilise pour améliorer mon approche.", type: "I" },
      { id: "D", text: "Je les prends à cœur et m'ajuste pour maintenir l'harmonie.", type: "S" }
    ]
  },
  {
    id: 18,
    text: "Quelle est votre approche de la planification ?",
    options: [
      { id: "A", text: "Je fixe des objectifs ambitieux et définis les étapes pour les atteindre.", type: "D" },
      { id: "B", text: "Je développe des plans détaillés et les suis de près.", type: "C" },
      { id: "C", text: "Je planifie soigneusement pour assurer la cohérence.", type: "S" },
      { id: "D", text: "Je crée des plans flexibles qui permettent la spontanéité.", type: "I" }
    ]
  },
  {
    id: 19,
    text: "Comment priorisez-vous vos tâches ?",
    options: [
      { id: "A", text: "Je m'attaque d'abord aux tâches les plus importantes.", type: "D" },
      { id: "B", text: "J'ordonne les tâches selon leur importance logique.", type: "C" },
      { id: "C", text: "Je priorise les tâches qui maintiennent la stabilité.", type: "S" },
      { id: "D", text: "Je me concentre sur les tâches qui impliquent la collaboration.", type: "I" }
    ]
  },
  {
    id: 20,
    text: "Comment décrivez-vous votre éthique de travail ?",
    options: [
      { id: "A", text: "Orienté vers les détails et minutieux.", type: "C" },
      { id: "B", text: "Énergique et orienté vers les gens.", type: "I" },
      { id: "C", text: "Motivé et axé sur les résultats.", type: "D" },
      { id: "D", text: "Fiable et constant.", type: "S" }
    ]
  },
  {
    id: 21,
    text: "Comment préférez-vous être reconnu pour votre travail ?",
    options: [
      { id: "A", text: "Appréciation discrète et reconnaissance.", type: "S" },
      { id: "B", text: "Reconnaissance publique des réalisations.", type: "D" },
      { id: "C", text: "Reconnaissance de la précision et de la qualité.", type: "C" },
      { id: "D", text: "Retours positifs et reconnaissance sociale.", type: "I" }
    ]
  },
  {
    id: 22,
    text: "Comment abordez-vous l'apprentissage de nouvelles compétences ?",
    options: [
      { id: "A", text: "Je préfère l'apprentissage interactif et en groupe.", type: "I" },
      { id: "B", text: "J'apprends rapidement par l'expérience pratique.", type: "D" },
      { id: "C", text: "Je fais des recherches approfondies et pratique jusqu'à la perfection.", type: "C" },
      { id: "D", text: "J'adopte une approche constante et méthodique.", type: "S" }
    ]
  },
  {
    id: 23,
    text: "Quelle est votre réaction face aux règles ou directives strictes ?",
    options: [
      { id: "A", text: "Je les respecte et les suis de près.", type: "C" },
      { id: "B", text: "Je m'y conforme pour maintenir l'ordre.", type: "S" },
      { id: "C", text: "Je les adapte à la situation.", type: "I" },
      { id: "D", text: "Je les suis si elles aident à atteindre les objectifs.", type: "D" }
    ]
  },
  {
    id: 24,
    text: "Comment gérez-vous votre temps ?",
    options: [
      { id: "A", text: "J'équilibre les tâches avec l'interaction sociale.", type: "I" },
      { id: "B", text: "Je priorise les tâches qui donnent les meilleurs résultats.", type: "D" },
      { id: "C", text: "Je planifie mon emploi du temps avec soin pour assurer précision et efficacité.", type: "C" },
      { id: "D", text: "Je m'en tiens à une routine pour gérer le temps efficacement.", type: "S" }
    ]
  },
  {
    id: 25,
    text: "Quelle est votre approche de la gestion des risques ?",
    options: [
      { id: "A", text: "Je prends des risques calculés pour atteindre mes objectifs.", type: "D" },
      { id: "B", text: "J'analyse les risques en profondeur avant de décider.", type: "C" },
      { id: "C", text: "Je préfère éviter les risques et maintenir la stabilité.", type: "S" },
      { id: "D", text: "Je considère les risques s'ils mènent à des opportunités excitantes.", type: "I" }
    ]
  },
  {
    id: 26,
    text: "Comment préférez-vous gérer les nouveaux défis au travail ?",
    options: [
      { id: "A", text: "J'analyse le défi en détail avant d'agir.", type: "C" },
      { id: "B", text: "Je collabore avec les autres pour trouver une solution créative.", type: "I" },
      { id: "C", text: "Je prends les choses en main et affronte le défi de front.", type: "D" },
      { id: "D", text: "Je l'aborde avec prudence, en considérant l'impact sur les autres.", type: "S" }
    ]
  },
  {
    id: 27,
    text: "Quel rôle prenez-vous généralement dans les discussions de groupe ?",
    options: [
      { id: "A", text: "Je contribue avec enthousiasme et encourage la participation.", type: "I" },
      { id: "B", text: "Je fournis des contributions réfléchies basées sur les faits.", type: "C" },
      { id: "C", text: "Je dirige la conversation et oriente le focus.", type: "D" },
      { id: "D", text: "J'écoute attentivement et offre du soutien là où c'est nécessaire.", type: "S" }
    ]
  },
  {
    id: 28,
    text: "Comment réagissez-vous aux changements soudains dans un projet ?",
    options: [
      { id: "A", text: "Je trouve un moyen de rendre les changements excitants et positifs.", type: "I" },
      { id: "B", text: "J'évalue comment les changements affecteront le plan global avant de procéder.", type: "C" },
      { id: "C", text: "Je préfère comprendre les raisons du changement et m'adapter lentement.", type: "S" },
      { id: "D", text: "Je m'adapte rapidement et maintiens les choses en mouvement.", type: "D" }
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
