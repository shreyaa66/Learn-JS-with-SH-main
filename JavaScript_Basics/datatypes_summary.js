//Types of DataTypes
//It is Categorized on the basis of how the data is stored in memory and how the data is accesed form the memory 
// Primitive and Non-Primitive
//Primitve    |  Non Primitve
//7 types     |  Reference Type
//String      |  Arrays
//Number      |  Objects
//Boolean     |  Functions
//null        |
//undefined   |
//symbol      |
//BigInt      |

const score = 100;
const scoreVlue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
// Can be Manually define it "undefined"

const id = Symbol('123');
const anotherId = Symbol('123');

//console.log(id === anotherId)

const bigNumber = 2346467543214256n;

//Refrenced (Non Primitve)
//Array, Objects , Functions

const heros = ["Shaktiman","nagraaj","doga"];
let myObj = {
    name:"Abhijeet",
    age:21,
}

const myFunction = function(){
    console.log("Hello World!");
}

//Datatypes of type value
//Undefined => Undefined
//Boolean => Boolean
//Number => number
//String => string
//null => Object
//Function => Function
//Symbol => Symbol
//All Non primitve dataypes return typeof as object/Object Function/Function Object
//console.log(typeof anotherId)

//Stack (Primitive) , Heap (Non-Prmitive)

let myYoutubeName = "Abhijeet Goswami"

let anotherName = myYoutubeName;
anotherName = "AG Vlogs"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email:"user@google.com",
    upi : "abc@ybl",
}

let userTwo = userOne;

userTwo.email = "abhijeet@google.com"

console.log(userOne.email);
console.log(userTwo.email);