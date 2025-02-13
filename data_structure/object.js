// object is similar to the dictionary in python
// object is a collection of key-value pairs
// object is a non-primitive data type
// object is mutable
// object is a reference type, object is a collection of properties, object is a collection of methods, object is a collection of events
// object is a collection of objects, object is a collection of arrays, object is a collection of strings, object is a collection of numbers
// object is a collection of functions

var student = {
    f_name: 'Himanshu',
    l_name: 'chaudhari',
    skill: 'python',
    isActive: true,
    age: 22,
}


console.log("The original object is : "); 
console.log(student); // { f_name: 'Himanshu', l_name: 'chaudhari', skill: 'python', isActive: true, age: 22 }
console.log(student.f_name); // Himanshu
console.log(student['skill']); // python

console.log("The table format of object is : ");
console.table(student); // { f_name: 'Himanshu', l_name: 'chaudhari', skill: 'python', isActive: true, age: 22 }