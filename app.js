const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['#39f54c', '#f539b6', '#39d9f5', '#ffff00', '#ff0000', '#fff']
let score = 0
let time = 0
let circleColor = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    // display next screen
    screens[0].classList.add('up')
  })

  timeList.addEventListener('click', event => {
    // event delegation
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        //change to the screen 2
        screens[1].classList.add('up')
        startGame()
        
    }
    })

    //click on the circle, not on the board
    board.addEventListener('click', event => {
        if (event.target.classList.contains('circle')) {
            /* const color = getRandomColor(event.target)
            element.style.background = color */
            score++
            event.target.remove() //delete circle
            createRandomCircle()  //create new circle
        }

    })

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
        //or timeEl.parentNode.classList.add('hide)
        timeEl.parentNode.remove()
        board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`
        
    }

    function createRandomCircle()  {
       const circle = document.createElement('div')
       const size = getRandomNumber(10, 60)

       getRandomColor(circleColor)

       //position of circle
       const {width, height} = board.getBoundingClientRect()
       //can get parameters of object - width and height
       /* const x = 150
       const y = 200 */
       //the circle doesn't go beyond the screen
       const x = getRandomNumber(0, width - size)
       const y = getRandomNumber(0, height - size)

       circle.classList.add('circle')
       //set the size for circle
       /* circle.style.width = '15px'
       circle.style.height = '15px' */
       circle.style.width = `${size}px`
       circle.style.height = `${size}px`
       circle.style.top = `${y}px`
       circle.style.left = `${x}px`
       circle.style.background = colors[circleColor]


       board.append(circle)
    }

    function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }

    function getRandomColor() {
        return circleColor = Math.floor(Math.random() * colors.length)
      }