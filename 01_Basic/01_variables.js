const accountId = 144553;
let accountEmail = "hitesh@google.com"
var accountPassword = "12345";

accountCity = "jaipur";

let accountState;
/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

//accountId = 2;        // not allowed

accountEmail = "gautam@gmail.com";
accountPassword = "2004";
accountCity = "Bengaluru";

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

