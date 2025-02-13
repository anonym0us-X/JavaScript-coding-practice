var emp = ['himanshu', 'developer', 50000];

// var name = emp[0];
// var position = emp[1];
// var salary = emp[2];
// console.log(name);
// console.log(position);
// console.log(salary); 

var [name, position, salary] = emp;
console.log(name);

var anotherEmp = {
    name : 'john', 
    position : 'designer',
    salary :  40000,
}

var {name, position, salary} = anotherEmp;
console.log(name);