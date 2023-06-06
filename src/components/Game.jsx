import { useState } from "react";
import Board from './Board';
import Indicators from './Indicators';
import { makeMove } from "../utils/gameLogic";

const Game = () => {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [currPlayer, setCurrPlayer] = useState('X');
    const [difficulty, setDifficulty] = useState('unbeatable');
    const [gameStart, setGameStart] = useState(true);
    const [gameEnd, setGameEnd] = useState(false);

    const setNewCells = (newCells) => setCells(newCells);
    const setNewCurrPlayer = (newCurrPlayer) => setCurrPlayer(newCurrPlayer);

    const handlePlayerMove = (index) => {
        makeMove(index, cells, currPlayer, difficulty, setNewCells, setNewCurrPlayer);
    };

    return (
        <>
            <div className="absolute w-screen h-[150px] flex items-center justify-center">
                <div>
                    <p className="text-4xl font-medium">Tic Tac Toe</p>
                    <p className="text-sm text-center pt-2">Player vs. AI</p>
                </div>
            </div>
            <div className='h-screen w-screen flex items-center justify-center'>
                <div>
                    <Board cells={cells} onPlayerMove={handlePlayerMove} gameStart={gameStart} gameEnd={gameEnd}/>
                    <Indicators />
                </div>
            </div>

        </>
    );
};

export default Game;