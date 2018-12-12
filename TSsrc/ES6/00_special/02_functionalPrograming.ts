import * as _ from "lodash";

interface IuserDataPreset {
    id: string;
    name: string;
    age: number;
}
type CallbackFuncType = (callback: any, argA: IuserDataPreset[]) => IuserDataPreset[];
const userList: IuserDataPreset[] = [
    { id: "A", name: "aaa", age: 12 },
    { id: "B", name: "bbb", age: 42 },
    { id: "C", name: "ccc", age: 23 },
    { id: "D", name: "ddd", age: 33 },
    { id: "E", name: "eee", age: 51 },
    { id: "F", name: "fff", age: 25 },
    { id: "G", name: "ggg", age: 17 },
    { id: "H", name: "hhh", age: 43 },
    { id: "I", name: "iii", age: 35 },
];

const getFilteredData: CallbackFuncType = (callback, dataList) => {
    const result = dataList.filter((data) => callback(data));
    return result;
}
const dataA = getFilteredData((data: IuserDataPreset) => data.age > 30, userList);
console.log(dataA);

interface Isingletone {
    name?: string;
    date: Date;
}
class Sample {
    public static instanceObj: Isingletone;
    private static _init_(inputData?: string): Isingletone{
        return {
            date: new Date(),
            name: inputData ? inputData : "no name init",
        };
    }
    constructor(public name?: string) {
        if (!Sample.instanceObj) {
            Sample.instanceObj = Sample._init_(name);
        }
        return Sample.instanceObj;
    }
}
const sample0 = new Sample();
const sample1 = new Sample("key");
const sample2 = new Sample();

console.log(sample1);
console.log(sample2 === sample1);
console.log(sample2 === sample0);
