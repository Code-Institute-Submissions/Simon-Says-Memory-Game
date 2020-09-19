# "Simon Says" by Michael Warner

This is a JavaScript application that is based solely on the 1980's memory game "Simon Says". This application was built to directly replicate the original game and gives the player a feeling of nostalgia when using. However, there have been a handful of parts that have been altered but I'll speak about those later. To begin the game, you must click the "Power" button and it will become ticked to show the power is "ON" and will also see in the box below named "Count" "--" to show the turn counter is ready to play. From there, the player has a choice whether to activate "Harsh" mode which limits the player to having only one life or they can hit the "Start" button which will turn Orange when hovering over and once clicked the user will see "1" appear in the box below showing the turn count. When not in "Harsh" mode the player will have as many attempts to complete the game to get to level 20. The game will then proceed to flash one of the four coloured panels in a random sequence located around the outside of the centre circle, once the sequence is completed then it is down to the player to replicate the sequence shown without making a mistake. To replicate the sequence the player needs to click each panel in that sequence. The panels will flash a lighter colour of themselves and make a sound specific to each colour, the same happens when the player clicks those panels too. Each time the player correctly repeats the sequence of flashing lights, one more light will be added to the end of the sequence to enable them to reach the desired level 20. The "Turn Counter" displays the current level the player is on by showing the number 1-20. This give a nice visual aid to see where you are at and how close the player gets to the finish line.

# UX

For this project I identified three user stories, each were hypothetical which represent different demographics, such as adults, children and myself.

## User One is a middle-aged person who used the original "Simon Says| game in the 1980's

This user will be someone who wants to play "Simon Says" for a brief feeling of nostalgia. They will be surfing online to find an online alternative to the original physical version of the game. The game online is mobile friendly and holds very similar styles to the original which is as close to the original as they can find.

I managed to meet the user's needs by building the game making sure it is as close to the original as I could. The format of the game holds true to the original from the colours used for the flashing panels to the central control panel. Sounds that are made when colours flash and when clicked though are different still replicate how the original did it. This user doesn't want a hard challenge but only to relive childhood memories for a brief moment.

## User Two is a child who wants to play a memory game

This user is a child aged between 5 and 14 who wants to play a memory game, they want it to be not only challenging but also aesthetically pleasing to the eye. They will however want to reach the highest level possible and more than likely compete against friends and siblings a like to see who can get the highest score. They will not have any relation to how the game looks compared to the original but will still want it to be easy to use and quick to play.

This user's needs were met by making sure the colours were both bold and brightly coloured when flashed, clicked and when still. The turn counter adds an element of competitiveness which is what this user wants whilst playing. The easy to navigate control panel adds that ease of access wanted by the user as well as how the game is interacted with through clicking buttons when flashed. In addition, the sounds present when flashing and clicking add that little extra when playing in case some users find it easier to remember through hearing or visual aids. Overall this game is very child friendly.

## User Three is me, a young adult aspiring to be a developer

I wanted to play a game which I heard about from my parents but never seen in person, never held the machine in its original form. Here I was looking to build an alternate version whilst searching for the original to keep as close as possible. I wanted to play the game but sadly couldn't get a hold of one or play an online version which fulfilled that burning desire. It will also be useful for me to see if there were any bugs and how I learnt to fix them.

I met my needs by ensuring I built it as close to the original as I could with a few updates since I don't have any nostalgic feeling towards the game like user one. I made sure I committed regularly to keep track of the build process and allowing me to look back at this as a learning point in my development career. These commits also allow me to keep track of bugs, errors and the fixes which come with them.

# Features

## Current Features

Coloured lights - these chosen as a direct copy of the original less their positioning on the game itself. These were set out not as the original to meet everyone’s needs not just those with the need for nostalgia. The bright colours flash making them pleasing to the eye for all users.

Sounds - these were chosen again to be like the original, again I changed the sounds to be my own style to be both satisfying and a little surprise when they are heard for the first time.

