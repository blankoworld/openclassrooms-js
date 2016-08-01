// Renvoie un message de bienvenue
function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

// TODO : faire saisir le prénom et le nom de l'utilisateur
var prenomSaisi = String(prompt("Saisissez votre prénom : "));
var nomSaisi = String(prompt("Saisissez votre nom : "));
// TODO : appeler direBonjour() avec les bons arguments et afficher son résultat
console.log(direBonjour(prenomSaisi, nomSaisi));
