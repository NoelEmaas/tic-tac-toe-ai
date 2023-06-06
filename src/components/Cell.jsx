import xicon from '../assets/x-icon.png'
import oicon from '../assets/o-icon.png'

const Cell = ({value, onCellClick}) => {
    return (
        <button 
            onClick={onCellClick} 
            className={`w-32 h-32 inline-flex aspect-square m-0 items-center justify-center`}>
                {value === 'X' && <div className='p-4 w-full h-full'><div className='x-shape'></div></div>}
                {value === 'O' && <div className='p-6 w-full h-full'><div className='o-shape'></div></div>}
        </button>
    );
};

export default Cell;