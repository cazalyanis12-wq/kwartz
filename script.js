// Base de données riche avec des références ultra-populaires en France (classées par catégorie et par note de 1 à 10)
const database = {
    films: {
        name: "🎬 Films & Séries",
        data: {
            1: [
                { title: "Les 11 Commandements", desc: "Comédie lourde avec Michaël Youn, notée très bas par les critiques." },
                { title: "Super Héros Movie", desc: "Parodie de films de super-héros lourdingue et oubliable." }
            ],
            2: [
                { title: "Camping 3", desc: "La suite de trop pour la célèbre franchise de Fabien Onteniente." },
                { title: "Les Profs 2", desc: "Comédie française potache aux gags vus et revus." }
            ],
            3: [
                { title: "Twilight - Chapitre 1", desc: "Le film de vampires romantiques ado devenu culte malgré ses défauts immenses." },
                { title: "Bronzés 3 : Amis pour la vie", desc: "Le retour décevant de la célèbre troupe du Splendid." }
            ],
            4: [
                { title: "Taxi 5", desc: Édition sans Samy Naceri ni Gérard Darmon, une suite très moyenne. },
                { title: "Babysitting", desc: "Comédie française found-footage signée Philippe Lacheau." }
            ],
            5: [
                { title: "Les Tuche", desc: "Le phénomène populaire de Jeff Tuche et sa famille à Bouzolles." },
                { title: "Fast & Furious 9", desc: "Action non-stop, voitures dans l'espace et physique totalement ignorée." }
            ],
            6: [
                { title: "Bienvenue chez les Ch'tis", desc: "Le carton comique monumental de Dany Boon dans le Nord." },
                { title: "Harry Potter à l'école des sorciers", desc: "Le début magique de la saga adaptée de J.K. Rowling." }
            ],
            7: [
                { title: "Intouchables", desc: "Le duo culte Omar Sy et François Cluzet qui a touché la France entière." },
                { title: "Avengers: Endgame", desc: "Le point d'orgue monumental du MCU de chez Marvel." }
            ],
            8: [
                { title: "Le Dîner de Cons", desc: "Comédie théâtrale française absolue avec Villeret et Lhermitte." },
                { title: "Interstellar", desc: "Le voyage spatial spectaculaire et scientifique de Christopher Nolan." }
            ],
            9: [
                { title: "Le Seigneur des Anneaux : La Communauté de l'Anneau", desc: "Le chef-d'œuvre absolu de l'heroic fantasy." },
                { title: "Pulp Fiction", desc: "Le film culte de Quentin Tarantino aux dialogues mythiques." }
            ],
            10: [
                { title: "Intouchables (version culte/masterclass)", desc: "Considéré par beaucoup comme un sommet indétrônable du cinéma populaire français." },
                { title: "Le Parrain (The Godfather)", desc: "Le monument absolu du cinéma de gangsters réalisé par Francis Ford Coppola." }
            ]
        }
    },
    musique: {
        name: "🎵 Musique & Chansons",
        data: {
            1: [
                { title: "Génération Charlotte aux Fraises", desc: "Comptines pour très jeunes enfants aux mélodies agaçantes." },
                { title: "Chansons de Patrick Sébastien (version fête de village)", desc: "Ambiance lourde et beauf garantie." }
            ],
            2: [
                { title: "Un tube éphémère de télé-réalité", desc: "Les singles oubliés des années Loft Story / Star Academy 1." },
                { title: "Des chansons de Noël en boucle en novembre", desc: "Agréable 5 minutes, insupportable au bout de 3 heures." }
            ],
            3: [
                { title: "Musique commerciale d'ascenseur", desc: "Du jazz mou sans âme diffusé dans les grands hôtels." },
                { title: "Un titre dancefloor générique des années 2010", desc: "Boum-boum répétitif sans paroles recherchées." }
            ],
            4: [
                { title: "Un vieux titre pop-rock français oubliable", desc: "Le genre de chanson qu'on entend sur France Bleu à 14h." },
                { title: "Un remix électro raté d'un classique", desc: "Quand un DJ saccage une bonne vieille chanson des années 80." }
            ],
            5: [
                { title: "Dernière Danse - Indila", desc: "Le titre pop-dance français aux millions de vues sur YouTube." },
                { title: "Djomb - Bosh", desc: "Le morceau de rap français devenu un mème viral sur les réseaux." }
            ],
            6: [
                { title: "Ma philosophie - Amel Bent", desc: "Le tube intemporel de la chanson française des années 2000." },
                { title: "Papaoutai - Stromae", desc: "Le morceau électro-pop entraînant aux paroles poignantes de Stromae." }
            ],
            7: [
                { title: "Djadja - Aya Nakamura", desc: "Le tube interplanétaire francophone qui a traversé toutes les frontières." },
                { title: "La Goffa Lolita - La Petite Culotte", desc: "L'hymne festif incontournable de toutes les soirées et ferias en France." }
            ],
            8: [
                { title: "Formidable - Stromae", desc: "Le chef-d'œuvre de mise en scène et d'écriture de Stromae." },
                { title: "Les Lacs du Connemara - Michel Sardou", desc: "L'hymne national non officiel de fin de soirée en France." }
            ],
            9: [
                { title: "L'Envie - Johnny Hallyday", desc: "La puissance vocale ultime du Taulier sur scène." },
                { title: "Bohemian Rhapsody - Queen", desc: "Le chef-d'œuvre rock opéra intemporel." }
            ],
            10: [
                { title: "La Vie en Rose - Édith Piaf", desc: "La chanson française la plus célèbre et iconique à travers le monde entier." },
                { title: "Thriller - Michael Jackson", desc: "Le summum absolu de la pop mondiale." }
            ]
        }
    },
    jeux: {
        name: "🎮 Jeux Vidéo",
        data: {
            1: [
                { title: "ET the Extra-Terrestrial (Atari)", desc: "Le pire jeu de l'histoire du jeu vidéo, enterré dans le désert." },
                { title: "Le jeu officiel de Babar", desc: "Adaptation bâclée pour enfant sur console rétro." }
            ],
            2: [
                { title: "Ride to Hell: Retribution", desc: "Un nanar vidéoludique légendaire pour ses bugs et sa mocheté." },
                { title: "Postal III", desc: "Suite ratée et chaotique d'une franchise sulfureuse." }
            ],
            3: [
                { title: "Baldi's Basics", desc: "Jeu indépendant volontairement moche et absurde." },
                { title: "Farming Simulator (version 2011)", desc: "Rigolo cinq minutes pour conduire un tracteur, puis très vite lassant." }
            ],
            4: [
                { title: "Le jeu du Loto / Grattage en ligne", desc: "Des mini-jeux répétitifs pour perdre de l'argent." },
                { title: "Des jeux mobiles truffés de publicités forcées", desc: "Tu joues 30 secondes, tu te tapes 45 secondes de pub." }
            ],
            5: [
                { title: "Among Us", desc: "Le jeu de déduction sociale qui a enflammé les confinements." },
                { title: "Fall Guys", desc: "Le battle royale coloré avec des petits haricots maladroits." }
            ],
            6: [
                { title: "FIFA / EA Sports FC (édition annuelle classique)", desc: "Le jeu de foot incontournable qu'on achète chaque année avec peu de nouveautés." },
                { title: "Fortnite", desc: "Le mastodonte du jeu gratuit d'Epic Games." }
            ],
            7: [
                { title: "League of Legends (LoL)", desc: "Le jeu compétitif le plus joué mais connu pour sa communauté toxique." },
                { title: "Minecraft", desc: "Le bac à sable légendaire de blocs où tout est possible." }
            ],
            8: [
                { title: "Grand Theft Auto V (GTA V)", desc: "Le blockbuster mondial open-world de Rockstar Games." },
                { title: "Pokémon Rouge / Bleu", desc: "Les versions fondatrices de la nostalgie de toute une génération." }
            ],
            9: [
                { title: "The Witcher 3: Wild Hunt", desc: "L'aventure RPG culte de Geralt de Riv." },
                { title: "The Legend of Zelda: Breath of the Wild", desc: "La révolution de l'exploration sur Nintendo Switch." }
            ],
            10: [
                { title: "Minecraft (Statut historique)", desc: "Le jeu le plus vendu de tous les temps, ancré dans la culture moderne." },
                { title: "Ocarina of Time / Tetris", desc: "Des chefs-d'œuvre absolus ayant redéfini l'industrie." }
            ]
        }
    },
    nourriture: {
        name: "🍔 Nourriture & Snacks",
        data: {
            1: [
                { title: "Les friandises 'Berlingots de Nantes' ou réglisse dure", desc: "Le goût de l'amertume et du carton." },
                { title: "Des épinards bouillis sans sel de cantine scolaire", desc: "Le traumatisme culinaire de l'enfance." }
            ],
            2: [
                { title: "Les sandwichs triangle de station-service (premier prix)", desc: "Du pain de mie détrempé et une tranche de jambon triste." },
                { title: "La margarine premier prix", desc: "Tentative ratée de remplacer le bon beurre." }
            ],
            3: [
                { title: "Les nouilles instantanées eco+ au goût 'poulet artificiel'", desc: "Ça dépanne à 3h du matin quand le frigo est vide, mais c'est tout." },
                { title: "Les bonbons gélifiés 'œufs sur le plat' premier prix", desc: "Ça colle aux dents et ça a un goût de plastique sucré." }
            ],
            4: [
                { title: "Le }% de surimi bas de gamme", desc: "Du poisson reconstitué sans saveur particulière." },
                { title: "Les chips nature de sous-marque", desc: "Trop huileuses, molles et fades." }
            ],
            5: [
                { title: "Le Big Mac de McDonald's", desc: "Le burger le plus célèbre du monde, standardisé partout." },
                { title: "Les cordons bleus industriels", desc: "Le plat réconfortant et coupable des étudiants." }
            ],
            6: [
                { title: "La pizza surgelée Margherita standard", desc: "Efficace un soir de flemme devant un film." },
                { title: "Les galettes de sarrachet / Crêpes industrielles sous vide", desc: "Bon mais sans commune mesure avec une vraie crêperie." }
            ],
            7: [
                { title: "Le pain bagnat ou le sandwich jambon-beurre de boulangerie", desc: "La valeur sûre absolue de la pause déjeuner en France." },
                { title: "Les célèbres biscuits Oréo", desc: "Le rituel du 'on tourne, on lèche, on trempe'." }
            ],
            8: [
                { title: "Un bon croissant pur beurre de boulangerie artisanale", desc: "Le symbole du petit-déjeuner français par excellence." },
                { title: "Le Nutella", desc: "Le pot de pâte à tartiner incontournable des placards français." }
            ],
            9: [
                { title: "Une bonne baguette de tradition française bien croustillante", desc: "Le patrimoine culturel vivant de nos boulangeries." },
                { title: "Le Camembert AOP au lait cru", desc: "Le fromage français par excellence qui embaume la cuisine." }
            ],
            10: [
                { title: "Le véritable pain au chocolat (ou chocolatine) chaud du matin", desc: "Le summum du bonheur matinal à la française." },
                { title: "Un authentique repas gastronomique français 3 étoiles", desc: "L'art de vivre et du bien-manger reconnu mondialement." }
            ]
        }
    }
};

