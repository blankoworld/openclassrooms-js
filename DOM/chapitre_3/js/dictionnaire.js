// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
/*
<dl>
  <dt>Nom</dt>
  <dd>Description longue.</dd>

  <!-- D'autres termes et leurs définitions -->
</dl>
*/

var liste = document.createElement("dl");
for (var i = 0; i < mots.length; i++) {
  var titreContenu = document.createElement("strong");
  titreContenu.textContent = mots[i].terme;
  var titre = document.createElement("dt");
  var description = document.createElement("dd");
  description.textContent = mots[i].definition;

  titre.appendChild(titreContenu);
  liste.appendChild(titre);
  liste.appendChild(description);
}

document.getElementById("contenu").appendChild(liste);
