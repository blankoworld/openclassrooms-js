// récupération de nombreux éléments
var boutonDemarre = document.getElementById("demarrer");
var boutonArreter = document.getElementById("arreter");
var cadre = document.getElementById("cadre");
var ballon = document.getElementById("ballon");
// longueurs pour les calculs
var largeurCadre = parseFloat(getComputedStyle(cadre).width);
var largeurBallon = 110; // taille fixe de l'image
var max = largeurCadre - largeurBallon;
// divers
var animationId = null;
var vitesse = 3;
var direction = 1;

var deplacerBallon = function deplacerBallon(){
  var xBloc = parseFloat(getComputedStyle(ballon).left);
  if ((xBloc < 0) || (xBloc > max)) {
    direction = -direction;
  }
  var x = null;
  if (direction === 1) {
    x = xBloc + vitesse;
  } else {
    x = xBloc - vitesse;
  }
  ballon.style.left = x + "px";
  animationId = requestAnimationFrame(deplacerBallon);
};

var demarre = function demarre() {
  boutonDemarre.disabled = true;
  boutonArreter.disabled = false;
  animationId = requestAnimationFrame(deplacerBallon);
};

var arrete = function arrete() {
  boutonArreter.disabled = true;
  boutonDemarre.disabled = false;
  cancelAnimationFrame(animationId);
};

boutonDemarre.addEventListener("click", demarre);
boutonArreter.addEventListener("click", arrete);
