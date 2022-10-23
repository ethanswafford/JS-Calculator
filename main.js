console.log('CONNECTION SUCCESSFUL');
let resultDiv = document.getElementById('result');
let equationDiv = document.getElementById('equation');

let input = "";
let result = "";

let getInput = (data) => {
    input += data.value;
    resultDiv.innerHTML = input;
}

let removeLastNumber = () => {
    input = input.slice(0, -1);
    resultDiv.innerHTML = input;
    equationDiv.innerHTML = "";
}

let reset = () => {
    input = "";
    resultDiv.innerHTML = input;
    equationDiv.innerHTML = "";
}

let evaluate = () => {
    if (input.length <= 0) {
        equationDiv.innerHTML = "";
    } else {
        input = input.replaceAll("×", "*");
        input = input.replaceAll("÷", "/");
        equationDiv.innerHTML = input + "=";
        resultDiv.innerHTML = eval(input);
    }
}