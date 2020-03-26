console.log(document);

var arr = []

function play(){
    const playerSpan = document.getElementById('player');
if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
} else {
    playerSpan.innerText = "X";
}
}
function play(clickedId){
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = '0';
        clickedElement.innerText = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = '0';
    }
}
