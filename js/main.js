var items = new Array();
console.log(items);
// show [] empty
items = [];
console.log(items);
// same result
// those two commands creat a new empty array
//items = ();
//console.log (items);
// only "()" is not à command >  syntax error
items =["a","b"];
console.log(items);
// show ["a","b"]

// EXERCICE 2
var items = ["premier élément", "deuxième élément", "troisième élément","quatrième élément" ];
console.log(items);
// affiche ["premier élément", "deuxième élément", "troisième élément","quatrième élément" ]
console.log (items[1]); // affiche deuxième élément logique, on compte à partir de 0

console.log (items[3]); // affiche quatrième élément logique, on compte à partir de 0
console.log (items[0]);

// exercice 3
var player = ["John", "Doe", 34, true];
console.log(player);
// la variable affiche bien le tableau
console.log(player[0]);
console.log(player[1]);
console.log(player[0]+ " " + player[1]);
player[2]=40;
console.log(player);
console.log(player[3]);
// NO NO NO

var player = {
    firstname : "John",
    lastname : "Doe",
    age : 34,
    isAdult : true,

};
console.log(player);
// la variable contient valeurs et leur index
console.log(player.firstname);
console.log(player.lastname);
console.log(player.firstname + " " + player.lastname);
player.age = 40;
console.log(player.age);
console.log(player.isAdult);
// beaucoup plus intuitif d'afficher les valeurs

