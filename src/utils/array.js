function isValidParams(array, callback) {
    if (!Array.isArray(array)) throw 'Element is not an Array';
    if (typeof callback != 'function') throw 'Callback is not a Function';
}

function _map(array, callback = e => e) {
    isValidParams(array, callback);
    const newArray = [];
    for (let elem of array) {
        newArray.push(callback(elem));
    }
    return newArray;
}

function _reduce(array, callback, defaults = array[0]) {
    isValidParams(array, callback);
    let stack = defaults;
    for (let i = 1; i < array.length; i++) {
        stack = callback(stack, array[i]);
    }
    return stack;
}

function _filter(array, condition) {
    isValidParams(array, condition);
    const newArray = [];
    for (const elem of array) {
        if (condition(elem)) newArray.push(elem);
    }
    return newArray;
}


module.exports = {
    _map,
    _reduce,
    _filter
}