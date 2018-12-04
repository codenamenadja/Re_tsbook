interface String {
    dontTouchNativeThing(): void;
}
// String 객체에 인터페이스를 추가하면, String의 pubilc 메서드가 된다.
String.prototype.dontTouchNativeThing = () => {
    console.log("String의 메서드들 사이에 추가된 메서드. global한 Env를 건드려 버리는 수준이다.")
}

const myStr = "stringnormal";
// 이것은 타입이 string인 즉슨, String의 메서드를 사용할 수 있는 반환된 원시형태(객체가 아니다. 값이다)
myStr.dontTouchNativeThing();
const myStrObj = new String("stringObjectInstance");
myStrObj.dontTouchNativeThing();
const enddata = myStr + myStrObj;
// 이것은 값과 객체를 더하는 것이지만, 동일하게 String이라는 인터페이스. 타입은 다르다.
console.log(myStrObj.toString());
// 이단계는 String값이 아닌것을 String값으로 변환하는 것.
console.log(myStrObj.valueOf());
// 이단계는 원시형태를 돌려받는 것 용도상 string변수 선언시 자동으로 여기에 들어가서 반환되는 과정을 거친다.
console.log(String.prototype.valueOf());
console.log(enddata);
console.log("결국 큰차이는 없으나, String의 prototype이 더럽혀질 가능성과, 자동적으로 변수에 문자 할당시 valueOf()처리가 되는 세팅이 있기때문에,");
console.log("Javascript의 공식 스펙을 무시하는 행동이기도 하여 비추천 된다.");

class StringMaker extends String {
    private static secretVal(): string {
        return "secret";
    }
    constructor(val: string) {
        super(val);
    }
    public doit(): void {
        console.log("doit");
    }
    public getSecret(): void {
        console.log(StringMaker.secretVal());
    }
}

const strMakerObj = new StringMaker("word");
console.log(strMakerObj);
strMakerObj.doit();
StringMaker.prototype.doit();
strMakerObj.constructor.prototype.doit();
strMakerObj.getSecret();
strMakerObj.constructor.prototype.getSecret();
console.log("타입스크립트에서는 다양한 편의를 제공하기 위해 중복되는 역할을 간편하게 줄이는 호칭을 만들지 않는다.");
console.log("따라서, new로 선언하면 자신의 고유 메서드는 가질수 없고, constructor 자체의 메서드를 바라보게 하는데,");
console.log("javascript에서는 class의. prototype === 생산된객체의.__proto__. 가 된다.");
console.log("하지만 원칙적으로 객체.constructor.protototype 으로 칭하는 방식이 있기 때문에, 트랜스파일시 __proto__를 구현하여 변환한다.");

// 결론 원시형 문자 선언시
let endStr = new String("this is end");
const strliteralA = endStr.valueOf();
const strliteralB = endStr.constructor.prototype.valueOf();
console.log(endStr);
console.log(strliteralA);
console.log(strliteralB);

console.log(`String.prototype.valueOf === endStr.valueOf: ${String.prototype.valueOf === endStr.valueOf}`);
console.log(`String.valueOf === endStr.valueOf: ${String.valueOf === endStr.valueOf}`);
console.log(`String.valueOf === Object.constructor.prototype.valueO: ${String.valueOf
    === Object.constructor.prototype.valueOf}`);
console.log(`String.constructor === Function: ${String.constructor === Function}`);
console.log(`String.constructor === Object.constructor: ${String.constructor === Object.constructor}`);
console.log(`Object.valueOf === Function.prototype.valueOf: ${Object.valueOf === Function.prototype.valueOf}`);
