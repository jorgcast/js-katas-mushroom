/**
 * @param {number} x
 * @return {boolean}
 */
const kata1 = (x = 0) => {
  if (isNaN(parseInt(x, 10))) {
    throw new Error('Not a number');
  }

  const reversedNum = x.toString().split('').reverse().join('');

  return reversedNum === x.toString();
};

export default kata1;
