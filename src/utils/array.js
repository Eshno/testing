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

function _reduce(array, callback, defaults) {
  isValidParams(array, callback);
  const startIndex = defaults === undefined ? 1 : 0;
  let stack = defaults === undefined ? array[0] : defaults;
  for (let i = startIndex; i < array.length; i++) {
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