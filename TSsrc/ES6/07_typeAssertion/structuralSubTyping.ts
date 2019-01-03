type upper = { a: string, b: string };
type lower = { a: string, b: string, c: string };

let objUpper: upper = { a: "upperVal", b: "UpperVal2" };
let objLower: lower = { a: "aaa", b: "bbb", c: "cccc" };
objUpper = objLower;
console.log(objUpper);
// 구조적 타이핑과 크게 다르지 않지만, 상위타입에 하위타입을 대입하는, 하위타입은 상위타입으로 호환이 가능하다고(하위가 상위로 치환될 수 있다) 말한다.

// 구조가 일부같으면 타입이 없더라도 서브타이핑이 가능한 경우

let infoUpper = { name: "wook", country: "korea" }
let infoSub = { name: "kin", country: "brit", alias: 2351 };
infoUpper = infoSub;
// 어차피 타입추론으로 되는 부분이 있어서 큰 차이는 아니다.
console.log(infoUpper);
console.log(Object.keys(infoUpper));
// console.log(infoUpper.alias); <-- 실행 불가능
// 하위타입은 상위타입의 인터페이스를 상속하고 그 위에 추가로 다형성을 구현하고 있는 개념이기 때문에,
// 상위타입이 하위타입으로 변하는 것은 가능하도록 되어 있다.
// 반대의 경우는 기존의 타입 자체가 일부 사리지는(즉 바뀌는)것이기 때문에, 기존의 country가 string이었는데 사라진다거나 string이 number로 변한다는 것은 불가능하다.

// 그러나 가장 중요한 것,console.log를 통해서 뽑으면 추가된 하위타입의 인터페이스가 보이지만, 
// 접근은 불가능 하다.보유는 하고는 것처럼 보이나, 접근 못한다는 점에서 조금 신기하지만, 인터페이스는 기존의 인터페이스를 유지한다는 점에 유의하자.
// infoUpper = infoSub가 가능했지만 infoUpper:기존ㅇ
