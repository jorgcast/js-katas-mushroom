import assert from 'assert';

import kata3 from '../src/kata-3';

describe('#kata-3', function () {
  describe('Longest common prefix', function () {
    it('should return "ba" when the words are [banana, ball, basket]', function () {
      assert.equal(kata3(['banana', 'ball', 'basket']), 'ba');
    });

    it('should return "sa" when the words are [Saruman, SALUTES, sAuron]', function () {
      assert.equal(kata3(['Saruman', 'SALUTES', 'sAuron']), 'sa');
    });

    it('should return "" when no common prefix is found', function () {
      assert.equal(kata3(['mouse', 'cat', 'dog']), '');
    });

    const uniqueWord = 'notebook';
    it(`should return "${uniqueWord}" when the only word is [${uniqueWord}]`, function () {
      assert.equal(kata3([uniqueWord]), uniqueWord);
    });

    it('should return "" when words is empty', function () {
      assert.equal(kata3([]), '');
    });

    it('should return "" when nothing is sent', function () {
      assert.equal(kata3(), '');
    });
  });

  describe('EXTRA Points:', function () {
    it('should return an Error when receiving a string', function () {
      assert.throws(function () { kata3('wtf') }, Error);
    });
    it('should return an Error when receiving a number', function () {
      assert.throws(function () { kata3(951) }, Error);
    });
    it('should return an Error when receiving an object', function () {
      assert.throws(function () { kata3({}) }, Error);
    });
  });
});
