// function calculateCartPrice(...num1) {
//     return num1
// }
// console.log(calculateCartPrice(100,200,300)); [ 100, 200, 300 ]


// function calculateCartPrice(val1,val2,...num1) {
//     return num1
// }
// console.log(calculateCartPrice(100,200,300,400,500)); [ 300, 400, 500 ]

// const user={
//     username:'john',
//     price:100
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user); // Username is john and price is 100
handleObject({username:'john',price:100}); // Username is john and price is 100 (Another method)

const myArray=[200,400,500,600];

function returnsecondValue(getarray){
    return getarray[2];
}

// console.log(returnsecondValue(myArray)); or //console.log(returnsecondValue([200,400,500,600])); // 500