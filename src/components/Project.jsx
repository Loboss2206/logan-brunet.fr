import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';

const Project = ({ imageSrc, date, title, description, link, tags }) => {
    return (
        <a href={(link === undefined) ? '#' : link}><div className="relative overflow-hidden bg-gray-900/90 dark:bg-gray-800/80 shadow-lg shadow-gray-900/80 dark:shadow-white/50 rounded-md transition-transform transform hover:scale-105 /*h-108 p-3">
            <div className="absolute inset-0 rounded-md"></div>
            <img src={imageSrc} alt="Project3" className="h-44 w-auto rounded-md mb-2 mx-auto" />
            <div className="p-2 relative z-10">
                <p className="text-white ">Date: {date}</p>
                <h3 className="text-green-500 text-2xl font-bold mb-2">{title}</h3>
                <p className="text-white limit7lines">{description}</p>
                <div className="flex flex-wrap gap-2 justify-end bottom-0 right-0 p-4">
                    {tags.map(({ tagName, tagImage }) => (
                        <Tag key={tagName} tagName={tagName} tagImage={tagImage} />
                    ))}
                </div>
            </div>
        </div></a>
    );
};

Project.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
        PropTypes.shape({
            tagName: PropTypes.string.isRequired,
            tagImage: PropTypes.string,
        })
    ).isRequired,
};

export default Project;
