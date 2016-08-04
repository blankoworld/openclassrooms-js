var bouton = document.querySelector("button");
var compteur = document.getElementById("compteur");
var demarre = false;
var intervalId = null;

var incremente = function incremente () {
  nombre = Number(compteur.textContent);
  nombre++;
  compteur.textContent = nombre;
};

bouton.addEventListener("click", function (e) {
  if (!demarre) {
    intervalId = setInterval(incremente, 1000);
    e.target.textContent = "Arrêter";
  } else {
    clearInterval(intervalId);
    e.target.textContent = "Démarrer";
  }
  demarre = !demarre;
});
