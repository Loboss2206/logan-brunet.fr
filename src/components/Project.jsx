import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ imageSrc, date, title, description }) => {
    return (
        <div className="border border-gray-300 p-4 rounded bg-green-800">
            <img src={imageSrc} alt="Project3" className="max-w-full h-auto rounded mb-4" />
            <p className="text-white">Date: {date}</p>
            <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
            <p className="text-white">{description}</p>
        </div>
    );
};

Project.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Project;
