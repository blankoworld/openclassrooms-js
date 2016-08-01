var couleur = function(nom) {
  div = document.getElementsByTagName("div");
  for (var i = 0; i < div.length; i++) {
    div[i].style.backgroundColor = nom;
  }
};

var changeCouleur = function(e) {
  var lettre = String.fromCharCode(e.charCode).toLowerCase();

  switch (lettre) {
    case "r":
      couleur("red");
      break;
    case "j":
      couleur("yellow");
      break;
    case "v":
      couleur("green");
      break;
    case "b":
      couleur("white");
      break;
    default:
      console.log("Aucun changement");
  }
  console.log("Vous avez appuyé sur : " + String.fromCharCode(e.charCode));
};

document.addEventListener("keypress", changeCouleur);
