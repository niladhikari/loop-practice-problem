// for (let i = 1; i <= 10; i++) {
//   if (i > 5) {
//     break;
//   }
//   console.log(i);
// }

// using break in array for string
// var items = ['laptop', 'pen', 'papers', 'mouse', 'keyborde'];
// for (var i = 0; i < items.length; i++) {
//     var element = items[i];
//     if (element=='mouse') {
//         break;
//     }
//     console.log(element);
// }

// using break in array for numbers
var numbers = [12, 23, 34, 45, 56,105,99,12,88];
for (let i = 0; i <= numbers.length; i++) {
    var element = numbers[i];
    if (element > 100) {
        break;
    }
    console.log(element);
}