const body = document.querySelector('body')
body.classList.add('body')

const gridContainer = document.createElement('div')
gridContainer.classList.add('gridContainer')

for (let i = 0; i < 256; i++) {
    const grid = document.createElement('div')
    grid.classList.add('grid')
    gridContainer.appendChild(grid)
}

body.appendChild(gridContainer)
