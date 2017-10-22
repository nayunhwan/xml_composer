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

  let boldQueue = [];
  let italicQueue = [];
  let bothQueue = [];

  styledString.forEach(item => {
    if (!flagBold && flagBold !== item.style.BOLD) flagBold = true;
    if (!flagItalic && flagItalic !== item.style.ITALIC) flagItalic = true;

    if (flagItalic && !item.style.ITALIC) {
      let tmpStr = '';
      if (flagBold){
        tmpStr = bothQueue.length !== 0 ? `<i>${bothQueue.join('')}</i>` : '';
        bothQueue = [];
        boldQueue.push(tmpStr);
      } else {
        tmpStr = italicQueue.length !== 0 ? `<i>${italicQueue.join('')}</i>` : '';
        italicQueue = [];
        basedStr += tmpStr;
      }
      flagItalic = false;
    }
    if (flagBold && !item.style.BOLD) {
      let tmpStr = '';
      if (flagItalic){
        tmpStr = bothQueue.length !== 0 ? `<b>${bothQueue.join('')}</b>` : '';
        bothQueue = [];
        italicQueue.push(tmpStr);
      } else {
        tmpStr = boldQueue.length !== 0 ? `<b>${boldQueue.join('')}</b>` : '';
        boldQueue = [];
        basedStr += tmpStr;
      }
      flagBold = false;
    }

    if (flagBold && !flagItalic) boldQueue.push(item.char);
    if (flagItalic && !flagBold) italicQueue.push(item.char);
    if (flagBold && flagItalic) bothQueue.push(item.char);
    if (!flagBold && !flagItalic) basedStr += item.char;
  });

  console.log(boldQueue, italicQueue, bothQueue, flagBold, flagItalic);
  if (flagBold && flagItalic){
    if (boldQueue.length === 0 && italicQueue.length === 0) {
      basedStr += bothQueue.length !== 0 ? `<b><i>${bothQueue.join('')}</i></b>` : '';
    } else if (boldQueue.length !== 0) {
      boldQueue.push(`<i>${bothQueue.join('')}</i>`);
      bothQueue = [];
      basedStr += `<b>${boldQueue.join('')}</b>`;
    } else if (italicQueue.length !== 0) {
      italicQueue.push(`<b>${bothQueue.join('')}</b>`);
      bothQueue = [];
      basedStr += `<i>${italicQueue.join('')}</i>`;
    }
  } else if (flagBold) {
    basedStr += italicQueue.length !== 0 ? `<i>${italicQueue.join('')}</i>` : '';
    basedStr += boldQueue.length !== 0 ? `<b>${boldQueue.join('')}</b>` : '';
  } else if (flagItalic) {
    basedStr += boldQueue.length !== 0 ? `<b>${boldQueue.join('')}</b>` : '';
    basedStr += italicQueue.length !== 0 ? `<i>${italicQueue.join('')}</i>` : '';
  }

  console.log(boldQueue, italicQueue, bothQueue, flagBold, flagItalic);
  basedStr += '</p>';
  return basedStr; // FILL ME
}
