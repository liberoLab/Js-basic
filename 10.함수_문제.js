/*
문제 1
"안녕 내 이름은 제시카야"라는 문장을 프린트하는 함수 'greet’를 만드시오
*/
function greet1() {
    console.log("안녕 내 이름은 제시카야")
}
//greet1()
/*
funciton greet(){
    console.log("안녕 내 이름은 제시카야")
}
*/





/*
문제 2
이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오 예) “안녕 내 이름은 에밀리야”, “안녕 내 이름은 할리야”
*/
function greet2(name) {
    console.log(`안녕 내 이름은 ${name}야`)
}
//greet2("에밀리")
/*
funciton greet(name){
    console.log("안녕 내 이름은",name,"야")
}
*/





/*
문제 3
매개변수로 전달받은 이름을 반환하게 함수를 수정하시오
*/
function greet3(name) {
    console.log(`안녕 내 이름은 ${name}야`)
    return name
}
//greet3("에밀리")
/*
funciton greet(name){
    console.log("안녕 내 이름은",name,"야")
    return name
}
*/






/*
문제 4
 meetAt 함수를 만들어주세요.
     인자를 세개 받습니다.

 첫번째 인자는 년도에 해당하는 숫자입니다.
 두번째 인자는 월에 해당하는 숫자입니다.

 세번째 인자는 일에 해당하는 숫자입니다.

 년도 인자만 받았을 경우 → "1234년" 과 같은 형식의 문자열을 리턴 해주세요.

 년도,월 인자를 받았을 경우 → 년도와 월을 조합해서 "1234년 5월" 과 같은 형식의 문자열을

 리턴 해주세요.

 년도,월,일 인자를 전부 받았을 경우 → 년도,월,일을 조합해서 "1234/5/6" 과 같은 형식의 문자열을

 리턴 해주세요.

 

결과 예시
meetAt(2022); // 결과 --> 2022년

meetAt(2032, 3); // 결과 --> "2032년 3월"
meetAt(1987, 10, 28); // 결과 --> "1987/10/28"
*/
function meetAt(year, month, day) {
    let todayYear = year
    let todayMonth = month
    let todayDay = day

    if (todayDay == 0 || todayMonth == 0 || todayYear == 0) {
        return `false`
    }
    if (todayDay) {
        return `${todayYear}년 ${todayMonth}월 ${todayDay}일`
    }
    if (todayMonth) {
        return `${todayYear}년 ${todayMonth}월`
    }
    if (todayYear) {
        return `${todayYear}년`
    }

}
//console.log(meetAt(2022, 1, 1))
/*
function meetAt(year, month, date) {
  let todayYear = year;
  let todayMonth = month;
  let todayDate = date;

  if (todayDate) {
    return `${todayYear}/${todayMonth}/${todayDate}`;
  }
  if (todayMonth) {
    return `${todayYear}년 ${todayMonth}월`;
  }
  if (todayYear) {
    return `${todayYear}년`;
  }

}

console.log(meetAt(2022,1,7))
*/


/*
문제 5
findSmallestElement 함수를 구현해 주세요.

findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 배열입니다.

arr 의 값들 중 가장 작은 값을 리턴 해주세요.

만일 arr 가 비어있으면 0을 리턴 해주세요.

예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 0이 리턴 되어야 합니다.
이용되는 배열
[100,200,3,0,2,1]
*/
function findSmallestElement(arr) {
    let result = arr[0] //비교값을 먼저 하나 가져올 것
    //arr가 비여있을 경우 arr.length로 확인 후 0을 리턴.
    if (arr.length === 0) {
        return 0
    }
    for (let i = 0; i < arr.length; i++) {
        if (result > arr[i]) {
            result = arr[i]
        }
    }
    return result;
}
let samllNum = findSmallestElement([100, 200, 3, 0, 2, 1])
//console.log(samllNum)
/*
function findSmallestElement(arr) {
    let result = arr[0];
    if (arr.length === 0 ) {
        return 0;
    }
  for (let i = 1;i < arr.length; i++){
        if(result > arr[i]){
            result = arr[i];
        }
    }
    return result;
}

let smallestNumber = findSmallestElement([100,200,3,0,2,1])
console.log(smallestNumber)
*/





/*
문제 6
돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오

출력예 )

12300인 경우
 50000 X 0
 10000 X 1
 5000  X 0
 1000 X 2
 500 X 0
 100 X 3
*/
let unit = [50000, 10000, 5000, 1000, 500, 100]
function changeCalculate(money) {
    for (let i = 0; i < unit.length; i++) {
        let num = Math.floor(money / unit[i]) //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
        console.log(`${unit[i]} X ${num}`)
        money = money - (unit[i] * num)

    }
}

changeCalculate(12300)

/*
let unit = [50000,10000,5000,1000,500,100]
function changeCalculate(money) {
  for(let i=0;i<unit.length;i++){
    
      let num = Math.floor(money / unit[i])
      console.log(unit[i]+"X"+num)
      money = money - (unit[i]*num)
    
  }
}

changeCalculate(12300)
*/