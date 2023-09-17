// selecting elements
const displayScoreP1 = document.querySelector('#displayScoreP1');
const btnPlayerP1 = document.querySelector('#btnPlayerP1');
const displayScoreP2 = document.querySelector('#displayScoreP2');
const btnPlayerP2 = document.querySelector('#btnPlayerP2');
const btnReset = document.querySelector('#btnReset');
const inputMatchLength = document.querySelector('#maxPoints')

//score keeping
let scoreP1 = 0;
let scoreP2 = 0;
let maxPoints = 6;


// events
inputMatchLength.addEventListener('change', () => {
    maxPoints = parseInt(inputMatchLength.value);
});

btnPlayerP1.addEventListener('click', () => {
    if (scoreP1 < (maxPoints - 1) && scoreP2 !== maxPoints) {
        scoreP1++;
    } else if (scoreP1 < maxPoints && scoreP2 !== maxPoints) {
        scoreP1++;
        displayScoreP1.style.color = '#198754';
        displayScoreP2.style.color = '#dc3545';
    }
    displayScoreP1.textContent = scoreP1;
});

btnPlayerP2.addEventListener('click', () => {
    if (scoreP2 < (maxPoints - 1) && scoreP1 !== maxPoints) {
        scoreP2++;
    } else if (scoreP2 < maxPoints && scoreP1 !== maxPoints) {
        scoreP2++;
        displayScoreP1.style.color = '#dc3545';
        displayScoreP2.style.color = '#198754';
    }
    displayScoreP2.textContent = scoreP2;
});

btnReset.addEventListener('click', () => {
    scoreP1 = 0;
    scoreP2 = 0;
    displayScoreP1.textContent = scoreP1;
    displayScoreP2.textContent = scoreP2;
    displayScoreP1.style.color = '#212529';
    displayScoreP2.style.color = '#212529';
});