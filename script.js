const audio = new Audio("35035__dobroide__20070516-goal-01.wav");

let homeScoreEl = document.getElementById("homeScore");
let guestScoreEl = document.getElementById("guestScore");

let homeScore = 0;
let guestScore = 0;

function onePointHome() {
    homeScore++;
    homeScoreEl.textContent = homeScore;
    audio.play();
};

function twoPointsHome() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    audio.play();
};

function threePointsHome() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    audio.play();
};

function onePointGuest() {
    guestScore++;
    guestScoreEl.textContent = guestScore;
    audio.play();
};

function twoPointsGuest() {
    guestScore+=2;
    guestScoreEl.textContent = guestScore;
    audio.play();
};

function threePointsGuest() {
    guestScore+=3;
    guestScoreEl.textContent = guestScore;
    audio.play();
};

function reset() {
    guestScore = 0;
    homeScore = 0;
    guestScoreEl.textContent = guestScore;
    homeScoreEl.textContent = homeScore;
}

























// let score = 0;

// let homeScore = document.getElementById("homeScore");
// let guestScore = document.getElementById("guestScore");

// function homeAddPoint() {
//     score++; 
//     homeScore.textContent = score;
// }

// function homeRemovePoint() {
//     score = Math.max(0, score -1); 
//     homeScore.textContent = score;
// }

// function guestAddPoint() {
//     score++; 
//     guestScore.textContent = score;
// }

// function guestRemovePoint() {
//     score = Math.max(0, score -1); 
//     guestScore.textContent = score;
// }

// function reset() {
//     score = 0;
//     homeScore.textContent = score;
//     guestScore.textContent = score;
// }