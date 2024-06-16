//++++++++++++++Methods of DOM+++++++++++++++++++++++++
// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()
// document.getElementsByClass()

// document.getQuerySelector('id')
// document.getQuerySelector('#title')
// document.getQuerySelector('.class')


//++++++++++++++++++++Use of QuerySelector+++++++++++++++++++++++++++++
// const myul = document.getQuerySelector('ul')
// const turn_green = myul.getQuerySelector('li')
// turn_green.style.backgroundColor = "green";
// turn_green.style.padding = "10px";
// turn_green.innerText = "two"
// turn_green.innerContent = "two"


//+++++++++++++Conversions to Array and Data Structures return by specific methods of getting elements in DOM++++++++++

//getQuerySelectorAll -> NodeList (forEach)
//getElementsByClassName -> HTMLCollection (Don't even hold forEach as its property to use)

/*So basically to use all the functionalties like map filer forEach for in 
we have to convert the HTMLCollections and NodeList Formats into an Array by below from method 

const array = Array.from(NodeList name)
const array = Array.from(HTMLCollection name)
array.forEach(function (li){
    li.style.color = 'orange'
})
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
all list elements text color will change to orange through for each loop

*/


//