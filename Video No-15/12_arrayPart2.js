const marvel_heros = [
  "thor",
  "hulk",
  "ironman",
  "spiderman",
  "captain america",
];

const dc_heros = ["batman", "superman", "flash", "green lantern", "aquaman"];

marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[5][1]); // Accessing "superman" from dc_heros

const all_heros = marvel_heros.concat(dc_heros);

// console.log(all_heros);
// console.log(dc_heros);

const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);
// console.log(all_new_heros[5]);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);

// console.log(real_another_array);

console.log(Array.isArray("Rohan"));
console.log(Array.from("Rohan"));
console.log(Array.from({ name: "Rohan", age: 20 }));  // intresting

let score1 = 101;
let score2 = 102;
let score3 = 103;

console.log(Array.of(score1, score2, score3));
