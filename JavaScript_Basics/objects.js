//singleton -> if declaring like literals then that aprticular object is not a singleton 
//singleton -> It is always made by constructors 

//Object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Abhijeet", // String : (You declare)
    "fullName" : "Abhijeet Goswami",
    [mySym] : "myKey1",
    age : 18,
    location : "Jaipur",
    email : "abhijeet@google.com",
    isLoggedIn : false,
    LastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.location)
// console.log(JsUser["fullName"])
//Object.freeze(JsUser)

JsUser.greetings = function(){
    console.log("Hello JsUser...")
}

JsUser.greetingsTwo = function(){
    console.log(`Hello JsUser,${this.name}`)
}


console.log(JsUser.greetings())
console.log(JsUser.greetingsTwo())