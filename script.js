document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');
    const randomizeButton = document.getElementById('randomize');

    for (let i = 0; i < 2500; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gridContainer.appendChild(cell);
    }

    startButton.addEventListener('click', () => {
        // Implement start functionality
    });

    stopButton.addEventListener('click', () => {
        // Implement stop functionality
    });

    resetButton.addEventListener('click', () => {
        // Implement reset functionality
    });

    randomizeButton.addEventListener('click', () => {
        // Implement randomize functionality
    });
});
