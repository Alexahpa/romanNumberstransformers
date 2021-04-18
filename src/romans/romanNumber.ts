const charValue : { [key: string]: number } = {
    I : 1,
    V : 5,
    X : 10, 
    L : 50,
    C : 100,
    D : 500,
    M : 1000
};



export const toDecimal = (romanNumber: string) => {

    if (!isAValidRomanNumber(romanNumber))
        return -1;
        
    let result: number = 0;
    let romanChars: string[] = romanNumber.split('');
    let length: number = romanChars.length;
    let index: number = 0;

    while (index < length) {
        let current: number = charValue[romanChars[index]];

        if (index + 1 === length) {
            result += current;
            index += 1;
            continue;
        }

        let next = charValue[romanChars[index + 1]];

        if (current >= next) {
            result += current;
            index += 1;
            continue;
        }

        result += next - current;
        index += 2;

    };
    return result;
}

export const isAValidRomanNumber = (romanCandidate: string): boolean => {
    let validation = new RegExp("^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$");
    return validation.test(romanCandidate);
}

