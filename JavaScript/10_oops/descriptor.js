// const desc=Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(desc);


const obj1={
    name:'Vada Pav',
    price:300,
    rating:5

}

const vadaDesc=Object.getOwnPropertyDescriptor(obj1,"name"); // this givee the list of operations that are available on the object properties;
// console.log(vadaDesc);

Object.defineProperty(obj1,'name',{
    writable: false,
    enumerable: false
})
// obj1.name="masla";
// console.log(Object.getOwnPropertyDescriptor(obj1,"name"));


for (const [key,value] of Object.entries(obj1)) { // object.entries enables the loop to acccess to the object properties
    console.log(`${key}  ${value}`);
}

// enumeration is the property where we can't iterate the object;

