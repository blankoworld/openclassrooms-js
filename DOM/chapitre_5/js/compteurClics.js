// Initialisation
var compteur = 0;

// Gestion de l'incrémentation
var incrementation = function() {
  compteur++;
  var compteurClics = document.getElementById("compteurClics");
  console.log(compteur);
  compteurClics.textContent = compteur;
};

// Ajout de l'événement
var clic = document.getElementById("clic");
clic.addEventListener("click", incrementation);

// Suppression de l'événement
var desactive = document.getElementById("desactiver");
desactive.addEventListener("click", function() {
  clic.removeEventListener("click", incrementation);
});
