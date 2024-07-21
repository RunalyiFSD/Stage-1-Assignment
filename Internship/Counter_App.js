document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const resetBtn = document.getElementById('reset');

    let count = 0;

    const updateDisplay = () => {
        display.textContent = count;
    };

    incrementBtn.addEventListener('click', () => {
        count++;
        updateDisplay();
    });

    decrementBtn.addEventListener('click', () => {
        count--;
        updateDisplay();
    });

    resetBtn.addEventListener('click', () => {
        count = 0;
        updateDisplay();
    });
});
