"use strict";

/*
 * Les notes sont des paliers de jeu allant de 1 à 10.
 *
 * Les références utilisées comme inspiration sont notamment :
 * - Films et séries : IMDb / TMDb
 * - Jeux vidéo : Metacritic / OpenCritic
 * - Musique : Rate Your Music / AllMusic
 * - Cuisine : TasteAtlas et guides culinaires
 *
 * Les notes ne sont pas récupérées en temps réel.
 * Elles servent uniquement de base au jeu.
 */

const database = [
  {
    id: "films",
    name: "Films",
    icon: "🎬",
    description: "Films populaires connus du grand public",
    source: "Paliers inspirés d'IMDb et TMDb",
    ratings: {
      1: [
        ["Dragonball Evolution", "Une adaptation très mal reçue d'un manga extrêmement populaire."],
        ["The Last Airbender", "Une adaptation critiquée pour son scénario et sa mise en scène."],
        ["Cats", "Une comédie musicale connue pour ses effets numériques très déroutants."]
      ],
      2: [
        ["Morbius", "Un film de super-héros populaire mais très critiqué pour son écriture."],
        ["After Earth", "Une aventure de science-fiction au concept intéressant mais à l'accueil froid."],
        ["Suicide Squad", "Un blockbuster connu pour son montage et son scénario très discutés."]
      ],
      3: [
        ["Venom: Let There Be Carnage", "Une suite de super-héros énergique mais jugée très inégale."],
        ["Jurassic World: Dominion", "Un grand spectacle connu mais souvent considéré comme décevant."],
        ["Les Quatre Fantastiques", "Une nouvelle adaptation de Marvel qui n'a pas convaincu le public."]
      ],
      4: [
        ["The Mummy", "Une aventure fantastique portée par Tom Cruise mais reçue froidement."],
        ["Pixels", "Une comédie nostalgique autour des jeux vidéo d'arcade."],
        ["Independence Day: Resurgence", "Une suite spectaculaire mais moins marquante que l'original."]
      ],
      5: [
        ["Transformers: The Last Knight", "Un film d'action spectaculaire mais souvent jugé répétitif."],
        ["Cinquante nuances de Grey", "Un film très connu avec un accueil critique plutôt partagé."],
        ["Alien: Covenant", "Une suite de science-fiction visuellement réussie mais inégale."]
      ],
      6: [
        ["Black Adam", "Un film de super-héros spectaculaire avec une réception mitigée."],
        ["Les Animaux fantastiques", "Un spin-off de Harry Potter apprécié pour son univers mais inégal."],
        ["Uncharted", "Une aventure grand public inspirée d'une célèbre série de jeux vidéo."]
      ],
      7: [
        ["Avatar", "Un film spectaculaire devenu une référence technologique au cinéma."],
        ["OSS 117 : Le Caire, nid d'espions", "Une comédie française très populaire basée sur un humour volontairement rétro."],
        ["Le Dîner de cons", "Une comédie française culte connue pour ses dialogues et ses personnages."]
      ],
      8: [
        ["Inception", "Un thriller ambitieux de Christopher Nolan basé sur les rêves et la mémoire."],
        ["Interstellar", "Une grande aventure spatiale connue pour sa musique et ses émotions."],
        ["La La Land", "Une comédie musicale moderne très appréciée pour sa mise en scène."]
      ],
      9: [
        ["Intouchables", "Une comédie dramatique française devenue un immense succès international."],
        ["Le Seigneur des anneaux : Le Retour du roi", "Une conclusion épique récompensée par de nombreux prix."],
        ["Le Parrain", "Une saga criminelle considérée comme l'un des grands classiques du cinéma."]
      ],
      10: [
        ["Pulp Fiction", "Un film culte de Quentin Tarantino connu pour ses dialogues et sa narration."],
        ["Forrest Gump", "Une grande fresque populaire portée par Tom Hanks."],
        ["Le Fabuleux Destin d'Amélie Poulain", "Une œuvre française très appréciée pour son univers visuel et sa poésie."]
      ]
    }
  },

  {
    id: "series",
    name: "Séries",
    icon: "📺",
    description: "Séries françaises et internationales incontournables",
    source: "Paliers inspirés d'IMDb et TMDb",
    ratings: {
      1: [
        ["Inhumans", "Une série Marvel très critiquée pour sa réalisation et ses effets visuels."],
        ["The I-Land", "Une série de science-fiction connue pour son scénario peu convaincant."],
        ["The Idol", "Une série musicale très médiatisée mais largement divisée."]
      ],
      2: [
        ["Iron Fist", "Une série Marvel qui a déçu par son rythme et son personnage principal."],
        ["Resident Evil", "Une adaptation très libre de la célèbre franchise de jeux vidéo."],
        ["The Witcher: Blood Origin", "Un spin-off fantasy qui a reçu un accueil très mitigé."]
      ],
      3: [
        ["Secret Invasion", "Une série Marvel ambitieuse mais critiquée pour son écriture."],
        ["The Walking Dead: World Beyond", "Un spin-off post-apocalyptique au rythme assez lent."],
        ["Halo", "Une adaptation de jeu vidéo avec de bonnes idées mais une réception partagée."]
      ],
      4: [
        ["Obi-Wan Kenobi", "Une série Star Wars attendue mais jugée irrégulière."],
        ["Le Livre de Boba Fett", "Une série visuellement réussie mais à la structure particulière."],
        ["The 100", "Une série de science-fiction populaire dont les dernières saisons ont divisé."]
      ],
      5: [
        ["The Witcher", "Une série fantasy connue pour Henry Cavill et ses nombreux changements de ton."],
        ["Altered Carbon", "Une série de science-fiction ambitieuse avec une seconde saison moins appréciée."],
        ["The Rain", "Une série post-apocalyptique nordique au concept efficace mais inégal."]
      ],
      6: [
        ["Lupin", "Une série française populaire portée par Omar Sy."],
        ["La Casa de Papel", "Un phénomène mondial connu pour ses braquages et ses personnages."],
        ["The Mandalorian", "Une série Star Wars appréciée pour son ambiance de western spatial."]
      ],
      7: [
        ["Friends", "Une sitcom culte devenue extrêmement populaire dans le monde entier."],
        ["The Office", "Une comédie américaine connue pour son humour gênant et ses personnages attachants."],
        ["Kaamelott", "Une série française culte mélangeant humour, légende arthurienne et dialogues mémorables."]
      ],
      8: [
        ["Better Call Saul", "Un drame judiciaire et criminel particulièrement apprécié pour ses personnages."],
        ["Succession", "Une série dramatique sur une famille riche et ses luttes de pouvoir."],
        ["Le Jeu de la dame", "Une mini-série élégante autour des échecs et de la compétition."]
      ],
      9: [
        ["Breaking Bad", "Une transformation criminelle devenue l'une des références de la télévision."],
        ["Chernobyl", "Une mini-série historique tendue autour de la catastrophe nucléaire."],
        ["Sherlock", "Une adaptation moderne du célèbre détective avec Benedict Cumberbatch."]
      ],
      10: [
        ["Game of Thrones", "Une immense fresque médiévale-fantastique devenue un phénomène mondial."],
        ["The Wire", "Une chronique réaliste de Baltimore et de ses institutions."],
        ["Band of Brothers", "Une fresque militaire reconnue pour son réalisme et ses personnages."]
      ]
    }
  },

  {
    id: "musique",
    name: "Musique",
    icon: "🎵",
    description: "Artistes et albums connus par le public français",
    source: "Paliers inspirés de Rate Your Music et AllMusic",
    ratings: {
      1: [
        ["Lulu — Lou Reed et Metallica", "Une collaboration très connue pour son accueil extrêmement divisé."],
        ["Cut the Crap — The Clash", "Un album tardif très inférieur à la réputation du groupe."],
        ["Revival — Eminem", "Un album très médiatisé mais souvent critiqué pour sa production."]
      ],
      2: [
        ["Solar Power — Lorde", "Un virage musical plus doux qui a divisé les fans."],
        ["The Big Day — Chance the Rapper", "Un album ambitieux mais jugé très irrégulier."],
        ["Man of the Woods — Justin Timberlake", "Un disque populaire mais considéré comme peu marquant."]
      ],
      3: [
        ["Chinese Democracy — Guns N' Roses", "Un album très attendu après une production interminable."],
        ["Changes — Justin Bieber", "Un album pop-R&B connu mais reçu de manière plutôt mitigée."],
        ["Music of the Spheres — Coldplay", "Un album très populaire mais jugé moins inspiré par certains fans."]
      ],
      4: [
        ["Encore — Eminem", "Un album qui contient plusieurs grands titres mais aussi des morceaux très discutés."],
        ["Witness — Katy Perry", "Un album pop connu pour son changement de direction artistique."],
        ["Humanz — Gorillaz", "Un album collaboratif ambitieux mais dont l'ensemble a divisé."]
      ],
      5: [
        ["Tranquility Base Hotel & Casino — Arctic Monkeys", "Un album plus expérimental et moins immédiat que les précédents."],
        ["Donda — Kanye West", "Un album massif et ambitieux avec une réception très partagée."],
        ["Positions — Ariana Grande", "Un album pop-R&B élégant mais plutôt prudent."]
      ],
      6: [
        ["Random Access Memories — Daft Punk", "Une production très soignée entre disco, funk et pop."],
        ["Stromae — Racine carrée", "Un album francophone extrêmement populaire et très produit."],
        ["Future Nostalgia — Dua Lipa", "Un album pop dansant porté par de nombreux singles."]
      ],
      7: [
        ["Back to Black — Amy Winehouse", "Un album soul rétro devenu une référence populaire."],
        ["Orelsan — Civilisation", "Un album français très populaire mêlant rap, introspection et sujets sociaux."],
        ["Aya Nakamura — Nakamura", "Un album francophone qui a largement dépassé les frontières françaises."]
      ],
      8: [
        ["Discovery — Daft Punk", "Un album électronique très accessible, connu pour ses mélodies et ses robots."],
        ["To Pimp a Butterfly — Kendrick Lamar", "Un album hip-hop dense autour de l'identité et de la société."],
        ["Meteora — Linkin Park", "Un album rock très populaire auprès de toute une génération."]
      ],
      9: [
        ["Abbey Road — The Beatles", "Un album pop-rock considéré comme l'un des grands classiques du groupe."],
        ["The Miseducation of Lauryn Hill", "Un mélange marquant de hip-hop, soul et reggae."],
        ["Nevermind — Nirvana", "Un album qui a popularisé le grunge à l'échelle mondiale."]
      ],
      10: [
        ["The Dark Side of the Moon — Pink Floyd", "Un album conceptuel célèbre pour son ambiance et sa cohérence."],
        ["OK Computer — Radiohead", "Un album rock influent autour de la technologie et de l'aliénation."],
        ["Thriller — Michael Jackson", "L'un des albums les plus populaires et les plus vendus de l'histoire."]
      ]
    }
  },

  {
    id: "jeux-video",
    name: "Jeux vidéo",
    icon: "🎮",
    description: "Jeux connus sur consoles, PC et mobile",
    source: "Paliers inspirés de Metacritic et OpenCritic",
    ratings: {
      1: [
        ["The Lord of the Rings: Gollum", "Un jeu très attendu dans un univers connu mais extrêmement mal accueilli."],
        ["Ride to Hell: Retribution", "Un jeu d'action tristement célèbre pour ses bugs et ses contrôles."],
        ["Rambo: The Video Game", "Une adaptation de film qui n'a pas convaincu par son gameplay."]
      ],
      2: [
        ["Sonic the Hedgehog (2006)", "Un épisode très connu pour ses bugs et ses problèmes techniques."],
        ["Duke Nukem Forever", "Un jeu resté en développement pendant de nombreuses années."],
        ["Fallout 76 à sa sortie", "Un jeu en ligne lancé dans un état très critiqué."]
      ],
      3: [
        ["Marvel's Avengers", "Un jeu de super-héros spectaculaire mais très répétitif."],
        ["Balan Wonderworld", "Un jeu de plateformes coloré mais critiqué pour ses mécaniques."],
        ["Babylon's Fall", "Un jeu d'action en ligne rapidement abandonné."]
      ],
      4: [
        ["Anthem", "Un jeu avec d'excellentes sensations de déplacement mais peu de contenu durable."],
        ["Biomutant", "Un monde ouvert original mais jugé trop répétitif."],
        ["Watch Dogs: Legion", "Une idée de recrutement originale dans un monde ouvert inégal."]
      ],
      5: [
        ["Starfield", "Un jeu de rôle spatial ambitieux mais parfois critiqué pour son exploration."],
        ["Pokémon Écarlate et Violet", "Des idées intéressantes mais de nombreux problèmes techniques."],
        ["FIFA 23", "Un épisode très populaire mais aux évolutions jugées limitées."]
      ],
      6: [
        ["Assassin's Creed Valhalla", "Une très grande aventure viking avec un rythme parfois inégal."],
        ["Hogwarts Legacy", "Un jeu populaire pour son exploration de l'univers Harry Potter."],
        ["Final Fantasy XVI", "Un RPG spectaculaire au système de combat très dynamique."]
      ],
      7: [
        ["Grand Theft Auto V", "Un immense monde ouvert devenu l'un des jeux les plus populaires de l'histoire."],
        ["The Last of Us Part II", "Une aventure ambitieuse qui a beaucoup divisé les joueurs."],
        ["Super Mario Odyssey", "Un jeu de plateformes inventif et accessible."]
      ],
      8: [
        ["Minecraft", "Un jeu de construction devenu un phénomène culturel mondial."],
        ["Hades", "Un roguelike très apprécié pour ses combats et sa narration."],
        ["God of War Ragnarök", "Une aventure nordique spectaculaire et riche en personnages."]
      ],
      9: [
        ["The Legend of Zelda: Breath of the Wild", "Un monde ouvert qui a renouvelé la formule de Zelda."],
        ["Red Dead Redemption 2", "Une fresque western extrêmement détaillée."],
        ["Elden Ring", "Un jeu d'action-RPG connu pour son monde ouvert et sa difficulté."]
      ],
      10: [
        ["Super Mario Galaxy", "Un jeu de plateformes inventif basé sur la gravité et l'exploration."],
        ["Portal 2", "Un jeu de réflexion connu pour ses puzzles et son humour."],
        ["The Last of Us", "Une aventure narrative marquante par ses personnages et son écriture."]
      ]
    }
  },

  {
    id: "cuisine",
    name: "Cuisine",
    icon: "🍽️",
    description: "Plats connus et appréciés en France",
    source: "Paliers indicatifs inspirés de guides culinaires",
    ratings: {
      1: [
        ["Surströmming", "Un hareng fermenté suédois célèbre pour son odeur très puissante."],
        ["Hákarl", "Une spécialité islandaise de requin fermenté au goût très particulier."],
        ["Natto", "Des graines de soja fermentées à la texture très filante."]
      ],
      2: [
        ["Vegemite", "Une pâte à tartiner australienne très salée."],
        ["Marmite", "Une pâte à tartiner britannique au goût extrêmement concentré."],
        ["Durian", "Un fruit crémeux dont l'odeur peut être difficile à supporter."]
      ],
      3: [
        ["Escargots", "Une spécialité française appréciée par certains mais difficile à essayer pour d'autres."],
        ["Huîtres", "Un produit de la mer dont la texture divise beaucoup les convives."],
        ["Andouillette", "Une charcuterie française au goût et à l'odeur très marqués."]
      ],
      4: [
        ["Boudin noir", "Une charcuterie riche et épicée qui ne plaît pas à tout le monde."],
        ["Tripes à la mode de Caen", "Une spécialité normande traditionnelle au caractère prononcé."],
        ["Foie de morue", "Un aliment très riche dont la texture peut surprendre."]
      ],
      5: [
        ["Couscous", "Un plat convivial très populaire avec de nombreuses variantes."],
        ["Paella", "Un plat espagnol généreux à base de riz et de garnitures variées."],
        ["Kebab", "Un repas très populaire en France, avec une qualité variable selon l'adresse."]
      ],
      6: [
        ["Sushi", "Une cuisine précise où la qualité du riz et du poisson est essentielle."],
        ["Ramen", "Une soupe japonaise réconfortante avec des bouillons très différents."],
        ["Poké bowl", "Un plat moderne associant riz, poisson, légumes et sauce."]
      ],
      7: [
        ["Burger", "Un classique populaire dont la qualité dépend fortement des ingrédients."],
        ["Pizza", "Un plat universel avec d'innombrables styles et recettes."],
        ["Crêpes", "Une spécialité française simple, populaire et très personnalisable."]
      ],
      8: [
        ["Raclette", "Un plat convivial très apprécié lors des repas entre amis."],
        ["Tartiflette", "Un gratin savoyard généreux à base de pommes de terre et de reblochon."],
        ["Bœuf bourguignon", "Un grand classique français mijoté longuement dans le vin rouge."]
      ],
      9: [
        ["Croissant au beurre", "Une viennoiserie française emblématique quand elle est bien réalisée."],
        ["Steak frites", "Un grand classique populaire qui repose sur la qualité de produits simples."],
        ["Tiramisu", "Un dessert italien très apprécié pour son café, son mascarpone et sa texture."]
      ],
      10: [
        ["Macarons", "Une pâtisserie française délicate connue pour ses couleurs et ses textures."],
        ["Fondant au chocolat", "Un dessert très populaire apprécié pour son cœur coulant."],
        ["Pain au chocolat", "Une viennoiserie très connue et particulièrement populaire en France."]
      ]
    }
  }
];

