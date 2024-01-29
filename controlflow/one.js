// // 

// if(2=='2')
// {
//     console.log("This is true");   // true printed
// }

// if(2==='2')
// {
//     console.log("This is true");  // nothiong printed as checks dattype also
// }


// //truthy - "0","false"," ",[],{},function(){}
// //falsy - 0,-0,undefined,null,"",NaN,BigInt(0)

// const wptyObj={}

// if(Object.keys(wptyObj).length===0)
// {
//     console.log("object is empty");  // nothing printed
// }


//Nullish Coalescing Operator (??)

let val1;
val1=5??10   //sometimes when use database,appwrit or firebase, we get null value, so we can use this operator. used for only null and undefined    


// val1=undefined??10  or null??10
console.log(val1);