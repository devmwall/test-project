const {greet} = require('../index');

describe('greet', ()=>{
  it('prints greeting', ()=>{
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(()=>{});
    greet();
    expect(consoleSpy).toHaveBeenCalledWith('Hello from node-test-quick');
    consoleSpy.mockRestore();
  });
});
