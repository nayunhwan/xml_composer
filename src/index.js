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
  if (!styledString || styledString.length == 0) {
    return '<p></p>';
  }

  let basedStr = '<p>';
  let flagBold = false;
  let flagItalic = false;

  const stack = [];
  styledString.forEach(item => {
    if (flagItalic && flagItalic !== item.style.ITALIC) {
      basedStr += '</i>';
      flagItalic = false;
    }

    if (flagBold && flagBold !== item.style.BOLD) {
      basedStr += '</b>';
      flagBold = false;
    }
    if (!flagBold && flagBold !== item.style.BOLD) {
      basedStr += '<b>';
      flagBold = true;
    }
    if (!flagItalic && flagItalic !== item.style.ITALIC) {
      basedStr += '<i>';
      flagItalic = true;
    }
    basedStr += item.char;
  });

  // Close tag
  if (flagItalic) basedStr += '</i>';
  if (flagBold) basedStr += '</b>';
  basedStr += '</p>';

  return basedStr; // FILL ME
}
