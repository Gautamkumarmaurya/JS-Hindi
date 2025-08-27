"use strict"; // treat all JS code as newer version

//alert(3 + 3) // we are using nodejs , not browser

console.log(3 
    + 3); // print to console -> code Readability should be high

console.log("Hello World"); // string -> sequence of characters

let name = "Gautam"; // variable -> container to store data
let age = 21; // number -> all numbers (int, float, double) are represented as number
let isApproved = false; // boolean -> true/false
let firstName = undefined; // undefined -> empty value
let selectedColor = null; // null -> empty value
 
// object -> key-value pairs
// number -> 2 to power 53
// bigint -> larger than 2 to power 53
// string -> ""  sequence of characters
// boolean -> true/false
// symbol -> unique identifiers
// undefined -> empty value
// null -> standalone value
console.log("------------------------------------")
//console.log(typeof null); // object 
//console.log(typeof undefined); // undefined

let score = "33"
//console.log(typeof score); // string

let valueNumber = Number(score) // convert string to number
//console.log(typeof valueNumber);
//console.log(valueNumber);

// "33" -> 33
// "33abc" -> NaN
// true -> 1 , false -> 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 -> true ;   0 => false
// "" => false
// "Gautam" => true

let number = 33;
let stringNumber = String(number);
console.log(stringNumber);
