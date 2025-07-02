class  user{

    constructor(userName,email,password){
        this.userName=userName;
        this.email=email;
        this.password=password;
    }


    // getter and setter are used to access the properties of the class
    // getter is used to get the value of the property and setter is used to set the value of the property
    // getter and setter are used together, if we fon't use setter then we can't set the value of the property
    get email(){
        return `${this._email}@gmail.com`;
    }


    set email(value){
        this._email=value;
    }

    get password (){  
        return this._password.toUpperCase();
    }
    set password(value){
        this._password=value;   
    }
}

const user1=new user('Anil',"Raju","112");
console.log(user1);
