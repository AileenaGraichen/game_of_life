// model.js
const gridHeight = 100; // Adjustable grid size
const gridWidth = 100;
let grid = createGrid(gridHeight, gridWidth);
let generationCount = 0;

function createGrid(height, width) {
    return new Array(height).fill(null).map(() => new Array(width).fill(0));
}

function randomizeGrid(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            grid[i][j] = Math.random() > 0.5 ? 1 : 0;
        }
    }
}

function getNextGeneration(grid) {
    let nextGrid = createGrid(gridHeight, gridWidth);

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const aliveNeighbors = countAliveNeighbors(grid, i, j);
            const cell = grid[i][j];

            if (cell === 1 && (aliveNeighbors < 2 || aliveNeighbors > 3)) {
                nextGrid[i][j] = 0;
            } else if (cell === 0 && aliveNeighbors === 3) {
                nextGrid[i][j] = 1;
            } else {
                nextGrid[i][j] = cell;
            }
        }
    }

    return nextGrid;
}

function countAliveNeighbors(grid, x, y) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;
            const newX = x + i;
            const newY = y + j;

            if (newX >= 0 && newX < gridHeight && newY >= 0 && newY < gridWidth) {
                count += grid[newX][newY];
            }
        }
    }
    return count;
}


