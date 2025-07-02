// classes are after ES6 but , as of now it still syntatic sugar
// class  user{

//     constructor(userName,email,password){
//         this.userName=userName;
//         this.email=email;
//         this.password=password;
//     }

//     encrptpass(){
//         return `${this.password}asdr`;
//     }
//     captial(){
//         return `${this.userName.toUpperCase()}`;
//     }
// }

// const  newUser=new user("Ayush","ak@ak.com",1234);
// console.log(newUser.encrptpass());
// console.log(newUser.captial());


//behind the scence

function user(userName, email,password){
    this.userName=userName;
    this.password=password;
    this.email=email;
}

user.prototype.encrptpass=function(){
    return `${this.password}asdr`;
}


user.prototype.captial=function(){
    return `${this.userName.toUpperCase()}`
}

const user2=new user('Ayush','java@mail.com',23445);
console.log(user2.encrptpass());
console.log(user2.captial());

