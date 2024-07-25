import React from "react";
import { motion } from "framer-motion";
import cactus from "../assets/others/cactus.svg";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t, i18n } = useTranslation();
  const size = "25px";
  return (
    <div className="w-full h-24 sm:h-20 bg-gray-800 bg-opacity-95 text-white flex items-center justify-center z-50 mt-16">
      <motion.div className="block sm:flex text-green-400 text-xl sm:text-2xl font-bold">
        <motion.span className="flex justify-center">
          {t("footer.creator") + "\u00A0\u00A0"}
          <div>
            <img src={cactus} width={size} height={size}></img>
          </div>
          {"\u00A0\u00A0" + t("footer.with") + "\u00A0"}
        </motion.span>
        <motion.span className="flex justify-center">
          <motion.a href="https://fr.legacy.reactjs.org/" target="_blank">
            <span className="hover:text-green-700 hover:cursor-pointer duration-200">
              <i>React</i>
            </span>
          </motion.a>
          {"\u00A0" + t("footer.and") + "\u00A0"}
          <motion.a href="https://tailwindcss.com/" target="_blank">
            <span className="hover:text-green-700 hover:cursor-pointer duration-200">
              <i>Tailwind</i>
            </span>
          </motion.a>
        </motion.span>
      </motion.div>
    </div>
  );
};

export default Menu;
