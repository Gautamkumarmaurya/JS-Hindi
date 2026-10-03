let score = "33abc";

console.log(typeof score);
console.log(typeof (score));

let ValueInNumber = Number (score);
console.log(typeof ValueInNumber);

console.log(ValueInNumber);     // NaN -> Not a Number

//  "33" => 33              // conversion opertion
//  "33abc" => NaN
//  true  => 1 , fase => 0

console.log("=======================================================");

let score1 = null;

console.log(typeof score1);
console.log(typeof (score1));

let ValueInNumber1 = Number (score1);
console.log(typeof ValueInNumber1);

console.log(ValueInNumber1);     // 

console.log("=======================================================");

let score2 = undefined;

console.log(typeof score2);
console.log(typeof (score2));

let ValueInNumber2 = Number (score2);
console.log(typeof ValueInNumber2);

console.log(ValueInNumber2);     // 

console.log("=======================================================");


let score3 = true;

console.log(typeof score3);
console.log(typeof (score3));

let ValueInNumber3 = Number (score3);
console.log(typeof ValueInNumber3);

console.log(ValueInNumber3);     // 

console.log("=======================================================");

let score4 = false;

console.log(typeof score4);
console.log(typeof (score4));

let ValueInNumber4 = Number (score4);
console.log(typeof ValueInNumber4);

console.log(ValueInNumber4);     //


console.log("=========================================================");

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);
// true -> 1, false -> 0
// "" => false
// "Gautam" => true

console.log("==========================================================");

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);