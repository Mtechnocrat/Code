const object={
    game1:"Valorant",
    game2:"CSGO",
    game3:"Apex Legends",
}

for (const key in object) {
    // console.log(object[key]);
    
}

// The 'for...in' loop is used to iterate over the properties of an object.


const array = [1, 2, 3, 4, 5];
for(const key in array){
    // console.log(`Printing the index of elements ${array[key]} are ${key}`);
}

// when this loop is used array return the indexed valued;

const map=new Map();
map.set('Ayush',233);
map.set('Ram',23);


for(const key in map){
    console.log(map[key]);  //map is  not iterable by forIn looop
}