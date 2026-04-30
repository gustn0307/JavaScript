// 자바스크립트에서 변수 선언 방법
// 1. var : 현재 사용하지 않을 것을 권고
// 2. let : 재할당 필요한 경우
// 3. const : 상수(주소만 가리키는 변수)
// 원칙: 일단 const로 선언하고, 재할당이 필요할 때만 let으로 바꾸기
// 변수 명명 규칙: camelCase가 표준
let name; // 선언만 => undefined 값을 가짐
name = "테스트" // 초기화(할당)
console.log(name);

const group = "뉴진스";
// group = "아이브" // const에 재할당하면 오류 발생
console.log(group)

// 데이터 타입
console.log(typeof 42) // number
console.log(typeof "이름") // string
console.log(typeof true) // boolean
console.log(typeof undefined) // undefined
console.log(typeof null) // object => 언어 설계 오류
console.log(typeof {}) // object(객체)
console.log(typeof []) // object(배열)

// null 테스트
let nullTest = null;
console.log(typeof nullTest)
console.log(nullTest)
console.log(typeof nullTest === "object") // true, JS의 역사적 버그, null은 object가 아님
console.log(typeof null === "object")
