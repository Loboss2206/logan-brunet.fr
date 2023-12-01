import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import profileImage from "../assets/profile.jpeg";

const Main = () => {
    return (
        <div
            name="Accueil"
            className="flex sm:justify-center items-center h-screen w-full bg-gradient-to-r px-5 flex-col from-background-color"
        >
            <motion.div
                className="flex flex-col 2xl:w-2/3 items-center"
                initial="hidden"
                animate="visible"
            >
                <div className="flex justify-center md:flex-row flex-wrap-reverse md:flex-nowrap lg:items-center gap-10 mt-20 lg:mt-0">
                    <div className="flex flex-col gap-2">
                        <motion.h1 className="text-white lg:text-6xl text-3xl font-bold pb-2">
                            Hello World! I'm{" "} <span className="text-green-500">Logan Brunet</span>,
                        </motion.h1>

                        <motion.p className="flex text-white text-xl lg:text-3xl item">
                            Student at Polytech Nice-Sophia in IT. Mainly interested in AI, Cybersecurity, and Software Development.
                        </motion.p>

                        <motion.p className="flex text-white text-xl lg:text-3xl item">
                            <i>
                                I also enjoy traveling and exploring new technologies.{" "}
                                <span className="text-green-500">test</span> quoi{" "}
                                <span className="text-green-500">feur</span> quoicoubeh <span className="text-green-500">??</span> apanyaan <span className="text-green-500">wsh</span>.
                            </i>
                        </motion.p>
                    </div>
                    <motion.div className="item">
                        <img
                            src={profileImage}
                            alt="profile img"
                            className="mx-auto max-w-2xl hover:scale-110 duration-500 rounded-full border-green-800 border-4"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};


export default Main;
