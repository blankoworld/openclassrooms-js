var liste = document.getElementById("langages");

var afficher = function afficher(reponse) {
    elements = reponse.split(";");
    elements.forEach(function (element) {
        ligne = document.createElement("li");
        ligne.textContent = element;
        liste.appendChild(ligne);
    });
};

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", afficher);

ajaxGet("http://localhost/javascript-web-srv/data/films.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JSON
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    films.forEach(function (film) {
        console.log(film.titre);
    });
});
