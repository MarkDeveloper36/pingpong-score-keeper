//Player objects
const player1 = {
    score: 0,
    scoreDisplay: document.querySelector('#displayScoreP1'),
    button: document.querySelector('#btnPlayerP1'),
    name: '',
    defaultname: 'Player 1'
}
const player2 = {
    score: 0,
    scoreDisplay: document.querySelector('#displayScoreP2'),
    button: document.querySelector('#btnPlayerP2'),
    name: '',
    defaultname: 'Player 2'
}
//event listeners for adding points
player1.button.addEventListener('click', () => {
    updateScore(player1, player2);
});
player2.button.addEventListener('click', () => {
    updateScore(player2, player1);
});
//function for updating scores
function updateScore(player, opponent) {
    player.score++;
    if (player.score > (maxPoints - 1) && Math.abs(player.score - opponent.score) > 1) {
        player.scoreDisplay.style.color = '#198754';
        opponent.scoreDisplay.style.color = '#dc3545';
        player.button.disabled = true;
        opponent.button.disabled = true;
    } else if (player.score > (maxPoints- 1) && Math.abs(player.score - opponent.score) < 1) {
        maxPoints++;
    }
    player.scoreDisplay.textContent = player.score;
};
//setting 'Playing To ...'
let maxPoints = 11;
const inputMatchLength = document.querySelector('#maxPoints');
inputMatchLength.addEventListener('change', () => {
    maxPoints = parseInt(inputMatchLength.value);
});
// reset button
const btnReset = document.querySelector('#btnReset');
btnReset.addEventListener('click', () => {
    player1.score = 0;
    player2.score = 0;
    player1.scoreDisplay.textContent = 0;
    player2.scoreDisplay.textContent = 0;
    player1.scoreDisplay.style.color = '#212529';
    player2.scoreDisplay.style.color = '#212529';
    player1.button.disabled = false;
    player2.button.disabled = false;
});
//change name
const nameInputplayer1 = document.querySelector('#player1Name');
nameInputplayer1.addEventListener('change', () => {
    updateName(player1, event);
});
const nameInputplayer2 = document.querySelector('#player2Name');
nameInputplayer2.addEventListener('change', () => {
    updateName(player2, event);
});
function updateName(player, event) {
    player.name = event.target.value;
    if (!player.name) {
        player.button.textContent = `+ 1 ${player.defaultname}`;
    } else {
        player.button.textContent = `+ 1 ${player.name}`;
    }
}