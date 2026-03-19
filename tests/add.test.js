const { add } = require('../index.js');
const assert = require('assert');

describe('add', () => {
  it('adds two numbers', () => {
    assert.strictEqual(add(1, 2), 3);
  });
});
