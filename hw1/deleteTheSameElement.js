const arr = [null, 3, 3, "lol", 3, "lol", 5, 20, true, true, 7, 14, 156, 33, 9, null, 0, true, 7]

const deleteTheSameElement = (arr) => {
    return arr.reduce((accumulator, currentValue) => {
            if (!accumulator.includes(currentValue)) {
                accumulator.push(currentValue);
            }
            return accumulator;
        },
        []
    );
}

console.log(deleteTheSameElement(arr))
