const con = document.getElementById('container')
const reset = document.getElementById('reset')

const colors = ['yellow', 'green', 'pink', 'gray', 'white', "blue", 'lightblue']


const sq = 350


for (let i = 0; i < sq; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
    reset.addEventListener('click', () => [
        resett(square)
    ])


    con.appendChild(square)
}

// function removeColor(element) {
//     element.style.background = "#1d1d1d"
//     element.style.boxshadow = '0 0 2px 10'
// }

function resett(resetcolor) {
    resetcolor.style.background = "#1d1d1d"
    resetcolor.style.boxshadow = '0 0 2px 10'
}

function setColor(element) {
    const color = getRandomColors()
    // console.log(color)
    element.style.background = color
    element.style.boxshadow = `0 0 2px ${color} , 0 0 10px ${color}`
}

function getRandomColors() {
    return colors[Math.floor(Math.random() * colors.length)]
}