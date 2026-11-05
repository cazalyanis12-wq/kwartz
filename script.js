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
                { title: "Taxi 5", desc: "Édition sans Samy Naceri ni Gérard Darmon, une suite très moyenne." },
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
                { title: "Le Parrain (The Godfather)", desc: "Le monument absolu du cinéma de gangsters réalisé par Francis Ford Coppola." },
                { title: "Les Évadés (The Shawshank Redemption)", desc: "Considéré par les spectateurs comme l'un des meilleurs films de tous les temps." }
            ]
        }
    },
    musique: {
        name: "🎵 Musique & Chansons",
        data: {
            1: [
                { title: "Génération Charlotte aux Fraises", desc: "Comptines pour très jeunes enfants aux mélodies agaçantes." },
                { title: "Chansons de fête de village", desc: "Ambiance lourde et répétitive." }
            ],
            2: [
                { title: "Un tube éphémère de télé-réalité", desc: "Les singles oubliés des années 2000." },
                { title: "Chansons de Noël en boucle en novembre", desc: "Insupportable au bout de 3 heures." }
            ],
            3: [
                { title: "Musique d'ascenseur", desc: "Du jazz mou sans âme diffusé dans les hôtels." },
                { title: "Un remix électro raté", desc: "Quand un DJ saccage une bonne vieille chanson." }
            ],
            4: [
                { title: "Un vieux titre pop-rock oublié", desc: "Le genre de chanson générique de fond sonore." },
                { title: "Titre électro répétitif", desc: "Boum-boum répétitif sans paroles recherchées." }
            ],
            5: [
                { title: "Dernière Danse - Indila", desc: "Le titre pop-dance français aux millions de vues sur YouTube." },
                { title: "Djomb - Bosh", desc: "Le morceau de rap français devenu un mème viral." }
            ],
            6: [
                { title: "Ma philosophie - Amel Bent", desc: "Le tube intemporel de la chanson française des années 2000." },
                { title: "Papaoutai - Stromae", desc: "Le morceau électro-pop entraînant et poignant." }
            ],
            7: [
                { title: "Djadja - Aya Nakamura", desc: "Le tube interplanétaire francophone." },
                { title: "La Goffa Lolita - La Petite Culotte", desc: "L'hymne festif incontournable de toutes les soirées." }
            ],
            8: [
                { title: "Formidable - Stromae", desc: "Le chef-d'œuvre d'écriture de Stromae." },
                { title: "Les Lacs du Connemara - Michel Sardou", desc: "L'hymne incontournable de fin de soirée." }
            ],
            9: [
                { title: "L'Envie - Johnny Hallyday", desc: "La puissance vocale ultime sur scène." },
                { title: "Bohemian Rhapsody - Queen", desc: "Le chef-d'œuvre rock opéra intemporel." }
            ],
            10: [
                { title: "La Vie en Rose - Édith Piaf", desc: "La chanson française la plus célèbre à travers le monde entier." },
                { title: "Thriller - Michael Jackson", desc: "Le summum absolu de la pop mondiale." }
            ]
        }
    },
    jeux: {
        name: "🎮 Jeux Vidéo",
        data: {
            1: [
                { title: "ET the Extra-Terrestrial (Atari)", desc: "Le pire jeu de l'histoire du jeu vidéo." },
                { title: "Jeu mobile avec 90% de pubs", desc: "Tu joues 5 secondes, tu te tapes 30 secondes de pub." }
            ],
            2: [
                { title: "Ride to Hell: Retribution", desc: "Un nanar vidéoludique légendaire pour ses bugs." },
                { title: "Postal III", desc: "Suite ratée et chaotique d'une franchise sulfureuse." }
            ],
            3: [
                { title: "Baldi's Basics", desc: "Jeu indépendant volontairement moche et absurde." },
                { title: "Farming Simulator (version 2011)", desc: "Rigolo 5 minutes pour rouler en tracteur, puis très lassant." }
            ],
            4: [
                { title: "Jeu de grattage en ligne", desc: "Des mini-jeux répétitifs pour perdre de l'argent." },
                { title: "Jeux de simulation bâclés", desc: "Des jeux sortis trop vite sans contenu." }
            ],
            5: [
                { title: "Among Us", desc: "Le jeu de déduction sociale qui a enflammé les confinements." },
                { title: "Fall Guys", desc: "Le battle royale coloré avec des petits haricots maladroits." }
            ],
            6: [
                { title: "FIFA / EA Sports FC (édition annuelle)", desc: "Le jeu de foot qu'on achète chaque année." },
                { title: "Fortnite", desc: "Le mastodonte du jeu gratuit d'Epic Games." }
            ],
            7: [
                { title: "League of Legends (LoL)", desc: "Le jeu compétitif le plus populaire et exigeant." },
                { title: "Minecraft", desc: "Le bac à sable légendaire de blocs où tout est possible." }
            ],
            8: [
                { title: "Grand Theft Auto V (GTA V)", desc: "Le blockbuster mondial open-world de Rockstar Games." },
                { title: "Pokémon Rouge / Bleu", desc: "Les versions fondatrices de toute une génération." }
            ],
            9: [
                { title: "The Witcher 3: Wild Hunt", desc: "L'aventure RPG culte de Geralt de Riv." },
                { title: "The Legend of Zelda: Breath of the Wild", desc: "La révolution de l'exploration sur Nintendo." }
            ],
            10: [
                { title: "Tetris", desc: "Le jeu de réflexion parfait et indémodable." },
                { title: "Ocarina of Time", desc: "Un chef-d'œuvre absolu ayant marqué l'histoire du jeu vidéo." }
            ]
        }
    },
    nourriture: {
        name: "🍔 Nourriture & Snacks",
        data: {
            1: [
                { title: "Épinards bouillis de cantine sans sel", desc: "Le traumatisme culinaire de l'enfance." },
                { title: "Réglisse noire très dure", desc: "Un goût d'amertume et de carton." }
            ],
            2: [
                { title: "Sandwich triangle de station-service premier prix", desc: "Du pain détrempé avec du jambon triste." },
                { title: "Margarine premier prix", desc: "Tentative ratée de remplacer le bon beurre." }
            ],
            3: [
                { title: "Nouilles instantanées au goût 'poulet artificiel'", desc: "Ça dépanne à 3h du matin quand le frigo est vide." },
                { title: "Bonbons gélifiés premier prix", desc: "Ça colle aux dents et ça a un goût de plastique." }
            ],
            4: [
                { title: "Surimi bas de gamme", desc: "Du poisson reconstitué sans goût." },
                { title: "Chips nature de sous-marque", desc: "Trop huileuses, molles et fades." }
            ],
            5: [
                { title: "Big Mac de McDonald's", desc: "Le burger le plus célèbre du monde." },
                { title: "Cordon bleu industriel", desc: "Le plat réconfortant et rapide des étudiants." }
            ],
            6: [
                { title: "Pizza surgelée Margherita standard", desc: "Efficace un soir de flemme devant un film." },
                { title: "Crêpes industrielles sous vide", desc: "Bon mais rien à voir avec une vraie crêperie." }
            ],
            7: [
                { title: "Sandwich jambon-beurre de boulangerie", desc: "La valeur sûre de la pause déjeuner." },
                { title: "Biscuits Oréo", desc: "Le rituel du 'on tourne, on lèche, on trempe'." }
            ],
            8: [
                { title: "Croissant pur beurre de boulangerie artisanale", desc: "Le symbole du petit-déjeuner français." },
                { title: "Nutella", desc: "La pâte à tartiner incontournable des placards." }
            ],
            9: [
                { title: "Baguette de tradition bien croustillante", desc: "Le patrimoine culturel de nos boulangeries." },
                { title: "Camembert AOP au lait cru", desc: "Le fromage français par excellence." }
            ],
            10: [
                { title: "Pain au chocolat chaud sortant du four", desc: "Le summum du bonheur matinal." },
                { title: "Repas gastronomique français 3 étoiles", desc: "L'art culinaire reconnu mondialement." }
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

// Mise à jour de la valeur affichée du range (si présent)
if (scoreRange && rangeVal) {
    scoreRange.addEventListener('input', (e) => {
        rangeVal.textContent = e.target.value;
    });
}

// Lancer une nouvelle manche
function startNewRound() {
    // 1. Déterminer la catégorie
    const selectedCatOption = categorySelect ? categorySelect.value : 'random';
    if (selectedCatOption === 'random' || !selectedCatOption) {
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
    currentClues = [...itemsForScore].sort(() => Math.random() - 0.5);
    currentClueIndex = 0;

    // 4. Mettre à jour l'interface
    if (categoryBadge) categoryBadge.textContent = database[currentCategory].name;
    if (roundInfo) roundInfo.textContent = `Note secrète entre 1 et 10`;
    if (cluesList) cluesList.innerHTML = '';
    
    // Afficher le premier indice
    showNextClue();

    // Réinitialiser la section résultat
    if (resultContainer) resultContainer.classList.add('hidden');
    if (validateBtn) validateBtn.disabled = false;
    if (moreClueBtn) moreClueBtn.style.display = 'inline-block';
    if (scoreRange) scoreRange.value = 5;
    if (rangeVal) rangeVal.textContent = '5';
}

// Afficher un
