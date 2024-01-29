// const arr=[1,2,3,4,5,6,7,8,9,10];

// for (const num of arr) {
//     console.log(num);
// }

// const map=new Map()
// map.set('a',1)
// map.set('b',2)
// map.set('c',3)
// map.set('c',3)

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }
// for (const [key,value] of map) {
//     console.log(key,"-",value);       //another way to print it
// }


// const myObject={
//     js:"javascript",
//     cpp:'c++',
//     rb:'ruby',
//     c:"c"
// }

// for (const key in myObject) {
//     console.log(`${key} - ${myObject[key]}`)
// }

// myarr=["js","ruby","c++"]
// for(const index in myarr)
// {      //array has also keys
//     console.log(myarr[index]);  
// }


// // for in cannot be used for map as it is not iterable


// const coding=["js","ruby","c++"]

// // coding.forEach(function (item){
// //     console.log(item);
// // })

// // coding.forEach( (item)=>{console.log(item)})

// // coding.forEach( (item,index,arr)=>console.log(item,index,arr))  //if only one parameter, then no need of paranthesis  not return any values


// const arr=[1,2,3,4,5,6,7,8,9,10];

// // const newarr=arr.filter((item)=>item>4)  //return new array
// // console.log(newarr);


// const newArr=arr
//                 .map((item)=>item*10)
//                 .map((item)=> item+1)
//                 .filter((item)=> item>40)  //return new array

// console.log(newArr);



// reducer //used in carts

const array1=[1,2,3];

// const myarr=array1.reduce(function (acc,item){
//     console.log(`acc is ${acc} and item is ${item}`);
//     return acc+item;
// },3)  //0 is initial value of acc


// const myarr=array1.reduce((acc,item)=> acc+item,3)    //    variant 2
console.log(myarr);
