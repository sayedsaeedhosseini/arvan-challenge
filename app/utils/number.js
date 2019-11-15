const persianNumberMap = {
  '۰': 0,
  '۱': 1,
  '۲': 2,
  '۳': 3,
  '۴': 4,
  '۵': 5,
  '۶': 6,
  '۷': 7,
  '۸': 8,
  '۹': 9,
};

const englishNumberMap = {
  0: '۰',
  1: '۱',
  2: '۲',
  3: '۳',
  4: '۴',
  5: '۵',
  6: '۶',
  7: '۷',
  8: '۸',
  9: '۹',
};

export const farsiToEnglishNumber = num =>
  num
    .toString()
    .split('')
    .map(i => (/[۰-۹]/.test(i) ? persianNumberMap[i] : i))
    .join('');

export const englishToFarsiNumber = num =>
  num
    .toString()
    .split('')
    .map(i => (/[0-9]/.test(i) ? englishNumberMap[i] : i))
    .join('');

export const formattedPrice = number => {
  const num = Math.trunc(number);
  const persianNum = englishToFarsiNumber(num);
  let formattedNum = '';
  for (let i = 1; i <= persianNum.length; i += 1) {
    if (i % 3 === 0) {
      formattedNum = `,${persianNum[persianNum.length - i]}${formattedNum}`;
    } else {
      formattedNum = persianNum[persianNum.length - i] + formattedNum;
    }
  }
  if (persianNum.length % 3 === 0) {
    formattedNum = formattedNum.substr(1);
  }
  return formattedNum;
};

export const roundHalf = num => Math.round(num * 2) / 2;
export const convertToOneDecimal = num => parseFloat(num.toFixed(1));
