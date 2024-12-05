const userInfo = document.getElementById('user-info');
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const generateButton = document.getElementById('generate-button');
const result = document.getElementById('result');

const Slots = ['pear', 'strawberry', 'lime', 'cherry', 'grape'];

let attempts = 0;
let maxAttempts = 3;

let userName = prompt("Введіть своє ім\'я:");
slot1.src = "Resources/bg.png";
slot2.src = "Resources/bg.png";  
slot3.src = "Resources/bg.png";
userInfo.textContent = "Гравець: " + userName;

function getRandomSymbol() {
    return Slots[Math.floor(Math.random() * Slots.length)];
}

function restartGame(){
    attempts = 0;
    result.textContent = "";
    generateButton.disabled = false;
}

function spinSlots() {
    ++attempts;

    const randomSymbols = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];

    slot1.src = "Resources/" + randomSymbols[0]+".png";
    slot2.src = "Resources/" + randomSymbols[1]+".png";  
    slot3.src = "Resources/" + randomSymbols[2]+".png";

    if (randomSymbols[0] === randomSymbols[1] && randomSymbols[1] === randomSymbols[2]) {    
        generateButton.disabled = true;
        result.textContent = "Перемогає " + userName + "!";
        setTimeout(restartGame, 2000);
    } else if (attempts >= maxAttempts) {
        generateButton.disabled = true;
        result.textContent = "Перемогає комп'ютер!";
        setTimeout(restartGame, 2000);
    } else {
        result.textContent = "Спроба " + attempts + " з " + maxAttempts;
    }
}

generateButton.addEventListener('click', spinSlots);
