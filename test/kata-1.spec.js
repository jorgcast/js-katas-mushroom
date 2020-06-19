import assert from 'assert';

import kata1 from '../src/kata-1';

describe('#kata-1', () => {
  it('should return 0 when nothing is sent', () => {
    assert.equal(kata1(), 0);
  });
  it('should return 5 when the value is 5', () => {
    assert.equal(kata1(5), 5);
  });
});
