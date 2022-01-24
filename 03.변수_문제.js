/*
문제1. a와 b의 값을 바꾸시오
let a = 1
let b = 2
console.log(a, b) // 1,2 

코드 후에

console.log(a, b) //  2,1 
*/

let a = 1
let b = 2
console.log(a, b) // 1,2 

temp = b
b = a
a = temp

console.log(a, b) //  2,1


//문제2.다음 연산자들의 결과값을 예측한후 console.log()를 통해 확인해 보시오
//20 + 30 = 50
console.log(20 + 30)

//“20” + “30” = 2030
console.log("20" + "30")

//“Hello” + " " + 2021 = Hello 2021
console.log("Hello" + " " + 2021)

//1 + 2 * 3 = 7
console.log(1 + 2 * 3)

//(1 + 3) ** 2 = 16
console.log((1 + 3) ** 2)

//1 / 0 = Infinity
console.log(1 / 0)

//6 % 2 = 0
console.log(6 % 2)

//7.5 % 2 = 1.5
console.log(7.5 % 2)

//5 == 5 = true
console.log(5 == 5)

//5 === 5 = true
console.log(5 === 5)

//5 == “5” = true
console.log(5 == "5")

//5 === “5” = false
console.log(5 === "5")

//5 != 5.0 = false
console.log(5 != 5.0)

//5 !== 5.0 = false
console.log(5 !== 5.0)

//“true” === true = false
console.log("true" === true)

//5 <= 5.0 = true
console.log(5 <= 5.0)

//5 >= 5 = true
console.log(5 >= 5)

//true || true = true
console.log(true || true)

//true || false = true
console.log(true || false)

//true && true = true
console.log(true && true)

//true && false = false
console.log(true && false)

//!true = false
console.log(!true)

//!false = true
console.log(!false)