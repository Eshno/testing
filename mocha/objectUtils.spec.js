import assert from 'assert';
import { _get } from '../src/utils/object';

describe('Object Utils', function() {
  const testObj1 = { name: { last: 'Felix', first: 'Oliver' } };
  const testArray1 = [testObj1];
  describe('Get', function() {
    it('Returns the value of the object on the given path', function() {
      const testPath = 'name.last';
      const expect = testObj1.name.last;
      assert.equal(_get(testObj1, testPath), expect);
    });
    it('Returns the value of the object on the given path in an array', function() {
      const testPath = '0.name.last';
      const expect = testObj1.name.last;
      assert.equal(_get(testArray1, testPath), expect);
    });
  });
});
