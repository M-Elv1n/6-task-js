// 1 Arrayda text icindeki sozlerin ilk herfini boyuk cixartsin

// let a = prompt("enter text").split(" ");
// function capitalizeWords() {
//   for (var i = 0; i < a.length; i++) {
//     a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
//   }
//   console.log(a.join(" "));
// }
// capitalizeWords();










// 2 Arrayda stringlerin ilk stiringi boyuke cevir
// let arr = prompt("enter text").split("");
// arr[0] = arr[0].at(0).toUpperCase() + arr[0].substring(1);
// console.log(arr.join(''))








// 3 Arrayda stringlerin son herfini boyuke cevirin
// let a = prompt("enter text").split("");
// let lastBig = a[a.length-1].toUpperCase()
// let lastDel = a.pop()
// let result =  a.join("") + lastBig
// console.log(result)







// 4 Arrayde ededleri tersine cevirmek

let a = prompt("enter text").split('');

console.log(a.reverse().join(''));






// 5 Arrayda her iki ededden bir iki eded arasinda reqemlerin cemi
// let arr = [1, 2, 3, 4, 5, 6, 7]
// let count = 0
// for (let i = 0; i < arr.length; i = i + 2) {
//   count += arr[i]
// }
// console.log(count)






// 6 Qarışıq array verilib, yalnızca ədədləri çap etdirin.
// let arr = [1, 2, 3, 4, 5, 6, 7, 'as', "asd"]
// let n = []
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "number" ) {
//     n.push(arr[i])
//   }
// }
// console.log(n)







// 7 Qarışıq array verilib, yalnızca stringləri çap etdirin.

// let arr = [1, 2, 3, 4, 5, 6, 7, 'as', "asd"]
// let n = []
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "string" ) {
//     n.push(arr[i])
//   }
// }
// console.log(n)







// 8 Arrayda metodlar (en azi 3 method ile edilsin) ile ededleri 5 vahid artirmaq
// let arr = [1, 2, 3, 4, 5, 6, 7]
// let n = []
// for (let i = 0; i < arr.length; i++) {
//   arr[i] += 5
//   n.push(arr[i])
// }
// console.log(n)





// 9 Input ile daxil olunan stringler icerisindeki saitlerin sayini tapin
// str = prompt("enter text").toLowerCase()
// function vowel(str) {
//   var vowel_list = 'aeiou';
//   var count = 0;
  
//   for(var x = 0; x < str.length ; x++) {
//     if (vowel_list.indexOf(str[x]) !== -1) {
//       count += 1;
//     }
  
//   }
//   return count;
// }
// console.log(vowel(str))




// 10 Arrayde 6 olanlari “-” ile evez edin
// let arr = [1, 2, 3, 4, 5, 6, 7]
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 6) {
//     arr[i] = "-"
//   }
// }
// console.log(arr)




// 11 Array icerisindeki ən böyük ən kiçik ədədin tapılması

// let arr = [1, 2, 3, 4, 5, 6, 7]

// let max = arr[0]
// let min = arr[0]

// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i]
//   }
//   if (min > arr[i]) {
//     min = arr[i]
//   }
// }

// console.log(min)
// console.log(max)