// TreeBranch component
const TreeBranch = ({ label, isLast, depth = 0, color = 'white', showPipe, empty, firstPipe, secondPipe }) => {
    const marginLeft = `2em`;
    const textColorClass = depth === 0 ? 'text-white' : (color === 'white' || color === 'black' ? `text-${color}` : `text-${color}-500`);

    return (
        <div>
            {empty && (
                <div style={{ marginLeft: '0.37em' }} className="text-3xl my-0 text-white inline-block">
                    {showPipe ? '|' : ' '}
                </div>
            )}
            {!empty && (
                <>
                    {firstPipe && (
                        <div style={{ marginLeft: '0.37em' }} className="text-3xl my-0 text-white inline-block">
                            {showPipe ? '|' : ' '}
                        </div>
                    )}
                    {secondPipe && (
                        <div style={{ marginLeft: `calc(${marginLeft} + 0.37em)` }} className="text-3xl my-0 text-white inline-block">
                            {showPipe ? '|' : ' '}
                        </div>
                    )}

                    <div style={firstPipe || secondPipe ? { marginLeft } : {}} className={`text-3xl my-0 ${textColorClass} inline-block`}>
                        <span className={`mr-2 text-white`}>
                            {isLast ? ' └─' : ' ├─'}
                        </span>
                        <span className={textColorClass}>{label}</span>
                    </div>

                </>
            )
            };
        </div >
    );
};

export default TreeBranch;
