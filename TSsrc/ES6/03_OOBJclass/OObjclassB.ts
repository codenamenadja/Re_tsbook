import { DataSmall as DataPreset, FirstClass as ParentClass } from "./OObjclassA";

class ChildClass extends ParentClass {
    public static showit(): void {
        console.log(ChildClass.doit());
    }
    private static doit(): string {
        return "from child done!";
    }
    constructor(userDataInChild: DataPreset) {
        super(userDataInChild);
    }
}

const userA = new ChildClass({ name: "Doe Jon", age: 222 });

userA.showUserData();

ChildClass.publicStaticInClass();
ChildClass.showit();
console.dir(userA);
