// const tinderUser=newObject() //singleton object

const tinderUser={}//not singleton object

tinderUser.id="abc123"
tinderUser.name="Ayush"
tinderUser.isLoogedin=false

// console.log(tinderUser) //{ id: 'abc123', name: 'Ayush', isLoogedin: false }

const regularUser={
    email:"ok@gmail.com",
    fullname:{
        first:"Ayush",
        last:"Singh"
    },
    isLoogedin:false
}

// console.log(regularUser.fullname.first);//Ayush
// console.log(regularUser["fullname"]["first"]); //Ayush

const obj1={
    1:"a",
    2:"b",
    3:{
        3.1:"c",
        3.2:"d"
    }
}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}
// console.log(obj3);  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3=Object.assign(obj1,obj2)
// console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3=Object.assign({},obj1,obj2) //better method to use
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3={...obj1,...obj2} //better method to use

// console.log(obj3);


// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoogedin' ] //return array of keys, now we can use loop to iterate over it
// console.log(Object.values(tinderUser)); //[ 'abc123', 'Ayush', false ] //return array of values, now we can use loop to iterate over it
// console.log(Object.entries(tinderUser)); //[ [ 'id', 'abc123' ], [ 'name', 'Ayush' ], [ 'isLoogedin', false ] ]

// console.log(tinderUser.hasOwnProperty("id")); //true //to see wether the property is present or not
// console.log(tinderUser.hasOwnProperty("logged")); //flase

const course={
    courseName:"JavaScript",
    price:"100",
    courseInstructor:"Ayush"
}

const {courseInstructor:instructor}=course //Destrcuturing the object

// console.log(courseInstructor); || console.log(instructor); //Ayush