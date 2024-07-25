const InterestBox = ({ id, title, description, srcImage, link }) => {
  return (
    <div className="w-full flex my-3">
      <a
        href={link}
        className="flex h-28 p-2 my-auto"
        style={{ aspectRatio: "1/1" }}
        target="_blank"
        rel="noreferrer"
      >
        {id === "1" ? (
          <img
            src={srcImage}
            alt={title}
            className="w-full h-full object-contain rounded-lg animate-spin mx-auto"
          />
        ) : id === "2" ? (
          <img
            src={srcImage}
            alt={title}
            className="w-full h-full object-cover rounded-lg animate-bounce mt-4 mx-auto"
          />
        ) : id === "3" ? (
          <img
            src={srcImage}
            alt={title}
            className="w-20 h-20 object-cover rounded-lg animate-bounce mt-4 mx-auto"
          />
        ) : null}
      </a>
      <div className="flex flex-col justify-center ml-4">
        <h1 className="text-2xl font-semibold text-green-500">{title}</h1>
        <p className="text-xl mt-1 text-white">{description}</p>
      </div>
    </div>
  );
};

export default InterestBox;
