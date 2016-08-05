var afficher = function afficher (reponse) {
    tableauElt = document.getElementById("tableaux");
    tableaux = JSON.parse(reponse);
    tableaux.forEach(function (tableau) {
        element = document.createElement("tr");
        nom = document.createElement("td");
        nom.textContent = tableau.nom;
        annee = document.createElement("td");
        annee.textContent = tableau.annee;
        auteur = document.createElement("td");
        auteur.textContent = tableau.peintre;

        element.appendChild(nom);
        element.appendChild(annee);
        element.appendChild(auteur);
        tableauElt.appendChild(element);
    });
};

ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", afficher);
