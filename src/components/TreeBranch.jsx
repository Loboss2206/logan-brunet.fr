const TreeBranch = ({ label, isLast, depth, color = 'white', showPipe, empty, firstPipe, secondPipe }) => {
    const marginLeft = `2em`;
    const textColorClass = ((color === 'white' || color === 'black' ? `text-${color}` : `text-${color}-600`));

    return (
        <div>
            {empty && (
                <div style={{ marginLeft: '0.37em' }} className="text-3xl my-0 text-white inline-block">
                    {showPipe ? '|' : ' '}
                </div>
            )}
            {!empty && (
                <>
                    {depth >= 1 && (
                        <div style={{ marginLeft: `0.37em` }} className="text-3xl my-0 text-white inline-block">
                            {firstPipe ? '|' : '\u00A0'}
                        </div>
                    )}
                    {depth >= 2 && (
                        <div style={{ marginLeft: `calc(${marginLeft} + 0.37em)` }} className="text-3xl my-0 text-white inline-block">
                            {secondPipe ? '|' : '\u00A0'}
                        </div>
                    )}

                    <div style={depth != 0 ? { marginLeft } : {}} className={`text-3xl my-0 ${textColorClass} inline-block`}>
                        <span className={`mr-2 text-white`}>
                            {isLast ? ' └─' : ' ├─'}
                        </span>
                        <span className={textColorClass}>{label}</span>
                    </div>
                </>
            )
            }
        </div >
    );
};

export default TreeBranch;
