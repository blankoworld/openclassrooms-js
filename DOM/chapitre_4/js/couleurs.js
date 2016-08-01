var couleurTexte = prompt("Saisissez la nouvelle couleur du TEXTE : ");
var couleurFond = prompt("Saisissez la nouvelle couleur du FOND : ");

var paragraphes = document.getElementsByTagName("div");
for (var i = 0; i < paragraphes.length; i++) {
  paragraphes[i].style.color = couleurTexte;
  paragraphes[i].style.backgroundColor = couleurFond;
}
