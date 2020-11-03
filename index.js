function Voiture (prix, couleur, energie)
{
    this.prix = prix;
    this.couleur = couleur; 
    this.energie = energie;

}

var comparaison = new Voiture(1000, "blanc", "essence");
var comparaison2 = new Voiture(3000, "gris", "diesel");

console.log(comparaison);
console.log(comparaison2);