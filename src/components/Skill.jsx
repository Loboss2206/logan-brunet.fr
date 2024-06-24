import React from 'react';

const Skill = ({ imageSrc, title, link }) => {
    return (
        <div className="flex flex-col items-center justify-center m-5">
            <a target="_blank" href={(link === undefined) ? '#' : link}><img
                src={imageSrc}
                alt={title}
                className="w-20 h-20 object-cover duration-500 cursor-pointer hover:scale-125"
            /></a>
            <h3 className="text-white text-lg font-semibold mt-2 text-center">{title}</h3>
        </div>
    );
};

export default Skill;
