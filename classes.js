class Person {
    constructor (name,age){
        this.name = name;
        this.age = age;

        // Inside it is  a function
        this.hello = function(){
            console.log(`hello ${this.name}`);
        }
    }
    //Ountiside it is amethod
    greet(){
        console.log(`hello my name is ${this.name}`);
    }
}
const jane = new Person("jane",30)
console.log({jane});
jane.greet();

Person.prototype.nationality = "Kenya"
console.log("nationality", jane.nationality);



class Student extends Person{
    constructor(name, age,school){
        super(name,age)
        this.school = school
    }
    proffesion(){
        console.log(`I am a student at ${this.school}`);
    }
}
const amanda = new Student("amanda", 390, "Akirachix");
console.log(amanda);
console.log("nationality",amanda.nationality)
amanda.greet();
amanda.proffesion()



// Question 1
class Car {
   constructor (make,model,year,isAvailable){
     this.make = make;
     this.model = model;
     this.year = year;
     this.isAvailable = isAvailable;
   }
   
toggleAvailabity(){
 console.log(this.isAvailable = !  this.isAvailable)

}
}
const toyota = new Car("toyota","camry",2020,true);
console.log(toyota);
toyota.toggleAvailabity();


class Rental {
       constructor (car,renterName,rentalStartDay, rentalEndDay){
        this.Car = car;
        this.renterName = renterName;
        this.rentalStartDay = rentalStartDay;
        this.rentalEndDay = rentalEndDay;
       }
       calculateRentDuration(){
    console.log(this.rentalEndDay - this.rentalStartDay);
       }
}
const rental = new Rental(this.Car,"YVONNE",6,20);
console.log(rental);
rental.calculateRentDuration();





class Following{
    constructor(user){
        this.user = user
        this.follower = []
    }

    addFollower(follower){
        if(this.follower.includes(follower)){
            console.log("Already exist");
        }
        else{
            this.follower.push(follower)
        }
    }
}
const yvonne = new Following ("Yvonne")
yvonne.addFollower("faith")
yvonne.addFollower("martin")
console.log(yvonne);


class Scheduling{
    constructor(docName,specialization){
        this.docName = docName
        this.specialization= specialization
        this.availability = true
        
    }
    patientDetails(name,age,condition,preference){
        console.log (`Hello my name is ${name} and I am ${age} ,my condition is ${condition} and I want ${preference}`)             
        
                     
        
    }
    doctorsAvailability(date){
        if  (this.availability == true){
        console.log(`My name is ${this.name} I have booked ${this.docName} who is a ${this.specialization}  on ${date}`);
        }else{
         console.log(`Look for another hosiptal`);    
        }

    }
      
}
const Smith = new Scheduling("Smith","Optician");
Smith.patientDetails("mercy",20,"malaria","I will come with my husband");
Smith.doctorsAvailability("28th,May,2024")




   




