class PC {
    private ram: string = "0G";
    constructor(public hddCapacity: string) { }
    protected getHddCapacity() {
        return this.hddCapacity;
    }
    set ramCapacity(value: string) {
        this.ram = value;
    }
    get ramCapacity() {
        return this.ram;
    }
    // static 아님 prototype.

}

class Desktop extends PC {
    constructor(hddCapacity2: string, protected name: string = "word!", private password: number = 23123) {
        super(hddCapacity2);
    }
    public getInfo(): void {
        // protected는 super객체를 통해서만 접근할 수 있다.
        // PC는 super와 동일하지만, super는 자식클래스에서만 유효한 객체라는 점에서 미묘한 차이.
        // 결국 자식클래스에서 
        console.log(`1.Super.HDD용량 : ${super.getHddCapacity()} /`);
        console.log(`2.this.HDD용량 : ${this.getHddCapacity()} / ${this.hddCapacity} `);
        this.hddCapacity = "2000G";
        console.log(`3.Super.HDD용량 : ${super.getHddCapacity()} /`);
        console.log(`4.this.HDD용량 : ${this.getHddCapacity()} / ${this.hddCapacity} `);
        console.log(this.ramCapacity);
        this.ramCapacity = "2g";
        console.log(`5.HDD용량 : ${this.ramCapacity} `);
        console.log(`super객체는 부모클래스의 static한 것에 접근 x. 그것은
         ${Desktop.prototype.getHddCapacity === super.getHddCapacity}`);
    }
    public showthis() {
        console.log(this);
    }
    protected getHddCapacity() {
        return this.hddCapacity + "!!!";
    }
}

const myDesktop = new Desktop("1000G");

myDesktop.getInfo();
myDesktop.showthis();