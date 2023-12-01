import React from 'react';

const OS = ({ imageSrc, title }) => {
    return (
        <div className="flex flex-col items-center justify-center m-5">
            <img
                src={imageSrc}
                alt={title}
                className="w-20 h-20 object-cover"
            />
            <h3 className="text-white text-lg font-semibold mt-2">{title}</h3>
        </div>
    );
};

export default OS;
