var operations = {
  "+": addition,
  "-": soustraction,
  "*": multiplication,
  "/": division,
};

function addition(a, b) {
  return a + b;
}

function soustraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function calculer(a, operator, b) {
  if (operator in operations) {
    return operations[operator](a, b);
  } else {
    return "Opération inconnue";
  }
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity
