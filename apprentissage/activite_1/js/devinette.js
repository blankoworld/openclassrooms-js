/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// Fonction qui demande à l'utilisateur un nombre entre 1 et 100 et renvoie la saisie
var demande = function demande() {
  var saisie = Number(prompt("Saisie un nombre entre 1 et 100 : "));
  return saisie;
};

// Fonction qui compare le nombre donné et la solution.
// Retourn vrai si le nombre est le même que la solution.
// Sinon cela retourne faux.
var compare = function compare(nombre) {
  var resultat = false;
  if (nombre > solution) {
    console.log(nombre + " est trop grand");
  } else if (nombre < solution) {
    console.log(nombre + " est trop petit");
  } else {
    console.log("Bravo, la solution était " + solution + " !");
    resultat = true;
  }
  return resultat;
};

// Première demande (contrôle d'entrée de boucle)
var nombreSaisi = demande();
var resultatComparaison = compare(nombreSaisi);
var tentatives = 1;
// Première tentative réussie ? C'est resultatComparaison qui nous le signale
// Le joueur a dépassé le nombre d'essais ? C'est tentatives qui nous le dit
// Soit l'un, soit l'autre nous fait sortir de la boucle.
while ((resultatComparaison === false) && (tentatives < 6)) {
  nombreSaisi = demande();
  resultatComparaison = compare(nombreSaisi);
  tentatives += 1;
}

// Il faut penser que le joueur peut avoir réussi à la sixième tentative.
// Donc on compare aussi avec la solution
if ((tentatives >= 6) && (nombreSaisi !== solution)) {
  console.log("Perdu... la solution était " + solution);
}
