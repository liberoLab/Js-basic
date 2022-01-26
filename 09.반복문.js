//for : 정확한 범위를 알때 사용, 보통 배열과 많이 사용 함

//for문 예시
for (let i = 0; i < 10; i++) {
    console.log("hello world", i)
}

//짝수 출력
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

for (let i = 0; i < 10; i += 2) {
    console.log(i)
}

//2중 for 문
for (let x = 1; x < 10; x++) {
    for (let y = 1; y < 10; y++) {
        console.log(x + "*" + y + "=" + x * y)
    }
}

let fruit = ["banana", "apple", "grappe", "mango"]
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}


//while : 정확한 범위를 알지 못할 때 사용.
let i = 2
while (i < 10) {
    console.log("hello world", i)
    i++;
}