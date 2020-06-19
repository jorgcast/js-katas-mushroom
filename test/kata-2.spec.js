import assert from 'assert';

import kata2 from '../src/kata-2';

describe('#kata-2', function () {
  describe('Signed reversed integer', function () {
    it('should return 321 when the value is 123', function () {
      assert.equal(kata2(123), 321);
    });

    it('should return -321 when the value is -123', function () {
      assert.equal(kata2(-123), -321);
    });

    it('should return 21 when the value is 120', function () {
      assert.equal(kata2(120), 21);
    });

    it('should return 0 when nothing is sent', function () {
      assert.equal(kata2(), 0);
    });

    it('should return 0 when the reversed number y out of the range [-2^31, 2^31 - 1]', function () {
      assert.equal(kata2(1234567899), 0);
    });
  });

  describe('EXTRA Points:', function () {
    it('should return an Error when the value is a string', function () {
      assert.throws(function () { kata2('wtf') }, Error);
    });
    it('should return an Error when the value is an array', function () {
      assert.throws(function () { kata2(['wtf']) }, Error);
    });
    it('should return an Error when the value is an object', function () {
      assert.throws(function () { kata2({}) }, Error);
    });
  });
});
