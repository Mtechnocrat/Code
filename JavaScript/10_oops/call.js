function setUserName(userName) {
    this.userName=userName;
}


function createUser(userName,age,gender){
    setUserName.call(this,userName);  // we pass this to hold the reference of the another object now the object from which value is coming works on 'this' of this objcet; 
    this.age=age;  // now it will print name, without this keyword it will not print the name as it's from another object
    this.gender=gender;
}

const user1=new createUser("Ayush",33,"Male");
console.log(user1);
