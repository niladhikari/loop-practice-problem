//declare an array for all the topics that you have leaned last few days display tham as output
// var allTopic = ['html', 'css', 'tailwind', 'diasyUi', 'javascript'];
// for (let i = 0; i < allTopic.length; i++) {
//     var element = allTopic[i];
//     console.log(element);
// }

//declare an array for all the mobile phones display tham as output using while loop

// var phones = ['samsung', 'iphone', 'xiaomi', 'vivo', 'opp', 'huawei'];
// var i = 0;

// while (i < phones.length) {
//     var element = phones[i];
//     console.log(element); 
//     i++;
// }

//run the loop from 30 to 86. this loop will stop if the value get higher then 44.
// for (var i = 30; i <= 86; i++) {
//     if (i > 44) {
//         break
//     }
//     console.log(i); 
// }

//write the price of the books that you have.display the prices if the prices lower than 200
 var booksPrice = [120,220,150,70,210,340,60,40,300];
 for (var i = 0; i < booksPrice.length; i++) {
     var element = booksPrice[i];
     if (element > 200) {
         continue
     }
     console.log(element); 
 }