export const firstLower = (s: string): string => {
  return s.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toLowerCase());
};

export const firstUpper = (s: string): string => {
  const firstChar = s[0]; 
  const firstCharUpper = firstChar.toUpperCase();
  const leftChar = s.slice(1, s.length);
  return firstCharUpper + leftChar.toLowerCase(); 
}