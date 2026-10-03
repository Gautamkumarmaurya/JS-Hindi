const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const othernumber = 123.8966;
console.log(othernumber.toPrecision(3));    // es precision ko achhe se yad or test karna important hai interview ke according

const hunderds = 1000000;
console.log(hunderds.toLocaleString('en-IN'));      // Indian value


// *********************************************       Math     ********************************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

// console.log(Math.max(2,6,8,4,3));
// console.log(Math.min(8,4,3,6,2));

console.log(Math.random())              // esme value always 0 and 1 to between 

console.log((Math.random()*10 ) + 1 );
console.log(Math.floor((Math.random()*10 ) + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min)) + min);        // it is a important maths of java script





