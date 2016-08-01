// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

var i = 1;

questions.forEach(function (question) {
  // titre de la question
  var titre = document.createElement("strong");
  titre.textContent = "Question " + i + " : ";

  // énoncé de la question
  var questionElt = document.createElement("i");
  questionElt.textContent = question.enonce;

  // énoncé complet de la question
  var ligne = document.createElement("div");
  ligne.appendChild(titre);
  ligne.appendChild(questionElt);

  // zone de réponse
  var zoneReponse = document.createElement("div");
  var bouton = document.createElement("button");
  bouton.textContent = "Afficher la réponse";
  zoneReponse.appendChild(bouton);

  bouton.addEventListener("click", function () {
    // remplacement du bouton par la réponse à la question
    var reponse = document.createElement("div");
    reponse.textContent = question.reponse;
    zoneReponse.innerHTML = "";
    zoneReponse.appendChild(reponse);
  });

  var paragraphe = document.createElement("p");
  paragraphe.appendChild(ligne);
  paragraphe.appendChild(zoneReponse);
  document.getElementById("contenu").appendChild(paragraphe);

  i++;
});
