const arrayConverter = (arr) => {
    for (const arrElement of arr) {
        if (typeof arrElement === 'object') {
            arr[arr.findIndex((e) => e === arrElement)] = arrayConverter(arrElement);
        }
    }
    return [].concat(...arr);
}

console.log(arrayConverter([1, 2, [3, 4, [5]]]))