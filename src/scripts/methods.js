const methods = {
    removeFromArray: (array, removeMe) => {
        return array.filter(value => value !== removeMe);
    },
    mergeArrayIntoArray: (copiedArray, targetArray) => {
        copiedArray.forEach(element => targetArray.push(JSON.parse(JSON.stringify(element))));
    },
    findCommonElements: (arr1, arr2) => {
        return arr1.filter(element => arr2.includes(element));
    },
    deepEqual: (a, b) => {
        return JSON.stringify(a) === JSON.stringify(b);
    },
    deepCopy: target => {
        return JSON.parse(JSON.stringify(target));
    },
    getRandomInteger: max => {
        return Math.floor(Math.random() * max);
    }
}

export default methods;