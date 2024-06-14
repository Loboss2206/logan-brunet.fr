import React from "react";
import { motion } from "framer-motion";

import profileImage from "../assets/profile.jpeg";

const Main = () => {
    const text = "text-black dark:text-white";
    const text_important = "text-green-600 dark:text-green-500 font-bold";

    return (
        <div
            name="Accueil"
            className="flex md:justify-center items-center h-screen w-full bg-gradient-to-r px-5 flex-col from-background-color"
        >
            <motion.div
                className="flex flex-col 2xl:w-2/3 items-center"
                initial="hidden"
                animate="visible"
            >
                <div className="flex justify-center md:flex-row flex-wrap-reverse md:flex-nowrap lg:items-center gap-10 mt-24 lg:mt-0">
                    <div className="flex flex-col gap-2">
                        <motion.h1 className="text-black dark:text-white text-3xl md2:text-4xl lg:text-5xl xl:text-6xl font-bold pb-2">
                            Hello World! I'm{" "}
                            <span className={`${text_important}`}>Logan Brunet</span>,
                        </motion.h1>

                        <motion.p className="flex text-black dark:text-white text-xl lg:text-3xl item">
                            <i>
                                Student at{" "}
                                <span className={`${text_important}`}>Polytech Nice-Sophia</span> in IT. Mainly interested in{" "}
                                <span className={`${text_important}`}>Cybersecurity</span>, and{" "}
                                <span className={`${text_important}`}>Software Development</span>.
                                I also enjoy traveling and exploring new technologies.{" "}
                            </i>
                        </motion.p>

                        <motion.p className="flex text-black dark:text-white text-xl lg:text-3xl item mt-8">
                            <i>
                                Currently seeking for an{" "}
                                <span className={`${text_important}`}>apprenticeship</span> in one of those fields from{" "}
                                <span className={`${text_important}`}>September 2024</span> to{" "}
                                <span className={`${text_important}`}>September 2026</span>.
                            </i>
                        </motion.p>
                    </div>
                    <motion.div className="item hover:animate-spin">
                        <img
                            src={profileImage}
                            alt="profile img"
                            className="mx-auto max-w-2xl hover:scale-110 duration-500 rounded-full border-green-800 border-4 hover:cursor-pointer"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Main;
