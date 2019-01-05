function concatA<T, T2>(strA: T, strB: T2): T2;
function concatA<T extends string | number>(strA: T, strB: T): T;
function concatA(strA: any, strB: any) {
    return strA + strB;
}
// 위 함수의 제네릭함수를 오버로딩하는 함수는
// 다소 바보같은 행위처럼 보이지만, 두 매개변수의 타입을 일치시키는 것을
// 목적에 두고 있다는 점은 주목할 만 하다.

const concatB = <T extends string>(strA: T, strB: T) => {
    return strA + strB;
}
// T는 어떤타입이든 받아들이기 때문에 타입을 몇 가지로 제한해야 할 떄가 있다.
// 위의 예는 string타입으로 constrain(제약) 하기 위에 타입매개변수는 특정타입을 상속받고 있다.
// 따라서 해당 타입의 속성에서 가능한 매서드나 연산을 가능하도록 진행한다.

// 그러나 예를 들어 T extends string | number같은 유니언 타입을 가상타입으로 지정한다면, 특정 타입으로 제약 시킬 수 없기 때문에, 
// 컴파일 에러가 발생한다.
// string끼리 더하겠다는 표현과 숫자를 더한다는 표현은 정확히 다른 것이라는 것을 우리는 알고 있다. 
console.log(concatA<number, string>(123, "sdwd"));
// string으로 적용됨  반대의 경우로 타입을 전해주면 내부 로직의 연산을 진행할 수 없음.
console.log(concatA<string | number>(24123, "sdwd"));
console.log(concatA(235, "sdfwf"));
console.log(concatA(42, 45));
console.log(concatB<string>("abcd", "12s3"));
