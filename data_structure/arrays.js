//method 1
var stud = ['a', 'b', 'c', 'd', 'e'];
console.log(stud[0]); // a

//method 2
var stud1 = new Array('a', 'b', 'c', 'd', 'e');
console.log(stud1[1]); // b


//method 3
var stud2 = new Array(5); // it will create an array of size 5 with undefined values
console.log(stud2); // [ <5 empty items> ]

//length of an array
console.log(stud.length); // 5,  we use the (name).length to get the length of the array

//changing the value of the particular index 
stud[0] = 'f';
console.log(stud); // [ 'f', 'b', 'c', 'd', 'e' ]

// deleting the value of the particular index 
stud[0] = undefined;
console.log(stud); // [ <1 empty item>, 'b', 'c', 'd', 'e' ]

// use of pop function
stud.pop(); // it will remove the last element of the array
console.log(stud); // [ <1 empty item>, 'b', 'c', 'd' ]
