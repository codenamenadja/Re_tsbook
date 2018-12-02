interface Iprofile {
    name: string | undefined | null;
    nationality: string | undefined | null;
}

const sampleA: Iprofile = {
    name: "junehan--complete",
    nationality: "korean",
};
const sampleNull: Iprofile = {
    name: "john--null",
    nationality: null,
};
const sampleUndefined: Iprofile = {
    name: "john--undefined",
    nationality: undefined,
};
const sampleEmptyVal: Iprofile = {
    name: "john--empty",
    nationality: "",
};

function printProfile_declaration(obj: Iprofile): void {
    let name: string;
    let nationality: string;

    name = (obj.name === undefined || obj.name == null) ? "anonymous" : obj.name;
    nationality = (obj.nationality === undefined || obj.nationality == null) ? "god's Son?" : obj.nationality;

    console.log(`name is ${name}.`);
    console.log(`nationality is ${nationality}.`);
}

const printProfileDestructuring = (obj: Iprofile): void => {
    if (obj.name == null) {
        obj.name = undefined;
    } else if (obj.nationality == null) {
        obj.nationality = undefined;
    }

    const { name: dataA = "if no name", nationality: dataB = (obj.nationality) ? obj.nationality : "help me!" } = obj;

    console.log(`name is ${dataA}.`);
    console.log(`nationality is ${dataB}.`);
};

printProfile_declaration(sampleA);
printProfile_declaration(sampleNull);
printProfile_declaration(sampleUndefined);
printProfile_declaration(sampleEmptyVal);

console.log("---- below destructuring ----");

printProfileDestructuring(sampleA);
printProfileDestructuring(sampleNull);
printProfileDestructuring(sampleUndefined);
printProfileDestructuring(sampleEmptyVal);
