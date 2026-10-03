// Primitive data types -> esko call by value bhi bolte hai

// 7 types -> String , Number , Boolean , null , undefined , symbol , BigInt [Primitive data types]

// Reference (non-primitive data types) -> Array , objects, Functions

const heros = ["Gautam", "golu", "raunak"];     // Array

let myobj = {           // object 

    name : "Gautam",
    age : 25,
    roll_no : 25
}

const myFunction = function(){          // Function 
    console.log("Hello World ");
}

// java script static ya dynamic hai

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

// const bigNumber = 2432443586754856554n;

// ==================================================[ Memory of Java Script ] ===================================
/*

 *) Stack Memory (esme premitive data types ka stack memory use hota hai) ->  jo bhi variable decleare karte hai uska copy milta 
    hai 



 *) Heap Memory (esme Non premitive data types ka heap memory use hota hai ) -> jo bhi object ya array ka use karte hai esme 
    reference milta hai original value ka, agar jo bhi value change karenge to uska original value change hoga





*/


let myYoutubeName = "hiteshChaudharyDotCom";
anotherName = "ChaiOrCode";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email : "google@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne 

userTwo.email = "gautam@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);


