import React from "react";
import PropTypes from "prop-types";
import Tag from "./Tag";

const Project = ({ id, imageSrc, date, title, description, link, tags }) => {
  const lengthenText = (e) => {
    e.preventDefault();
    const text = document.getElementById(id);
    text.classList.toggle("limit7lines");
  };

  return (
    <a target="_blank" rel="noreferrer" href={link === undefined ? "#" : link}>
      <div className="relative overflow-hidden bg-gray-900/90 dark:bg-gray-800/80 shadow-lg shadow-gray-900/80 dark:shadow-white/50 rounded-md transition-transform transform hover:scale-105 h-full p-3 flex flex-col">
        <div className="absolute inset-0 rounded-md"></div>
        <img
          src={imageSrc}
          alt={"pic " + title}
          className="h-44 w-auto rounded-md mb-2 mx-auto"
        />
        <div className="p-2 relative z-10">
          <p className="text-white text-base">Date : {date}</p>
          <div className="text-green-500 text-2xl font-bold mb-2 flex gap-2 items-center">
            <h3>{title}</h3>
            <svg
              className="hover:text-green-700 hover:scale-110"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </div>
          <p
            id={id}
            className={`text-white limit7lines z-10 hover:cursor-pointer`}
            onClick={lengthenText}
          >
            {description}
          </p>
        </div>
        <div className="flex flex-wrap-reverse gap-2 justify-end p-4 mt-auto">
          {tags.map(({ tagName, tagImage }) => (
            <Tag key={tagName} tagName={tagName} tagImage={tagImage} />
          ))}
        </div>
      </div>
    </a>
  );
};

Project.propTypes = {
  id: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      tagName: PropTypes.string.isRequired,
      tagImage: PropTypes.string,
    })
  ).isRequired,
};

export default Project;
