# AIM-game
1. Create .html and .css
2. Create 3 screens in the .html
3. Set the size of the screen height: 100vh;
  width: 100vw;
4. Set the style overflow: hidden; for hide the screen
5. Add the animation in .css- the screen flies up
.screen.up {
  margin-top: -100vh;
}
and 
transition: margin 0.5s ease-out;
6. Create app.js
7. Set id for the button Game start
8. Create const startBtn
9. Add event listener with removing # befor 'start'
10. Create const screens
11. Add class 'up' into array for display next screen
12. Set id for the list of buttons in .html
13. Create const for the timeList
14. Add event listener for full list of buttons
15. Create the const 'time'
16. Put attribute of data-time into the const 'time' as a number
17. Create function startGame()
18. Create const timeEl for getting id of time
19. Add timeEl into startGame()
20. Add class up into the 1st and 2 screens .html
21. Set time = 20 in app.js
22. Move screens[1].classList.add('up') into the timeList()
23. Start to work with timers - setInterval added into startGame()
24. Create decreaseTime()
25. Set the current time
26. Create setTime() and replace 
timeEl.innerHTML = `00:${value}` to the setTime (optimaise the code)
27. Set the condition for the time into decreaseTime()
28. Create the function finishGame()
29. Create createRandomCircle()
30. Create const circle
31. Set the class in createRandomCircle() for 'circle' (from .css)
32. Get the div element with id='board' by document.querySelector('#board')
33. Set the class 'circle' in the createRandomCircle()
34. Call to createRandomCircle() into the startGame()
35. Set the size for circle into createRandomCircle()
36. Create function getRandomNumber() for getting size of the circle randomly
37. Create const size and call to the getRandomNumber() into the createRandomCircle()
38. Create position randomly for the circle 
const {width, height} = board.getBoundingClientRect()


