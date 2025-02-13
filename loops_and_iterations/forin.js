// forin is used to iterate over the properties of an object i.e dictionary
// Syntax for forin loop is :
// for (variable in object) {
//     // code block to be executed
// }

var student = {
    f_name: 'Himanshu',
    l_name: 'chaudhari',
    skill: 'python',
    isActive: true,
    age: 22,
}

for (var key in student) {
    console.log(key);
}
// this is for the key values of the object
for (var key in student) {
    console.log(key + ' : ' + student[key]);
}