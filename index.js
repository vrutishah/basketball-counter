let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreEl =document.getElementById("home-score")
let homeScore = 0

function homePlusOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
function homePlusTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

let homeScoreBtnThree = document.getElementById("home-score-btn-3")

function homePlusThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}


let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreEl =document.getElementById("guest-score")
let guestScore = 0

function guestPlusOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
function guestPlusTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

let guestScoreBtnThree = document.getElementById("guest-score-btn-3")

function guestPlusThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

//function whereby newgame begins, winner is announced and home and guest score return to zero.
let homeWinEl = document.getElementById("winner-home")
let guestWinEl = document.getElementById("winner-guest")

function newGame() {
    homeScoreEl.textContent = 0 
    guestScoreEl.textContent = 0
    
}


