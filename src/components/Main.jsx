import React from "react";
import { motion } from "framer-motion";
import { Trans } from "react-i18next";

import profileImage from "../assets/others/profile.jpg";

const Main = () => {
  const text = "text-black dark:text-white";
  const text_important = "text-green-600 dark:text-green-500 font-bold";

  return (
    <div
      name="Accueil"
      className="flex md:justify-center items-center h-screen w-full bg-gradient-to-r px-5 md:px-12 flex-col from-background-color"
    >
      <motion.div
        className="flex flex-col 2xl:w-2/3 items-center"
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-center md:flex-row flex-wrap-reverse md:flex-nowrap lg:items-center gap-10 mt-24 lg:mt-0">
          <motion.div className="flex flex-col justify-center gap-2">
            <motion.h1 className="text-black dark:text-white text-3xl md2:text-4xl lg:text-5xl font-bold pb-2">
              <Trans
                i18nKey="main.hello"
                values={{ text_important }}
                components={{ span: <span className={text_important} /> }}
              />
            </motion.h1>

            <motion.p className="flex text-black dark:text-white text-xl lg:text-3xl item">
              <i>
                <Trans
                  i18nKey="main.firstP"
                  values={{ text_important }}
                  components={{
                    a: <a href="https://polytech.univ-cotedazur.fr/" />,
                    span: <span className={text_important} />,
                  }}
                />
              </i>
            </motion.p>

            <motion.p className="flex text-black dark:text-white text-xl lg:text-3xl item mt-8">
              <i>
                <Trans
                  i18nKey="main.secondP"
                  values={{ text_important }}
                  components={{
                    a: <a href="https://amadeus.com/" />,
                    span: <span className={text_important} />,
                  }}
                />
              </i>
            </motion.p>
          </motion.div>
          <motion.div className="hover:animate-spin">
            <img
              src={profileImage}
              alt="profile img"
              className="mx-auto max-w-48 lg:max-w-64 rounded-full border-green-800 border-4 hover:cursor-pointer"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Main;
