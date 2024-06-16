/*
//Create Element in a Optimized Way
    function optiAddLanguage(langName){
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${langName}`))
        document.querySelector('.language').appendChild(li)
    }
    optiAddLanguage('TypeScript')

    //Edit a Element
    const secondLang = document.querySelector('li:nth-child(2)');
    //console.log(secondLang)
    const newLi = document.createElement('li')
    newLi.textContent = "MOJO"
    secondLang.replaceWith(newLi)

    //Edit a Element
    const firstLang = document.querySelector('li:first-child')
    firstLang.outerHTML = '<li>TypeScript</li>'

    //Remove a Element / Delete a Element
    const lastLang = document.querySelector('li:nth-child(3)');
    //console.log(lastLang)
    lastLang.remove()
*/