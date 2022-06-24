const container = document.querySelector('.container');

function createBoxes(numBox) {
  for (let i = 0; i < numBox; i++) {
    const row = container.appendChild(document.createElement('div'));
    row.className = 'row'
    for (let j = 0; j < numBox; j++) {
      const square = document.createElement('div');
      square.className = 'box';
      row.appendChild(square);
    }
  }
}
function removeBoxes() {
  const rows = document.querySelectorAll('.row')
  rows.forEach((row) => {
    container.removeChild(row)
  })
}

const button = document.querySelector('button')

button.addEventListener('click', () => {
  let size = parseInt(prompt('How many rows and columns in your etch-a-sketch?', '10'))
  if (typeof(size) == 'number') {
    if (size <100) {
      removeBoxes()
      createBoxes(size)

      const boxs = document.querySelectorAll('.box')

      boxs.forEach((box) => {
        box.addEventListener('mouseover', () =>
        box.classList.add('pen'))
      })
    }
    else {
      alert('Must be less than 100')
    }

  }
  else {
    alert('Try again using a number')
  }


})

