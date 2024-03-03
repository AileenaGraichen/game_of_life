// controller.js
"use strict";

let gameRunning = false;
let gameInterval;

function startGame() {
    if (!gameRunning) {
        gameRunning = true;
        gameInterval = setInterval(() => {
            grid = getNextGeneration(grid);
            drawGrid(grid);
            generationCount++;
            updateGenerationCounter();
        }, 100); // Adjust timing for game speed
    }
}

function stopGame() {
    if (gameRunning) {
        clearInterval(gameInterval);
        gameRunning = false;
    }
}

function clearGrid() {
    grid = createGrid(gridHeight, gridWidth);
    drawGrid(grid);
    generationCount = 0;
    updateGenerationCounter();
}

document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('stopBtn').addEventListener('click', stopGame);
document.getElementById('clearBtn').addEventListener('click', clearGrid);
document.getElementById('randomBtn').addEventListener('click', () => {
    randomizeGrid(grid);
    drawGrid(grid);
});



