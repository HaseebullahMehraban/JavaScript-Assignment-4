// 1- Changing background color when it is clicked......
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', function() {
    colorButton.style.backgroundColor = 'red';
});

// 2- Note: note much sure about......
const toggleButton = document.getElementById('toggleButton');
const toggleParagraph = document.getElementById('toggleParagraph');
toggleButton.addEventListener('click', function() {
    toggleParagraph.classList.toggle('hidden');
});

// 3- Note: Creating list dynamically........
const listButton = document.getElementById('listButton');
const listContainer = document.getElementById('listContainer');
listButton.addEventListener('click', function() {
    const list = document.createElement('ul');
    const items = ['Item 1', 'Item 2', 'Item 3'];
    items.forEach(function(item) {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    });
    listContainer.appendChild(list);
});

// 4- Creating form dynamically working when it is cliked ......
const formButton = document.getElementById('formButton');
const dynamicForm = document.getElementById('dynamicForm');
const inputContainer = document.getElementById('inputContainer');
let inputCount = 1;
formButton.addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'text';
    input.name = `input${inputCount}`;
    input.placeholder = `Input ${inputCount}`;
    inputContainer.appendChild(input);
    inputCount++;
});

// 5-Note: Only based on the script, calculation machine (addition, subtraction, multiplication, and division)
const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

addButton.addEventListener('click', function() {
    const sum = Number(num1.value) + Number(num2.value);
    result.textContent = `Result: ${sum}`;
});

subtractButton.addEventListener('click', function() {
    const difference = Number(num1.value) - Number(num2.value);
    result.textContent = `Result: ${difference}`;
});

multiplyButton.addEventListener('click', function() {
    const product = Number(num1.value) * Number(num2.value);
    result.textContent = `Result: ${product}`;
});

divideButton.addEventListener('click', function() {
    const quotient = Number(num1.value) / Number(num2.value);
    result.textContent = `Result: ${quotient}`;
});