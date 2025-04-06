window.onload = function app() {
    const numbers = '1234567890';
    const lowercase = 'qwertyuioplkjhgfdsazxcvbnm';
    const uppercase = 'AQWERTYUIOPLKJHGFDSZXCVBNM';
    const symbols = '!@#$%^&*)(/?+_-[]{}';

    const lengthEl = document.getElementById('length-input');
    const lowercaseEl = document.getElementById('lowercase');
    const uppercaseEl = document.getElementById('uppercase');
    const symbolEl = document.getElementById('symbol');
    const numberEl = document.getElementById('number'); // ✅ ADD THIS
    const passwordEl = document.getElementById('password');
    const button = document.getElementById('btn');

    button.addEventListener('click', function () {
        let password = '';
        let character = '';
        let length = parseInt(lengthEl.value);

        if (lowercaseEl.checked) {
            character += lowercase;
        }
        if (uppercaseEl.checked) {
            character += uppercase;
        }
        if (symbolEl.checked) {
            character += symbols;
        }
        if (numberEl.checked) {  // ✅ FIX THIS CONDITION
            character += numbers;
        }

        if (character.length === 0) {
            alert("Please select at least one character type.");
            return;
        }

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * character.length);
            password += character[randomIndex];
        }

        passwordEl.value = password;
    });
}
