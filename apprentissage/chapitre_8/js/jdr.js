// Personnage
var Personnage = function Personnage(nom, sante, force) {
  this.nom = nom;
  this.sante = sante;
  this.force = force;
};
Personnage.prototype.attaquer = function (cible) {
    if (this.sante > 0) {
        var degats = this.force;
        console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
        cible.sante = cible.sante - degats;
        if (cible.sante > 0) {
            console.log(cible.nom + " a encore " + cible.sante + " points de vie");
        } else {
            cible.sante = 0;
            console.log(cible.nom + " est mort !");
        }
    } else {
        console.log(this.nom + " ne peut pas attaquer : il est mort…");
    }
};

// Joueur
var Joueur = function Joueur(nom, sante, force) {
  // Appelle le constructeur parent
  Personnage.call(this, nom, sante, force);
  this.xp = 0;
};
Joueur.prototype = Object.create(Personnage.prototype);
Joueur.prototype.constructor = Joueur;
Joueur.prototype.decrire = function () {
    var description = this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force et " + this.xp + " points d'expérience";
    return description;
};
// Combat un adversaire
Joueur.prototype.combattre = function (adversaire) {
    this.attaquer(adversaire);
    if (adversaire.sante === 0) {
        console.log(this.nom + " a tué " + adversaire.nom + " et gagne " +
            adversaire.valeur + " points d'expérience");
        this.xp += adversaire.valeur;
    }
};

// Adversaire
var Adversaire = function Adversaire(nom, sante, force, race, valeur) {
  // Appelle le constructeur parent
  Personnage.call(this, nom, sante, force);
  this.race = race;
  this.valeur = valeur;
};
Adversaire.prototype = Object.create(Personnage.prototype);
Adversaire.prototype.constructor = Adversaire;

// Début
var joueur1 = new Joueur("Aurora", 150, 25);
var joueur2 = new Joueur("Glacius", 130, 30);

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
console.log(joueur1.decrire());
console.log(joueur2.decrire());
var monstre = new Adversaire("ZogZog", 40, 20, "orc", 10);

console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);

monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);
console.log(joueur1.decrire());
console.log(joueur2.decrire());

// Fin
