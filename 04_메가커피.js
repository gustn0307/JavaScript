const megaCoffee = {
  name : "메가커피",
  menus : [
    {
      name: "아메리카노",
      price: 2000,
      category: "커피",
      options: ["HOT", "ICE"]
    },
    {
      name: "카페라떼",
      price: 3000,
      category: "커피",
      options: ["HOT", "ICE"]
    },
    {
      name: "딸기스무디",
      price: 4500,
      category: "음료",
      options: ["ICE"]
    },
    {
      name: "망고주스",
      price: 4000,
      category: "음료",
      options: ["ICE"]
    },
  ],
  orders: [
    {
      menuName: "아메리카노",
      option: "ICE",
      quantity: 2
    },
    {
      menuName: "딸기스무디",
      option: "ICE",
      quantity: 1
    },
    {
      menuName: "카페라떼",
      option: "HOT",
      quantity: 3
    }
  ]
}
console.log(megaCoffee)
console.log(megaCoffee.menus)
console.log(megaCoffee.orders)

console.log("-----------------------------------------------")
console.log("name       price   category    options")
console.log("-----------------------------------------------")
console.log(`${megaCoffee.menus[0].name}   ${megaCoffee.menus[0].price}   ${megaCoffee.menus[0].category}       ${megaCoffee.menus[0].options}`)
console.log(`${megaCoffee.menus[1].name}     ${megaCoffee.menus[1].price}   ${megaCoffee.menus[1].category}       ${megaCoffee.menus[1].options}`)
console.log(`${megaCoffee.menus[2].name}   ${megaCoffee.menus[2].price}   ${megaCoffee.menus[2].category}       ${megaCoffee.menus[2].options}`)
console.log(`${megaCoffee.menus[3].name}     ${megaCoffee.menus[3].price}   ${megaCoffee.menus[3].category}       ${megaCoffee.menus[3].options}`)
console.log("-----------------------------------------------")

console.log("-----------------------------------------------")
console.log("menuName      option   quantity")
console.log("-----------------------------------------------")
for(i=0; i<megaCoffee.orders.length; i++){
  console.log(`${megaCoffee.orders[i].menuName}     ${megaCoffee.orders[i].option}     ${megaCoffee.orders[i].quantity}`)
}


// 문제 1. 기본 접근
// - 매장 이름을 출력
console.log("-----------------------------------------------")
console.log(`매장 이름: ${megaCoffee.name}`)

// - 첫 번째 메뉴 이름을 출력
console.log(`첫 번째 메뉴 이름: ${megaCoffee.menus[0].name}`)

// - 두 번째 메뉴 가격을 출력
console.log(`두 번째 메뉴 가격: ${megaCoffee.menus[1].price}`)

// - 세 번째 메뉴 옵션을 출력
console.log(`세 번째 메뉴 옵션: ${megaCoffee.menus[2].options}`)

// 문제 2. 주문 데이터 접근
// - 첫 번째 주문의 수량을 출력
console.log(`첫 번째 주문의 수량: ${megaCoffee.orders[0].quantity}`)

// - 두 번째 주문의 메뉴이름을 출력
console.log(`두 번째 주문의 메뉴이름: ${megaCoffee.orders[1].menuName}`)

// - 세 번째 주문의 옵션을 출력
console.log(`세 번째 주문의 옵션: ${megaCoffee.orders[2].option}`)




