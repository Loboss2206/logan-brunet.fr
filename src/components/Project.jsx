import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ imageSrc, date, title, description, link }) => {
    if (link === undefined) return (
        <div className="relative overflow-hidden bg-green-800 rounded-md transition-transform transform hover:scale-105">
            <div className="absolute inset-0 rounded-md"></div>
            <img src={imageSrc} alt="Project3" className="max-w-full h-auto rounded-md mb-4" />
            <div className="p-4 relative z-10">
                <p className="text-white">Date: {date}</p>
                <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
                <p className="text-white">{description}</p>
            </div>
        </div>
    );
    return (
        <a href={link}><div className="relative overflow-hidden bg-green-800 rounded-md transition-transform transform hover:scale-105">
            <div className="absolute inset-0 rounded-md"></div>
            <img src={imageSrc} alt="Project3" className="max-w-full h-auto rounded-md mb-4" />
            <div className="p-4 relative z-10">
                <p className="text-white">Date: {date}</p>
                <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
                <p className="text-white">{description}</p>
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
