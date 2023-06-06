const buttonContainer = document.getElementById('buttonContainer');
const selectedNumbers = document.getElementById('selectedNumbers');

const firstSet = Array.from({length: 40}, (_, i) => i + 101).filter(num => ![113, 123, 125, 126, 128].includes(num));
const secondSet = Array.from({length: 43}, (_, i) => i + 201).filter(num => ![213, 228, 242].includes(num));

const allNumbers = [...firstSet, ...secondSet];

allNumbers.forEach((num, index) => {
    const button = document.createElement('button');
    button.innerText = num;
    button.id = `button${num}`;
    button.onclick = () => {
        button.disabled = true;
        const clickedNumber = document.createElement('p');
        clickedNumber.innerText = num;
        selectedNumbers.appendChild(clickedNumber);
    };

    if ((index + 1) % 10 === 0) {
        buttonContainer.appendChild(document.createElement('br'));
    }
    
    buttonContainer.appendChild(button);
});
