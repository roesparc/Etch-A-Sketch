const body = document.querySelector('body')

const gridContainer = document.createElement('div')

for (let i = 0; i < 256; i++) {
    const grid = document.createElement('div')
    gridContainer.appendChild(grid)
}

body.appendChild(gridContainer)
