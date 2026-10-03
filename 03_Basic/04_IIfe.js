// Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined.
 
// function chai(){
//     console.log("DB Connected")
// }
// chai() // ye function call ho raha hai

(function chai(){       // Global scope ke pulation ko hatane ke liye IIFE use kiye hai
    console.log("DB Connected"); 
})();   // yaha par semicolon lagana jaruri hai quki ye function ke end ko denote karta hai

(function aurCode(name){
    console.log(`DB Connected aur code ${name}`);
})("Gautam"); 

 

