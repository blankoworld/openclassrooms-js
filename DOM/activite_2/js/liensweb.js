/*
Activité 2
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

// permet de créer un formulaire avec 3 champs et un bouton de validation
var creationFormulaire = function creationFormulaire() {
  var resultat = document.createElement("form");
  resultat.style.width = "100%";
  var nom = document.createElement("input");
  nom.id = "nom";
  nom.name = "nom";
  nom.placeholder = "Entrez votre nom";
  nom.required = true;
  var titre = document.createElement("input");
  titre.id = "titre";
  titre.name = "titre";
  titre.placeholder = "Entrez le titre du lien";
  titre.required = true;
  titre.style.margin = "0 10px";
  titre.style.width = "25%";
  var lien = document.createElement("input");
  lien.id = "lien";
  lien.name = "lien";
  lien.placeholder = "Entrez l'URL du lien";
  lien.required = true;
  lien.style.marginRight = "10px";
  lien.style.width = "25%";
  var soumission = document.createElement("input");
  soumission.type = "submit";
  soumission.value = "Ajouter";
  resultat.appendChild(nom);
  resultat.appendChild(titre);
  resultat.appendChild(lien);
  resultat.appendChild(soumission);
  return resultat;
};

var ajoutFormulaire = function ajoutFormulaire(e) {
  // On vide l'espace où se trouve le lien, puis on y ajoute le formulaire
  espace.innerHTML = "";
  var formulaire = creationFormulaire();
  espace.appendChild(formulaire);
  // Focus sur le premier champ du formulaire (optionnel)
  var premierChamp = document.getElementById("nom");
  premierChamp.focus();
  // On écoute le formulaire sur la soummission de ce dernier
  formulaire.addEventListener("submit", ajouteLien);
};

// Création d'un lien sous forme HTML. On s'attend à ce que « objet » contienne
// les propriétés suivantes : titre, url et auteur
var creationLien = function creationLien(objet) {
  // création du titre
  var titre = document.createElement("a");
  titre.textContent = objet.titre;
  titre.href = objet.url;
  titre.target = "_blank";
  titre.style.textDecoration = "none";
  titre.style.color = "#428bca";

  // création de l'encart
  var resultat = document.createElement("div");
  resultat.className = "lien";
  resultat.style.fontWeight = "bold";

  // auteur
  var auteur = "Ajouté par " + objet.auteur;

  // création du reste de la ligne (après le titre)
  var resteLigne = document.createElement("span");
  var sautLigne = document.createElement("br");
  resteLigne.appendChild(document.createTextNode(" " + objet.url));
  resteLigne.appendChild(sautLigne);
  resteLigne.appendChild(document.createTextNode("Ajouté par " + objet.auteur));

  // ajout du titre et du reste de la ligne à l'encart
  resultat.appendChild(titre);
  resultat.appendChild(resteLigne);

  // on renvoie l'encart entier
  return resultat;
};

// On prépare le nouveau lien, on fait disparaître le formulaire et on ajoute:
// - le lien au dessus de la liste des liens
// - le bouton "Ajouter un lien"
// - un encart avec "Le lien 'bidule' a bien été ajouté."
var ajouteLien = function ajouteLien(e) {
  // récupération du formulaire en l'état
  var formulaire = document.querySelector("form");

  // On vérifie le lien. On lui ajoute http/https si non présent en début de chaîne
  var lienComplet = formulaire.elements.lien.value;
  if ((lienComplet.indexOf("http://") === -1) && (lienComplet.indexOf("https://") === -1)) {
    lienComplet = "http://" + lienComplet;
  }

  // Création d'un nouveau lien, d'abord sous forme d'objet puis en HTML (creationLien)
  var objetLien = {
    titre: formulaire.elements.titre.value,
    url: lienComplet,
    auteur: formulaire.elements.nom.value,
  };
  var nouveauLien = creationLien(objetLien);

  // On récupère la liste des liens de la page. Et on insère notre nouveau lien
  // AVANT le premier.
  var TousLesLiens = document.getElementsByClassName("lien");
  contenu.insertBefore(nouveauLien, TousLesLiens[0]);

  // On remet le bouton "Ajouter un lien" avec un encart de confirmation
  espace.innerHTML = "";
  var confirmation = document.createElement("p");
  confirmation.textContent = "Le lien \"" + formulaire.elements.titre.value + "\" a bien été ajouté.";
  confirmation.style.backgroundColor = "#d6ecf6";
  confirmation.style.color = "#537c8f";
  confirmation.style.padding = "15px";

  espace.appendChild(confirmation);
  espace.appendChild(bouton);

  // Petite attente de 2 secondes avant de supprimer le paragraphe de confirmation
  setTimeout(function () {
    espace.removeChild(confirmation);
  }, 2000);
  e.preventDefault();
};

var contenu = document.getElementById("contenu");

// Ajout d'un espace avec un bouton "Ajouter un lien"
var espace = document.createElement("p");
var bouton = document.createElement("button");
bouton.textContent = "Ajouter un lien";
bouton.addEventListener("click", ajoutFormulaire);
espace.appendChild(bouton);
contenu.appendChild(espace);

// Ajout des liens connus
listeLiens.forEach(function (lien) {
  // création de l'encart
  var encart = creationLien(lien);

  // ajout de l'encart au contenu
  contenu.appendChild(encart);
});
