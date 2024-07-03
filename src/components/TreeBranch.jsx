const TreeBranch = ({ label, isLast, depth, color = 'white', showPipe, empty, firstPipe, secondPipe }) => {
    const marginLeft = `2em`;

    const colorClassMap = {
        white: 'text-black dark:text-white',
        black: 'text-black dark:text-black',
        blue: 'font-medium text-blue-700 dark:text-blue-600',
        red: 'font-medium text-red-700 dark:text-red-600',
        green: 'font-medium text-green-700 dark:text-green-600',
      };

    const textColorClass = colorClassMap[color] || 'font-medium text-gray-700 dark:text-gray-600';

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
