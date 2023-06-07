import { useState } from "react";
import { makeMove } from "../utils/gameLogic";
import Board from './Board';
import Indicators from './Indicators';
import StartScreen from './StartScreen';
import EndScreen from './EndScreen';

const Game = () => {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [currPlayer, setCurrPlayer] = useState('X');
    const [difficulty, setDifficulty] = useState('beatable');
    const [gameStart, setGameStart] = useState(false);
    const [gameStatus, setGameStatus] = useState(null);
    const [xScore, setXScore] = useState(0);
    const [oScore, setOScore] = useState(0);
    const [drawCount, setDrawCount] = useState(0);

    const setNewCells = (newCells) => setCells(newCells);
    const setNewCurrPlayer = (newCurrPlayer) => setCurrPlayer(newCurrPlayer);
    const updateGameStatus = (newGameStatus) => setGameStatus(newGameStatus);
    const startGame = (start) => setGameStart(start);
    const selectDifficulty = (selDifficulty) => setDifficulty(selDifficulty);

    const incXScore = () => setXScore(xScore + 1);
    const incOScore = () => setOScore(oScore + 1);
    const incDrawCount = () => setDrawCount(drawCount + 1);

    const handlePlayerMove = (index) => {
        makeMove(
            index, 
            cells, 
            currPlayer, 
            difficulty, 
            setNewCells, 
            setNewCurrPlayer, 
            updateGameStatus,
            incXScore,
            incOScore,
            incDrawCount);
    };

    return (
        <>
            <div className="absolute w-screen h-[150px] flex items-center justify-center">
                <div>
                    <p className="text-4xl font-medium">Tic-Tac-Toe</p>
                    <p className="text-sm text-center pt-2">HUMAN VS. AI</p>
                </div>
            </div>
            <div className='h-screen w-screen flex items-center justify-center relative'>
                <div>
                    <Board cells={cells} onPlayerMove={handlePlayerMove} gameStart={gameStart} gameStatus={gameStatus}/>
                    <Indicators xScore={xScore} oScore={oScore} drawCount={drawCount} />
                </div>
                <StartScreen isGameStarting={gameStart} startGame={startGame} selectDifficulty={selectDifficulty}/>
                <EndScreen />
            </div>
        </>
    );
};


export default Game;