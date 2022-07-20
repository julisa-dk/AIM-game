const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
let time = 20
const timeEl = document.querySelector('#time')

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    // display next screen
    screens[0].classList.add('up')
  })

  timeList.addEventListener('click', event => {
    // event delegation
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribut('data-time'))
        //change to the screen 2
        screens[1].classList.add('up')
        startGame()
    }
    })

    //DEBUG
    startGame()

    function startGame() {
        timeEl.innerHTML = `00:${time}`
    }