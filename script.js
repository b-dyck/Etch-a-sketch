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

createBoxes(16)

const boxs = document.querySelectorAll('.box')

boxs.forEach((box) => {
  box.addEventListener('mouseover', () =>
  console.log('mouse in') )
  box.addEventListener('mouseout', () =>
  console.log('mouse out') )
})

