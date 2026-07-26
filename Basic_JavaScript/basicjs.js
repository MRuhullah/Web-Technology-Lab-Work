console.log("Hello")
var a = 5;
var b = 6;
console.log(a + b)
console.log(a ** b) /*exponent mein laye ga a raised to  power b*/
let c = 3;
let d = 3.55;
let p = true;
let f = undefined;
let g = "aliiiiii"
let h = null;
console.log(c, d, p, f, g, h)
console.log(typeof c, typeof d, typeof p, typeof f, typeof g, typeof h)

let O = {
    "name": "ali",
    "job code": 5001
}
console.log(O)
O.salary = 10000;
console.log(O)

let fruits = ["Apple", "Mango", "Orange"];

for (let key in O) {
    console.log(key);  //for objetcs and arrays
}

fruits.forEach(function (fr) {  //only for arrays and only gives the values
    console.log(fr);
})

let name = "Ali";

for (let ch of name) {  // iteratable pe lagta hai 
    console.log(ch);
}

function sum(a, b, c = 3) {
    return a + b + c;
}

console.log("The sum is: ", sum(a, b))

let add = (a, b) => {
    return a + b;
};

console.log("I am arrow function: ", add(a, b));

let real = "qasim"
let last = "hamza"

console.log(`My name is ${real} and ${last}`)

let array = [1, 2, 3, 4, 5]
console.log(array.join(" and "))
array.pop()
console.log(array)
array.push("ali")
console.log(array)

array.shift()   //start pe remove karta hai
console.log(array)

array.unshift("qasim") //start pe add karta hai
console.log(array)

delete array[4]
console.log(array)

let array2 = [22, 22, 22]
let resultt = array.concat(array2)
console.log(resultt)

array.splice(1, 2, 22, 33)
console.log(array)

let res = array.slice(0, 2)
console.log(res)

let arr = [2, 2, 2, 3]
let newarr = arr.map((value) => {
    return value * 2
})
console.log(newarr)

let filter = arr.filter((val) => {
    return val > 2
})

console.log(filter)

let red = arr.reduce((ob, val) => {
    return ob + val
})

console.log(red)

