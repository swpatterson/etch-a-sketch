const container = document.querySelector('.container')
//const grid = document.createElement('div');
//grid.classList.add('grid');

function createGrid(x) {
  var i = 0
  while (i<(x*x)) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.height = 500/x-2 +'px'
    grid.style.width = 500/x-2 + 'px'
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = "black"})
    container.appendChild(grid);
    i++
  }
}

function gridSize() {
  var i = container.childElementCount
    for(; i>0; i--) {
      clearGrid();
    }
  var size = prompt("What size grid do you want?")
  if (size == null || size == "") {
    return
  } else {
    x = size
    createGrid(x)
  }
}


function clearGrid() {
  const grid = document.querySelector('.grid')
  grid.parentNode.removeChild(grid);
  }
