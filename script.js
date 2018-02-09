const container = document.querySelector('.container')
const grid = document.createElement('div');
grid.classList.add('grid');

function createGrid(x) {
  var i = 0
  while (i<(x*x)) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = "black"})
    container.appendChild(grid);
    i++
  }
  container.style.height = 22*x+'px'
  container.style.width = 22*x+'px'
}
createGrid(30)
