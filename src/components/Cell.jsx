import xicon from '../assets/x-icon.png'
import oicon from '../assets/o-icon.png'

const Cell = ({value, onCellClick}) => {
    return (
        <button 
            onClick={onCellClick} 
            className={`w-32 h-32 inline-flex aspect-square m-0 p-4 items-center justify-center`}>
                { value === 'X' && <img src={xicon} alt="x-icon" /> }
                { value === 'O' && <img src={oicon} alt="o-icon" /> }
        </button>
    );
};

export default Cell;