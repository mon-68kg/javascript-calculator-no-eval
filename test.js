function calculate(arr) {
    switch (arr[1]) {
        case '*':
            return arr[0] * arr[2];
            break;
        case '/':
            return arr[0] / arr[2];
            break;
        case '+':
            return arr[0] + arr[2];
            break;
        case '-':
            return arr[0] - arr[2];
            break;
    }
}

let userInput = [1, 1, '+', 2, 2, '+', 3, 3, '-', 1, 0, '+', 1, 0, 0, 0, '/', 2, 2,];
let nums = [];
let arr3 = [];

for (let i = 0; i < userInput.length; i++) {
    // last item from user
    if (i == userInput.length-1) {
        nums.push(userInput[i]);
        arr3.push(Number(nums.join('')));
        arr3[0] = calculate(arr3);
        arr3.splice(1, 2);
    } else {
        if (typeof userInput[i] == 'number') {
            nums.push(userInput[i]);
        } else {
            arr3.push(Number(nums.join('')));
            arr3.push(userInput[i]);
            if (arr3.length >= 3) {
                arr3[0] = calculate(arr3);
                arr3.splice(1, 2);
            }
            nums = [];
        }
    }
}


console.log(arr3);