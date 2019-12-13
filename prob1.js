let sent1 = "The quick brown fox jumps over the lazy dog";
let sent2 = "this sentence is not a pangram";
let sent3 = "Mr. Jock, TV quiz PhD., bags few lynx";
let sent4 = "How vexingly quick daft zebras jump!";

const pangramTester = (str)=>{
    str = str.toLowerCase();
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    str = str.split(' ').join('');
    str =  [... new Set(str)] ;
    if (str.length === 26){ 
        return true;
    } else {
        return false;
    }
}

console.log(pangramTester(sent1));
console.log(pangramTester(sent2));
console.log(pangramTester(sent3));
console.log(pangramTester(sent4));

module.exports = pangramTester;