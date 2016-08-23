var formulaire = document.querySelector("form");

formulaire.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = {
        pseudo: formulaire.pseudo.value,
        evaluation: parseInt(formulaire.evaluation.value),
        message: formulaire.contenu.value,
    };
    ajaxPost("http://oc-jswebsrv.herokuapp.com/api/temoignage", data, function () {
        var infos = document.getElementById("infos");
        infos.innerHTML = "";
        infos.textContent = "Le témoignage a bien été ajouté.";
    },
    true);
});
