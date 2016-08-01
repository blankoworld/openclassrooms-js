var Chien = function(nom, race, taille) {
  this.nom = nom;
  this.race = race;
  this.taille = taille;
};
Chien.prototype.decrire = function() {
  var description = this.nom + " est un " + this.race + " mesurant " +
    this.taille + " cm.";
  return description;
};
Chien.prototype.aboyer = function() {
  var res = "Wouah !";
  if (this.taille < 25) {
    res = "Kaii !";
  } else if (this.taille > 60) {
    res = "Grrr !";
  }
  return res + " " + res;
};

var crockdur = new Chien("Crockdur", "mâtin de Naples", 75);
console.log(crockdur.decrire());
console.log("Tiens, un chat ! " + crockdur.nom + " aboie : " + crockdur.aboyer());

var pupuce = new Chien("Pupuce", "bichon", 22);
console.log(pupuce.decrire());
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());