// État du jeu
let currentCategory = 'films';
let currentScore = 5;
let currentClues = [];
let currentClueIndex = 0;

// Éléments du DOM
const categorySelect = document.getElementById('category-select');
const newGameBtn = document.getElementById('new-game-btn');
const categoryBadge = document.getElementById('category-badge');
const roundInfo = document.getElementById('round-info');
const cluesList = document.getElementById('clues-list');
const moreClueBtn = document.getElementById('more-clue-btn');
const scoreRange = document.getElementById('score-range');
const rangeVal = document.getElementById('range-val');
const validateBtn = document.getElementById('validate-btn');
const resultContainer = document.getElementById('result-container');
const resultMessage = document.getElementById('result-message');
const nextRoundBtn = document.getElementById('next-round-btn');

// Mise à jour de la valeur affichée du range
scoreRange.addEventListener('input', (e) => {
    rangeVal.textContent = e.target.value;
});

// Lancer une nouvelle manche
function startNewRound() {
    // 1. Déterminer la catégorie
    const selectedCatOption = categorySelect.value;
    if (selectedCatOption === 'random') {
        const keys = Object.keys(database);
        currentCategory = keys[Math.floor(Math.random() * keys.length)];
    } else {
        currentCategory = selectedCatOption;
    }

    // 2. Choisir une note secrète aléatoire entre 1 et 10
    const availableScores = Object.keys(database[currentCategory].data);
    currentScore = parseInt(availableScores[Math.floor(Math.random() * availableScores.length)]);

    // 3. Récupérer les indices correspondants à cette note
    const itemsForScore = database[currentCategory].data[currentScore];
    // Mélanger les indices pour plus de variété
    currentClues = [...itemsForScore].sort(() => Math.random() - 0.5);
    currentClueIndex = 0;

    // 4. Mettre à jour l'interface
    categoryBadge.textContent = database[currentCategory].name;
    roundInfo.textContent = `Note secrète entre 1 et 10`;
    cluesList.innerHTML = '';
    
    // Afficher le premier indice
    showNextClue();

    // Réinitialiser les sections
    resultContainer.classList.add('hidden');
    validateBtn.disabled = false;
    moreClueBtn.style.display = 'block';
    scoreRange.value = 5;
    rangeVal.textContent = '5';
}

