var form = document.querySelector("form");
var info = document.getElementById("infoMdp");

var contientChiffre = function contientChiffre(chaine) {
  var regexMdp = /\d+/;
  if (regexMdp.test(chaine)) {
    return true;
  }
  return false;
};

form.addEventListener("submit", function (e) {
  val1 = form.mdp1.value;
  var message = "";
  if (val1 !== form.mdp2.value) {
    message = "Erreur : les deux mots de passe doivent être identiques";
  } else if (val1.length < 6) {
    message = "Erreur : la longueur minimale doit être de 6 caractères";
  } else if (contientChiffre(val1) === false) {
    message = "Erreur : le mot de passe doit contenir au moins un chiffre !";
  } else {
    message = "Mots de passe OK";
  }
  info.textContent = message;
  e.preventDefault();
});
