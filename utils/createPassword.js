const lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

const generatePassword = (length, chars) => {
  let password = '';

  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
};

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true, hasChars = true, hasUpper = false) => {
  let chars = '';

  if (hasNumbers) {
    chars += numbers;
  }

  if (hasSymbols) {
    chars += symbols;
  }

  if (hasChars){
    if (hasUpper) {
      chars += upperAlpha;
    } else {
      chars += lowerAlpha;
    }
  }

  return generatePassword(length, chars);
};

module.exports = createPassword;
