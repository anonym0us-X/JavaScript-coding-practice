// prototype is a property of a function in JavaScript. It is an object that is associated with every functions and objects by default in JavaScript, 
// where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.

var employee = function (name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.getEmpInfo = function(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`);
    }
}


employee.prototype.getName = function(){
    console.log(`Name: ${this.name}`);
}


// var emp1 = employee('John', 30, 50000);
// console.log(emp1); // undefined

// var emp2 = new employee('Doe', 25, 30000);
// console.log(emp2); // employee { name: 'Doe', age: 25, salary: 30000, getEmpInfo: [Function] }

var emp3 = new employee('Smith', 35, 70000);
emp3.getEmpInfo()
emp3.getName();


