import { useState } from "react";
import Board from './Board';
import Indicators from './Indicators';

const Game = () => {
    const [cells, setNewCells] = useState(Array(9).fill(null));
    const [currPlayer, setCurrPlayer] = useState('X');

    const handlePlayerMove = (index) => {
        const newCells = cells.slice();
        newCells[index] = currPlayer;
    
        setCurrPlayer(currPlayer === 'X' ? 'O' : 'X');
        setNewCells(newCells);
    };

    return (
        <>
            <Board cells={cells} onPlayerMove={handlePlayerMove} />
        </>
    );
};

export default Game;