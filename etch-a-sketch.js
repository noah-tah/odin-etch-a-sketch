const container = document.querySelector("#etch-a-sketch-container");
const containerWidth = getContainerWidth(container);
const sideLength = getChoice();
const totalCells = calculateTotalCells(sideLength);
const cellSize = calculateCellSize(sideLength, containerWidth);

createGrid(totalCells, cellSize, container);

function createGrid(totalCells, cellSize, container) {
	for (i = 0; i < totalCells; i++) {
		const cell = document.createElement('div');
		cell.classList.add("cells");
		cell.style.width = cellSize.toString() + "px";
		cell.style.height = cellSize.toString() + "px";
		cell.addEventListener("mouseover", () => {
			cell.classList.add("change-color");
		});
		container.appendChild(cell);
	}

}

function getChoice() {
	const userInput = 16;
	/*prompt("Please input the amount of cells you'd like on one side of the grid"); */
	const gridSideLength = parseInt(userInput);
	return gridSideLength;
}

function calculateTotalCells(sideLength) {
	let sideWidth = sideLength;
	const totalCells = sideLength * sideWidth;
	return totalCells;
}

function getContainerWidth(container) {
	return container.offsetWidth;
}

function calculateCellSize(cells, containerWidth) {
	return containerWidth / cells;
}

