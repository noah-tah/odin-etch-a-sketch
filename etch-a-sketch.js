function calcTotalNumberOfCells(lengthOfSide) {
	const totalCells = lengthOfSide * lengthOfSide;
	return totalCells;
}

function getGridLength() {
	let chosenGridLength = prompt("Please enter a grid length");
	let gridLength = parseInt(chosenGridLength);
	return gridLength;
}

function calcuateCellWidth(cells) {
	const container = document.querySelector("#etch-a-sketch-container");
	const rowWidth = container.offsetWidth;
	const cellWidth = cellHeight = rowWidth / cells;
	return cellWidth;

}

// TODO: below is new code that i am working on here
function createGridRow(numCells) {
	const container = document.querySelector("#etch-a-sketch-container");
	for (cell = 0; cell < numCells; cell++) {
		const cell = document.createElement('div');
		cell.classList.add("cells");
		cell.style.width = calcuateCellWidth(numCells).toString() + "px";
		cell.style.height = calcuateCellWidth(numCells).toString() + "px";
		container.appendChild(cell);
	}
}

function createGridCells() {
	const numCells = getGridLength();
	for (row = 0; row < numCells; row++) {
		createGridRow(numCells);
	}

}
createGridCells();
