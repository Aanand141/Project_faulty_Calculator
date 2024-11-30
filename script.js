/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/
document.addEventListener("DOMContentLoaded", function() {
    let display = document.querySelector('input[name="display"]');
    let buttons = document.querySelectorAll('input[type="button"]');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            let value = button.value;

            if (value === 'AC') {
                display.value = ''; // Clear display
            } else if (value === 'DE') {
                display.value = display.value.slice(0, -1); // Delete last character
            } else if (value === '=') {
                try {
                    let random = Math.random();
                    console.log(random);

                    // Ensure the input is a valid expression
                    if (/\d+[+\-*/]\d+/.test(display.value)) {
                        let input = display.value.match(/(\d+)([+\-*/])(\d+)/);
                        let a = parseFloat(input[1]);
                        let c = input[2];
                        let b = parseFloat(input[3]);
                        
                        let obj = {
                            "+": "-",
                            "*": "+",
                            "-": "/",
                            "/": "**",
                        };

                        if (random > 0.1) {
                            // Perform correct calculation
                            let result = eval(`${a} ${c} ${b}`);
                            console.log(`The result is ${result}`);
                            display.value = result;
                        } else {
                            // Perform wrong calculation
                            c = obj[c];
                            let result = eval(`${a} ${c} ${b}`);
                            console.log(`The result is ${result}`);
                            display.value = result;
                        }
                    } else {
                        display.value = 'Error'; // Invalid input format
                    }
                } catch (e) {
                    display.value = 'Error'; // Handle error
                }
            } else {
                display.value += value; // Append button value to display
            }
        });
    });
});
