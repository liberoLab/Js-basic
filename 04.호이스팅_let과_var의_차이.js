//const 는 상수.

/*
 호이스팅 : 함수가 실행 되기 전에 안에 있는 변수들을 범위의 최 상단으로 끌어 올리는 것
 호이스팅 시 변수의 선언과 초기화(undefined으로)가 같이 이루어짐.
 그후 변수의 위치 까지 가서 값을 할당 받음.
 
 코드는 위에서 아래로 읽히기 때문에 아래 같은 코드는 자바나 c, c++ 에서 에러가 발생함.
 하지만 js의 경우 호이스팅 때문에 undefined라는 값이 나오면서 코드가 실행된다.
 */

/*
 let도 호이스팅이 존재함.
 다만 let은 TDZ(Temporal Death Zone)이 존재해서 변수(a)를 호이스팅으로 기억을 하지만 a 선언문이 나오기 전까지 a 에 접근 할 수 없다.
*/

//실행 됨
console.log(a) //undefined
var a = 1
console.log(a) //1

//초기화 전에 a에 접근 할 수 없다는 문구가 뜸
console.log(a)
//let a = 1
console.log(a)


//선언을 안해도 실행 된다;;
console.log(a) //undefined
a = 1
var a
console.log(a) //1





/*
 전역변수 : 블락{} 밖에서 선언을 한 어디서든 쓸 수 있는 변수
 지역변수 : 블락{} 안에서 선언된 변수, 블락 안에서만 쓸 수 있는 변수

 var은 전역변수와 지역변수의 구분이 확실 하지 않다
 함수만 지역 변수로 취급, 나머지는 다 전역 변수로 올려 버린다
*/

//ex1
for (var i = 1; i < 5; i++) {
    console.log(i)
}
console.log(i) //원래 i의 값이 나오면 안됨


for (let i = 1; i < 5; i++) {
    console.log(i)
}
console.log(i) //i의 값을 찾을 수 없다고 뜸





//ex2
//같은 이름의 변수는 원래 선언 할 수 없음. 하지만 var은 된다....;;
var a = 1
console.log(a) //1
var a = 2
console.log(a) //2

//let은 a가 이미 선언됬다는 오류가 발생
//let a = 1
console.log(a)
//let a = 2
console.log(a) 