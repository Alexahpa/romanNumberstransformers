

const toDecimal = (romanNumber: string) => {

    let result: number = 0;
    let romanChars: string[] = romanNumber.split('');
    let length = romanChars.length;
    let index = 0;


    while (index < length) {
        let current: number = value(romanChars[index]);

        if (index + 1 === length) {
            result += current;
            index += 1;
            continue;
        }

        let next = value(romanChars[index + 1]);

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

const value = (r: string): number => {
    if (r == 'I')
        return 1;
    if (r == 'V')
        return 5;
    if (r == 'X')
        return 10;
    if (r == 'L')
        return 50;
    if (r == 'C')
        return 100;
    if (r == 'D')
        return 500;
    if (r == 'M')
        return 1000;

    return -1;
}


export default toDecimal;