Start button - this click button is in the style of the original with a slightly different shape, colour and with a hover feature to add that little extra. This gives a nice hint of nostalgia but also visually appealing for all users who may not have played before. This also signifies the beginning of play.

Power checkbox - this easy to use and simple to see activated checkbox was chosen instead of a button as it is very similar but again allows me to style it according to what I wanted to see when looking at the game. 

Harsh checkbox - this was used for the same reasons as the power checkbox. However, I wanted to keep some consistency in the game to pair nicely with the consistency of how the game is played.

Turn counter - a clear box which holds the level the player is on whilst playing updates depending on the level reached by the player. This adds that will to get the best score you can and a goal to beat or match the previous attempts.

Alert boxes - two were added, one when the user fails and the other when the user wins. The first when failing has a message which is both sarcastic but also funny to try and get the player to want to prove the machine wrong that it can be beaten. The second, when the game is won also adds a sarcastic and funny message to see if that win was a one off and tells the user to prove they can do it again. These two alerts add that competitive edge user two wants to see.

## Features to add

I could add a short instruction button for those who are unfamiliar with the original or any memory game like this for that matter. This would alleviate anyone not understanding what to do and putting the game down never to be played. 

Also, the addition of increased difficulty apart from the Harsh button would be something to add. Making the time between flashes shorter would be a place to start as it would add an element of focus the player would need to follow it so quickly.

# Technologies used

The languages I used for this project were HTML, CSS and JavaScript.

HTML was used to create the structure of the game and the small amount of wording used. The use of both class and ID selectors enabled me to style them in CSS and enable JavaScript interactivity. The vast majority of the project used the Div element as this allows me to have the largest flexibility when styling.

CSS was used to add styling to the game, coloured lights, background colours and so on. I styled all the coloured panels to be the same for ease of use and ease of bug fixing. I also made sure all the styling was consistent throughout the entire application.

JavaScript was used to add the interactivity to the game, such as selecting random colours to flash, different conditions when the Harsh checkbox is clicked and what happens when the player wins or not.

I also used a wireframe which can be found here: https://balsamiq.cloud/se8bmtm/pvp37mb/r2278

This was used to keep me on track and to not get lost when designing.

# Testing

I had one failed attempt at this project. I tried to build a Simon gain to match the original but there were so many errors from not understanding how to get things to work like getting the coloured panels to flash to getting those panels to click as well. This failed attempt was key to my testing as I manged to make every mistake in the book there, this can be found here: https://github.com/MichaelWarner32/Colour-Match-Game.git

Apart from the failed attempt as a key portion of testing I used manual and in browser testing through the google developer tools. From the beginning of this current project I committed regularly but could and should have been more. However, I found the descriptions I used in each commit to be enough to allow me to refer back to what was done in that section.

If I may just speak about the failed attempt above, that was a saving grace to have a failure so near the end or so I thought. I tried not to use any online sources for help but that was the downfall when I did need assistance, I ended up throwing code in without testing or even understanding why or what it would do to help me solve the issue. I tested the most on getting the panels to flash which turned out to be an error in my spelling, but the main issue was getting the player to be able to click. I couldn't grasp how to implement this no matter how much I tested the code, changed it until I decided it was a losing battle and needed to start again.

Here we come to the current project. I learnt from my mistake first of all by looking online for walkthroughs and code that made the panels flash and click like "eventListeners". I built the initial layout of the game simply with an easier structure and fewer interactive elements to stop me getting into a mess. I also followed a walkthrough which I will reference later, this was key to me getting this project done.

My first thing to test was that of the algorithm for the game which failed me in the first attempt. I coded how it should work and put in place a "console.log(order)" to test in the browser to see if it would print a sequence of numbers between 1-4. I had an issue getting this to work however, turns out to be again a simple typo. Once this was functional, I moved on to making sure the coloured panels would light up in line with numbers I associated with them. There wasn't an Issue with this but with the sounds I wanted to attach to them. They kept overlapping each other which led me to putting each flash and noise in its own function which solved the problem there. 

