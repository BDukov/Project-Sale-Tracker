// console.log('Start');

// setTimeout(function() {
//     console.log('Timeout callback');
// }, 0);

// Promise.resolve().then(function() {
//     console.log('Promise resolved');
// });

// console.log('End');

// function findLargestNumber(arr) {

//     arr.sort( (a, b) => b - a);
//     const max = arr[0];
//     return max;
// }

//   const numbers = [4, 10, 2, 8, 5];
//   console.log(findLargestNumber(numbers)); // трябва да изведе 10

// function reverseWords(str) {
//    const words = str.split(' ');
//    const reversedWords = words.reverse();
//     const reversedString = reversedWords.join(' ');
//     return reversedString;

//   }

//   const inputString = "Hello World";
//   console.log(reverseWords(inputString)); // трябва да изведе "World Hello"

// function isPalindrome(str) {
//     let strToArr = str.split('');
//     let reversed = strToArr.reverse();
//     let reversedStr = reversed.join('');
//     if (str === reversedStr) {
//         return true;
//     } else {
//         return false;
//     }
//   }

//   console.log(isPalindrome("level")); // трябва да върне true
//   console.log(isPalindrome("hello")); // трябва да върне false

// function isPalindrome(str) {
//     let strToArr = str.split('');
//     let reversed = strToArr.reverse();
//     let reversedStr = reversed.join('');
//     if (str === reversedStr) {
//         return true;
//     } else {
//         return false;
//     }
//   }

//   console.log(isPalindrome("level")); // трябва да върне true
//   console.log(isPalindrome("hello")); // трябва да върне false

// function isPalindrome(str) {
//     const length = str.length;
//     for(let i = 0; i < length / 2; i++) {
//         if( str[i] !== str[length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
//   }

//   console.log(isPalindrome("level")); // трябва да върне true
//   console.log(isPalindrome("hello")); // трябва да върне false

// function generateUniqueId(length) {
//     const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let uniqueId = '';

//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * characters.length);
//       uniqueId += characters.charAt(randomIndex);
//     }

//     return uniqueId;
//   }

//   console.log(generateUniqueId(8)); // примерен резултат: "aB3xG7tE"
//   console.log(generateUniqueId(12)); // примерен резултат: "Dk9rYq5oP2vL"

// function delay(milliseconds) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, milliseconds)
//     })
//   }

//   // Пример за използване:
//   delay(2000)
//     .then(() => console.log("Промисът се резолвна след 2000 милисекунди"))
//     .catch((error) => console.error(error));

// function fetchData(apiUrl) {
//     return new Promise((resolve, reject) => {
//         fetch(apiUrl)
//             .then(response => {
//                 if(!response.ok) {
//                     throw new Error(`http error!`);
//                 }
//                 return response.json();
//             })
//             .then(data => resolve(data))
//             .catch(error => reject(error));
//     })
//   }

//   // Пример за използване:
//   fetchData('https://jsonplaceholder.typicode.com/todos/1')
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));

// function delayWithAsync(milliseconds) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve();
//         }, milliseconds)
//     })
//   }

//   // Пример за използване:
//   async function example() {
//     console.log("Начало на функцията");
//     await delayWithAsync(2000);
//     console.log("Продължение след изчакване");
//   }

//   example();

// function combinePromises() {
//     fetch()
// }

//   // Пример за използване:
//   combinePromises()
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));

// async function promiseFunc (){
//     var p1 = new Promise(resolve => setTimeout(_ => resolve([1, 2]), 500))
//     var p2 = new Promise(resolve => setTimeout(_ => resolve([3, 4]), 1000))
//     var p3 = new Promise(resolve => setTimeout(_ => resolve([5, 6]), 1500))

//         let output = [];
//         first = await p1;
//         second = await p2;
//         third = await p3;

//         output.push(...first)
//         output.push(...second)
//         output.push(...third)

//         console.log(...output)
//     }

//     promiseFunc();

// function Task1() {
//     setTimeout(_ => {
//               console.log('Task 1')
//     }, 800)
// }

// function Task2() {
//     setTimeout(_ => {
//               console.log('Task 2')
//     }, 400)
// }

// function Task3() {
//     setTimeout(_ => {
//               console.log('Task 3')
//     }, 600)
// }

//    async function solve () {
//     let first = await Task1();
//     let second = await Task2();
//     let third = await Task3();

//     console.log(first)

//    }

//    solve();

// function Task1() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log('Task 1');
//         resolve();
//       }, 800);
//     });
//   }

//   function Task2() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log('Task 2');
//         resolve();
//       }, 400);
//     });
//   }

//   function Task3() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log('Task 3');
//         resolve();
//       }, 600);
//     });
//   }

//   async function solve() {
//     // изчакай Task1 да завърши преди да продължиш
//     await Task1();
//     // изчакай Task2 да завърши преди да продължиш
//     await Task2();
//     // изчакай Task3 да завърши преди да продължиш
//     await Task3();
//   }

//   // извикване на функцията
//   solve();

// function sortArray(arr) {
//     let sorted = arr.sort((a, b) => a - b);
//     return console.log(sorted);
// }

// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// sortArray(arr);

// Input: [1, 2, 3, 4, 1, 2, 5, 6, 7, 8, 9, 3]
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function removeDuplicates(array) {
//   let newArr = [];

//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (!newArr.includes(element)) {
//         newArr.push(element);
//     }
//   }
//   return newArr;
// }

// // Tests
// const inputArray = [1, 2, 3, 4, 1, 2, 5, 6, 7, 8, 9, 3];
// const uniqueArray = removeDuplicates(inputArray);
// console.log(uniqueArray); // Should print [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function prefectNumber(number) {
//   sumOfDevides = 0;
//   for (let index = 1; index <= number; index++) {
//     const element = number / index;
//     if (Number.isInteger(element)) {
//       sumOfDevides += index;
//       if (sumOfDevides === number) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(prefectNumber(28));

// function perfectNumber(number) {
//     let sumOfDivisors = 0;

//     for (let index = 1; index <= number / 2; index++) {
//       if (number % index === 0) {
//         sumOfDivisors += index;
//       }
//     }

//     return sumOfDivisors === number;
//   }

//   console.log(perfectNumber(28)); // Трябва да изведе true

// function doubleRemover(str) {
//   const strToArr = str.split("");
//   let newStr = [];

//   strToArr.forEach((x) => {
//     if (!newStr.includes(x)) {
//       newStr.push(x);
//     }
//   });
//   return newStr.join("");
// }

// const result = doubleRemover("abracadabra");
// console.log(result);


function isAnagram(str1, str2) {
    const str1Arr = str1.split('').sort().join('');
    const str2Arr = str2.split('').sort().join('');
    return 
    str1Arr === str2Arr
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram('hello', 'world'));