class ArrayList<T> {
    private arrList: Array<number | T> = [];
    public add(indexOrVal: T | number, value?: T) {
        if (value !== undefined) {
            if (typeof indexOrVal === "number") {
                this.arrList.splice(indexOrVal, 0, value);
            }
        } else {
            this.arrList.push(indexOrVal);
        }
    }

    public remove(index: number) {
        this.arrList.splice(index, 1);
    }
    public addAll(elem: T[]) {
        this.arrList = [...this.arrList, ...elem];
    }
    public get(index: number): T | number {
        return this.arrList[index];
    }
    public clear() {
        this.arrList = [];
    }
    public isEmpty(): boolean {
        return this.arrList.length === 0 ? true : false;
    }
    public set(index: number, value: T) {
        this.arrList[index] = value;
    }
    public toArray(): Array<T | number> {
        return this.arrList;
    }
    public size(): number {
        return this.arrList.length;
    }
}

let aList = new ArrayList<string>();
aList.add("a");
aList.add("b");
aList.add("c");
console.log("1번 add : ", aList.toArray());
aList.add(1, "hi");
console.log(`2번 index로 add : ${aList.toArray()}`);
aList.remove(1);
console.log(`3번 remove(1) : ${aList.toArray()}`);
aList.addAll(["d", "e"]);
console.log(`4번 addAll : ${aList.toArray()}`);

console.log(`5번 get(2) : ${aList.get(2)}`);
console.log(`6번 size() : ${aList.size()}`);

aList.clear();
console.log(`7번 size() : ${aList.size()}`);

if (aList.isEmpty()) {
    console.log("8번 empty!");
} else {
    console.log("8번 still filled.");
}