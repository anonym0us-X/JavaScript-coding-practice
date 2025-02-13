var fruits = new Map();
fruits.set('apple', 1);
fruits.set('banana', 2);
fruits.set('cherry', 3);
// console.log(fruits); // Map { 'apple' => 1, 'banana' => 2, 'cherry' => 3 }

// for (var [key, value] of fruits) {
//     console.log(`${key} = ${value}`);
// }

fruits.forEach((value, key) => {
    console.log(`${key} = ${value}`);
});