const color = {
  red: "빨강",
  orange: "주황",
  yellow: "노랑",
} // 노랑 뒤에 ,를 붙여도 JS는 오류 발생하지 않음, 뒤에 더 추가될 수 있다는 의미로 일부러 붙이기도 함

console.log(typeof color)
console.log(color)

console.log(color.red)  // 점 표기법 
console.log(color["red"]) // 대괄호 표기법 => 접근하기엔 불편하지만 이렇게 접근하면 값을 할당할 수 있음