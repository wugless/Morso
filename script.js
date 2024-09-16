const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
    'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    ' ': '/' // Representing spaces between words with "/"
};

const reverseMorseCode = Object.fromEntries(
    Object.entries(morseCode).map(([key, value]) => [value, key])
);

// Function to encode text to Morse code
function encodeToMorse(text) {
    return text.toUpperCase().split('').map(letter => morseCode[letter] || letter).join(' ');
}

// Function to decode Morse code to text
function decodeFromMorse(morse) {
    return morse.split(' ').map(code => reverseMorseCode[code] || code).join('');
}

// Event listeners for encode and decode buttons
document.getElementById('encodeButton').addEventListener('click', () => {
    const text = document.getElementById('inputText').value;
    document.getElementById('encodedMorse').textContent = encodeToMorse(text);
});

document.getElementById('decodeButton').addEventListener('click', () => {
    const morse = document.getElementById('inputMorse').value;
    document.getElementById('decodedText').textContent = decodeFromMorse(morse);
});
