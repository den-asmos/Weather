export const makeSearchRequest = (value) => {
  return value
    .trim()
    .split(' ')
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ');
};
