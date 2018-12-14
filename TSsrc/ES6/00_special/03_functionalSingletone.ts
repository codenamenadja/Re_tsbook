import * as _ from "lodash";

interface IuserData {
    name: string;
    age: number;
    password: string;
    message: string;
}
const userdata = [
    {
        age: 22,
        message: "hi!",
        name: "john doe A",
        password: "3rdfawef",
    },
    {
        age: 23,
        message: "hi! a",
        name: "john doe B",
        password: "sdftg4y",
    },
    {
        age: 32,
        message: "hi! b",
        name: "john doe C",
        password: "waefat3",
    },
    {
        age: 34,
        message: "hi! c",
        name: "john doe D",
        password: "sadfwejn42",
    },
];

class UserFunctions {
    public static filterUserList(callback: any): any {
        if (UserFunctions.initUserData) {
            return _.filter(UserFunctions.initUserData, callback);
        } else {
            return UserFunctions.initUserData;
        }
    }
    public static rollback(): void {
        console.log("rollback!");
        // UserFunctions.initUserData.length = 0;
        // [] 자체를 유지해주어야 delegation이 유지된다. 갑자기 연결이 끊어지면, 일시적으로 인스턴스들은 값을 유지한다. 
        // 새로운 객체로 [] 로 할당하는 일이 없어야 delegation을 정확히 유지할 수 있다.
        // 그래야 rxjs를 통게해서 subscribe한다거나 할때, 비동기적인 이벤트처리를 해줄 수 있다.앞에서 부터 빠지고 당겨오는것은 비효율적이니,하나씩 뒤에서 빠지고;
        // 보통 index가 뒤에것이 나중에 들어온 것이고, 게시물 이라하면, 뒤에서 들어온게 view에서 상위에 위치하기 때문에, 최신것부터 지워진다는 느낌으로 이어진다.
        let counter = 0;
        while (UserFunctions.initUserData.length) {
            UserFunctions.initUserData.pop();
            // 뒤에서 부터 하나씩 제거 기존의 객체는 유지. length가 1씩 준다고 보면 된다.
            counter ++;
            console.log(`pop!`);
        }
        console.log(`poped ${counter} times, original object is now = ${UserFunctions.initUserData}.`);
    }
    private static initUserData: IuserData[] = [];
    // initUserData => 웹 통신을 통해 할당 받을 속성형 내장객체
    private static getUserData(): string {
        const httpGetUserData = JSON.stringify(userdata);
        return httpGetUserData;
    }
    // 2.getUserData => 웹 통신을 하여 userList를 리턴하는 내장함수
    constructor() {
        if (!UserFunctions.initUserData.length) {
            console.log("initial data get!");
            const instantData = JSON.parse(UserFunctions.getUserData());
            for (const data of instantData) {
                UserFunctions.initUserData.push(data);
            }
            // 3.최초의 클래스 인스턴스 생성 시, 유저와 관련된 일을 시작할때, 할당 and 기존의 객체를 위에 선언하고 그대로 유지해준다.
        }
        return UserFunctions.initUserData;
        // 싱글턴 객체를 delegation으로 리턴
    }
}

const userDataA = new UserFunctions();
const userDataB = new UserFunctions();
console.log(userDataA);
console.log(userDataA === userDataB);

const filteredA = UserFunctions.filterUserList((o: any) => {
    return o.age > 30;
});
console.log(filteredA);
UserFunctions.rollback();

console.log(userDataA);
userdata[0].age = 55;
const userDataC = new UserFunctions();
console.log(userDataC === userDataA);
// const userDataC = new UserFunctions();
// const filteredB = UserFunctions.filterUserList((o: any) => {
//     return o.age > 30;
// });
// console.log(filteredB);
// console.log(userDataA);
