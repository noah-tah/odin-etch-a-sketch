document.addEventListener("DOMContentLoaded", () => {
	createHeader();
	const container = initializeEtchASketchContainer();
	const sideLength = getChoice();
	const gridSize = initializeGrid(container, sideLength);
	createGrid(gridSize, container);
});

// TODO: fix this damn button
function initializeHeaderButton() {
	const button = document.createElement("button");
	button.classList.add("change-size-button");
	button.textContent = "Resize Grid";
	button.addEventListener("click", () => {
		clearGrid();
		const container = initializeEtchASketchContainer(); // TODO: replace with new functions created in DOMCONTENTLOADED
		const sideLength = getChoice();
		const gridSize = initializeGrid(container, sideLength);
		createGrid(gridSize, container);
	});
	return button;
}
function getChoice() {
	const userInput = prompt("Please input the amount of cells you'd like on one side of the grid");
	const gridSideLength = parseInt(userInput);
	return gridSideLength;
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

function createGrid(gridSize, container) {
	[cellSize, totalCells] = gridSize;
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



function initializeHeader(header, button) {
	header.appendChild(button);
	return header;
}

function clearGrid() {
	let cells = document.querySelectorAll(".cells");
	let container = document.querySelector("#etch-a-sketch-container");
	for (i = 0; i < cells.length; i++) {
		let cell = cells[i]
		cell.remove();
	}
	container.remove();

}


