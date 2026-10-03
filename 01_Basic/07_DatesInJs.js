// let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);             // important of interview [date is a object ]

// let myCreateDate = new Date(2026, 0 , 23);
// let myCreateDate = new Date(2026, 0 , 23, 5, 3);
// let myCreateDate = new Date("2026-15-08");
let myCreateDate = new Date("08/14/2026");
// console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now() / 1000));


let newDate = new Date();               // Date is important part of interview question 
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday : "long"
})

