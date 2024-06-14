import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ tagName, tagImage }) => {
    return (
        <div className="bg-gray-700 text-white px-2 py-1 rounded-lg flex items-center">
            <img src={tagImage} alt={tagName} className="w-6 h-6 mr-2" />
            {tagName}
        </div>
    );
};

Tag.propTypes = {
    tagName: PropTypes.string.isRequired,
    tagImage: PropTypes.string,
};

export default Tag;