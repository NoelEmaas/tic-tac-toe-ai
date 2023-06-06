const Indicators = () => {
    return (
        <div className="w-full flex justify-evenly">
            <div className="text-center">
                <p className="text-4xl mb-2">0</p>
                <p className="text-sm">X-SCORE</p>
            </div>
            <div className="text-center">
                <p className="text-4xl mb-2">0</p>
                <p className="text-sm">DRAW</p>
            </div>
            <div className="text-center">
                <p className="text-4xl mb-2">0</p>
                <p className="text-sm">O-SCORE</p>
            </div>
        </div>
    );
};

export default Indicators;