var styleContenu = getComputedStyle(document.getElementById("contenu"));
var hauteur = styleContenu.height;
var longueur = styleContenu.width;

var liste = document.createElement("ul");
var element1 = document.createElement("li");
var element2 = document.createElement("li");
element1.textContent = "Hauteur : " + hauteur;
element2.textContent = "Longueur : " + longueur;
liste.appendChild(element1);
liste.appendChild(element2);

var paragraphe = document.createElement("p");
paragraphe.textContent = "Informations sur l'élément";

var infos = document.getElementById("infos");
infos.appendChild(paragraphe);
infos.appendChild(liste);
