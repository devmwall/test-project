// Simple addition test
const add = (a, b) => a + b;

describe('add', () => {
  test('adds numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
  });
});