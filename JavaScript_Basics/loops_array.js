const arr = [1,2,3,4,5]

for(const val of arr){
    //console.log(val)
}

const map = new Map()
map.set('IN','India');
map.set('USA','United States of America')
map.set('Fr','France')
map.set('In','India')

//console.log(map)

// for(const [key,value] of map){
//     console.log(key,'->',value)
// }

const myObj = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'swift by apple'
}

// for (const key in myObj) {
//     console.log(`${key} shortcut is for ${myObj[key]}`);
//     //console.log(myObj[key])
// }

const coding = ["js","ruby","java","python","cpp"]

coding.forEach(function (item){
    //console.log(item)
})

coding.forEach((item)=>{
    //console.log(item)
})


function printMe (item){
    console.log(item)
}

//coding.forEach(printMe)


coding.forEach((item,index,array)=>{
    //console.log(item,index)
})


const myCoding = [
    {

    },
    {
        languageName:"Java",
        languageFileName:"Java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
]


myCoding.forEach((item,index)=>{
    if(item.languageFileName === undefined || item.languageName === undefined){
        return
    }
    console.log(index," ",item.languageFileName,item.languageName)
})