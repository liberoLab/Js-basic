/* 비효율 적인 방법
let fruit1 = "banana"
let fruit2 = "apple"
let fruit3 = "grape"
let fruit4 = "mango"
*/

//위를 배열로 만들 었을 때.
//인덱스는 0부터.
let fruit = ["banana", "apple", "grape", "mango"]

console.log(fruit) //배열 전체를 불러 올 때
console.log(fruit[0]) //배열에서 특정 값을 가져올 때

fruit[0] = "cherry" //0번째 값을 바꾸고 싶을 때
console.log(fruit[0])

//pop() : 마지막에 있는 값을 제외 함
fruit.pop()
console.log(fruit)

//push() : 마지막에 적은 값을 넣어 줌
fruit.push("pineapple")
console.log(fruit)

//includes() : 괄호 안의 값이 배열에 있는지 체크 해줌
console.log(fruit.includes("apple"))

//insexOf() : 괄호 안의 값의 인덱스 번호를 알려 줌
console.log(fruit.indexOf("apple"))

//slice() : 배열 아이템을 잘라내는 역할 (시작점, 끝점 - 끝점 미포함)
//1개를 넣으면 넣은 값 까지 자름.
console.log(fruit.slice(3))
// 2개를 넣으면 a와 b-1의 값만 남음. 
console.log(fruit.slice(1, 3))
//*슬라이스는 기존의 배열을 자른게 아니라서 새로운 배열을 만듬. 그래서 console.log를 따로 쓰면 원하는 값이 나오지 않음
let extrafruit = fruit.slice(1, 3)
console.log(extrafruit)
console.log("original fruit", fruit)

//splice(a,b) : 배열 아이템 잘라내는 역할 (시작점, 삭제할 개수)
fruit.splice(0, 3)
console.log(fruit)
//*슬라이스는 기존의 배열을 자름