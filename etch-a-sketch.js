function createCells() {
	let gridLength = getGridLength();
	const totalCells = calcTotalNumberOfCells(gridLength);
	const cellsContainer = document.querySelector('#etch-a-sketch-container');
	const containerWidth = cellsContainer.offsetWidth;
	for (let cell = 0; cell < totalCells; cell++) {
		const cell = document.createElement('div');
		cell.classList.add("cells");
		cell.style.width = calculateWidth(containerWidth, gridLength).toString() + "px";
		cellsContainer.appendChild(cell);
		document.body.appendChild(cellsContainer);
	}
}



function calcTotalNumberOfCells(lengthOfSide) {
	const totalCells = lengthOfSide * lengthOfSide;
	return totalCells;
}

function calculateWidth(containerWidth, length) {
	let cellWidth = containerWidth / length;
	return cellWidth;
}

function getGridLength() {
	let chosenGridLength = prompt("Please enter a grid length");
	let gridLength = parseInt(chosenGridLength);
	return gridLength;
}
