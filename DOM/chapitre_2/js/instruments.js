function infosLiens() {
  var liens = document.getElementsByTagName('a');
  var tailleLiens = liens.length;
  console.log(tailleLiens);
  console.log(liens[0].href);
  console.log(liens[tailleLiens - 1].href);
}

function possede(identifiant, classe) {
  var instrument = document.getElementById(identifiant);
  if (instrument === null) {
    return console.log(identifiant + " non trouvé !");
  }
  return console.log(instrument.classList.contains(classe));
}

infosLiens();

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur
