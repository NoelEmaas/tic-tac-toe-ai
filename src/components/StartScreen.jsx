const StartScreen = ({isGameStarting, startGame, selectDifficulty}) => {
    return (
        <div className={`absolute flex items-center justify-center ${isGameStarting && 'no-pointer hidden'} pb-10`}>
            <div>
                <div className="mb-4">
                    <label className="block text-[13px] pb-1 font-medium text-[#6b6b6b]" htmlFor="difficulty">Select Difficulty</label>
                    <select onChange={(e) => selectDifficulty(e.target.value)} name="difficulty" className="w-full py-[6px] rounded-lg bg-[#FAFAFA] border-2 border-[#464646]" id="difficulty">
                        <option value="beatable">beatable</option>
                        <option value="unbeatable">unbeatable</option>
                    </select>
                </div>
                <hr />
                <button onClick={startGame} className="bg-[#464646] px-10 py-[6px] rounded-lg text-sm text-[#FAFAFA] font-medium">START GAME</button>
            </div>
        </div>
    );
};

export default StartScreen;