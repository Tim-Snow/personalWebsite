function toTwelveHour(hour: string) {
  const hr = parseInt(hour);
  let ampm = 'pm';
  if (hr < 12) {
    ampm = 'am';
  }
  return `${hr > 12 ? hr - 12 : hr}${ampm}`;
}

export default function fuzzyTime(time: string) {
  return `${toTwelveHour(time.split(':')[0])}`;
}
