/*

let menu = 1

//if 문으로 만들 경우
if (menu == 1) {
    console.log("물건 사기")
} else if (menu == 2) {
    console.log("잔고 확인")
} else if (menu == 3) {
    console.log("히스토리 확인")
} else {
    console.log("홈으로 돌아가기")
}

//swich 문으로 만들 경우
//swich 문은 값이 딱 떨어지는 경우에 사용 가능. if문보다 제약이 있다.
switch (menu) {
    case 1:
        console.log("물건 사기")
        break;
    case 2:
        console.log("잔고 확인")
        break;
    case 3:
        console.log("히스토리 확인")
        break;
    default:
        console.log("홈으로 돌아가기")
}

*/


let menu = 8
//if 문으로 만들 경우
if (menu <= 3) {
    console.log("범위안에 숫자 입니다.")
} else {
    console.log("범위 밖의 숫자 입니다.")
}

//삼항 연산식 : 조건 ? true 일때 : false 일때
let answer = menu <= 3 ? "범위안에 숫자 입니다." : "범위 밖의 숫자 입니다."
console.log(answer)