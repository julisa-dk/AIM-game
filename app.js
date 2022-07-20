const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
let time = 20
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')

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
        //call to the method after start the game
        createRandomCircle()
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

    function createRandomCircle()  {
       const circle = document.createElement('div')
       const size = getRandomNumber(10, 60)

       circle.classList.add('circle')
       //set the size for circle
       /* circle.style.width = '15px'
       circle.style.height = '15px' */
       circle.style.width = `${size}px`
       circle.style.height = `${size}px`

       board.append(circle)
    }

    function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }