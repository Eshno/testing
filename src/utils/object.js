function _get(obj, path) {
    path = path.split('.');
    let result;
    for (const elem of path) {
        if (!result) result = obj[elem];
        else result = result[elem];
    }
    return result;
}

module.exports = {
    _get
}
