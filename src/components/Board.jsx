import Cell from './Cell';

const Board = ({cells, onPlayerMove}) => {

    const handleCellClick = (index) => {
        if (cells[index]) {
            return;
        } 
        
        onPlayerMove(index);
    };

    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className="grid grid-cols-3 board p-8 border-2 rounded-lg">
                {cells.map((cell, index) => (
                    <Cell
                        key={index}
                        value={cell}
                        onCellClick={() => {handleCellClick(index)}}
                    />
                ))}
            </div>
        </div>
    );
};

export default Board;