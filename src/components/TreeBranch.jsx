const TreeBranch = ({ label, isLast, depth, color = 'white', showPipe, empty, firstPipe, secondPipe }) => {
    const marginLeft = `2em`;
    const textColorClass = ((color === 'white' || color === 'black' ? `text-${color}` : `text-${color}-600`));

    return (
        <div className="flex flex-row items-center">
            {empty && (
                <div style={{ marginLeft: '0.37em' }} className="text-3xl my-0 text-white inline-block">
                    {showPipe ? '|' : ' '}
                </div>
            )}
            {!empty && (
                <>
                    {depth >= 1 && (
                        <div style={{ marginLeft: `0.37em` }} className="text-3xl my-0 text-white inline-block whitespace-nowrap">
                            {firstPipe ? '|' : '\u00A0'}
                        </div>
                    )}
                    {depth >= 2 && (
                        <div style={{ marginLeft: `calc(${marginLeft} + 0.37em)` }} className="text-3xl my-0 text-white inline-block whitespace-nowrap">
                            {secondPipe ? '|' : '\u00A0'}
                        </div>
                    )}

                    <div style={depth != 0 ? { marginLeft } : {}} className={`text-3xl my-0 ${textColorClass} inline-block`}>
                        <span className={`mr-2 text-white whitespace-nowrap`}>
                            {isLast ? ' └─' : ' ├─'}
                        </span>
                        <span className={`${textColorClass} word-wrap-break-word`}>{label}</span>
                    </div>
                </>
            )
            }
        </div>
    );
};

export default TreeBranch;
