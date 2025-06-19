Projet : Jeu du Pendu , réalisation d'un jeu du pendu pur une personne sur le théme de l'espace en html css et js

La premiére partie est l'initialisation de variable et de constante 
Ensuite vient la déclaration des fonctions: fonction choisir automatiquement un mot dans la liste , fonction pour lancer et réninitialiser la partie (reinitiliser les lettres et le nombre d'erreure, change le mot a touver, remet l'astronaute au point de depart), fonction pour gerer les lettres rentré par l'utilisateur (verifie si deja rentré , si présente ou non dans le mot a trouver , gere les condition de victoire et defaite et les erreurs ), fonction pour afficher le mot a la maniére d'un pendu.

Puis la partie écouteur d'évenement. Pour le bouton commencer(relié a la fonction reset) et pour la gestion d'un imput pour permettre a l'utilisateur d'entre une seul lettre valide.

j'ai utilisé aussi certaine fonction deja existantes : un "Math.floor(Math.random())..." pour le choix de la liste de mots et le changement de background. Les fonction add et remove pour ajouter de class css. la fonction toLowerCase pour transfomer le majuscule en miniscule. La fonction setTimeout pour créer en delai entre chaque saisie et focus (pour focus l'imput). Les fonctions split map et join sont utilisé pour la gestion d'affichage du mot a trouver. La fonction forEach a était utiliser pour gerer les différentes partie de l'astronaute. La fonction clear pour vider au moment du rest les lettres entre la l'utilisateur.

