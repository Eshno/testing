const assert = require('assert');
const { _get } = require('../src/utils/object');

describe('Object Utils', function() {
    const testObj1 = {name: {last: 'Felix', first: 'Oliver'}};
    describe('Get', function() {
        it('Returns the value of the object on the given path', function() {
            const testPath = 'name.last';
            const expect = testObj1.name.last;
            assert.equal(_get(testObj1, testPath), expect);
        })
    })
})