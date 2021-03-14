module.exports = function toReadable (number) {
  let num = number;
  let numStr = num.toString();;
  let ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
              "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
              "eighteen", "nineteen"];
  let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",
              "hundred"];

  function convertTens (num) {
    let numStr = num.toString().slice(-2);
    num = +numStr;
    if (num < 20) {
      return ones[num];
    }

    if (num >= 20) {
      return tens[numStr[0]] + (ones[numStr[1]] == "" ? "" : " " + ones[numStr[1]]);
    }

  }
  
  if (num < 0) {
    num = num * (-1);
  }
  if (num == 0) {
    return "zero";
  }
  if (num < 100) {
    return convertTens(num);
  }
  if (numStr.length == 3) {
      return ones[numStr[0]] + " hundred" + (convertTens(num) == "" ? "" : " " + convertTens(num));
  }
}

// console.log(module.exports(998));
