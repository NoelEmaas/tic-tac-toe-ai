import Cell from './Cell';

const Board = ({cells, onPlayerMove, gameStart, gameEnd}) => {

    const handleCellClick = (index) => {
        onPlayerMove(index);
    };

    return (
        <div className="grid grid-cols-3 board p-8 border-2 border-[#464646] rounded-lg relative mb-8 mt-12">
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
            <div className='absolute w-full h-full bg-transparent p-8 flex justify-center no-pointer'>
                <div className={`cross-out ${(gameEnd) ? 'show' : ''}`}></div>
            </div>
        </div>
    );
};

export default Board;