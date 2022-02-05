//함수 만들기
function makeBuger(type, size, num) {
    if (num < 1) {
        return "버거 개수가 0개 입니다"
    }
    console.log("빵 놓기")
    console.log("상추 놓기")
    if (type == "불고기") {
        console.log("고기 패티 놓기")
    } else if (type == "새우") {
        console.log("새우 패티 놓기")
    }
    console.log("뚜껑 덮기")
    console.log(`${type}버거 ${size}사이즈 ${num}개 준비완료`)

    return "완료되었습니다" //함수의 결과값을 다른곳에서 사용할 경우 사용. 리턴을 만나면 함수가 끝나버림
}

function serveFrenchFries() {
    console.log("감자튀김 박스 꺼내기")
    console.log("감자튀김 담기")
}

function serveCoke() {
    console.log("콜라컵 꺼내기")
    console.log("얼음 담기")
    console.log("콜라 담기")

}

//makeBuger() //함수 호출, 함수는 괄호를 붙어야 함.
let result = makeBuger("새우", "L", 0) // 괄호는 함수에게 정보를 넘겨줘야 할 때 사용(매개변수)
//serveFrenchFries()
//serveCoke()

console.log(`버거 프로세스 결과 ${result}`)

function makeSet() {
    makeBuger("새우", "L", 1)
    serveFrenchFries()
    serveCoke()
}

makeSet()