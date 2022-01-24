// { 키 : 값 }
let patient = {
    name: "jimin",
    age: 17,
    disease: "cold"
}

console.log(patient) //전체 조회
console.log(patient.age) //원하는 키만 조회 (변수.키)
console.log(patient["age"]) //배열 모양이지만 위와 같은 값을 도출

patient.name = "jk" //이름만 바꾸고 싶을 경우
console.log(patient.name)




let patientList = [{ name: "jimin", age: 13 }, { name: "jk", age: 25 }, { name: "jhope", age: 40 }]

console.log(patientList) //배열 전체 조회
console.log("첫번째 환자는:", patientList[0]) //배열의 특정 위치의 값만 가져올 때
console.log("첫번째 환자의 나이는?", patientList[0].name) //배열의 특정 위치의 특정 키만 가져올때
console.log("첫번째 환자의 나이는?", patientList[0]["name"]) //위랑 같음