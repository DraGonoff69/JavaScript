//singleton - only one instance of the object

//object literal


//Object.create //created through constructor function and here singleton is created

const mySym = Symbol("Key1");

const JsUser = {
    name: "Ayush",
    age: 21,
    // mySym: "myKey",if we use this then output will come according to line 26,27,28
    [mySym]:"myKey", // if we use this then output will come according to line 34,35 nad the correct to use symbol
    location: {
        city: "Gaziabad",
        state: "Delhi"
    },
    email: "ok@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Tue", "Wed"]
}

// console.log(JsUser.name); //Ayush
// console.log(JsUser["name"]); //Another way to call objects value //Ayush

// console.log(JsUser[mySym]); //undeined
// console.log(typeof(JsUser.mySym)); //String dataype
// console.log(JsUser.mySym); //myKey

// console.log(JsUser.mySym); //undefined
// console.log(typeof(JsUser.mySym)); //undefined

// console.log(JsUser[mySym]); //myKey
// console.log(typeof(mySym)); //symbol

// JsUser.email ="ok@google.com"
// console.log(JsUser.email); //ok@google

// Object.freeze(JsUser); //freeze the object
// JsUser.email ="ok@bhak@gmail.com"// after freeze email caanot be change 

// console.log(JsUser);
/*
{
    name: 'Ayush',
    age: 21,
    location: { city: 'Gaziabad', state: 'Delhi' },
    email: 'ok@google.com',
    isLoggedIn: false,
    lastLoginDays: [ 'Mon', 'Tue', 'Wed' ],
    [Symbol(Key1)]: 'myKey'
  }*/

  JsUser.greeting=function(){
    console.log("Howdyyy");
  }   
  JsUser.greeting1=function(){
    console.log(`Ok, ${this.name}`);//Ok Ayush //this is known as Strong interpretation
  }   

//   console.log(JsUser);
//   console.log(JsUser.greeting);// [Function (anonymous)] - function not executed but only reference is here 
  console.log(JsUser.greeting());// Howdyyy 

console.log(JsUser.greeting1());//Ok,Ayush 