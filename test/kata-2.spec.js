import assert from 'assert';

import kata2 from '../src/kata-2';

describe('#kata-2', () => {
  it('should return 0 when nothing is sent', () => {
    assert.equal(kata2(), 1);
  });
  it('should return -1 when the value is not present', () => {
    assert.equal(kata2(2), 2);
  });
});
