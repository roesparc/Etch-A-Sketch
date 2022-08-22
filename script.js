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
     if (div.style.backgroundColor === '') {
        const randomColor = Math.floor(Math.random() * 360);
        div.style.backgroundColor =
        `hsl(${randomColor}, 100%, 50%)`;
    } else if (div.classList.value === 'grid') {
        div.classList.add('darker90');
    } else if (div.classList.value === 'grid darker90') {
        div.classList.remove('darker90');
        div.classList.add('darker80');
    } else if (div.classList.value === 'grid darker80') {
        div.classList.remove('darker80');
        div.classList.add('darker70');
    } else if (div.classList.value === 'grid darker70') {
        div.classList.remove('darker70');
        div.classList.add('darker60');
    } else if (div.classList.value === 'grid darker60') {
        div.classList.remove('darker60');
        div.classList.add('darker50');
    } else if (div.classList.value === 'grid darker50') {
        div.classList.remove('darker50');
        div.classList.add('darker40');
    } else if (div.classList.value === 'grid darker40') {
        div.classList.remove('darker40');
        div.classList.add('darker30');
    } else if (div.classList.value === 'grid darker30') {
        div.classList.remove('darker30');
        div.classList.add('darker20');
    } else if (div.classList.value === 'grid darker20') {
        div.classList.remove('darker20');
        div.classList.add('darker10');
    } else if (div.classList.value === 'grid darker10') {
        div.classList.remove('darker10');
        div.classList.add('darker0');
    }
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
        if (div.style.backgroundColor === '') {
           const randomColor = Math.floor(Math.random() * 360);
           div.style.backgroundColor =
           `hsl(${randomColor}, 100%, 50%)`;
       } else if (div.classList.value === 'grid') {
           div.classList.add('darker90');
       } else if (div.classList.value === 'grid darker90') {
           div.classList.remove('darker90');
           div.classList.add('darker80');
       } else if (div.classList.value === 'grid darker80') {
           div.classList.remove('darker80');
           div.classList.add('darker70');
       } else if (div.classList.value === 'grid darker70') {
           div.classList.remove('darker70');
           div.classList.add('darker60');
       } else if (div.classList.value === 'grid darker60') {
           div.classList.remove('darker60');
           div.classList.add('darker50');
       } else if (div.classList.value === 'grid darker50') {
           div.classList.remove('darker50');
           div.classList.add('darker40');
       } else if (div.classList.value === 'grid darker40') {
           div.classList.remove('darker40');
           div.classList.add('darker30');
       } else if (div.classList.value === 'grid darker30') {
           div.classList.remove('darker30');
           div.classList.add('darker20');
       } else if (div.classList.value === 'grid darker20') {
           div.classList.remove('darker20');
           div.classList.add('darker10');
       } else if (div.classList.value === 'grid darker10') {
           div.classList.remove('darker10');
           div.classList.add('darker0');
       }
   }));   
}