// TODO: Add tests that you find necessary.

const composer = require('../src');

describe('advanced composer test', () => {
  it('should return a proper paragraph with mixed text', () => {
    expect(composer([
      { char: 'b', style: { BOLD: true, ITALIC: true } },
      { char: 'i', style: { BOLD: true, ITALIC: true } },
      { char: 'i', style: { BOLD: false, ITALIC: false } },
    ])).toEqual('<p><b><i>bi</i></b>i</p>');
  });

  it('should return a proper paragraph with mixed text', () => {
    expect(composer([
      { char: 'b', style: { BOLD: true, ITALIC: true } },
      { char: 'i', style: { BOLD: true, ITALIC: true } },
      { char: 't', style: { BOLD: false, ITALIC: false } },
      { char: 'b', style: { BOLD: true, ITALIC: false } },
      { char: 'i', style: { BOLD: false, ITALIC: true } },
    ])).toEqual('<p><b><i>bi</i></b>t<b>b</b><i>i</i></p>');
  });

  it('should return a proper paragraph with mixed text', () => {
    expect(composer([
      { char: 'b', style: { BOLD: true, ITALIC: true } },
      { char: 't', style: { BOLD: false, ITALIC: true } },
      { char: 'e', style: { BOLD: false, ITALIC: true } },
      { char: 's', style: { BOLD: false, ITALIC: true } },
      { char: 't', style: { BOLD: false, ITALIC: true } },
      { char: 't', style: { BOLD: false, ITALIC: false } },
      { char: 'e', style: { BOLD: false, ITALIC: false } },
      { char: 's', style: { BOLD: false, ITALIC: false } },
      { char: 't', style: { BOLD: false, ITALIC: false } },
    ])).toEqual('<p><b><i>b</b>test</i>test</p>');
  });

  it('should return a proper paragraph with mixed text', () => {
    expect(composer([
      { char: 'b', style: { BOLD: true, ITALIC: true } },
      { char: 't', style: { BOLD: false, ITALIC: true } },
      { char: 'e', style: { BOLD: false, ITALIC: true } },
      { char: 's', style: { BOLD: false, ITALIC: true } },
      { char: 't', style: { BOLD: false, ITALIC: true } },
      { char: 't', style: { BOLD: false, ITALIC: false } },
      { char: 'e', style: { BOLD: false, ITALIC: false } },
      { char: 's', style: { BOLD: true, ITALIC: false } },
      { char: 't', style: { BOLD: true, ITALIC: false } },
    ])).toEqual('<p><b><i>b</b>test</i>te<b>st</b></p>');
  });

  it('should return a proper paragraph with mixed text', () => {
    expect(composer([
      { char: 'b', style: { BOLD: true, ITALIC: true } },
      { char: 't', style: { BOLD: false, ITALIC: true } },
      { char: 'e', style: { BOLD: false, ITALIC: true } },
      { char: 's', style: { BOLD: true, ITALIC: true } },
      { char: 't', style: { BOLD: true, ITALIC: true } },
      { char: 't', style: { BOLD: true, ITALIC: false } },
      { char: 'e', style: { BOLD: false, ITALIC: false } },
      { char: 's', style: { BOLD: true, ITALIC: false } },
      { char: 't', style: { BOLD: true, ITALIC: false } },
    ])).toEqual('<p><b><i>b</b>te<b>st</i>t</b>e<b>st</b></p>');
  });
});