const state = {
  currentCategory: null,
  secretRating: null,
  availableHints: [],
  roundNumber: 0,
  hasValidated: false
};

const elements = {
  categoryScreen: document.querySelector("#categoryScreen"),
  categoryGrid: document.querySelector("#categoryGrid"),
  randomCategoryButton: document.querySelector("#randomCategoryButton"),

  gameScreen: document.querySelector("#gameScreen"),
  changeCategoryButton: document.querySelector("#changeCategoryButton"),
  categoryName: document.querySelector("#categoryName"),
  categorySource: document.querySelector("#categorySource"),
  categoryIcon: document.querySelector("#categoryIcon"),
  roundNumber: document.querySelector("#roundNumber"),

  hintsList: document.querySelector("#hintsList"),
  hintCounter: document.querySelector("#hintCounter"),
  hintButton: document.querySelector("#hintButton"),

  guessSelect: document.querySelector("#guessSelect"),
  validateButton: document.querySelector("#validateButton"),

  resultPanel: document.querySelector("#resultPanel"),
  resultTitle: document.querySelector("#resultTitle"),
  resultText: document.querySelector("#resultText"),
  errorMargin: document.querySelector("#errorMargin"),
  nextRoundButton: document.querySelector("#nextRoundButton")
};

function randomInteger(max) {
  return Math.floor(Math.random() * max);
}

