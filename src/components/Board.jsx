import Cell from './Cell';

const Board = ({cells, onPlayerMove, gameStart, gameStatus}) => {
    const handleCellClick = (index) => {
        onPlayerMove(index);
    };

    return (
        <div className={`grid grid-cols-3 board p-8 border-2 border-[#464646] rounded-lg relative mb-8 mt-12 ${!gameStart && 'no-pointer'}`}>
            {cells.map((cell, index) => (
                <Cell
                    key={index}
                    value={cell}
                    onCellClick={() => {handleCellClick(index)}}
                />
            ))}
            <div className={`absolute w-full h-full bg-transparent flex items-center justify-center no-pointer`}>
                <div className={`vr  mr-32 absolute rounded-md  ${gameStart ? 'active' : ''}`}></div>
                <div className={`vr  ml-32 absolute rounded-md  ${gameStart ? 'active' : ''}`}></div>
                <div className={`hr  mb-32 absolute rounded-md  ${gameStart ? 'active' : ''}`}></div>
                <div className={`hr  mt-32 absolute rounded-md  ${gameStart ? 'active' : ''}`}></div>
            </div>
            <WinningLine pattern={(gameStatus !== null) ? gameStatus[1] : null} showCross={(gameStatus !== null && gameStatus[0] === 'win')}/>
        </div>
    );
};


const WinningLine = ({pattern, showCross}) => {
    const lineStyle = {
        ...(pattern === 0 && {transform: 'translate(0, -33%) rotate(90deg)'}),
        ...(pattern === 1 && {transform: 'translate(0, 0) rotate(90deg)'}),
        ...(pattern === 2 && {transform: 'translate(0, 33%) rotate(90deg)'}),
        ...(pattern === 3 && {transform: 'translate(-128px, 0)'}),
        ...(pattern === 4 && {transform: 'translate(0, 0)'}),
        ...(pattern === 5 && {transform: 'translate(128px, 0)'}),
        ...(pattern === 6 && {transform: 'translate(0, 0) rotate(-45deg)'}),
        ...(pattern === 7 && {transform: 'translate(0, 0) rotate(45deg)'}),
    };
  
    return (
        <div className={`absolute w-full h-full bg-transparent ${(pattern !== 6 && pattern !== 7) && 'p-8'} flex justify-center no-pointer`}>
            <div style={lineStyle} className={`cross-out ${!showCross ? 'hidden' : ''}`}></div>
        </div>
    );
};

export default Board;