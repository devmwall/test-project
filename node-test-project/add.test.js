const {add}=require('../index');

describe('add',()=>{
  it('adds numbers',()=>{
    expect(add(2,3)).toBe(5);
  });
});