document.getElementById('Btn').addEventListener('click', function() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2) || num1 < 40 || num1 > 60 || num2 < 40 || num2 > 60) {
        resultDiv.innerHTML = "Invalid input. numbers must be between 40 and 60";
    } else {
        const largest = Math.max(num1, num2);
        resultDiv.innerHTML = `The largest number is: ${largest}`;
    }
});