function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    };
}

var person = new Person("Nicholas", 29, "Software Engineer");
person.sayName();   //"Nicholas"

Person("Greg", 27, "Doctor");  //adds to window
console.log(window.sayName());   //"Greg"

// var o = new Object();
// Person.call(o, "Kristen", 25, "Nurse");
// o.sayName();    //"Kristen"