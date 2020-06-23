import assert from 'assert';

import kata3 from '../src/solutions/kata-3';

describe('#kata-3', function () {
  describe('Words pattern', function () {
    it('should return true for "abba" and "red green green red"', function () {
      assert.ok(kata3('abba', 'red green green red'));
    });

    it('should return false for "abba" and "red green green blue"', function () {
      assert.equal(kata3('abba', 'red green green blue'), false);
    });

    it('should return false for "aaaa" and "red green green red"', function () {
      assert.equal(kata3('aaaa', 'red green green red'), false);
    });

    it('should return false for "abba" and "red red red red"', function () {
      assert.equal(kata3('abba', 'red red red red'), false);
    });

    it('should return false for "ab" and "red green red"', function () {
      assert.equal(kata3('ab', 'red green red'), false);
    });
  });
});
