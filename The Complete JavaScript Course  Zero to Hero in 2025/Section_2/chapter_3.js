let text = 'This is a String'
let string_length = text.length
console.log(string_length)

let combined_string = 'Hello World ' + text
console.log(combined_string)


const contains_letter_a = text.indexOf('a')
let split_text = text.split(' ')
console.log(split_text)

let text2 = "Hi_This_is_my_string"
text2 = text2.replaceAll('_', ' ')
console.log(text2)

// regex ( I hate this, for now)

// Arrays and Objects
//CRUD - Create, Read, Update, Delete
//Create
let simple_array = ["Peter", "Jay", "Frank", "Paul"]

//Read
console.log(simple_array)
console.log(simple_array[1])

//Update  pop, push, shift, unshift
simple_array[2] = "Gary"
console.log(simple_array)
simple_array.pop()
simple_array.push(3)
console.log(simple_array)

let check = simple_array.join(' ')
console.log(check)

let array_2d = [
    [1, 2, 3], 
    [4, 5, 6]
]

for (let i = 0; i < array_2d.length; i++) {
    for (let j = 0; j < array_2d[i].length; j++){
        console.log(array_2d[i][j])
    }
    let sampleScope = 2
}

// Dictionaries
const bio = {
    name: 'Rafael',
    age: 27,
    hobbies: ['Gym', 'coding', 'reading']
}

console.log(bio)
console.log(bio['name'])
console.log(bio['age'])
console.log(bio['hobbies'])
bio['girlfriend'] = false
console.log(bio)
delete bio.age
console.log(bio)
bio['friends'] = {'juan': 'good with jokes'}
console.log(bio)
console.log(bio['friends']['juan'])


// Scope
// Everything we defined so far is in global scope
// console.log(sampleScope) // This brings an error, since this variable is declared in a for loop scope

// Error handleing
const brokenObject = {
    word: 'nice'
}
function problematicCodeBlock(){
    try{
        const sub_object = brokenObject.hello.world
        console.log(sub_object)
    } catch (err){
        console.log('We got an error')
    }
}

problematicCodeBlock()
