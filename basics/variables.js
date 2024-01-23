const accoutnId = '14453'; // account id
let accountEmail = 'its.mishraayush@gmail.com'
var accountPassword = '12345678'
accountCity="Delhi"
let accountState;
//accoutnId=2 Not allowed

console.log(accoutnId);
accountEmail="hello@gmai.com"
accountPassword="123456"
accountCity="Mumbai"

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.log([accoutnId,accountEmail,accountPassword,accountCity,accountState]);//to print all things in one line
console.table([accoutnId,accountEmail,accountPassword,accountCity]);//to print all things in a tabular format
