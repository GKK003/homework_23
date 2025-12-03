// 1----------------------------------------
let numbers = [5, 10, 15, 22, 14];

let result = numbers.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(result);
// 2----------------------------------------
let highestNumber = numbers.reduce((acc, cur) => {
  if (cur > acc) {
    return cur;
  } else {
    return acc;
  }
}, numbers[0]);
console.log(highestNumber);

// 4----------------------------------------

let words = ["giorgi", "vaxo", "irakli", "andria"];

let newWords = words.reduce((acc, cur) => {
  return acc + cur;
}, "");

console.log(newWords);

// 5----------------------------------------

let newNumbers = numbers.reduce((acc, cur) => {
  return acc * cur;
}, 1);

console.log(newNumbers);

// 7----------------------------------------

let newNumbers1 = numbers.reduce((acc, cur) => {
  return acc - cur;
});

console.log(newNumbers1);

// 8----------------------------------------

let newNumbers2 = numbers.map((el) => {
  return el * 2;
});

console.log(newNumbers2);

// 9----------------------------------------

let words1 = ["KVERCXI", "MARILI", "SHAKARI", "PURI"];

let newWords1 = words1.map((el) => {
  return el.toLowerCase();
});
console.log(newWords1);

// 11----------------------------------------
let element = document.querySelectorAll(".element");

let arr = Array.from(element);

arr.map(function (el) {
  el.textContent = "giorgi";
});

// 12----------------------------------------

let newNumbers3 = numbers.map((el) => {
  return el * el;
});

console.log(newNumbers3);

// 13----------------------------------------

// 14----------------------------------------

let students = [
  { name: "giorgi", score: 95 },
  { name: "luka", score: 90 },
  { name: "vaxo", score: 87 },
  { name: "dato", score: 80 },
];

let newStudents = students.forEach((el) => {
  console.log(el.score + 5);
});

// 16----------------------------------------

for (let index = numbers.length - 1; index >= 0; index--) {
  console.log(numbers[index]);
}

// 17----------------------------------------

// 18----------------------------------------
let nums = [2, 3, 4];
for (let index = 1; index < nums.length; index++) {
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    for (let k = 1; k <= 10; k++) {
      console.log(`${num} * ${index}`, num * k);
    }
  }
}

// 19----------------------------------------

let newNums = numbers.filter((el) => {
  return el > 10;
});
console.log(newNums);

// 20----------------------------------------
