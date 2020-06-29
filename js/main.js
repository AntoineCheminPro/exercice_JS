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
