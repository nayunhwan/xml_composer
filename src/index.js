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

  const queue = [];

  styledString.forEach(item => {


    if (!flagBold && flagBold !== item.style.BOLD) {
      flagBold = true;
    }

    if (!flagItalic && flagItalic !== item.style.ITALIC) {
      flagItalic = true;
    }

    if (flagItalic && flagItalic !== item.style.ITALIC) {
      let tempStr = '';
      while (queue.length !== 0) {
        tempStr += queue.shift();
      }
      queue.push('<i>' + tempStr + '</i>');
      flagItalic = false;
    }

    if (flagBold && flagBold !== item.style.BOLD) {
      let tempStr = '';
      while (queue.length !== 0) {
        tempStr += queue.shift();
      }
      queue.push('<b>' + tempStr + '</b>');
      flagBold = false;
    }


    if (flagBold || flagItalic) queue.push(item.char);
    if (!flagBold && !flagItalic) {
      while (queue.length !== 0) {
        basedStr += queue.shift();
      }
      basedStr += item.char;
    }
  });

  // Close tag
  // if (flagItalic) basedStr += '</i>';
  // if (flagBold) basedStr += '</b>';
  if (flagItalic) {
    let tempStr = '';
    while (queue.length !== 0) {
      tempStr += queue.shift();
    }
    queue.push('<i>' + tempStr + '</i>');
    flagItalic = false;
  }

  if (flagBold) {
    let tempStr = '';
    while (queue.length !== 0) {
      tempStr += queue.shift();
    }
    queue.push('<b>' + tempStr + '</b>');
    flagBold = false;
  }

  while (queue.length !== 0) basedStr += queue.shift();
  basedStr += '</p>';

  return basedStr; // FILL ME
}
