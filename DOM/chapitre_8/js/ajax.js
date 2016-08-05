// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
var ajaxGet = function ajaxGet(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url);
  req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) {
      callback(req.responseText);
    } else {
      // Affichage des informations sur l'échec du traitement de la requête
      console.error(req.status + " " + req.statusText + " " + url);
    }
  });
  req.addEventListener("error", function () {
    // La requête n'a pas réussi à atteindre le serveur
    console.error("Erreur réseau avec l'URL " + url);
  });
  req.send(null);
};
