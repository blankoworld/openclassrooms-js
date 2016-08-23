var form = document.querySelector("form");

var afficher = function afficher (reponse) {
    var profil = document.getElementById("profil");
    // On vide le profil précédent (si existant)
    profil.innerHTML = "";

    // Infos
    informations = JSON.parse(reponse);
    // Photo
    image = document.createElement("img");
    image.src = informations.avatar_url;
    image.alt = "Image de " + reponse.login;
    image.style.height = "150px";
    image.style.width = "150px";
    // Nom/prénom
    nom = document.createElement("p");
    nom.textContent = informations.name;
    // site web
    site = document.createElement("a");
    site.href = informations.blog;
    site.textContent = site.href;

    // On ajoute les éléments les uns après les autres.
    profil.appendChild(image);
    profil.appendChild(nom);
    profil.appendChild(site);
};

form.addEventListener("submit", function (e) {
    e.preventDefault();
    url = "https://api.github.com/users/" + form.pseudo.value;
    ajaxGet(url, afficher);

});
