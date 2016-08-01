var compte = {
  titulaire: "Alex",
  solde: 0,
  crediter: function(montant) {
    this.solde = this.solde + montant;
  },
  debiter: function(montant) {
    this.solde = this.solde - montant;
  },
  decrire: function() {
    return "Titulaire : " + this.titulaire + ", solde : " + this.solde;
  }
};

console.log(compte.decrire());
compte.crediter(200);
compte.debiter(150);

console.log(compte.decrire());
