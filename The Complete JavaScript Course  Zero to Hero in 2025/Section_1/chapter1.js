console.log('Hello World!')
console.log(4 - 4)
console.log(4 + 2)

const sentence = 'Hi mom' // not initialized properly the variable
// var, let, const  Keywords to initialize variables


let number_of_eggs = 4
console.log(sentence)
console.log(number_of_eggs)

let word
word = 'word'
console.log(word)

// null, undefined
// boolean: true, false

// dictionaries
let myDict = {
    'key1': 1,
    'key2': 2,
    'key3': 3
}

console.log(myDict)

let example_array = [1, 2,3, 4, 5, 6, 7, 8, 9]
console.log(example_array)

function add(num1, num2) {
    console.log(num1 + num2)
}

add(3, 2)

// AND && , OR ||, NOT !
let condition1 = true;
let condition2 = false;
console.log(condition1 || condition2)
console.log(condition1 && condition2)
console.log(!condition2)


// if blocks
if (condition1) {
    console.log("Entered the IF block")
} else {
    console.log("Didnt enter the IF block")
}

// Loops
// While loop
let counter = 0;
let length = example_array.length;
while(counter < length) {
    console.log(example_array[counter]);
    counter++;
}
console.log("End of While loop")

// For loop
for (let i = 0; i < length; i++) {
    console.log(example_array[i])
}
