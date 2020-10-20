const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': " ",
};

function decode(expr) {
    // write your solution here
    let arrExpr = [];
    for(let i = 0; i < expr.length; i+=10){
      arrExpr.push(expr.slice(i,i+10));
    }
    let morseArr = [];
    for (let i = 0; i < arrExpr.length; i++){
      let arrSymbol = arrExpr[i].replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');
      morseArr.push(arrSymbol);
    }
        // console.log(morseArr);
       let result =  morseArr.map(symbol => MORSE_TABLE[symbol]).join('');
      //  console.log(result);
      return result;
    
}

module.exports = {
    decode
}