// let birthYear = 2007

// console.log(birthYear)

// birthYear = 2005

// Camel Case : isJsFun

// isActive = true && false;
// console.log(isActive)

// Falsy => undefined, null, 0, false, '', -0, NaN
// Truthy => !0 and !''

// let email = '';

// if (email) {
//     console.log('Email sent');
// }

// 7>7 ? console.log(true) : console.log(false)

// if () {

// }
// else if () {

// }
// else {

// }


// let test = (a, b) => {
//     return [a,b]
// }

// console.log(test(4, 5))

// // Callback function
function test2() {
    console.log('this fn is called by another function')
}

function test3(fn) {
    test2();
}

// test3(test2) // This is callback function



// let laptop = {
//     brandName : 'ASUS',
//     price : 65990
// }

// let cpu = 'Core i5-12500H'
// laptop['cpu'] = cpu

// console.log(laptop)


let arr = [1,2,3,4,5,6]

const [first, second, third, fourth] = arr
console.log(first,second,third,fourth)


let even = [2,4,6,8]

const [firstVal, , thirdVal] = even
console.log(firstVal, thirdVal)


let myDetails = {
    name: 'TEST',
    email: 'test@yourcompany.com'
}

const {name, email} = myDetails
console.log(name, email)


let odd = [1,3,5,7,9]
const copyOdd = [...odd]
console.log(copyOdd)

let frontend = ['HTML', 'CSS', 'JS', 'React']
let backend = ['Node', 'Express', 'MongoDB']

const MERN = [...frontend, ...backend]
console.log(MERN)

// Same works in the case of object

// Asynchronous
// setTimeout(test3, 3000)


const res = fetch('https://jsonplaceholder.typicode.com/todos').then(res =>  {
    return res.json()
}).then(data => {
    console.log(data)
})



// promise = object
// promise is a placeholder