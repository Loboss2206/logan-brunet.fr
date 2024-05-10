import React from "react";
import { motion } from "framer-motion";

const Menu = () => {
    return (
        <div className="w-full h-20 bg-gray-800 bg-opacity-95 text-white flex items-center justify-center z-50 mt-16">
            <motion.p className="text-green-400 text-2xl font-bold">
                {"Made by Logan Brunet\u00A0\u00A0🪴\u00A0\u00A0with "}
                <a href="https://fr.legacy.reactjs.org/" target="_blank"><span className="hover:text-green-700 hover:cursor-pointer duration-200"><i>React</i></span></a> {"and "}
                <a href="https://tailwindcss.com/" target="_blank"><span className="hover:text-green-700 hover:cursor-pointer duration-200"><i>Tailwind</i></span></a>
            </motion.p>
        </div >
    );
};

export default Menu;
