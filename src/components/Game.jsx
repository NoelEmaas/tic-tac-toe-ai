import { useState } from "react";
import Board from './Board';
import Indicators from './Indicators';
import { makeMove } from "../utils/gameLogic";

const Game = () => {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [currPlayer, setCurrPlayer] = useState('X');
    const [difficulty, setDifficulty] = useState('unbeatable');

    const setNewCells = (newCells) => setCells(newCells);
    const setNewCurrPlayer = (newCurrPlayer) => setCurrPlayer(newCurrPlayer);

    const handlePlayerMove = (index) => {
        makeMove(index, cells, currPlayer, difficulty, setNewCells, setNewCurrPlayer);
    };

    return (
        <>
            <Board cells={cells} onPlayerMove={handlePlayerMove} />
        </>
    );
};

export default Game;