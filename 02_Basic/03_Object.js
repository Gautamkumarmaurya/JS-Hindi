// Singleton -> interview topic most important      // singleton banta hai constructor ke through 

// object literals
const mySym = Symbol("key1");   // most important interview question 

const jsUser = {
    name : "Hitesh",
    "full name": "Hitesh choudhary",
    [mySym] : "mykey1",
    age : 18,
    location : "Jaipur",
    email : "gautam@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday" , "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"])

console.log(typeof jsUser.mySym);
console.log(jsUser[mySym]);

jsUser.email = "gautam@chatgpt.com";
//Object.freeze(jsUser);
jsUser.email = "gautam@microsoft.com";
console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS User")
}

jsUser.greetingTwo = function(){
    console.log(`Hello js User,${this.name} `)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

