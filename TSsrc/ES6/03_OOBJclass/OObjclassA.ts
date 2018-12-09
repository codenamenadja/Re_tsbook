
export interface DataSmall {
    name: string;
    age: number;
}
type methods = (arg: FirstClass) => string | number;
interface IForParentClass {
    publicToPrototype(): void;
    showUserData(): void;
}
interface IForChildClass extends IForParentClass, DataSmall {
    userIndex: number;
}

export class FirstClass implements IForParentClass {
    public static publicStaticInClass(): void {
        console.log("publicStaticInClass");
    }
    private static allUserDataCollection: DataSmall[] = [];
    private static methodReturnUsername(userIndex: number) {
        const userName: string = FirstClass.allUserDataCollection[userIndex - 1].name;
        console.log("stage05_private static get user name method: ", userName);
        return userName;
    }
    private static methodReturnUserAge(userIndex: number) {
        const userAge: number = FirstClass.allUserDataCollection[userIndex - 1].age;
        console.log("stage06_private statc get user age method", userAge);
        return userAge;
    }
    private static methodCollectUser(dataINTOArr: DataSmall): void {
        FirstClass.allUserDataCollection.push(dataINTOArr);
        console.log(`stage02_${dataINTOArr.name} in to Class Static array.`);
    };
    public msg: string;
    public userIndex: number;
    constructor(userData: DataSmall) {
        console.log(`stage01_${userData.name} came to constructor, <--construct start`);
        this.msg = "this is user of our company.";
        this.userIndex = FirstClass.allUserDataCollection.length + 1;
        FirstClass.methodCollectUser(userData);
        console.log("stage03_userObject.index is, ", this.userIndex, " constructed done-->");
    }
    public showUserData(this: FirstClass) {
        let specificName: string;
        let specificAge: number;
        console.log("stage04_user data display method start");
        specificName = FirstClass.methodReturnUsername(this.userIndex);
        specificAge = FirstClass.methodReturnUserAge(this.userIndex);
        console.log(`${specificName}, age is ${specificAge}. gooood!`);
    }
    public publicToPrototype(): void {
        console.log("publicToPrototype");
    }
}

const passedData01: DataSmall = { name: "monstersJohn", age: 32 };
const passedData02: DataSmall = { name: "kizuna-AI", age: 17 };

const userA = new FirstClass(passedData01);
const userB = new FirstClass(passedData02);

userA.showUserData.call(userB);
userB.showUserData();
