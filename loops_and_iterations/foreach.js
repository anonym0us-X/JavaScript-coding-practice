// Syntax for foreach loop is :
// foreach ($array as $value) {
//     // code block to be executed
// }
//
// In JavaScript, we can use the forEach() method to loop through an array:

var students = ["himanshu", "mrudula", "suyash", "deven", "swapnil"]
students.forEach(function(student){
    console.log(student);
});

var fruits = ["apple", "banana", "mango", "orange", "grapes"];
fruits.forEach((e) => console.log(e)); // this is a shorthand way of writing the above code