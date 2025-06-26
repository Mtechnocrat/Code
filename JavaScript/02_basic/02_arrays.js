const indTeam=["vadapau","chokli","thala"];
const ausTeam=["SandPaper","cheaters","kangaroo"]


// indTeam.push(ausTeam); // Adds the Australian team array to the Indian team array
// console.log(indTeam); // ["vadapau", "chokli", "thala", ["SandPaper", "cheaters", "kangaroo"]]


// concat
const newTeam=indTeam.concat(ausTeam); // Concatenates the Australian team array to the Indian team array
// console.log(newTeam);



// spread operator [...]
const brandNewTeam=[...indTeam,...ausTeam];
// console.log(brandNewTeam);

// Flat 
const crazyTeam=[1,2,3,[2,3,4,[2,88,7,555,6],[455,66,7,97,22]],56,33]

const okTeam=crazyTeam.flat(Infinity);
// console.log(okTeam);


//Array.isArray() // to check whether the given element is array or not;
// console.log(Array.isArray("Ayyush"));  // from keyword expands the string to array 
// FROM keyword is used to form array;
// console.log(Array.from("Aaayush"));
// console.log(Array.from({name : "Ayush",
//     age:30
// }));  // we have to give from whether the array should be form , by keys or values;


const score1=400;
const score2=4003;
const score3=999;

// console.log(Array.of(score1,score2,score3,indTeam,ausTeam));


// const grandArray=Array.of(indTeam,ausTeam);
const grandArray=[...indTeam,...ausTeam];


console.log(grandArray);






