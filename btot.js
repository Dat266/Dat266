let currentColor = 'transparent'
const listColors = ['red', 'orange', 'yellow', 'blue', 'green', 'cyan', 'violet']

function getRandomColorExcept(previousColor) {
  const listColorsFiltered = listColors.filter(color => color !== previousColor)
  randomColor = listColorsFiltered[Math.floor(Math.random() * listColorsFiltered.length)]
  currentColor = randomColor
  return randomColor
}

const btnElement = document.querySelector('button')
const bodyElement = document.querySelector('body')

btnElement.addEventListener('click', function() {
  bodyElement.style.backgroundColor = getRandomColorExcept(currentColor)
})