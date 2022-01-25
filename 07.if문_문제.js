/*
문제 1
유저가 입력하는 숫자가 0인지 음성인지 양성인지 판단하는 프로그램을 만드시오
*/
let num = 1

if (num > 0) {
  console.log("양성 입니다.")
} else if (num < 0) {
  console.log("음성 입니다.")
} else {
  console.log("0 입니다.")
}

/*
let number = -1

if(number<0){
  console.log("음성입니다")
}else if(number > 0){
  console.log("양성입니다")
}else {
  console.log("0입니다")
}
*/






/*
문제 2
나는 대학교 교수다.레포트 점수에따라 등급을 매기는 프로그램을 만드시오
90~100 : A
80~89 : B
70~79 : C
60~69 : D
less than 59 : F
*/

let scores = 90

if (scores >= 90 && scores <= 100) {
  console.log("A")
} else if (scores >= 80 && scores <= 89) {
  console.log("B")
} else if (scores >= 70 && scores <= 79) {
  console.log("C")
} else if (scores >= 60 && scores <= 69) {
  console.log("D")
} else if (scores >= 0 && scores <= 59) {
  console.log("F")
} else {
  console.log("오류가 발생 했습니다.")
}

/*
let score =  90
let grade
if(90<=score && score<=100){
  grade = "A"
}else if(80<=score && score<=89){
  grade = "B"
}else if(70<=score && score<=79){
  grade ="C"
}else if(60<=score && score<=69){
  grade="D"
}else if(0<=score && score<=59){
  grade="F"
}else {
  console.log("잘못된 범위의 점수입니다")
}
console.log(grade)
*/





/*
문제 3
한 지원자가 우리회사에 지원을했다.지원자가 사용가능한 스킬은 배열에 제공이 된다
let skills = ["HTML", "CSS", "Javascript", "React"]
Javascript와 React 둘다 할줄 안다면 “합격!” Javascript와 React 둘중 하나만 할줄 안다면 “예비”, 두 스킬이 없다면 “탈락” 을 보여주는 프로그램을 짜시오

input: let skills = ["HTML", "CSS", "Javascript", "React"]
output: 합격

input: let skills = ["HTML", "CSS", "Javascript"]
output: 예비

input: let skills = ["HTML", "CSS"]
output: 탈락
*/

let skills = ["HTML", "CSS", "Javascript", "React"]

if (skills.includes("Javascript") && skills.includes("React")) {
  console.log("합격")
} else if (skills.includes("Javascript") || skills.includes("React")) {
  console.log("예비")
} else {
  console.log("탈락")
}

/*
let skills = ["HTML","CSS","Javascript","React"]

if(skills.includes("Javascript") && skills.includes("React")){
  console.log("합격!")
}else if(skills.includes("Javascript") || skills.includes("React")){
  console.log("예비")
}else {
  console.log("탈락!")
}
*/