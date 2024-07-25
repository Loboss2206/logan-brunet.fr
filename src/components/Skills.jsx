import React, { useState, useEffect, useRef } from "react";
import CustomTitle from "./CustomTitle";
import Skill from "./Skill";

import langagesMock from "../datas/langages";
import osMock from "../datas/os";
import toolsMock from "../datas/tools";

import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  const [isFirstTitleAnimationComplete, setIsFirstTitleAnimationComplete] =
    useState(false);
  const [isSecondTitleAnimationComplete, setIsSecondTitleAnimationComplete] =
    useState(false);
  const [isThirdTitleAnimationComplete, setIsThirdTitleAnimationComplete] =
    useState(false);
  const [isFourthTitleAnimationComplete, setIsFourthTitleAnimationComplete] =
    useState(false);

  const langages = langagesMock;

  const os = osMock;

  const tools = toolsMock;

  const langagesRef = useRef(null);
  const osRef = useRef(null);
  const toolsRef = useRef(null);

  useEffect(() => {
    if (isSecondTitleAnimationComplete) {
      langagesRef.current.classList.add("fade-in");
    }
  }, [isSecondTitleAnimationComplete]);

  useEffect(() => {
    if (isThirdTitleAnimationComplete) {
      osRef.current.classList.add("fade-in");
    }
  }, [isThirdTitleAnimationComplete]);

  useEffect(() => {
    if (isFourthTitleAnimationComplete) {
      toolsRef.current.classList.add("fade-in");
    }
  }, [isFourthTitleAnimationComplete]);

  const skillBoxesStyle =
    "opacity-0 bg-gray-900/90 dark:bg-gray-800/80 shadow-lg shadow-gray-900/80 dark:shadow-white/50 rounded-lg grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 p-5 mt-4";

  return (
    <div
      name="Skills"
      className="flex items-center min-h-screen w-full flex-col bg-gradient-to-r from-background-color to-container-bg px-5 md:px-12 pt-20"
    >
      <div className="flex flex-col w-full 2xl:w-2/3">
        <CustomTitle
          currentLanguage={localStorage.getItem("currentLangage")}
          title={t(`skills.title`)}
          margin="12"
          onAnimationEnd={() => setIsFirstTitleAnimationComplete(true)}
          animationActivated={!isFirstTitleAnimationComplete}
        />
        {isFirstTitleAnimationComplete && (
          <>
            <CustomTitle
              currentLanguage={localStorage.getItem("currentLangage")}
              title={t(`skills.langages.title`)}
              margin="0"
              onAnimationEnd={() => setIsSecondTitleAnimationComplete(true)}
              animationActivated={!isSecondTitleAnimationComplete}
            />
            {isSecondTitleAnimationComplete && (
              <div ref={langagesRef} className={skillBoxesStyle}>
                {langages.map(({ id, imageSrc, title, link }) => (
                  <Skill
                    key={id}
                    imageSrc={imageSrc}
                    link={link}
                    title={title}
                  />
                ))}
              </div>
            )}
          </>
        )}
        {isSecondTitleAnimationComplete && (
          <>
            <CustomTitle
              currentLanguage={localStorage.getItem("currentLangage")}
              title={t(`skills.os.title`)}
              margin="12"
              onAnimationEnd={() => setIsThirdTitleAnimationComplete(true)}
              animationActivated={!isThirdTitleAnimationComplete}
            />
            {isThirdTitleAnimationComplete && (
              <div ref={osRef} className={skillBoxesStyle}>
                {os.map(({ id, imageSrc, title, link }) => (
                  <Skill
                    key={id}
                    imageSrc={imageSrc}
                    link={link}
                    title={title}
                  />
                ))}
              </div>
            )}
          </>
        )}
        {isThirdTitleAnimationComplete && (
          <>
            <CustomTitle
              currentLanguage={localStorage.getItem("currentLangage")}
              title={t(`skills.tools.title`)}
              margin="12"
              onAnimationEnd={() => setIsFourthTitleAnimationComplete(true)}
              animationActivated={!isFourthTitleAnimationComplete}
            />
            {isFourthTitleAnimationComplete && (
              <div ref={toolsRef} className={skillBoxesStyle}>
                {tools.map(({ id, imageSrc, title, link }) => (
                  <Skill
                    key={id}
                    imageSrc={imageSrc}
                    link={link}
                    title={title}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default Skills;
