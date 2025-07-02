class User{
    constructor(username){
        this.username=username;
    }
    print(){
        console.log(`USERNAME IS ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }

    print(){
        console.log(`USERNAME is : ${this.username}, password is : ${this.password}, email is :${this.email}`);
    }
    
}

const user1=new User('Anjali');

const teach=new Teacher("Anjali","teach@gmail.com","123456");

teach.print();
