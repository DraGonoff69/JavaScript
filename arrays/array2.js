// const arr=[1,2,3,"","Ayush",true,null]
// const arr1=[1,2,3,4,5,6,7,8]

// arr.push(arr1);
// console.log(arr)

//TO EXTRACT 8
//console.log(arr[7][7]); //8

// console.log(arr.concat(arr1)); 
/* [
    1,    2,       3,
    '',   'Ayush', true,
    null, 1,       2,
    3,    4,       5,
    6,    7,       8
  ]  */



// way to merge two arrays
// const a=[...arr,...arr1];
// console.log(a);

const arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// console.log(arr);  [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]

console.log(arr.flat(1));

/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/