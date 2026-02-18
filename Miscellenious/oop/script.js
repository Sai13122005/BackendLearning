// function PersonMaker(name, age)
// {
//     const person = {
//         name : name, 
//         age : age,
//         talk(){
//             console.log(`This is ${name}`);
//         }
//     }
//     return person;
// }
// let p1 = PersonMaker("Sai", 20);
// let p2 = PersonMaker("Varun", 19);
// console.log(p1);
// console.log(p2);
// console.log(p1.talk === p2.talk);


//constructor - does not return anything and start with capital
// function Person(name, age)
// {
//     this.name = name;
//     this.age = age;
// }
// let p3 = new Person("Raju", 19);
// let p4 = new Person("Saipavan", 20);

// console.log(p3);
// console.log(p4);
// Person.prototype.talk = function(){
//     console.log(`This is ${this.name}`);
// }
// console.log(p3.talk());
// console.log(p4.talk === p3.talk);
// _____________________________________________________________________

class Person{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`This is ${this.name}`);
    }
}
let p1 = new Person("sai", 19);
console.log(p1);
let p2 = new Person("Raju", 20);
console.log(p2);
console.log(p1.talk === p2.talk);

//inheritance

class Student extends Person{
    constructor(name, age, marks)
    {
        super(name, age);
        this.marks = marks;
    }
    greet(){
        console.log("Hello");
        super.talk();
    }

}
let s1 = new Student("Ram", 16, 100);
console.log(s1);
console.log(s1.greet());
