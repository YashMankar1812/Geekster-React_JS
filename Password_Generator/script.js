
const lengthInput = document.getElementById('length');
const checkboxes = document.querySelectorAll('input[type=checkbox]');
const passwordOutput = document.getElementById('password-output');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');

// Character sets
const charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+[]{}|;:,.<>?',
};

// Random function 
function generatePassword() {
    const length = parseInt(lengthInput.value);
    let availableChars = '';

    // Combine selected character sets
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) availableChars += charSets[checkbox.id];
    });

    // Generate the password
    const password = Array.from({ length }, () =>
        availableChars.charAt(Math.floor(Math.random() * availableChars.length))
    ).join('');

    passwordOutput.textContent = password;
}

// Function to copy password to clipboard
function copyToClipboard() {
    navigator.clipboard.writeText(passwordOutput.textContent)
        .then(() => alert('Password copied to clipboard!'))
        .catch(() => alert('Failed to copy!'));
}

// Event Listeners
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyToClipboard);