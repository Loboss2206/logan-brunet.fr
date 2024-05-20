import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ imageSrc, date, title, description, link }) => {
    return (
        <a href={(link === undefined) ? '#' : link}><div className="relative overflow-hidden bg-gray-800/80 shadow-lg shadow-white/50 rounded-md transition-transform transform hover:scale-105 h-108">
            <div className="absolute inset-0 rounded-md"></div>
            <img src={imageSrc} alt="Project3" className="h-44 w-auto rounded-md mb-4 mx-auto mt-2" />
            <div className="p-4 relative z-10">
                <p className="text-white">Date: {date}</p>
                <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
                <p className="text-white limit7lines">{description}</p>
            </div>
        </div></a>
    );
};

Project.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Project;
