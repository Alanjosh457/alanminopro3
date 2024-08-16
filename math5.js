const display = document.getElementById("display");

function appendtoDisplay(input) {
    if (['+','-','x','/'].includes(input)) {
        display.value += `${input}`;
    } else {
        display.value += input;
    }
}

function clrdisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
       
        let result = eval(display.value.replace('x', '*'));

     
        if (result % 1 !== 0) {
            result = result.toFixed(3);
        }

        display.value = result;
    } catch (error) {
        display.value = "ERROR";
    }
}