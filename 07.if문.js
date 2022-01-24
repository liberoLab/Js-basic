/*
if(조건문){
    조건이 충족되면 할일 들
}
*/

let age = 21
let licence = true

//ex1
if (age >= 20) {
    console.log("운전이 가능합니다")
} else if (age >= 18) {
    console.log("오토바이 운전만 가능합니다")
} else {
    console.log("운전이 불가능합니다")
}
//ex2
//이럴 경우 첫번째 값이 출력됨. 왜냐하면 첫번째 조건을 만족했기 때문에 if문이 종료되기 때문이다.
//그러므로 if 조건들의 순서를 범위를 작은 것 부터 큰 순서로 둘 것, 혹은 ex3 참조
if (age >= 18) {
    console.log("오토바이 운전만 가능합니다")
} else if (age >= 20) {
    console.log("운전이 가능합니다")
} else {
    console.log("운전이 불가능합니다")
}

//ex3
// && :and , || : or
if (age >= 18 && age < 20) {
    console.log("오토바이 운전만 가능합니다")
} else if (age >= 20) {
    console.log("운전이 가능합니다")
} else {
    console.log("운전이 불가능합니다")
}

//ex4
// ! : not
if (age >= 20) {
    if (licence == true) {
        console.log("운전이 가능 합니다.")
    } else {
        console.log("면허가 필요 합니다")
    }
} else {
    console.log("운전이 불가능 합니다")
}