const codeTest = "코드테스트"; // "", '' 구분 안 함
const ive = "'아이브' 장원영"; // 작은 따옴표를 큰 따옴표로 감쌀 수 있다.

console.log(codeTest)
console.log(ive)

// Escape Character
console.log("아이브\n안유진") // \n : 개행
console.log("아이브\t안유진") // \t : tab
console.log("아이브 \"안유진") // \" : 큰 따옴표 출력하고 싶을 때

// Template Literal(백틱 `)
// 백틱(`)으로 감싸기
// 변수는 ${변수명}으로 삽입
// 줄바꿈 \n 없이도 여러 줄 작성 가능
const groupName = "아이브"

// 기존 방식 - 문자열 연결
console.log(groupName + ": 안유진")

// Template Literal
console.log(
`${groupName}: 안유진,
${groupName}: 장원영,
${groupName}: 가을`)


