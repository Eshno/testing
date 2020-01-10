import assert from 'assert';
import { assert as chaiAssert } from 'chai';
import { _map, _filter, _reduce } from '../src/utils/array';

// These test run in the same order as they're declared.

describe('Array Utils', function() {
  const toTestArray = [1, 2, 3];
  describe('Map', function() {
    it('should sum +1 to every element', function() {
      const expected = [2, 3, 4];
      const testCallback = (e) => e + 1;
      chaiAssert.sameMembers(_map(toTestArray, testCallback), expected);
    });
  });

  describe('Reduce', function() {
    it('Should Sum every element and return it', function() {
      const expected = 6;
      const testCallback = (val, stack) => stack + val;
      assert.equal(_reduce(toTestArray, testCallback), expected);
    });

    it('Should Sum every element with the given default value and return it', function() {
      const defaultValue = 6;
      const expected = 6 + defaultValue;
      const testCallback = (val, stack) => stack + val;
      assert.equal(_reduce(toTestArray, testCallback, defaultValue), expected);
    });
  });

  describe('Filter', function() {
    const toTestUsersArray = [
      { id: 11, name: 'Adam', age: 23, group: 'editor' },
      { id: 47, name: 'John', age: 28, group: 'admin' },
      { id: 97, name: 'Oliver', age: 28, group: 'admin' },
      { id: 12, name: 'Adam', age: 17, group: 'editor' },
      { id: 86, name: 'William', age: 12, group: 'editor' },
    ];
    it('Should filter adults and admins ', function() {
      const expected = [
        { id: 47, name: 'John', age: 28, group: 'admin' },
        { id: 97, name: 'Oliver', age: 28, group: 'admin' },
      ];
      const callback = (elem) => elem.age > 17 && elem.group === 'admin';
      chaiAssert.sameDeepMembers(_filter(toTestUsersArray, callback), expected);
    });
  });
});
