const { foo } = require('./index.js');
const assert = require('assert');

describe('test-node-app', () => {
  it('should log hello', () => {
    // We will just verify that foo is a function
    assert.strictEqual(typeof foo, 'function');
  });
});
