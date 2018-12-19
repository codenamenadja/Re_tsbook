class Account {
    public balance: number;
    get getBal() {
        return this.balance;
    }
    set setBal(amount: number) {
        this.balance += amount;
    }
    constructor(defBal: number = 0, protected bankName: string = "happyBank", readonly interestRate: number = 0.1) {
        this.balance = defBal;
    }
    public deposite(depositAmount: number) {
        this.setBal = depositAmount;
    }
    public getInterestRate() {
        return this.interestRate;
    }
    public getdefBal() {
        return this.balance;
    }
}

class MyAccount extends Account {
    constructor() {
        super();
        this.deposite(1000);
        this.setBal = 1000;
        console.log(`
        2번) 적금: ${this.balance}원, ${this.getBal}원 /
        이율: ${this.interestRate}, ${this.getInterestRate()}%/
        은행명: ${this.bankName}
        `);
    }
}

const account = new Account();
console.log(`
1번) 적금 : ${account.balance}원, ${account.getBal}원 /
이율: ${account.interestRate}, ${account.getInterestRate()}%/
`);
const myaccount = new MyAccount();
