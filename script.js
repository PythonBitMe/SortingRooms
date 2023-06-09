const buttonContainer = document.getElementById('buttonContainer');
const sortButton = document.getElementById('sortButton');
const topNumbers = document.getElementById('topNumbers');
const mediumNumbers = document.getElementById('mediumNumbers');
const regularNumbers = document.getElementById('regularNumbers');

const firstSet = Array.from({length: 40}, (_, i) => i + 101).filter(num => ![113, 123, 125, 126, 128].includes(num));
const secondSet = Array.from({length: 43}, (_, i) => i + 201).filter(num => ![213, 228, 242].includes(num));
const allNumbers = [...firstSet, ...secondSet];

const topParent = new Set([101, 102, 103, 104, 105, 106, 107, 108, 110, 112, 124, 127, 130, 135, 136, 137, 138, 139, 140, 201, 202, 203, 204, 205, 206, 207, 208, 210, 212, 223, 224, 225, 226, 227, 229, 230, 231, 236, 237, 238, 239, 240, 241, 243]);
const mediumParent = new Set([120, 121, 122, 133, 134, 218, 220, 221, 222, 232]);
const regularParent = new Set([109, 111, 114, 115, 116, 117, 118, 119, 129, 131, 132, 209, 211, 214, 215, 216, 217, 219, 233, 234, 235]);

let selectedNumbers = [];

allNumbers.forEach((num, index) => {
    const button = document.createElement('button');
    button.innerText = num;
    button.id = `button${num}`;
    button.onclick = () => {
        selectedNumbers.push(num);
        button.disabled = true;
    };

    if ([20, 40, 60].includes(index)) { // Changes here
        buttonContainer.appendChild(document.createElement('br'));
    }
    
    buttonContainer.appendChild(button);
});

sortButton.onclick = () => {
    window.requestAnimationFrame(() => {
        // Clear the previous sorted numbers
        topNumbers.innerHTML = '';
        mediumNumbers.innerHTML = '';
        regularNumbers.innerHTML = '';
        
        let topNumbersArray = [];
        let mediumNumbersArray = [];
        let regularNumbersArray = [];
        
        selectedNumbers.sort((a, b) => a - b).forEach(num => {
            if (topParent.has(num)) {
                topNumbersArray.push(num);
            } else if (mediumParent.has(num)) {
                mediumNumbersArray.push(num);
            } else if (regularParent.has(num)) {
                regularNumbersArray.push(num);
            }
        });

        topNumbers.innerText = topNumbersArray.join(",  ");
        mediumNumbers.innerText = mediumNumbersArray.join(",  ");
        regularNumbers.innerText = regularNumbersArray.join(",  ");
        
        // Reset the selected numbers and enable buttons
        selectedNumbers = [];
        allNumbers.forEach(num => {
            document.getElementById(`button${num}`).disabled = false;
        });
    });
};
