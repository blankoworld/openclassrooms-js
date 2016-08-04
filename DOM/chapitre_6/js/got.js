// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}

// Affiche la liste des personnages d'une maison suivant la cible de l'événement reçu
var affichePersonnages = function affichePersonnages(e) {
  var personnages = getPersonnages(e.target.value);
  var listePersonnages = document.getElementById("persos");
  listePersonnages.innerHTML = "";
  personnages.forEach(function (personnage) {
    var element = document.createElement("li");
    element.textContent = personnage;
    listePersonnages.appendChild(element);
  });
};

// Ajoute la liste des maisons
var listeMaisons = document.getElementById("maison");
maisons.forEach(function (maison) {
  // création de l'élément
  var option = document.createElement("option");
  option.value = maison.code;
  option.textContent = maison.nom;

  // ajout de l'élément à la liste
  listeMaisons.appendChild(option);
});

// Écoute de changement sur la liste des maisons
listeMaisons.addEventListener("change", affichePersonnages);
