/*
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

var contenu = document.getElementById("contenu");

listeLiens.forEach(function (lien) {
  // création du titre
  var titre = document.createElement("a");
  titre.textContent = lien.titre;
  titre.href = lien.url;
  titre.target = "_blank";
  titre.style.textDecoration = "none";
  titre.style.color = "#428bca";

  // création de l'encart
  var encart = document.createElement("p");
  encart.className = "lien";
  encart.style.fontWeight = "bold";

  // auteur
  var auteur = "Ajouté par " + lien.auteur;

  // création du reste de la ligne (après le titre)
  var resteLigne = document.createElement("span");
  var sautLigne = document.createElement("br");
  resteLigne.appendChild(document.createTextNode(" " + lien.url));
  resteLigne.appendChild(sautLigne);
  resteLigne.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

  // ajout du titre et du reste de la ligne à l'encart
  encart.appendChild(titre);
  encart.appendChild(resteLigne);

  // ajout de l'encart au contenu
  contenu.appendChild(encart);
});
