let a = 300; // ye Global scope hai quki block scope {} ke bahar hai esiliye ye Global variable hai

var b = 300;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;     // var block of scope ke bahar print hota hai esiliye esko avoid karte hai
}

// console.log(a);
// console.log(b);
// console.log(c);



// block scope 
// Global scope


// Nested scope 

function one(){
    const username = "Hitesh"

    function two(){
        const wesite = "youtube"
        console.log(username)
    }

   // console.log(website)
    two()
}
 // one()

 if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube "
        console.log(username + website)
    }
   // console.log(website) // ye error dega kyuki website block scope ke bahar hai
 }
// console.log(username) // ye error dega kyuki username block scope ke bahar hai

// ++++++++++++++++++++++++++++++   Interesting ++++++++++++++++++++++++++++++++

console.log(addOne(5))
function addOne(num){
        return num +1
}


const addTwo = function(num){
    return num + 2
}

console.log(addTwo(2))
