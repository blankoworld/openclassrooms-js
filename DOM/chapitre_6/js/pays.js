// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

var suggestions = document.getElementById("suggestions");
var paysElt = document.getElementById("pays");

var createSuggestion = function createSuggestion(texte) {
  var element = document.createElement("div");
  element.classList.add("suggestion");
  element.textContent = texte;
  element.addEventListener("click", function (e) {
    paysElt.value = e.target.textContent;
    suggestions.innerHTML = "";
    suggestions.style.border = "none";  // optional
  });
  return element;
};

var completementAutomatique = function completementAutomatique () {
  suggestions.innerHTML = "";
  listePays.forEach(function (pays) {
    if (pays.indexOf(paysElt.value) === 0) {
      // création d'une suggestion
      suggestion = createSuggestion(pays);

      // ajout de l'élément dans la liste des suggestions
      suggestions.appendChild(suggestion);
      suggestions.style.border = "1px solid black"; // optional
    }
  });
};

// Écoute sur le changement de la saisie d'un pays
paysElt.addEventListener("input", completementAutomatique);

// Facultatif: amélioration de la visibilité de l'élément
suggestions.style.width = getComputedStyle(paysElt).width;
suggestions.style.border = "none"; // optional
