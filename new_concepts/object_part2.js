var employee = {
    name: '',
    age: '',
    salary: '',
    getEmpInfo: function () {
        console.log(`Employee name is ${this.name}`);
        console.log(`Employee age is ${this.age}`);
        console.log(`Employee salary is ${this.salary}`);
    },
}

var emp1 =Object.create(employee);
emp1.name = 'Himanshu';
emp1.getEmpInfo();
console.log(`Name given in the code is ${emp1.name}`);


emp2 = Object.create(employee);
emp2.name = 'Rahul';
emp2.age = 25;
emp2.salary = 50000;
emp2.getEmpInfo();