function shuffle(array) {
  const result = [...array];

  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = randomInteger(index + 1);

    [result[index], result[randomIndex]] = [
      result[randomIndex],
      result[index]
    ];
  }

  return result;
}

function getRandomCategory() {
  return database[randomInteger(database.length)];
}

function createCategoryCard(category) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "category-card";

  const icon = document.createElement("div");
  icon.className = "category-card-icon";
  icon.textContent = category.icon;

  const content = document.createElement("div");
  content.className = "category-card-content";

  const title = document.createElement("p");
  title.className = "category-card-title";
  title.textContent = category.name;

  const description = document.createElement("p");
  description.className = "category-card-description";
  description.textContent = category.description;

  content.append(title, description);
  button.append(icon, content);

  button.addEventListener("click", () => {
    startRound(category);
  });

  return button;
}

function renderCategoryChoices() {
  elements.categoryGrid.replaceChildren();

  database.forEach((category) => {
    elements.categoryGrid.appendChild(createCategoryCard(category));
  });
}

function showCategoryScreen() {
  elements.gameScreen.hidden = true;
  elements.categoryScreen.hidden = false;
}

function showGameScreen() {
  elements.categoryScreen.hidden = true;
  elements.gameScreen.hidden = false;
}

function createHintElement(hint) {
  const listItem = document.createElement("li");
  listItem.className = "hint";

  const title = document.createElement("p");
  title.className = "hint-title";
  title.textContent = hint[0];

  const description = document.createElement("p");
  description.className = "hint-description";
  description.textContent = hint[1];

  listItem.append(title, description);

  return listItem;
}

