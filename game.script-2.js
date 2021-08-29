const playBox = document.querySelectorAll(".play-box");
const btnPlay = document.querySelector("#game-start");
const lastScore = document.querySelector(".score-count");

let boxBefore;

btnPlay.addEventListener("click", function(){
    playGames();
});

function randomBox(playBox) {
    const b = Math.floor(Math.random() * playBox.length);
    const boxRandom = playBox[b];
    if (boxRandom == boxBefore) {
        randomBox(playBox);
    }
    boxBefore = boxRandom;
    return boxRandom;
}

function playGames() {
    const boxRandom = randomBox(playBox);
    active = boxRandom.classList.add("active");
    active = boxRandom.setAttribute("onclick", "scorePlus()");

    setTimeout(function() {
        boxRandom.classList.remove("active");
        active = boxRandom.setAttribute("onclick", "");
        playGames()
    }, 600);
}

function scorePlus() {
    let score = lastScore.textContent;
    score++;
    lastScore.textContent = score;
}