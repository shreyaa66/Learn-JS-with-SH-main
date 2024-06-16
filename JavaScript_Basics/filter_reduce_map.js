const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item)=>{
//     //console.log(item)

//     return item
// })

// console.log(values)

//const myNums = [1,2,3,4,5,6,7,8,9,10]


//++++++++++++++Filter+++++++++++++++++++++//
// const myFilertedArray = myNums.filter((num)=>num>5)
// const myFilertedArray = myNums.filter((num)=>{
//     return num>4
// })

//console.log(myFilertedArray)


//+++++++++++Filter alternative with forEach++++++++++++++++++++++++
// const newNums = []

// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num);
//     }
// })
// console.log(newNums)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk)=>bk.genre == 'History')
// console.log(userBooks)

userBooks = books.filter((bk) => bk.publish >= 2000)
//console.log(userBooks)


//++++++++++++++++++++++++++++++++++.map()++++++++++++++++++++++++++++++++++++++++++++++

//const newNums = myNumbers.map( (num)=> num + 10)
// const newNums = myNumbers.map( (num)=> {return num + 10})

// console.log(myNumbers,'\n')
// console.log("After the Operation Defined The result is :- \n")
// console.log(newNums)


//++++++++++++++++++++++++Map Operations by forEach++++++++++++++++++++++++++++++++++++
// const newNums2 = []

// myNumbers.forEach((num)=>{
//     newNums2.push(num+10)
// })

// console.log(newNums2)

//++++++++++++++++++++Chaining++++++++++++++++++++++++++++++++

const myNumbers= [1,2,3,4,5,6,6,7,8,10]

const myNums = myNumbers
                .map((num)=>num*10)
                .map((num) => num+1)
                .filter((num)=> num>=60)
                .map((num)=>num-2)
                .filter((num)=>num>60)

// console.log(myNums)



//++++++++++++++++++++++++++++Reduce+++++++++++++++++++++++++++++++++++
const test = [1,2,3]

// const myTotal = test.reduce(function (acc,currVal){
//     console.log(`acc: ${acc} \ncurrVal : ${currVal}\n`)
//     return acc+currVal
// },0)


//const myTotal = test.reduce((acc,currVal)=>(console.log(`acc: ${acc} \ncurrVal : ${currVal}\n`)),0)

//console.log(`Final Value is :- ${myTotal}`)

const shoppingCart = [
    {
        itemName : "JS Course",
        price: 2999
    },
    {
        itemName : "PY Course",
        price: 999
    },
    {
        itemName : "Java Course",
        price: 5999
    },
    {
        itemName : "JS Course",
        price: "Abhijeet"
    },
    {
        itemName : "Data Science Course",
        price: 12999
    },

]

const TotalPriceOfTheCart = shoppingCart.reduce((acc,item)=>{

    if(typeof(item.price) === 'number'){
        return acc+item.price
    }
    else{
        return acc
    }
    
},0)

console.log(TotalPriceOfTheCart)

