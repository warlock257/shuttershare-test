var assert = require('assert');
const pangramTester = require('./prob1')

//make sure mocha is working - should pass
it('Control test - should return true', () => {
    assert.equal(true, true)
  })

describe('testing various sentences', ()=>{
    let sent1 = "The quick brown fox jumps over the lazy dog";
    let sent2 = "this sentence is not a pangram";
    let sent3 = "Mr. Jock, TV quiz PhD., bags few lynx";
    let sent4 = "How vexingly quick daft zebras jump!";

    it('should return expected output 1', ()=>{
        assert.equal(pangramTester(sent1),true);
    })
    it('should return expected output 2', ()=>{
        assert.equal(pangramTester(sent2),false);
    })
    it('should return expected output 3', ()=>{
        assert.equal(pangramTester(sent3),true);
    })
    it('should return expected output 4', ()=>{
        assert.equal(pangramTester(sent4),true);
    })
})  
