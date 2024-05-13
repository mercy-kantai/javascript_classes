function Person(name,age){
    this.name = name;
    this.age = age;
    this.greet = function (){
        console.log(`hello my name is ${this.name} and I am ${this.age}`);
    }
}

const Adam = new Person("Adam", 20);

console.log({Adam});
Adam.greet()


const eve = new Person("eve",30);

console.log({eve});
eve.greet()
eve.children = ["Mercy","jeremy"]
console.log({eve});

Person.prototype.skincolor = "black"
console.log("skincolor", Adam.skincolor);


Adam.skincolor = "white"
console.log({Adam});
console.log({eve: eve.skincolor});



// A prototype is used to add properties and methods in a constructor 