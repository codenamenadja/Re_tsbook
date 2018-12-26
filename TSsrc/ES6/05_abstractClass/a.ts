abstract class BirdClassInterface {
    protected static readonly password: string = "upperlevPassword";
    private static word = 223;
    // private를 사용할 수 있지만 new를 통한 생산이 불가능하기 떄문에 abstract는 같이 쓰일수 없고,
    // static만 가능하지만 외부에서는 접근불가능 하기 때문에 내부메서드에서만 사용 11번줄에서 사용한다.
    public abstract birdName: string;
    public abstract habitat: string;
    protected readonly abstract birdCode: string;
    public fly(): void {
        this.flySound("파닥파닥");
        console.log("abstract내의 private static 사용 : ", BirdClassInterface.word);
    }
    public explain(): void {
        console.log(`${this.birdName}, `)
    }
    public get codeNum(): string {
        return this.birdCode + "saltKey";
    }
    // 위처럼 구현 된 메서드들은 그대로 사용해도 되고 다형성을 구현해 주어도 된다.
    protected abstract flySound(sound: string): void;
    // 위처럼 구현되지 않은 인터페이스는 상속받을 떄 반드시 구현되어져야 한다.
}

class WildGoose extends BirdClassInterface {
    protected static readonly password = `${BirdClassInterface.password}2424ef`;
    // 이부분이 재미 있는데, 위에 구현된 메서드를 다형성개념으로 재구현하면서도 해당 static을 사용하면서 조금 독특한 표현이 된다.
    private word = 22;
    // private는 자식개념에 전달 자체가 되지 않기 때문에, 인터페이스에서도 쓰이지 않는 것을 생각하자,
    constructor(public birdName: string, public habitat: string, protected readonly birdCode: string) {
        super();
        console.log(WildGoose.password);
    }
    protected flySound(sound: string) {
        console.log(sound);
    }
}

const wildGoose = new WildGoose("기러기", "순천만 갈대밭", "Sef223f%fke");
wildGoose.explain();
wildGoose.fly();
console.log(wildGoose.codeNum);
