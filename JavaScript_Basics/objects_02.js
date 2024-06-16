//const tinderUser = new Object() // SingleTon 

const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Abhijeet";
tinderUser.isLoggedIn = false;

//console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        FirstName : "Abhijeet",
        LastName : "Goswami"
    }
}

//console.log(regularUser.fullname.LastName)

const obj1 = {1:"a" , 2:"b"} 
const obj2 = {3:"a" , 4:"b"}

//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}

//console.log(obj3)

const users = [
    {
        id : 1,
        email : "Abhijeet1@google.com"
    },
    {
        id : 2,
        email : "Abhijeet2@google.com"
    },
    {
        id : 3,
        email : "Abhijeet3@google.com"
    },
]

//console.log(users[0].email)
//console.log(Object.keys(users))
//console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(Object.values(users))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
  


const course = {
    coursename : "JS",
    price : 999,
    courseInstructor : "Abhijeet Goswami"
}

//Object De-Structuring for API
const {courseInstructor:instructor} = course
console.log(instructor)

//Object-Destructuting in React 
// const navbar = ({company}) =>{

// }

// navbar(company = "Abhijeet");

//Concept of API's 
//Values for API's in old days comes in XML
//But nowadays it comes in the format of JSON

// {
//     name:"Abhijeet",
//     coursename : "js",
//     price : "free"
// }