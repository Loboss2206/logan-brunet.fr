const TreeBranch = ({ label, isLast, depth, color = 'white', showPipe, empty, firstPipe, secondPipe }) => {
    const marginLeft = `2em`;
    let textColorClass = ((color === 'white' ? `text-black dark:text-white` : color === 'black' ? `text-black dark:text-black` : `font-medium text-${color}-700 dark:text-${color}-600`));

    return (
        <div className="flex flex-row items-center">
            {empty && (
                <div style={{ marginLeft: '0.37em' }} className="text-3xl my-0 text-black dark:text-white inline-block">
                    {showPipe ? <span className="tree-pipe">|</span> : ' '}
                </div>
            )}
            {!empty && (
                <>
                    {depth >= 1 && (
                        <div style={{ marginLeft: `0.37em` }} className="text-3xl my-0 text-black dark:text-white inline-block whitespace-nowrap">
                            {firstPipe ? <span className="tree-pipe">|</span> : '\u00A0'}
                        </div>
                    )}
                    {depth >= 2 && (
                        <div style={{ marginLeft: `calc(${marginLeft} + 0.37em)` }} className="text-3xl my-0 text-black dark:text-white inline-block whitespace-nowrap">
                            {secondPipe ? <span className="tree-pipe">|</span> : '\u00A0'}
                        </div>
                    )}

                    <div style={depth != 0 ? { marginLeft } : {}} className={`text-3xl my-0 ${textColorClass} inline-block`}>
                        <span className={`mr-2 text-black dark:text-white whitespace-nowrap`}>
                            {isLast ? '└─' : '├─'}
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
