const codingLanguages = [
    { language: 'java', compiler: 'javac' },
    { language: 'cpp', compiler: 'g++' },
    { language: 'ruby', compiler: 'ruby' },
    { language: 'javaScript', compiler: 'node' }
];


const coding =['java','cpp','ruby','javaScript'];

const value=coding.forEach((items)=>{  // forEach method doesnot return any values ;
    // console.log(items);
    return items;
})

// console.log(value);

const nums=[1,2,3,4,5,6,7,7,8,9,10];

const val=nums.filter((items)=>items>5);
// console.log(val);


const newArr=[];

nums.forEach((val)=>{
    if(val>5){
        newArr.push(val);
    }
});

// console.log(newArr);

const books = [
    {
        title: "Eloquent JavaScript",
        genre: "Programming",
        publisher: "No Starch Press",
        editions: 2018
    },
    {
        title: "Clean Code",
        genre: "Software Engineering",
        publisher: "Prentice Hall",
        editions: 2008
    },
    {
        title: "You Don't Know JS",
        genre: "Programming",
        publisher: "O'Reilly Media",
        editions: 2020
    },
    {
        title: "The Pragmatic Programmer",
        genre: "Software Engineering",
        publisher: "Addison-Wesley",
        editions: 1999
    },
    {
        title: "JavaScript: The Good Parts",
        genre: "Programming",
        publisher: "O'Reilly Media",
        editions: 2008
    },
    {
        title: "Introduction to Algorithms",
        genre: "Computer Science",
        publisher: "MIT Press",
        editions: 2009
    }
];

const date=books.filter((items)=>{
    return items.editions<2010;
});
// console.log(date);

const genre=books.filter((val)=>val.genre==="Programming");
console.log(genre);


/*
Properties of Array.prototype.filter():

1. filter() creates a new array with all elements that pass the test implemented by the provided function.
2. It does not modify the original array.
3. The callback function receives three arguments: currentValue, index, and array.
4. Returns a new array; if no elements pass the test, returns an empty array.
5. Does not execute the callback for array elements without values (i.e., holes in sparse arrays).
6. The original array is not mutated.
7. The callback is invoked only for indexes of the array which have assigned values.
*/







