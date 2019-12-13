var assert = require('assert');
const balanceStatements = require('./prob2')

//make sure mocha is working - should pass
it('Control test - should return true', () => {
    assert.equal(true, true)
  })

describe('testing various strings', ()=>{
    let quotes = "ZNGA 1300 2.66 B, CLH15.NYM 50 56.32 B, OWW 1000 11.623 B, OGG 20 580.1 B"
    let quotes2 = "ZNGA 13.00 2.66 B, CLH15.NYM 50 5632 B, OWW 1000 11.623 B, OGG 20 580.1 B"
    let quotes3 = "GOOG 300 542.0 B, CLH15.NYM 50 5632 S, OWW 1000 11.623 S"
    let quotes4 = "GOOG 3.00 542.0 B, CLH15.NYM 50 5632 R, OWW 1000 11.623 S"

    it('should return expected output 1', ()=>{
        assert.equal(balanceStatements(quotes),"Buy: 29499 Sell: 0") 
    })
    it('should return expected output 2', ()=>{
        assert.equal(balanceStatements(quotes2),"Buy: 23225 Sell: 0; Badly formatted 2: ZNGA 13.00 2.66 B,CLH15.NYM 50 5632 B") 
    })
    it('should return expected output 3', ()=>{
        assert.equal(balanceStatements(quotes3),"Buy: 162600 Sell: 11623; Badly formatted 1: CLH15.NYM 50 5632 S") 
    })
    it('should return expected output 4', ()=>{
        assert.equal(balanceStatements(quotes4),"Buy: 0 Sell: 11623; Badly formatted 2: GOOG 3.00 542.0 B,CLH15.NYM 50 5632 R") 
    })
})  
