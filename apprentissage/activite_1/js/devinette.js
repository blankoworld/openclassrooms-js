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

// Fonction qui demande à l'utilisateur un nombre entre 1 et 100
var demande = function demande() {
  var saisie = Number(prompt("Saisie un nombre entre 1 et 100 : "));
  return saisie;
};

// Fonction qui compare le nombre donné et la solution
var compare = function compare(nombre) {
  if (nombre > solution) {
    console.log(nombre + " est trop grand");
  } else if (nombre < solution) {
    console.log(nombre + " est trop petit");
  } else {
    console.log("Bravo, la solution était " + solution + " !");
  }
};

// Début du programme : demande au joueur de saisir le chiffre estimé et le compare
var nombreSaisi = demande();
compare(nombreSaisi);
// Si toujours pas trouvé, on boucle jusqu'à ce que le joueur y arrive ou qu'il ait dépassé 6 essais en tout
var tentatives = 1;
while ((nombreSaisi !== solution) && (tentatives < 6)) {
  var nombreSaisi = demande();
  compare(nombreSaisi);
  tentatives += 1;
}
// Si le joueur a fait trop de tentatives et qu'il n'a pas trouvé au 6ième coup, on ne le laisse pas sur sa faim
if ((tentatives >= 6) && (nombreSaisi !== solution)) {
  console.log("Perdu... la solution était " + solution);
}
