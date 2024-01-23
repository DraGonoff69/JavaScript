const arr=[1,2,3,"","Ayush",true,null]

// console.log(typeof(arr));//object

//Array methods

// arr.push("Pushed");

// console.log(arr); // [ 1, 2, 3, '', 'Ayush', true, null, 'Pushed' ]
// arr.pop()
// console.log(arr); //[ 1, 2, 3, '', 'Ayush', true, null ]

// arr.unshift("Unshifted");
// console.log(arr);   //[ 'Unshifted', 1, 2, 3, '', 'Ayush', true, null ]

// console.log(arr.includes(null));//true
// console.log(arr.indexOf(null)); //6
// console.log(arr.indexOf(5)); //-1

// const arr1=arr.slice(1,20);//[ 2, 3, '', 'Ayush', true, null ]
const arr1=arr.slice(1,3);//[ 2, 3 ]
console.log(arr1);//[ 2, 3 ]
console.log(arr);//[ 1, 2, 3, '', 'Ayush', true, null ]

const arr2=arr.splice(1,3);//[ 2, 3, '' ]
console.log(arr2);[ 2, 3, '' ]
console.log(arr); //[ 1, 'Ayush', true, null ]