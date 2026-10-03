const name = "Hitesh";

const repoCount = 50;

// console.log(name + repoCount + "Value");

//   `` it is a String interpolition
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String('Gautam');

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringone = "      Gautam      ";
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))
console.log(url.includes('Gautam'))

const str = "My Name is Gautam kumar";         // convert String to Array
console.log(str.split(' '));

