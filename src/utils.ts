import Logger from 'js-logger';

export function isValidISODate(date: string) {
  // 1. Check basic regex pattern match
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(date)) return false;

  // 2. Parse numbers
  const [year, month, day] = date.split('-').map(Number);

  // 3. Construct Date (Note: Month is 0-indexed in JS)
  const dateObj = new Date(year, month - 1, day);

  // 4. Verify no calendar rollover occurred
  return (
    dateObj.getFullYear() === year &&
    dateObj.getMonth() === month - 1 &&
    dateObj.getDate() === day
  );
}

export function getISOToday() {
  const date = new Date();

  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

const isoDateRegex = /^\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])$/;

export function getApiDateString(date: string) {
  if (isoDateRegex.test(date)) {
    const removeDash = date.replaceAll('-', '');
    const result = removeDash.slice(2);

    return result;
  } else {
    Logger.warn('getApiDateString invalid date', date);

    return null;
  }
}
