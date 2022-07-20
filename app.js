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
        setInterval(decreaseTime, 1000)
        //timeEl.innerHTML = `00:${time}`
        setTime(time)
    }

    function decreaseTime() {
        //condition for the time
        if (time === 0) {
            finishGame()
        } else {
            let current = --time
        //add '0' in the end of time for nice look
        if (current < 10) {
            current = `0${current}`
        }   
        //timeEl.innerHTML = `00:${current}`
        setTime(current)
        }   
    }

    function setTime(value) {
        timeEl.innerHTML = `00:${value}`
    }

    function finishGame()  {
        
    }