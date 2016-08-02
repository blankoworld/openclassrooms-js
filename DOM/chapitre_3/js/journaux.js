// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// création de la liste
var liste = document.createElement("ul");
// parcours des journaux
journaux.forEach(function (journal) {
  // creation du lien
  var lien = document.createElement("a");
  lien.href = journal;
  lien.textContent = journal;
  // création de l'élément dans la liste
  var element = document.createElement("li");
  element.appendChild(lien); // ajout du lien à l'élément
  // ajout de l'élément à la liste
  liste.appendChild(element);
});
// ajout de la liste complète au contenu
document.getElementById("contenu").appendChild(liste);