// Afficher un indice supplémentaire
function showNextClue() {
    if (currentClueIndex < currentClues.length) {
        const clue = currentClues[currentClueIndex];
        const li = document.createElement('li');
        li.className = 'clue-item';
        li.innerHTML = `
            <div class="clue-title">🔹 ${clue.title}</div>
            <div class="clue-desc">${clue.desc}</div>
        `;
        cluesList.appendChild(li);
        currentClueIndex++;

        // S'il n'y a plus d'indices dispo, cacher le bouton
        if (currentClueIndex >= currentClues.length) {
            moreClueBtn.style.display = 'none';
        }
    }
}

// Valider la réponse du joueur
function validateGuess() {
    const playerGuess = parseInt(scoreRange.value);
    const diff = Math.abs(playerGuess - currentScore);

    let message = '';
    if (diff === 0) {
        message = `🎉 Incroyable ! C'était **exactement ${currentScore}/10** ! Bien joué !`;
    } else if (diff === 1) {
        message = `🔥 Très proche ! La note exacte était **${currentScore}/10** (tu as mis ${playerGuess}).`;
    } else if (diff <= 3) {
        message = `👍 Pas mal du tout ! La note exacte était **${currentScore}/10** (écart de ${diff} points).`;
    } else {
        message = `❌ Aïe, un peu loin ! La note exacte était **${currentScore}/10** (tu as mis ${playerGuess}).`;
    }

    resultMessage.innerHTML = message;
    resultContainer.classList.remove('hidden');
    validateBtn.disabled = true;
    moreClueBtn.style.display = 'none';
}

// Événements
moreClueBtn.addEventListener('click', showNextClue);
validateBtn.addEventListener('click', validateGuess);
newGameBtn.addEventListener('click', startNewRound);
nextRoundBtn.addEventListener('click', startNewRound);

// Lancer le jeu au chargement de la page
startNewRound();
