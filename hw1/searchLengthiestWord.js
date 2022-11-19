function searchLengthiestWord(str, separator = ' ') {
    let arr = str.split(separator);
    let arrLength = 0;
    let result = [];
    for (const arrElement of arr) {
        if (arrElement.length > arrLength)
            arrLength = arrElement.length;
    }
    for (const arrElement of arr) {
        if (arrElement.length === arrLength)
            result.push(arrElement);
    }
    return result;
}

const searchWordByLength = (str, separator = ' ') => {
    return str.split(separator).reduce((longest, word) => {
            return word.length > longest.length
                ? word
                : longest;
        },
        ''
    );
}

const searchWordLength = (str, separator = ' ') => {
    let arr = str.split(separator);
    let len = arr.reduce((longest, word) => {
            return word.length > longest.length
                ? word
                : longest;
        },
        ''
    ).length;
    return arr.filter(word => word.length === len)
}

console.log(searchLengthiestWord("What is the average airspeed velocity of an unladen swallow"))

console.log(searchWordByLength("What is the average airspeed velocity of an unladen swallow"))

console.log(searchWordLength("What is the average airspeed velocity of an unladen swallow"))



