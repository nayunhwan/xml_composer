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
      { char: 't', style: { BOLD: true, ITALIC: false } },
      { char: 'e', style: { BOLD: true, ITALIC: false } },
      { char: 's', style: { BOLD: true, ITALIC: false } },
      { char: 't', style: { BOLD: true, ITALIC: false } },
      { char: 't', style: { BOLD: false, ITALIC: false } },
      { char: 'e', style: { BOLD: false, ITALIC: false } },
      { char: 's', style: { BOLD: false, ITALIC: false } },
      { char: 't', style: { BOLD: false, ITALIC: false } },
    ])).toEqual('<p><b><i>b</i>test</b>test</p>');
  });

  it('should return a proper paragraph with mixed text', () => {
    expect(composer([
      { char: 'b', style: { BOLD: true, ITALIC: true } },
      { char: 't', style: { BOLD: true, ITALIC: false } },
      { char: 'e', style: { BOLD: true, ITALIC: false } },
      { char: 's', style: { BOLD: true, ITALIC: false } },
      { char: 't', style: { BOLD: true, ITALIC: false } },
      { char: 't', style: { BOLD: false, ITALIC: false } },
      { char: 'e', style: { BOLD: false, ITALIC: false } },
      { char: 's', style: { BOLD: true, ITALIC: false } },
      { char: 't', style: { BOLD: true, ITALIC: false } },
    ])).toEqual('<p><b><i>b</i>test</b>te<b>st</b></p>');
  });

  it('should return a proper paragraph with mixed text', () => {
    expect(composer([
      { char: 'b', style: { BOLD: true, ITALIC: true } },
      { char: 't', style: { BOLD: true, ITALIC: false } },
      { char: 'e', style: { BOLD: true, ITALIC: false } },
      { char: 's', style: { BOLD: true, ITALIC: false } },
      { char: 't', style: { BOLD: true, ITALIC: false } },
      { char: 't', style: { BOLD: true, ITALIC: false } },
      { char: 'e', style: { BOLD: false, ITALIC: false } },
      { char: 's', style: { BOLD: true, ITALIC: false } },
      { char: 't', style: { BOLD: true, ITALIC: false } },
    ])).toEqual('<p><b><i>b</i>testt</b>e<b>st</b></p>');
  });

  it('should return a proper paragraph with mixed text', () => {
    expect(composer([
      { char: 't', style: { BOLD: false, ITALIC: false } },
      { char: 'e', style: { BOLD: false, ITALIC: false } },
      { char: 's', style: { BOLD: false, ITALIC: false } },
      { char: 't', style: { BOLD: false, ITALIC: false } },
      { char: 'b', style: { BOLD: false, ITALIC: true } },
      { char: 't', style: { BOLD: false, ITALIC: false } },
      { char: 'e', style: { BOLD: false, ITALIC: false } },
      { char: 's', style: { BOLD: true, ITALIC: false } },
      { char: 't', style: { BOLD: true, ITALIC: false } },
      { char: 't', style: { BOLD: true, ITALIC: false } },
      { char: 'e', style: { BOLD: false, ITALIC: false } },
      { char: 's', style: { BOLD: true, ITALIC: false } },
      { char: 't', style: { BOLD: true, ITALIC: false } },
    ])).toEqual('<p>test<i>b</i>te<b>stt</b>e<b>st</b></p>');
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
    ])).toEqual('<p><i><b>b</b>test</i>test</p>');
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
      { char: 's', style: { BOLD: false, ITALIC: true } },
      { char: 't', style: { BOLD: false, ITALIC: false } },
    ])).toEqual('<p><i><b>b</b>test</i>te<i>s</i>t</p>');
  });

  it('should return a proper paragraph with mixed text', () => {
    expect(composer([
      { char: 't', style: { BOLD: false, ITALIC: false } },
      { char: 'e', style: { BOLD: false, ITALIC: false } },
      { char: 's', style: { BOLD: false, ITALIC: false } },
      { char: 't', style: { BOLD: false, ITALIC: false } },
      { char: 'b', style: { BOLD: true, ITALIC: true } },
      { char: 't', style: { BOLD: false, ITALIC: true } },
      { char: 'e', style: { BOLD: false, ITALIC: true } },
      { char: 's', style: { BOLD: false, ITALIC: true } },
      { char: 't', style: { BOLD: false, ITALIC: true } },
      { char: 't', style: { BOLD: false, ITALIC: false } },
      { char: 'e', style: { BOLD: false, ITALIC: false } },
      { char: 's', style: { BOLD: false, ITALIC: true } },
      { char: 't', style: { BOLD: false, ITALIC: false } },
    ])).toEqual('<p>test<i><b>b</b>test</i>te<i>s</i>t</p>');
  });

  it('should return a proper paragraph with mixed text', () => {
    expect(composer([
      { char: 't', style: { BOLD: false, ITALIC: false } },
      { char: 'e', style: { BOLD: false, ITALIC: false } },
      { char: 's', style: { BOLD: false, ITALIC: false } },
      { char: 't', style: { BOLD: false, ITALIC: false } },
      { char: 'b', style: { BOLD: true, ITALIC: true } },
      { char: 't', style: { BOLD: false, ITALIC: true } },
      { char: 'e', style: { BOLD: false, ITALIC: true } },
      { char: 's', style: { BOLD: false, ITALIC: true } },
      { char: 't', style: { BOLD: false, ITALIC: true } },
      { char: 't', style: { BOLD: false, ITALIC: false } },
      { char: 'e', style: { BOLD: true, ITALIC: true } },
      { char: 's', style: { BOLD: false, ITALIC: true } },
      { char: 't', style: { BOLD: false, ITALIC: false } },
    ])).toEqual('<p>test<i><b>b</b>test</i>t<i><b>e</b>s</i>t</p>');
  });

  it('should return a proper paragraph with mixed text', () => {
    expect(composer([
      { char: 't', style: { BOLD: false, ITALIC: false } },
      { char: 'e', style: { BOLD: false, ITALIC: false } },
      { char: 's', style: { BOLD: false, ITALIC: false } },
      { char: 't', style: { BOLD: false, ITALIC: false } },
      { char: 'b', style: { BOLD: true, ITALIC: true } },
      { char: 't', style: { BOLD: false, ITALIC: true } },
      { char: 'e', style: { BOLD: false, ITALIC: true } },
      { char: 's', style: { BOLD: false, ITALIC: true } },
      { char: 't', style: { BOLD: false, ITALIC: true } },
      { char: 't', style: { BOLD: false, ITALIC: false } },
      { char: 'e', style: { BOLD: true, ITALIC: true } },
      { char: 's', style: { BOLD: true, ITALIC: false } },
      { char: 't', style: { BOLD: false, ITALIC: false } },
      { char: 't', style: { BOLD: false, ITALIC: false } },
    ])).toEqual('<p>test<i><b>b</b>test</i>t<b><i>e</i>s</b>tt</p>');
  });

  it('should return a proper paragraph with mixed text 1', () => {
    expect(composer([
      { char: 'i', style: { BOLD: false, ITALIC: true } },
      { char: 'b', style: { BOLD: true, ITALIC: false } },
    ])).toEqual('<p><i>i</i><b>b</b></p>');
  });

  it('should return a proper paragraph with mixed text 12', () => {
    expect(composer([
      { char: 'i', style: { BOLD: false, ITALIC: true } },
      { char: 'b', style: { BOLD: true, ITALIC: true } },
    ])).toEqual('<p><i>i<b>b</b></i></p>');
  });

  it('should return a proper paragraph with mixed text 12', () => {
    expect(composer([
      { char: 'i', style: { BOLD: false, ITALIC: true } },
      { char: 't', style: { BOLD: true, ITALIC: true } },
      { char: 'b', style: { BOLD: true, ITALIC: true } },
    ])).toEqual('<p><i>i<b>tb</b></i></p>');
  });

  it('should return a proper paragraph with mixed text 12', () => {
    expect(composer([
      { char: 'i', style: { BOLD: false, ITALIC: true } },
      { char: 't', style: { BOLD: true, ITALIC: true } },
      { char: 'b', style: { BOLD: true, ITALIC: true } },
      { char: 'b', style: { BOLD: false, ITALIC: true } },
    ])).toEqual('<p><i>i<b>tb</b>b</i></p>');
  });

  it('should return a proper paragraph with mixed text 12', () => {
    expect(composer([
      { char: 'i', style: { BOLD: false, ITALIC: true } },
      { char: 't', style: { BOLD: true, ITALIC: true } },
      { char: 'b', style: { BOLD: true, ITALIC: true } },
      { char: 'b', style: { BOLD: false, ITALIC: true } },
      { char: 'b', style: { BOLD: false, ITALIC: false } },
    ])).toEqual('<p><i>i<b>tb</b>b</i>b</p>');
  });

  it('should return a proper paragraph with mixed text 12', () => {
    expect(composer([
      { char: 'i', style: { BOLD: true, ITALIC: false } },
      { char: 't', style: { BOLD: true, ITALIC: true } },
      { char: 'b', style: { BOLD: true, ITALIC: true } },
      { char: 'b', style: { BOLD: false, ITALIC: true } },
      { char: 'b', style: { BOLD: false, ITALIC: false } },
    ])).toEqual('<p><b>i<i>tb</i></b><i>b</i>b</p>');
  });
});
