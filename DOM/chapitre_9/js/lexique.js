var url = "http://oc-jswebsrv.herokuapp.com/api/lexique/";
var lettres = ["A", "B", "C", "D", "E"];

var motsElt = document.getElementById("mots");
var afficher = function afficher(reponse) {
    motsElt.innerHTML = ""; // remise à 0 des mots

    // affichage de chaque mot reçu
    var mots = JSON.parse(reponse);
    if (mots.length > 0) {
        mots.forEach(function (mot) {
            motElt = document.createElement("div");
            titre = document.createElement("h2");
            titre.textContent = mot.term;
            definition = document.createElement("p");
            definition.textContent = mot.definition;
            motElt.appendChild(titre);
            motElt.appendChild(definition);
            motsElt.appendChild(motElt);
        });
    } else {
        motsElt.innerHTML = "<p>Aucun mot trouvé</p>";
    }
};

// Liste les lettres
var lettresElt = document.getElementById("lettres");
lettres.forEach(function (lettre) {
    lienElt = document.createElement("a");
    lienElt.textContent = lettre;
    lienElt.href = "#";

    // chargement des mots au clic d'une lettre
    lienElt.addEventListener("click", function () {
        // récupération de la page et affichage des mots
        ajaxGet(url + lettre, afficher);
    });

    // ajout de la lettre sur la page
    lettresElt.appendChild(lienElt);
    lettresElt.appendChild(document.createTextNode(" | "));
});
lettresElt.appendChild(document.createTextNode("…"));
