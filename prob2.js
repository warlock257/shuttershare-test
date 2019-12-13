let quotes = "ZNGA 1300 2.66 B, CLH15.NYM 50 56.32 B, OWW 1000 11.623 B, OGG 20 580.1 B";
let quotes2 = "ZNGA 13.00 2.66 B, CLH15.NYM 50 5632 B, OWW 1000 11.623 B, OGG 20 580.1 B";
let quotes3 = "GOOG 300 542.0 B, CLH15.NYM 50 5632 S, OWW 1000 11.623 S";
let quotes4 = "GOOG 3.00 542.0 B, CLH15.NYM 50 5632 R, OWW 1000 11.623 S";

const addBuys = (quote) =>{
    let buySumSub;
    let quoteArr = quote.split(' ');
    buySumSub = quoteArr[2] * quoteArr[1];
    return buySumSub;
}

const addSells = (quote) =>{
    let sellSumSub;
    let quoteArr = quote.split(' ');
    sellSumSub = quoteArr[2] * quoteArr[1];
    return sellSumSub;
}

const balanceStatements = (quotes) =>{
    let buySum = 0;
    let sellSum = 0;
    let badFormat = []
    quotesArr = quotes.split(',')
    
    quotesArr.forEach(element => {
        if (element[0] === ' '){
            element = element.substr(1)
        }
        let elementArr = element.split(' ')

        if (
        typeof(elementArr[0] === 'string')
        && elementArr[1].indexOf('.') === -1
        && elementArr[2].includes('.') === true
        && (elementArr[3] === 'B' || elementArr[3]=== 'S')
        ){
            //'formatted ok'
            if (element.substr(element.length - 1) === 'B'){
                buySum = buySum + addBuys(element);
            } else if (element.substr(element.length - 1) === 'S'){
                sellSum = sellSum + addSells(element);
            }
        } else {
            //'format error'
            badFormat.push(element);
        }

    });
    if (badFormat.length === 0){
        console.log(`Buy: ${buySum} Sell: ${sellSum}`);
        return `Buy: ${buySum} Sell: ${sellSum}`;
    } else {
        console.log(`Buy: ${buySum} Sell: ${sellSum}; Badly formatted ${badFormat.length}: ${badFormat.join()}`);
        return `Buy: ${buySum} Sell: ${sellSum}; Badly formatted ${badFormat.length}: ${badFormat.join()}`;
    }
}

balanceStatements(quotes);
balanceStatements(quotes2);
balanceStatements(quotes3);
balanceStatements(quotes4);

module.exports = balanceStatements;
