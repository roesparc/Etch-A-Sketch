const body = document.querySelector('body');

const gridContainer = document.querySelector('.gridContainer');

const gridContainerBtn = document.createElement('div');
gridContainerBtn.classList.add('gridContainer');

for (let i = 0; i < 16*16; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    gridContainer.appendChild(grid);
}

const gridDiv = document.querySelectorAll('.grid');
gridDiv.forEach(div => div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'red';
}));

function clickBtn() {
    const input = prompt ('Enter the New Grid Size (Max 100)');

    if (input === null) return;
    else if (input < 1 || input > 100 || isNaN(input)) {
        alert('Invalid Number');
        return;
    }

    body.removeChild(gridContainer);

    for (let i = 0; i < input*input; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        gridContainerBtn.appendChild(grid);
    }

    body.appendChild(gridContainerBtn);

    const gridDiv = document.querySelectorAll('.grid');
    gridDiv.forEach(div => {
        const divSize = 16 / input * 30;
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
    });
    gridDiv.forEach(div => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'red';
    }));
}