const TreeBranch = ({
  label,
  isLast,
  depth,
  color = "white",
  showPipe,
  empty,
  firstPipe,
  secondPipe,
}) => {
  const marginLeft = `3.5rem`;

  const colorClassMap = {
    white: "text-black dark:text-white",
    black: "text-white dark:text-black",
    blue: "text-blue-700 dark:text-blue-600",
    red: "text-red-700 dark:text-red-600",
    green: "text-green-700 dark:text-green-600",
  };

  const textColorClass =
    colorClassMap[color] || "text-gray-700 dark:text-gray-600";

  return (
    <div className="flex flex-row items-center">
      {empty && (
        <div className="text-3xl my-0 text-black dark:text-white inline-block font-medium">
          {showPipe ? <span className="tree-pipe">| </span> : " "}
        </div>
      )}
      {!empty && (
        <>
          {depth >= 1 && (
            <div className="text-3xl my-0 text-black dark:text-white inline-block whitespace-nowrap font-medium">
              {firstPipe ? <span className="tree-pipe">| </span> : "\u00A0"}
            </div>
          )}
          {depth >= 2 && (
            <div
              style={{ marginLeft: marginLeft }}
              className="text-3xl my-0 text-black dark:text-white inline-block whitespace-nowrap font-medium"
            >
              {secondPipe ? <span className="tree-pipe">| </span> : "\u00A0"}
            </div>
          )}

          <div
            style={{ marginLeft: `${depth != 0 ? marginLeft : ""}` }}
            className={`text-3xl my-0 ${textColorClass} inline-block`}
          >
            <span
              className={`mr-2 text-black dark:text-white whitespace-nowrap font-medium`}
            >
              <span className={`${isLast ? "tree-pipe3" : "tree-pipe2"}`}>
                |{" "}
              </span>
              <span className="tree-pipe-horizontal">-</span>
              <span className="tree-pipe-horizontal">-</span>
              <span className="tree-pipe-horizontal">-{"\u00A0"}</span>
            </span>
            <span
              className={`${textColorClass} word-wrap-break-word ${
                color != "white" && color != "black" ? "font-semibold" : ""
              }`}
            >
              {label}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default TreeBranch;
