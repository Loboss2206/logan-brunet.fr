import React from "react";

const Menu = () => {
    const height = "50";
    const margin = "4";

    return (
        <div className="w-full h-20 bg-gray-800 bg-opacity-95 text-white flex items-center justify-center z-50 mt-16">
            <a href="#">
                <p className="text-green-400 text-2xl font-bold mt-1.5 mx-16">{`Made by Logan Brunet\u00A0\u00A0🪴\u00A0\u00A0with React and Tailwind`}</p>
            </a>
        </div >
    );
};

export default Menu;
