function compterNbVoyelles(chaine) {
  var res = 0;
  var chaineReduite = chaine.toLowerCase();
  for (var i = 0; i < chaineReduite.length; i++) {
    if (
      (chaineReduite[i] === 'a') || (chaineReduite[i] === 'e') ||
      (chaineReduite[i] === 'i') || (chaineReduite[i] === 'o') ||
      (chaineReduite[i] === 'u') || (chaineReduite[i] === 'y')
    ) {
      res += 1;
    }
  }
  return res;
}

function inverser(chaine) {
  var res = "";
  for (var i = chaine.length - 1; i >= 0; i--) {
    res += chaine[i];
  }
  return res;
}

function trouverLettreLeet(lettre) {
  var res = lettre;
  switch (lettre.toLowerCase()) {
    case "a":
      res = "4";
      break;
    case "b":
      res = "8";
      break;
    case "e":
      res = "3";
      break;
    case "l":
      res = "1";
      break;
    case "o":
      res = "0";
      break;
    case "s":
      res = "5";
      break;
    default:
      res = lettre;
  }
  return res;
}

function convertirEnLeetSpeak(mot) {
  var res = "";
  for (var i = 0; i < mot.length; i++) {
    res += trouverLettreLeet(mot[i]);
  }
  return res;
}

var mot = prompt("Saisissez un mot : ");
var motLongueur = mot.length;
var motMinuscule = mot.toLowerCase();
var motMajuscule = mot.toUpperCase();
var motNbVoyelles = compterNbVoyelles(mot);
var motInverse = inverser(mot);

console.log("Le mot " + mot + " contient " + mot.length + " caractères");
console.log("Il s'écrit en minuscule " + motMinuscule);
console.log("Il s'écrit en majuscule " + motMajuscule);
console.log("Il contient " + motNbVoyelles + " voyelles et " + (motLongueur - motNbVoyelles) + " consonnes");
console.log("Il s'écrit à l'envers " + inverser(mot));

if (motInverse.toLowerCase() === motMinuscule) {
  console.log("C'est un palindrome.");
} else {
  console.log("Ce n'est pas un palindrome.");
}

console.log("Il s'écrit en leet speak " + convertirEnLeetSpeak(mot));
