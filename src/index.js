/*
composer function receives a data structure describing styled texts and returns an XML of the parsed string.

[{ char: 't', style: { BOLD: false, ITALIC: false } }] => <p>t</p>
[{ char: 'b', style: { BOLD: true, ITALIC: false } }] => <p><b>b</b></p>
[{ char: 'i', style: { BOLD: false, ITALIC: true } }] => <p><i>i</i></p>

For further examples, please check basic_spec.js file.

DO NOT MODIFY
*/

/*
type style = {
  BOLD: boolean;
  ITALIC: boolean;
};

interface styledChar {
  char: string; // single character
  style: style;
};

type styledString = styledChar[];
*/

/*
@param styledString: an array of nested js objects that contains information about characters and their styles
@return xmlString: string;
*/
module.exports = function(styledString) {
  // WARNING: Do not use string.replace or regex operations.

  // Guard Condition for null or empty value
  if (!styledString || styledString.length === 0) {
    return '<p></p>';
  }

  let basedStr = '<p>';
  let flagBold = false;
  let flagItalic = false;

  let boldStack = [];
  let italicStack = [];
  let bothStack = [];

  styledString.forEach(item => {
    if (!flagBold && flagBold !== item.style.BOLD) flagBold = true;
    if (!flagItalic && flagItalic !== item.style.ITALIC) flagItalic = true;

    if (flagItalic && !item.style.ITALIC) {
      let temStr = ''
      if (flagBold){
        tmpStr = bothStack.length !== 0 ? `<i>${bothStack.join('')}</i>` : '';
        bothStack = [];
        boldStack.push(tmpStr);
      } else {
        tmpStr = italicStack.length !== 0 ? `<i>${italicStack.join('')}</i>` : '';
        italicStack = [];
        basedStr += tmpStr;
      }
      flagItalic = false;
    }
    if (flagBold && !item.style.BOLD) {
      let temStr = ''
      if (flagItalic){
        tmpStr = bothStack.length !== 0 ? `<b>${bothStack.join('')}</b>` : '';
        bothStack = [];
        italicStack.push(tmpStr);
      } else {
        tmpStr = boldStack.length !== 0 ? `<b>${boldStack.join('')}</b>` : '';
        boldStack = [];
        basedStr += tmpStr;
      }
      flagBold = false;
    }

    if (flagBold && !flagItalic) boldStack.push(item.char);
    if (flagItalic && !flagBold) italicStack.push(item.char);
    if (flagBold && flagItalic) bothStack.push(item.char);
    if (!flagBold && !flagItalic) basedStr += item.char;
  });
  console.log(boldStack, italicStack, bothStack, flagBold, flagItalic);

  if (flagBold && flagItalic){
    basedStr += bothStack.length !== 0 ? `<b><i>${bothStack.join('')}</i></b>` : '';
  } else if (flagBold) {
    basedStr += italicStack.length !== 0 ? `<i>${italicStack.join('')}</i>` : '';
    basedStr += boldStack.length !== 0 ? `<b>${boldStack.join('')}</b>` : '';
  } else if (flagItalic) {
    basedStr += boldStack.length !== 0 ? `<b>${boldStack.join('')}</b>` : '';
    basedStr += italicStack.length !== 0 ? `<i>${italicStack.join('')}</i>` : '';
  }

  basedStr += '</p>';
  return basedStr; // FILL ME
}
