function evens(input) {
    let new_arr = []

    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 === 0) {
            continue
        }
        new_arr.push(input[i])
    }
    return new_arr
}

let integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(evens(integers))

