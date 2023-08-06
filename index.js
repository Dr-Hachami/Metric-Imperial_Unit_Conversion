const button = document.getElementById('btn');
const lengthConversion = document.getElementById('lengthConversion');
const volumeConversion = document.getElementById('volumeConversion');
const massConversion = document.getElementById('massConversion');

const input = document.getElementById('input');

button.addEventListener('click', function () {
    const inputValue = Number(input.value);
    if (!isNaN(inputValue)) {
        lengthConversion.textContent = `${inputValue} Meters = ${(inputValue * 3.281).toFixed(2)} feet | ${inputValue} Feet = ${(inputValue / 3.281).toFixed(2)} meters`;
        volumeConversion.textContent = `${inputValue} Liters = ${(inputValue * 0.264).toFixed(2)} gallons | ${inputValue} Gallons = ${(inputValue / 0.264).toFixed(2)} liters`;
        massConversion.textContent = `${inputValue} Kilograms = ${(inputValue * 2.204).toFixed(2)} pounds | ${inputValue} Pounds = ${(inputValue / 2.204).toFixed(2)} kilograms`;
    } else {
        alert('Please enter a valid number for conversion.');
    }
});
