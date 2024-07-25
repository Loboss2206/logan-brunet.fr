import React, { useState, useEffect, useRef } from "react";
import CustomTitle from "./CustomTitle";
import Project from "./Project";
import projectsMock from "../datas/projects";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const [isTitleAnimationComplete, setIsTitleAnimationComplete] =
    useState(false);
  const projects = projectsMock;
  const projectsRef = useRef(null);

  useEffect(() => {
    if (isTitleAnimationComplete) {
      projectsRef.current.classList.add("fade-in");
    }
  }, [isTitleAnimationComplete]);

  return (
    <div
      name="Projets"
      className={`flex items-center min-h-screen w-full flex-col bg-gradient-to-r from-background-color to-container-bg px-5 md:px-12 pt-32 md:pt-20`}
    >
      <div className="flex flex-col w-full 2xl:w-2/3 flex-grow">
        <CustomTitle
          currentLanguage={localStorage.getItem("currentLangage")}
          title={t(`projects.title`)}
          margin="8"
          onAnimationEnd={() => setIsTitleAnimationComplete(true)}
          animationActivated={!isTitleAnimationComplete}
        />
        {isTitleAnimationComplete && (
          <div
            ref={projectsRef}
            className="opacity-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-0 py-4 mt-4"
          >
            {projects
              .map(({ id, imageSrc, date, title, description, link, tags }) => (
                <Project
                  key={id}
                  id={id}
                  imageSrc={imageSrc}
                  date={t(`projects.${title.replaceAll(" ", "")}.date`, date)}
                  title={t(
                    `projects.${title.replaceAll(" ", "")}.title`,
                    title
                  )}
                  description={t(
                    `projects.${title.replaceAll(" ", "")}.description`,
                    description
                  )}
                  link={link}
                  tags={tags}
                />
              ))
              .filter((project) => project.props.id > 0)
              .sort((a, b) => (a.props.id > b.props.id ? -1 : 1))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
