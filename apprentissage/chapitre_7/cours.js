var perso = {}; // Création d'un objet sans aucune propriété
perso.nom = "Aurora";
perso.sante = 150;
perso.force = 25;
perso.xp = 0;

// Renvoie la description du personnage
perso.decrire = function () {
  var description = this.nom + " a " + this.sante + " points de vie, " +
    this.force + " en force et " + this.xp + " points d'expérience.";
  return description;
};

console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

// Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15;

console.log(perso.decrire());
