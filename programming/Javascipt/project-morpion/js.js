// Initialisation du jeu
let currentPlayer = 'X'; // Le joueur X commence
let gameBoard = ['', '', '', '', '', '', '', '', '']; // Tableau pour suivre l'état des cases
let gameActive = true; // Variable pour savoir si le jeu est encore actif
let scoreX = 0;
let scoreO = 0;

// Sélectionner toutes les cases
const cells = document.querySelectorAll('.case');

// Sélectionner les éléments affichant les scores
const scoreXDisplay = document.getElementById('scoreX');
const scoreODisplay = document.getElementById('scoreO');

// Fonction pour gérer les clics sur les cases
function handleCellClick(event) {
    const index = event.target.dataset.index; // Obtenir l'index de la case cliquée

    // Si la case est déjà occupée ou si le jeu est terminé, ne rien faire
    if (gameBoard[index] !== '' || !gameActive) return;

    // Placer le symbole (X ou O) dans la case
    gameBoard[index] = currentPlayer;
    event.target.textContent = currentPlayer; // Afficher X ou O dans la case
    event.target.classList.add(currentPlayer); // Ajouter la classe X ou O pour changer la couleur

    // Vérifier si quelqu'un a gagné
    if (checkWinner()) {
            if (currentPlayer === 'X') {
        scoreX++;
        scoreXDisplay.textContent = scoreX;
       } else {
        scoreO++;
        scoreODisplay.textContent = scoreO;
       } 

        setTimeout(() => {
            alert(`${currentPlayer} a gagné !`);
            resetGame(); // Réinitialiser le jeu après la victoire
        }, 200);
      } else {
        // verifier si nul
          if (!gameBoard.includes('')) {
        setTimeout(() => {
            alert("Match nul !");
            resetGame();
        }, 200);
      }else {
        // Changer de joueur
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
      }
}


// Fonction pour vérifier si un joueur a gagné
function checkWinner() {
    const winConditions = [
        [0, 1, 2], // ligne 1
        [3, 4, 5], // ligne 2
        [6, 7, 8], // ligne 3
        [0, 3, 6], // colonne 1
        [1, 4, 7], // colonne 2
        [2, 5, 8], // colonne 3
        [0, 4, 8], // diagonale 1
        [2, 4, 6], // diagonale 2
    ];

    // Vérifier chaque condition de victoire
    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true; // Si une condition est remplie, retour gagnant
        }
    }

    return false; // Si aucune victoire n'est trouvée
}

// Fonction pour réinitialiser le jeu
function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true; // Recommencer le jeu
    cells.forEach(cell => {
        cell.textContent = ''; // Vider le contenu de chaque case
        cell.classList.remove('X', 'O'); // Retirer les classes X et O
    });
    currentPlayer = 'X'; // Recommencer avec X
}

// Ajouter un événement de clic sur chaque cellule
cells.forEach((cell, index) => {
    cell.dataset.index = index; // Ajouter un attribut data-index pour identifier la case
});

//Ajouter l'événement de clic
function enableBoard() {
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });
}

// Sélectionne le bouton de réinitialisation
const btnPlay = document.getElementById('btnPlay');

btnPlay.addEventListener('click', () => {
    resetGame(); // Réinitialise le plateau
    enableBoard();   // Active les clics
});

