document.addEventListener("DOMContentLoaded", () => {
    const gameBoard = document.getElementById("game-board");

    function createGrid(size = 10) {
        for (let i = 0; i < size * size; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.index = i;
            gameBoard.appendChild(cell);
        }
    }

    createGrid();
});
