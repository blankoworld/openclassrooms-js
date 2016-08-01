var desserts = document.getElementById("desserts");

var quelDessert = function(contenu) {
  return prompt("Saisissez le nom de votre dessert : ", contenu);
};

document.querySelector("button").addEventListener("click", function () {
  var dessertChoisi = quelDessert("");
  var dessert = document.createElement("li");
  dessert.textContent = dessertChoisi;
  dessert.addEventListener("click", function (e) {
    e.target.textContent = quelDessert(e.target.textContent);
  });
  desserts.appendChild(dessert);
});
