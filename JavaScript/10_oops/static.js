class User{
    constructor(username){
        this.username=username;
         
    }
    static createId(){
        return Math.floor(Math.random()*10000 + 1);  // static is used to make methods private so that there is no external use;
    }
    print(){
        console.log(`USERNAME IS ${this.username} and your id is ${User.createId()}`); // only object can call the static methods and variables;
        
    }

}

const newUser=new User("Rahul");
newUser.print();


