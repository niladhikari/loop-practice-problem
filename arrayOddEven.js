var numbers = [2,4,8,5,23,24,9,16,19,30]

for (let i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number % 2 == 0) {
        console.log(number,'number is Even')
    }
    else{
        console.log(number,'number is Odd')
    }
}