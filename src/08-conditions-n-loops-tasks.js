/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  let result = '';
  if (num % 3 === 0) result += 'Fizz';
  if (num % 5 === 0) result += 'Buzz';
  return result || num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i += 1) {
    result *= i;
  }
  return result;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  const max = Math.max(a, b, c);
  return max < a + b + c - max;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(
  {
    top: t1, left: l1, width: w1, height: h1,
  },
  {
    top: t2, left: l2, width: w2, height: h2,
  },
) {
  return (Math.abs(t1 - t2) < Math.max(h1, h2)) && (Math.abs(l1 - l2) < Math.max(w1, w2));
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle({ center: { x: oX, y: oY }, radius: r }, { x: pX, y: pY }) {
  return Math.sqrt((pX - oX) ** 2 + (pY - oY) ** 2) < r;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const map = {};
  const l = str.length;

  for (let i = 0; i < l; i += 1) {
    const char = str[i];
    map[char] = map[char] === undefined ? 1 : map[char] + 1;
  }

  const chars = Object.entries(map);
  for (let j = 0; j < chars.length; j += 1) {
    const [char, count] = chars[j];
    if (count === 1) return char;
  }

  return null;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  return `${isStartIncluded ? '[' : '('}${Math.min(a, b)}, ${Math.max(a, b)}${isEndIncluded ? ']' : ')'}`;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  const l = str.length;
  let result = '';
  for (let i = l - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  return result;
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  let i = num;
  let result = 0;

  while (i) {
    result = (result * 10) + (i % 10);
    i = Math.floor(i / 10);
  }

  return result;
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const str = `${ccn}`;
  const l = str.length;
  const mod = l % 2;
  let sum = 0;

  for (let i = 0; i < l; i += 1) {
    const d = +str[i];
    sum += i % 2 === mod ? ((2 * d - 1) % 9) + 1 : d;
  }

  return sum % 10 === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  let n = num;
  let result = 0;
  while (n > 9) {
    result += n % 10;
    n = Math.floor(n / 10);
  }
  result += n;

  return result <= 9 ? result : getDigitalRoot(result);
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const l = str.length;
  const stack = [];
  const oppMap = {
    '}': '{',
    ']': '[',
    ')': '(',
    '>': '<',
  };

  for (let i = 0; i < l; i += 1) {
    const bracket = str[i];

    if (stack.length === 0) {
      stack.push(bracket);
    } else {
      const top = stack[stack.length - 1];

      if (oppMap[bracket] === top) {
        stack.pop();
      } else {
        stack.push(bracket);
      }
    }
  }

  return stack.length === 0;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, radix) {
  let result = '';
  let val = num;

  while (val >= radix) {
    const quotient = Math.floor(val / radix);
    result = (val - radix * quotient) + result;
    val = quotient;
  }

  return val + result;
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} paths
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(paths) {
  const map = paths.reduce((acc, path) => {
    let anchor = '';
    path.split('/').forEach((dir, ind, arr) => {
      anchor = `${anchor}${dir}${ind < arr.length ? '/' : ''}`;
      const count = acc[anchor] ? acc[anchor][0] + 1 : 1;
      acc[anchor] = [count, ind];
    });
    return acc;
  }, {});

  const result = Object.entries(map).reduce((acc, [path, [count, depth]]) => {
    if (count === paths.length && depth >= acc[1]) {
      return [path, depth];
    }
    return acc;
  }, ['', 0]);

  return result[0];
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const argsDefined = (v1, v2) => v1 !== undefined && v2 !== undefined;
  const L = m1.length;
  const M = m1[0].length;
  const N = m2[0].length;
  const result = [];

  for (let i = 0; i < L; i += 1) {
    const resultLine = [];

    for (let j = 0; j < N; j += 1) {
      let sum = null;

      for (let p = 0; p < M; p += 1) {
        const m1Item = m1[i] && m1[i][p];
        const m2Item = m2[p] && m2[p][j];

        if (argsDefined(m1Item, m2Item)) {
          sum += m1Item * m2Item;
        }
      }

      if (sum !== null) {
        resultLine.push(sum);
      }
    }

    if (resultLine.length > 0) {
      result.push(resultLine);
    }
  }

  return result;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  const getWinningCombinations = (side) => {
    const combinations = [];
    const directDiag = [];
    const reverseDiag = [];

    for (let y = 0; y < side; y += 1) {
      const lines = [];
      const columns = [];

      for (let x = 0; x < side; x += 1) {
        lines.push(side * y + x);
        columns.push(side * x + y);
      }

      directDiag.push(side * y + y);
      reverseDiag.push(side * (y + 1) - 1 - y);
      combinations.push(lines, columns);
    }

    combinations.push(directDiag, reverseDiag);
    return combinations;
  };

  const side = position.length;
  const combinations = getWinningCombinations(side);
  const map = position.reduce((acc, lineArr, lineIndex) => {
    lineArr.forEach((item, index) => {
      if (item) {
        const i = side * lineIndex + index;
        acc[item] = acc[item] ? acc[item].concat(i) : [i];
      }
    });
    return acc;
  }, {});

  const PosXArr = map.X || [];
  const Pos0Arr = map['0'] || [];

  for (let i = 0; i < combinations.length; i += 1) {
    const combination = combinations[i];

    if (combination.every((item) => PosXArr.includes(item))) {
      return 'X';
    }

    if (combination.every((item) => Pos0Arr.includes(item))) {
      return '0';
    }
  }

  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
