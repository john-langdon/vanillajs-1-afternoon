let board = [];

function resetGame() {
    board = [];
    for (let i = 0; i <= 8; i++) {
        document.getElementById(i).innerText = null;
    }
    console.log(board);
}

function play(clickedId) {
    let playerSpan = document.getElementById('player');
    let clickedElement = document.getElementById(clickedId);
    let winnerTracker;

    if (board[clickedId] !== undefined) {
        return;
    }


    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        winnerTracker = 'X';
        board[clickedId] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        winnerTracker = 'O';
        board[clickedId] = 'O';
    }
    
    const topLeft = board[0];
    const topCenter = board[1];
    const topRight = board[2];
    const middleLeft = board[3];
    const middleCenter = board[4];
    const middleRight = board[5];
    const bottomLeft = board[6];
    const bottomCenter = board[7];
    const bottomRight = board[8];

    let boardFull = true;

    if (
        (topLeft !== undefined && topLeft === topCenter && topCenter === topRight) ||
        (middleLeft !== undefined && middleLeft === middleCenter && middleCenter === middleRight) ||
        (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomCenter === bottomRight) ||
        (topLeft !== undefined && topLeft === middleLeft && middleLeft === bottomLeft) ||
        (topCenter !== undefined && topCenter === middleCenter && middleCenter === bottomCenter) ||
        (topRight !== undefined && topRight === middleRight && middleRight === bottomRight) ||
        (topLeft !== undefined && topLeft === middleCenter && middleCenter === bottomRight) ||
        (topRight !== undefined && topRight === middleCenter && middleCenter === bottomLeft)
        ) {
            alert(winnerTracker + ' is the winner!');
            resetGame();
            return;
    } else {
        for (let i = 0; i <= 8; i++) {
            if (board[i] === undefined) {
                boardFull = false;
                return;
            }
        }
    }

    if (boardFull === true) {
        alert('Cat\'s game...');
        resetGame();
        return;
    }

}