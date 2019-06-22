//

// function largestOfFour(arr) {
//   // return arr.map(function(group) {
//   //   return group.reduce(function(prev, current) {
//   //     return current > prev ? current : prev;
//   //   });
//   // });

//   return arr.map(numgroup => {
//     return Math.max(...numgroup);
//   });
// }

// let a = largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1]
// ]);
// console.log(a);

// function palindrome(str) {
//   // Good luck!
//   let filtered = str
//     .trim()
//     .toLowerCase()
//     .match(/[a-z0-9]/gi);
//   let laststr = filtered.join("");

//   let reversed = filtered.reverse().join("");
//   // return reversed == laststr;
//   return `${laststr} and ${reversed}`;
// }

// console.log(palindrome("race CAR"));

// let romanNum = [
//   "M",
//   "CM",
//   "D",
//   "CD",
//   "C",
//   "XC",
//   "L",
//   "XL",
//   "X",
//   "IX",
//   "V",
//   "IV",
//   "I"
// ];
// // decimal number

// let dNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// function decimalRoman(value) {
//   if (value <= 0 || value >= 4000) {
//     return `this ${value} is not valid,please enter correct value`;
//   } else {
//     var romanNumeral = "";
//     for (var i = 0; i < romanNum.length; i++) {
//       while (value >= dNum[i]) {
//         value -= dNum[i];
//         romanNumeral += romanNum[i];
//       }
//     }
//     return romanNumeral;
//   }
// }

// console.log(decimalRoman(1000));

// function rot13(str) {
//   // LBH QVQ VG!
//   let letters = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z"
//   ];
//   let testreg = /[A-Z]/;
//   let arr = str.split(" ");
//   return arr
//     .map(word => {
//       return word
//         .split("")
//         .map(letter => {
//           return testreg.test(letter) == true
//             ? letters[letters.indexOf(letter) + 13]
//             : letter;
//         })
//         .join("")
//         .toUpperCase();
//     })
//     .join(" ");
// }

// // Change the inputs below to test
// console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));

// function telephoneCheck(str) {
//   // Good luck!
//   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
//   return regex.test(str);
// }

// console.log(telephoneCheck("555-555-5555"));

var denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  let output = { status: null, change: [] };
  var change;
  // Here is your change, ma'am.
  change = cash - price;
  let cidDenominations = cid.map(denomination => {
    return denomination;
  });
  // .reduce((accumulator, currentvalue) => {
  //   return accumulator + currentvalue;
  // })
  // .toFixed(2);
  console.log(`change is : ${change} and total cid value is: ${totalcidMoney}`);
  if (totalcidMoney < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  } else if (totalcidMoney == change) {
    output.status = "CLOSED";
    output["change"] = cid;
    return output;
  } else {
    var change_arr = denom.reduce(function(acc, curr) {
      let value = 0;
      while (cid[curr.name] > 0 && change >= curr.val) {
        change -= curr.val;
        cid[curr.name] -= curr.val;
        value += curr.val;

        // Round change to the nearest hundreth deals with precision errors
        change = Math.round(change * 100) / 100;
      }
      // Add this denomination to the output only if any was used.
      if (value > 0) {
        acc.push([curr.name, value]);
      }
      return acc; // Return the current change_arr
    }, []); // Initial value of empty array for reduce

    // If there are no elements in change_arr or we have leftover change, return
    // the string "Insufficient Funds"
    if (change_arr.length < 1 || change > 0) {
      output.status = "INSUFFICIENT_FUNDS";
      return output;
    }
    output.status = "OPEN";
    output["change"] = change_arr;
    return output;
  }
}

let a = checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);

console.log(a);
