function user(name,age,email,password){
    this._name=name;
    this._age=age;
    this._email=email;
    this._password=password;

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase();
        },
        set:function(value){
            this._email=value;
        }
    })
    Object.defineProperty(this,'password',{
        get:function(){
            return `${this._password}ayush`
        },
        set:function(value){
            this._password=value;
        }
    })
}

const user1=new user("Ayush",22,"ak@ak.com","kitty");
console.log(user1.email);

console.log(user1.password);
console.log(user1._email);
