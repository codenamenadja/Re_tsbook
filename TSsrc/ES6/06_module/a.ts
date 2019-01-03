namespace Myclass {
    export const word: string = "23asd";
    export function sample() {
        console.log("sample in myclass namesapce");
    }
}
function keyword(): string {
    return "keyword function returns message.... - 'Hello world!'";
}

export { Myclass as default, keyword };