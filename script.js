//3. . Գտնել տրված իրական թվերի հաջորդականության փոքրագույն անդամը և տեղերով փոխել վերջին տարրի հետ:

// function res(arr) {
//   console.log(arr);
//   let min = arr[0];
//   let index = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//       index = i;
//     }
//   }
//   let b = arr[arr.length - 1];
//   arr[arr.length - 1] = min;
//   arr[index] = b;
//   console.log(arr);
// }
// res([10, 9, 6, 2, 3, 5]);

//4. Տրված է ամբողջ թվերի հաջորդականություն: Արտածել այդ հաջորդականության

//ա) առաջին միանիշ տարրը,

// function sum(arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= 9) {
//       arr2.push(arr[i]);

//       break;
//     }
//   }
//   console.log(arr2);
// }
// sum([10, 24, 2, 33, 5, 67, 4]);

//բ) 5-ին պատիկ վերջին տարրը

// function sum(arr) {
//   let arr2 = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 5 === 0) {
//       arr2.push(arr[i]);
//       break;
//     }
//   }
//   console.log(arr2);
// }
// sum([25, 15, 44, 30, 87]);

//գ) վերջին երկնիշ տարրը և դրան հաջորդող կենտ տարրերի քանակը,

// function sum(arr) {
//   let arr2 = [];
//   let index = 0;
//   let count = 0;

//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] > 9 && arr[i] < 100) {
//       arr2.push(arr[i]);
//       index = i;
//       break;
//     }
//   }

//   for (let i = index + 1; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       count++;
//     }
//   }
//   arr2.push(count);
//   console.log(arr2);
// }
// sum([2, 10, 3, 22, 5, 11, 3, 8, 9, 5]);

//դ) առաջին զույգ տարրը և դրան նախորդող տարրերի գումարը,

// function sum(arr) {
//   let arr2 = [];
//   let index = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       arr2.push(arr[i]);
//       index = i;
//       break;
//     }
//   }
//   let count = 0;
//   for (let i = 0; i < index; i++) {
//     count = count + arr[i];
//   }
//   arr2.push(count);
//   console.log(arr2);
// }
// sum([7, 9, 3, 8, 4, 23]);

//ե) 7-ից մեծ վերջին տարրը և դրան նախորդող զույգ տարրերի արտադրյալը

// function sum(arr) {
//   let res = [];
//   let index = 0;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] > 7) {
//       res.push(arr[i]);
//       index = i;
//       break;
//     }
//   }
//   let count = 1;
//   for (let i = 0; i < index; i++) {
//     if (arr[i] % 2 === 0) {
//       count = count * arr[i];
//     }
//   }
//   res.push(count);
//   console.log(res);
// }
// sum([4, 9, 2, 5, 10, 6]);

//զ) մինչև առաջին բացասական տարրը եղած այն տարրերի քանակը, որոնք պատկանում են [0,20] միջակայքին,

// function sum(arr) {
//   let arr2 = [];
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 20 && arr[i] > 0) {
//       count++;
//     } else {
//       break;
//     }
//   }

//   arr2.push(count);
//   console.log(arr2);
// }
// sum([2, 5, 9, 8, -5, -8, 9]);

//է) [5,24] միջակայքում գտնվող առաջին տարրը և դրան հաջորդող տարրերի միջին թվաբանականը,

// function sum(arr) {
//   let arr2 = [];
//   let index = 0;
//   let res = 0;
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 5 && arr[i] <= 24) {
//       arr2.push(arr[i]);
//       index = i;
//       break;
//     }
//   }
//   for (let i = index + 1; i < arr.length; i++) {
//     res = res + arr[i];
//     count++;
//   }
//   arr2.push(res / count);
//   console.log(arr2);
// }
// sum([2, 4, 6, 5, 4, 25, 22]);
