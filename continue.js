var numbers = [12,56,50,66,46,88,23,86,33];
for (let i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    if (element > 50) {
        continue;           // continue condition skip the greater than 50 value
    }
    console.log(element);
}