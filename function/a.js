/*
console.log();

function addTwonumber(number1 , number2){
    return number1 + number2;
}
const result = addTwonumber(3,5);
console.log(result);

function add(a, b){
    return a + b;
}
const result1 = add(10, 20);
console.log(result1);

function greet(){
   // console.log("Hello Gautam");
}
const result2 = greet();
console.log(result2);

*/


/* console.log(1 + "2");    
console.log(1 - "2");
console.log("2" + 1);
console.log(true + true);
console.log(typeof null);
console.log(typeof undefined);
console.log([] == false);

console.log(typeof []); */


/* var a = 10;
if(true){
    console.log(" A -> ",a);
    var a = 20;
    
}
console.log(a);


let b = 10;

if (true) {
    let b = 20;
        console.log(" B -> ", b);

}

console.log(b);
 */

/* const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter(n => n % 2 === 0).map(n => n * 10);
console.log(result); */

/* let score = 80;
if(true){
    score = 100;
    console.log(score);
}
console.log(score);

const result = 50 ;
if (true) {
   
    console.log(result);
    
}
console.log(result); */

// var ab = 10;
// ab = 30;
// console.log(ab);


/* var name = "Gautam"
var name = "Golu"
console.log(name); */

//============================ Function Scope ================================

/* function test(){
    var message = "Hello"
    
}
 console.log(message); */

// const result = test();
// console.log(result)
// test();
/* 
if (true) {
    var ab = "Hello"
}
console.log(ab);



var x = 10;
x = 20; 
console.log(x); 


let y = 30;
y = 40; 
console.log(y); 

 */

// inside loop 
/* 
for(var i = 0; i<3; i++){
    console.log(i);
}
console.log(i);

console.log("-------------------");

for (let j = 0; j < 3; j++) {
    console.log(j);
}
console.log(j);

 */

/* console.log(x);
var x = 10;

 */

// const user = {
//     name : "Gautam"
// };

/* user = {
    name : "Golu"       // ye error hai quki reassign nhi kar sakta hai 
}; */

// user.name = "Rahul"
// console.log(user.name);

//======================= Const Array ====================
/* 
const number = [1,2,3,4,5];
number.push(6);
console.log(number);

 */
/* 
const number = [1,3,4];         
number = [4,5,6];               // ye error hai quki reassign nhi kar sakte hai
console.log(number);

 */

//================== Real Project Example =======================
/* 
const product = {
    id : 1,
    name : "iPhone 18",
    price : 999999
};

const id = product.id;
const name = product.name;
const price = product.price;

console.log([id, name, price]);
console.log([product.id, product.name, product.price]);

const result = [product.id, product.name,  product.price];
console.log(result);

const {id1, name1, price1 } = product;
console.log(id);
console.log(name);
console.log(price);

console.log([product.id, product.name, product.price]);     // it is print of Array 

 */

// ========================== Coding Pratice =======================
/* 
var a = 10;
{
    var a = 20;    
}
console.log(a);


let a = 10;
{
    let a = 20;
}
console.log(a);

const  b = 40;
{
    const b = 30;
}
console.log(b);
 */

// var a = 10;
// var a = 20;

// console.log(a);


// let a = 10;          it is a error because of same variable name two times declare in this program
// let a = 20;
//  console.log(a);
 
/* const user = {
    name : "Gautam"
};
user.name = "Golu";
console.log(user.name);
 */

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }
// console.log(i);

/* const cart = [];
cart.push("iphone");
console.log(cart);
 */

let name = "Gautam";
let age = 25;
let isDeveloper = true;

console.log(isDeveloper);