function updateHintStatus() {
  const remaining = state.availableHints.length;

  if (remaining === 0) {
    elements.hintCounter.textContent = "Tous les indices sont affichés";
    elements.hintButton.disabled = true;
    return;
  }

  elements.hintCounter.textContent =
    `${remaining} indice${remaining > 1 ? "s" : ""} supplémentaire${remaining > 1 ? "s" : ""} disponible${remaining > 1 ? "s" : ""}`;

  elements.hintButton.disabled = state.hasValidated;
}

function addNextHint() {
  if (
    state.hasValidated ||
    state.availableHints.length === 0
  ) {
    return;
  }

  const nextHint = state.availableHints.shift();

  elements.hintsList.appendChild(createHintElement(nextHint));
  updateHintStatus();
}

function resetResult() {
  elements.resultPanel.hidden = true;
  elements.nextRoundButton.hidden = true;

  elements.resultTitle.textContent = "";
  elements.resultText.textContent = "";
  elements.errorMargin.textContent = "";
}

function startRound(category) {
  state.currentCategory = category;
  state.secretRating = randomInteger(10) + 1;
  state.availableHints = shuffle(
    category.ratings[state.secretRating]
  );
  state.roundNumber += 1;
  state.hasValidated = false;

  elements.categoryName.textContent = category.name;
  elements.categorySource.textContent = category.source;
  elements.categoryIcon.textContent = category.icon;
  elements.roundNumber.textContent = state.roundNumber;

  elements.hintsList.replaceChildren();
  elements.guessSelect.value = "";
  elements.validateButton.disabled = false;

  resetResult();
  showGameScreen();

  // Un seul indice est affiché au début de la manche.
  addNextHint();
  updateHintStatus();
}

