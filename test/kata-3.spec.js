import assert from 'assert';

import kata3 from '../src/kata-3';

describe('#kata-3', () => {
  it('should return 0 when nothing is sent', () => {
    assert.equal(kata3(), 1);
  });
  it('should return -1 when the value is not present', () => {
    assert.equal(kata3(2), 2);
  });
});
