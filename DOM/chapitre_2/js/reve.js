function compterElements(nom) {
  var elements = document.querySelectorAll(nom);
  return elements.length;
}

console.log(compterElements("p")); // Doit afficher 4

console.log(compterElements(".adjectif")); // Doit afficher 3

console.log(compterElements("p .adjectif")); // Doit afficher 3

console.log(compterElements("p > .adjectif")); // Doit afficher 2