An interesting bug came about when I was coding what happens when the computer has it's turn then when it was the players turn, the colours would change position and flash different colours. For example, blue is top left and yellow is bottom right these would swap places. I found again through me using individual functions for each panel I ended up copying each over and forgot to change the colours back to what they should be. Another silly typo that should have been avoided.

Something I didn't realise was an issue was that the class of machieContainer didn't have any styling associated with it even though it can be found in the style.css file. Annoyingly, it was another typo, I styled it as an ID instead. 

The power checkbox was tested to make sure that both the start button would work but also the turn counter would activate. I had trouble getting both to work together, to start with the turn counter was dead but the start button worked. Then vice versa. Once I managed to get the start button working again it turned out I had the "on" variable set to false which meant it wasn't active.

The game ran indefinitely which was good but it's not what I wanted. I wanted to add an end goal to reach. I added an end target of level 30 which I didn't know if it worked as I couldn't reach that number. I decided to first drop it down to level 2 as the win goal. All four coloured panels are supposed to light up at once, but this didn't work. I hadn't yet implemented that feature, once I did it still didn't work. Again, typos were the issue luckily. 

The alerts I added proved to be both a last-minute feature but also the most time consuming to test. The first when the player fails was simple, added it in there and it worked hand in hand with what was meant to happen. The problems occurred when the player won. The alert would pop up (great) but it would be as the player clicked the final button so that colour didn't flash instead it flashed once the alert was closed then all the lights flashed at the same time. It was very odd to see the buttons flash so quickly after the alert was closed. I attempted to solve this by simply moving where the alert was placed, I moved it just under where the colours would all flash but again no luck. Tried above again nothing. I thought I could just delay it by adding a timeout to that alert, I added a 50-millisecond delay which alleviated the bug.

The game was running perfectly once above was solved. However, I forgot about mobile responsiveness. I tried adding bootstrap to make it responsive but for some reason it didn't work so I proceeded to use media queries which was as simple as adjusting the whole body's width and height as there was only one object on screen.

# Deployment

GitHub Pages - https://michaelwarner32.github.io/Simon-Says-Memory-Game/

Using GitHub's provided system, I was able to pick the branch I wanted the webpage to appear on, it was deployed simply without error.

# Credits

https://medium.com/front-end-weekly/create-simon-game-in-javascript-d53b474a7416 - This is where I found how to implement the random selection of panels flashing. Although I didn't use the exact code from this, I used the Math.floor and Math.random from this. 

https://codepen.io/BenLBlood/pen/LGLEoJ - Used this as a guide on how to build the game in HTML, wasn't sure on how to build the shape of the game. This allowed me to follow the basic layout and adjust to make it my own. It also gave me the idea to add sounds to the panels when flashed and clicked. 

https://www.w3schools.com/jsref/met_win_alert.asp - Found this page on how to add alerts into JavaScript. 

https://github.com/Code-Institute-Submissions/simon-says-project-1 - I also used this code when placing alerts in my code. I saw how this was done in the code in link to left and added two of my own.

https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout - Need to give credit to this page as it explained what setTimeouts were and how they can be useful.

I wanted to pay a special credit to the tutor support namely Tim. I needed help with my first attempt and this one. Tim aided me with a handful of issues which he helped me solve all and got me into a position to be able to submit.

# Media

All sounds were found here https://freesound.org/

# Acknowledgments

https://www.youtube.com/watch?v=n_ec3eowFLQ&ab_channel=TonyAlicea - Free Code Camp "Simon Says" tutorial

This video not only inspired me to design a Simon Says game but also guided me through it. As mentioned above I failed at my first attempt, but this video specifically walked me through the technical aspect in the JavaScript section, specifically how the panels flashed and were clicked. The structure of this project is based on this video walkthrough, I changed some aspects in all three languages as noted above. My approach was to watch the video first and understand what was being done then listen to it while I code along with him, then amend the code and explanations given and try again. The objective was to learn how to develop the "Simon Says" game and not just copy it and claim as my own design.