function validateGuess() {
  if (state.hasValidated) {
    return;
  }

  const guess = Number(elements.guessSelect.value);

  if (!guess) {
    elements.guessSelect.focus();
    return;
  }

  const difference = Math.abs(guess - state.secretRating);

  state.hasValidated = true;

  elements.resultPanel.hidden = false;
  elements.nextRoundButton.hidden = false;
  elements.validateButton.disabled = true;
  elements.hintButton.disabled = true;

  if (difference === 0) {
    elements.resultTitle.textContent = "Réponse exacte !";
    elements.resultText.textContent =
      `La note secrète était bien ${state.secretRating}/10.`;
    elements.errorMargin.textContent = "Marge d'erreur : 0 point";
  } else {
    elements.resultTitle.textContent =
      `La note secrète était ${state.secretRating}/10`;
    elements.resultText.textContent =
      `Tu avais proposé ${guess}/10.`;
    elements.errorMargin.textContent =
      `Marge d'erreur : ${difference} point${difference > 1 ? "s" : ""}`;
  }
}

elements.hintButton.addEventListener("click", addNextHint);

elements.validateButton.addEventListener("click", validateGuess);

elements.nextRoundButton.addEventListener("click", () => {
  startRound(state.currentCategory);
});

elements.changeCategoryButton.addEventListener("click", showCategoryScreen);

elements.randomCategoryButton.addEventListener("click", () => {
  startRound(getRandomCategory());
});

elements.guessSelect.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    validateGuess();
  }
});

function initializeGame() {
  renderCategoryChoices();
  showCategoryScreen();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeGame);
} else {
  initializeGame();
}
