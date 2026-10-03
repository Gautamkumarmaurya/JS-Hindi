/*
const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website `) // this current context ko refer karta hai  
        //console.log(this) // ese aap check kar sakte hai current context me kya hai
    }
}

user.welcomeMessage()
user.username = "Gautam"
user.welcomeMessage()

// ======== Important part hai ye vala ===========
console.log(this) // ye empty print hoga quki ye node environment me run ho raha hai .
// yahi agar google console me print karne par window object like[alert , fromsummit] print hoga quki o browser ke andar run ho raha hai .

*/
// function Chai(){
//     console.log(this)
// }
// Chai()


// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()


// const chai = () => {
//     let username = "hitesh"
//     console.log(this)       // output = {} empty
// }
// chai()


// const addTwo = (num1 , num2) => {    // esme explicit return ho raha hai 
//     return num1 + num2
// }
// console.log(addTwo(3,4))

// const addTwo = (num1 , num2) => (num1 + num2) //esko implicit return type    // esme return likhne ke need nhi hai quki esme () bracket laga hai
// console.log(addTwo(5,2))

const addTwo = (num1 , num2) => ({username : "hitesh"})  // esme object return ho raha hai quki esme {} bracket laga hai
console.log(addTwo(2,3))







