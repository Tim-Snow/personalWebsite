import toOrdinal from '.';

describe('toOrdinal', () => {
  test('st', () => {
    expect(toOrdinal(1)).toBe('1st');
    expect(toOrdinal(21)).toBe('21st');
  });
  test('nd', () => {
    expect(toOrdinal(2)).toBe('2nd');
    expect(toOrdinal(22)).toBe('22nd');
  });
  test('rd', () => {
    expect(toOrdinal(3)).toBe('3rd');
    expect(toOrdinal(33)).toBe('33rd');
  });
  test('th', () => {
    const vals = [4, 11, 12, 13, 14];
    vals.forEach((val) => {
      expect(toOrdinal(val)).toBe(`${val}th`);
    });
  });
  test('negative scenarios return empty string', () => {
    expect(toOrdinal('')).toBe('');
    expect(toOrdinal('a')).toBe('');
    expect(toOrdinal(-1)).toBe('');
    expect(toOrdinal('-1')).toBe('');
    expect(toOrdinal(0)).toBe('');
    expect(toOrdinal('0')).toBe('');
  });
});
