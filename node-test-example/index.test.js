// jest test file
const { execSync } = require('child_process');

test('node index runs', () => {
  const output = execSync('node index.js').toString().trim();
  expect(output).toBe('Hello from node-test-example');
});
