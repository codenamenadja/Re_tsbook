
interface ItypeA {
    a: string;
    b?: number;
}
type ForComplexOrDuplicateFuncType = (a: ItypeA) => void;
const fruitFunc: ForComplexOrDuplicateFuncType = ({ a: name = "noName", b: quatity }) => {
    console.log(`${name} is ${quatity ? quatity : 0}, available. ${quatity ? "" : "sorry."}`);
}

fruitFunc({ a: "apple", b: 10 });
fruitFunc({ a: "mango" });

type ForComplexType = [string | number, number, boolean?];

const entityA: ForComplexType = ["word", 2];
const entityB: ForComplexType = [2, 4, false];
