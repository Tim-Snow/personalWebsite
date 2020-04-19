export default function toOrdinal(n: number | string) {
  let num: number;
  if (typeof n === 'string') {
    num = parseInt(n);
  } else if (typeof n === 'number') {
    num = n;
  } else {
    return '';
  }
  if (isNaN(num) || num <= 0) {
    return '';
  }
  const j = num % 10;
  const k = num % 100;
  if (j === 1 && k !== 11) {
    return num + 'st';
  }
  if (j === 2 && k !== 12) {
    return num + 'nd';
  }
  if (j === 3 && k !== 13) {
    return num + 'rd';
  }
  return num + 'th';
}
