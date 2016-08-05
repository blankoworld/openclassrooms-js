var afficher = function afficher(reponse) {
  console.log(reponse);
};

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", afficher);
