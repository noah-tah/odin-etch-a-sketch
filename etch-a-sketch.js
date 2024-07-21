document.addEventListener("DOMContentLoaded", () => {
	createHeader();
	const container = initializeEtchASketchContainer();
	const sideLength = getChoice();
	const gridSize = initializeGrid(container, sideLength);
	createGrid(gridSize, container);
});

function initializeHeaderButton() {
	const button = document.createElement("button");
	button.classList.add("change-size-button");
	button.textContent = "Resize and Reset Grid";
	button.addEventListener("click", () => {
		clearGrid();
		const container = initializeEtchASketchContainer();
		const sideLength = getChoice();
		const gridSize = initializeGrid(container, sideLength);
		createGrid(gridSize, container);
	});
	return button;
}

function getChoice() {
	let userInput = prompt("Please input the amount of cells you'd like on one side of the grid (MAX: 99)");
	let gridSideLength = parseInt(userInput);
	if (gridSideLength < 100 && gridSideLength > 0) {
		return gridSideLength;
	} else {
		userInput = prompt("Invalid input! Please enter a number: 0 < 0 < 100!");
		gridSideLength = parseInt(userInput);
		return gridSideLength;
	}
}



function createHeader() {
	const headerContainer = initializeHeaderContainer();
	const button = initializeHeaderButton();
	const header = initializeHeader(headerContainer, button);
	document.body.appendChild(header);
}

function initializeEtchASketchContainer() {
	const container = document.createElement("div");
	container.setAttribute("id", "etch-a-sketch-container");
	document.body.appendChild(container);
	return container;
}
function initializeGrid(container, sideLength) {
	const containerWidth = getContainerWidth(container);
	const totalCells = calculateTotalCells(sideLength);
	const cellSize = calculateCellSize(sideLength, containerWidth);
	return [cellSize, totalCells];
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

function initializeHeader(header, button) {
	header.appendChild(button);
	return header;
}

function clearGrid() {
	let cells = document.querySelectorAll(".cells");
	let container = document.querySelector("#etch-a-sketch-container");
	for (i = 0; i < cells.length; i++) {
		let cell = cells[i];
		cell.remove();
	}
	container.remove();
}

function getRandomColor() {
	let randomColor = Math.floor(Math.random() * 16777215).toString(16);
	return randomColor;
}

function getNewOpacity(step) {
	let opacityValue = step / 10;
	return opacityValue;

}

function createGrid(gridSize, container) {
	[cellSize, totalCells] = gridSize;
	for (i = 0; i < totalCells; i++) {
		const cell = document.createElement('div');
		cell.classList.add("cells");
		cell.style.width = cellSize.toString() + "px";
		cell.style.height = cellSize.toString() + "px";
		let stepCounter = 10;
		cell.addEventListener("mouseover", () => {
			let randomColor = getRandomColor();
			cell.style.backgroundColor = "#" + randomColor;
			let newOpacity = getNewOpacity(stepCounter);
			stepCounter--;
			cell.style.opacity = newOpacity;
		});
		container.appendChild(cell);
	}
}
