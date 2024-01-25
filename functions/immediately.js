// Immediately invoked function expression (IIFE)

// (function chai() {
    //named IIFE
//     console.log(`DB Connected`);
// })();                                     //this is a function which is called immediately after its declaration

//sometimes global variables cause a lot of problems so to overcoem it we use IIFE

// (function chai() {
//     console.log(`DB Connected`);
// })()  
//                                        //error will come if we use two iife functions together without semicolon
// (function aurcode() {
//     console.log(`DB Connected`);
// })()  


((name)=>{
    console.log(`Hello ${name}`);  // unnamed IIFE
})('Ayush');