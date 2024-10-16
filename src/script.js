document.addEventListener('DOMContentLoaded', function () {
    const container = document.createElement('div');
    container.classList.add('container');

    const calculator = document.createElement('div');
    calculator.classList.add('Calculator');

    const form = document.createElement('form');

    const displayDiv = document.createElement('div');
    displayDiv.classList.add('display');
    const displayInput = document.createElement('input');
    displayInput.type = 'text';
    displayInput.id = 'display';
    displayDiv.appendChild(displayInput);
    form.appendChild(displayDiv);

    const buttons = [
        'AC', 'DE', '.', '/',
        '9', '8', '7', '*',
        '6', '5', '4', '-',
        '3', '2', '1', '+',
        '00', '0', '='
    ];

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');

    buttons.forEach(buttonValue => {
        const button = document.createElement('input');
        button.type = 'button';
        button.value = buttonValue;

        if (buttonValue === '=') {
            button.classList.add('equal');
        }

        buttonsDiv.appendChild(button);
    });

    form.appendChild(buttonsDiv);
    calculator.appendChild(form);
    container.appendChild(calculator);
    document.body.appendChild(container);

    const handleDisplay = (value) => {
        const display = document.querySelector('#display');

        if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (value === 'AC') {
            display.value = '';
        } else if (value === 'DE') {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += value;
        }
    };

    const buttonElements = document.querySelectorAll('.buttons input[type="button"]');
    buttonElements.forEach(button => {
        button.addEventListener('click', () => {
            handleDisplay(button.value);
        });
    });
});