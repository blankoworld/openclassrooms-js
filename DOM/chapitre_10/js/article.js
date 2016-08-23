var formulaire = document.querySelector("form");

formulaire.addEventListener("submit", function (e) {
    e.preventDefault();
    data = new FormData(formulaire);
    ajaxPost("http://oc-jswebsrv.herokuapp.com/article", data, function () {
        var infos = document.getElementById("infos");
        infos.innerHTML = "";
        infos.textContent = "L'article a bien été ajouté.";
    });
});
