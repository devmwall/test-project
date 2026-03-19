const { spawnSync } = require('child_process');
// Example of running a Node script
module.exports = {
  runTest: () => {
    const result = spawnSync('node', ['test.js'], {cwd: 'node-test', encoding: 'utf8'});
    return result.stdout;
  }
};
