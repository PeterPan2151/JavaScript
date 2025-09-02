let name = "Rafael";
// changing name variable to my full name
name = "Rafael Montiel";
console.log(name);

// Comparing 2 variables
let a = 2;
let b = 3;
console.log(a == b);

// If statement check
let age = 18;
if (age >= 18) {
    console.log("You're an adult");
} else {
    console.log("You're still young");
}

// For loop that only prints even numbers
for (let i = 0; i <= 10; i++){
    if (i % 2 == 0){
        console.log(i);
    } else {
        continue;
    }
};


// Array While loop
let myArray = [1, 2, 4, 8, 16, 32, 64, 128];
let counter = 0;
let sum = 0;
while (sum < 100) {
    sum += myArray[counter];
    counter++;
}
console.log(sum);


function calculateArea(width, length) {
    return width * length
}

console.log(calculateArea(2, 3))
