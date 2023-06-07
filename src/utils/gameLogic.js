export const checkGameStatus = (cells) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; ++i) {
        const [a, b, c] = lines[i];
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return ['win', i, cells[a]];
        }
    }

    for (let i = 0; i < cells.length; ++i) {
        if (!cells[i]) return null;
    }

    return ['draw'];
};


export const minimax = (cells, depth, maximizingPlayer) => {
    const winner = checkGameStatus(cells);

    if (winner !== null) {
        if (winner[0] === 'win') {
            if (winner[2] === 'O') {
                return 1;
            } else {
                return -1;
            }
        } else {
            return 0;
        }
    }

    if (maximizingPlayer) {
        let maxScore = -Infinity;
        for (let i = 0; i < 9; ++i) {
            if (cells[i] === null) {
                cells[i] = 'O';
                const score = minimax(cells, depth + 1, false);
                cells[i] = null;
                maxScore = Math.max(score, maxScore);
            }
        }
        return maxScore;
    }
    else {
        let minScore = Infinity;
        for (let i = 0; i < 9; ++i) {
            if (cells[i] === null) {
                cells[i] = 'X';
                const score = minimax(cells, depth + 1, true);
                cells[i] = null;
                minScore = Math.min(score, minScore);
            }
        }
        return minScore;
    }
};


const getAvailableMoves = (cells) => {
    let availableMoves = [];

    for (let i = 0; i < cells.length; ++i) {
        if (cells[i] === null) {
            availableMoves.push(i);
        }
    }

    return availableMoves;
};


const getBestMove = (cells) => {
    let bestMove;
    let bestScore = -Infinity;

    for (let i = 0; i < 9; ++i) {
        if (cells[i] === null) {
            cells[i] = 'O';
            const score = minimax(cells, 0, false);
            cells[i] = null;
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }

    return bestMove;
};


const getRandomMove = (cells) => {
    const availableMoves = getAvailableMoves(cells);
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
};


const updateScore = (cells, incXScore, incOScore, incDrawCount) => {
    let gameStatus = checkGameStatus(cells);

    if (gameStatus !== null) {
        if (gameStatus[0] === 'win') {
            (gameStatus[2] === 'X') && incXScore();
            (gameStatus[2] === 'O') && incOScore();
        }
        else{
            incDrawCount();
        }
    }
}


export const makeMove = (index, cells, currPlayer, difficulty, setNewCells, setNewCurrPlayer, updateGameStatus, incXScore, incOScore, incDrawCount) => {
    let gameStatus = checkGameStatus(cells);

    if (cells[index] || gameStatus || currPlayer !== 'X') {
        return;
    }

    const newCells = cells.slice();
    newCells[index] = currPlayer;

    setNewCurrPlayer(currPlayer === 'X' ? 'O' : 'X');
    setNewCells(newCells);

    updateScore(newCells, incXScore, incOScore, incDrawCount);

    gameStatus = checkGameStatus(newCells);
    updateGameStatus(gameStatus);
    
    let computerMove;

    if (difficulty === 'beatable') {
        computerMove = getRandomMove(newCells);
    }
    else {
        computerMove = getBestMove(newCells);
    }

    setTimeout(() => {
        newCells[computerMove] = 'O';
        setNewCurrPlayer('X');
        setNewCells(newCells);
        gameStatus = checkGameStatus(newCells);
        updateGameStatus(gameStatus);
        updateScore(newCells, incXScore, incOScore, incDrawCount);
    }, 500);


};