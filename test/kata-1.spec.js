import assert from 'assert';

import kata1 from '../src/kata-1';

describe('#kata-1', function () {
  describe('Number palindrome', function () {
    it('should return true when the value is 5', function () {
      assert.ok(kata1(5));
    });

    it('should return true when the value is 121', function () {
      assert.ok(kata1(121));
    });

    it('should return false when the value is -123454321', function () {
      assert.equal(kata1(-123454321), false);
    });

    it('should return false when the value is 10', function () {
      assert.equal(kata1(10), false);
    });

    it('should return true when nothing is sent', function () {
      assert.ok(kata1());
    });
  });

  describe('BONUS Points:', function () {
    it('should return an Error when the value is a string', function () {
      assert.throws(function () { kata1('wtf') }, Error);
    });
    it('should return an Error when the value is an array', function () {
      assert.throws(function () { kata1(['wtf']) }, Error);
    });
    it('should return an Error when the value is an object', function () {
      assert.throws(function () { kata1({}) }, Error);
    });
  });
});
