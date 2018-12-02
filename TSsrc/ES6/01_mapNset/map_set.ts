const arr01: string[] = ["first", "sec", "third"];
const obj01: object = { first: 1, second: 2 };
const itSet = new Set();
const arrEntries = arr01.entries();
console.log(arrEntries.next());
console.log(arrEntries.next());
console.log(arrEntries.next());
console.log(arrEntries.next());
itSet.add("2");
itSet.add(3);
itSet.add(2);
const itMap = new Map();
itMap.set("first", 2);
itMap.set("sec", 2);
itMap.set("first", 5);

console.log(itSet);
console.log(itMap);

const setEntry = itSet.entries();
console.log("--setEntry");
console.log(setEntry.next());
console.log(setEntry.next());
console.log(setEntry.next());
console.log(setEntry.next());

const mapEntry = itMap.entries();
console.log("--mapEntry");
console.log(mapEntry.next());
console.log(mapEntry.next());
console.log(mapEntry.next());

console.log("--forof~ itmap");
for (const entry of itMap) {
    console.log(entry);
}
console.log("--forof~ itset");
for (const entry of itSet) {
    console.log(entry);
}

console.log("----map iterator");
const mapIter = itMap[Symbol.iterator]();
console.log(mapIter.next());
console.log(mapIter.next());
console.log(mapIter.next());

console.log("----set iterator");
const setIter = itSet[Symbol.iterator]();
console.log(setIter.next());
console.log(setIter.next());
console.log(setIter.next());
console.log(setIter.next());

console.log("----arr iterator");
const arrIter = arr01[Symbol.iterator]();
console.log(arrIter.next());
console.log(arrIter.next());
console.log(arrIter.next());
console.log(arrIter.next());
