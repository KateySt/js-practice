const arr = [1, 2, 3, 4, 5];

const sumOfSquares = (arr) => {
    return arr.reduce((accumulator, currentValue) =>
            accumulator + (currentValue ** 2),
        0
    );
}

console.log(sumOfSquares(arr));
