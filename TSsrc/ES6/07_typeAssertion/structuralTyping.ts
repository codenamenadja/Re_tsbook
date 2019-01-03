class Animal {
    public name: number = 23;
    constructor(name: string, weight: number) { }
}
class Bird {
    public name: number = 54;
    constructor(speed: number) { }
}
// 구조 타이핑
let animal: Animal = new Animal("haapy", 100);
let bird: Bird = new Bird(10);
// 불가능한 타입호환
// bird = animal
// bird는 animal의 인터페이스보다 많은 키를 가지고 있기 때문에, bird는 그 하위 타입(인터페이스상 자식개념)
// 따라서 기존의 인터페이스를 삭제하는 것은 타입을 변경하는 것이기 때문에, 불가능 하다.

// 가능한 타입호환
animal = bird;
// animal이 bird의 상위 타입으로, 기존의 인터페이스에 추가로 덧씌워지는 것은 문제가 되지 않는다.
console.log(animal);
console.log(typeof (animal));

// 구조가 같은 클래스와 인터페이스간의 구조 타이핑
interface Person {
    name: string;
}
class Employee {
    constructor(public name: string) {

    }
}

class Employee2 {
    public name: string = "sample employee2";
}
let person: Person;

person = new Employee("sampleName");
console.log(person);
person = new Employee2();
console.log(person);
