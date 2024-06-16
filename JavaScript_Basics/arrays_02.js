const marvel_heros = ["thorr","Ironman","spiderman"];
const dc = ["superman","flash","batman"]

//marvel_heros.push(dc);

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(dc)
// console.log(allHeros)

// ... (Spread Operator)
const allHeros = [...marvel_heros,...dc];
//console.log(allHeros)
//console.log(typeof allHeros)

const another_array = [1,2,3,[4,5,6],7,[6,7[4,5]]]
const real_another_array = another_array.flat(Infinity);
console.log(another_array);
console.log(real_another_array);