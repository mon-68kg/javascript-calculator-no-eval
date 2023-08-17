let arrInput = [];

function calculator(par) {
    let displayScreen = document.querySelector('.display-screen');
    let joinedStr = "";
    
    //equals
    if (par == '=') {
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
        
        let nums = [];
        let arrayOf3 = [];
        
        for (let i = 0; i < arrInput.length; i++) {
            // last item from user
            if (i == arrInput.length-1) {
                nums.push(arrInput[i]);
                arrayOf3.push(Number(nums.join('')));
                arrayOf3[0] = calculate(arrayOf3);
                arrayOf3.splice(1, 2);
                displayScreen.textContent = arrayOf3[0];
                arrInput = [];
                return;
            } else {
                if (typeof arrInput[i] == 'number') {
                    nums.push(arrInput[i]);
                } else {
                    arrayOf3.push(Number(nums.join('')));
                    arrayOf3.push(arrInput[i]);
                    if (arrayOf3.length >= 3) {
                        arrayOf3[0] = calculate(arrayOf3);
                        arrayOf3.splice(1, 2);
                    }
                    nums = [];
                }
            }
        }
    }

    // delete items
    if (par == 'd') {
        arrInput.pop();
        joinedStr = arrInput.join('')
        displayScreen.textContent = joinedStr;
        return;
    }

    // store user inputs
    arrInput.push(par);

    // ignore non number for the first input
    if (typeof arrInput[0] != 'number') {
        arrInput = [];
        return;
    } else {
        // avoid 2 operations next to each other
        if (typeof arrInput[arrInput.length-2] != 'number' && typeof par != 'number') {
            arrInput.pop();
            return;
        }

        joinedStr = arrInput.join('')
        displayScreen.textContent = joinedStr;
    }
}