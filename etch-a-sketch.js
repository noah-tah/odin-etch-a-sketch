document.addEventListener("DOMContentLoaded", () => {
	createHeader();
	createEtchASketch();

});

function getChoice() {
	const userInput = 16;
	/*prompt("Please input the amount of cells you'd like on one side of the grid"); */
	const gridSideLength = parseInt(userInput);
	return gridSideLength;
}

function createHeader() {
	const headerContainer = initializeHeaderContainer();
	const button = initializeHeaderButton();
	const header = initializeHeader(headerContainer, button);
	document.body.appendChild(header);
}

function createEtchASketch() {
	const container = initializeEtchASketchContainer();
	initializeGrid(container);
}
function initializeEtchASketchContainer() {
	const container = document.createElement("div");
	container.setAttribute("id", "etch-a-sketch-container");
	document.body.appendChild(container);
	return container;
}
function initializeGrid(container) {
	const containerWidth = getContainerWidth(container);
	const sideLength = getChoice();
	const totalCells = calculateTotalCells(sideLength);
	const cellSize = calculateCellSize(sideLength, containerWidth);
	createGrid(totalCells, cellSize, container);
}

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
function initializeHeaderContainer() {
	const div = document.createElement("div");
	div.classList.add("header");
	return div;
}

function initializeHeaderButton() {
	const button = document.createElement("button");
	button.classList.add("change-size-button");
	button.textContent = "Resize Grid";
	return button;
}

function initializeHeader(header, button) {
	header.appendChild(button);
	return header;
}
