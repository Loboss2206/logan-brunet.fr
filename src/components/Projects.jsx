import React, { useState, useEffect, useRef } from "react";
import CustomTitle from "./CustomTitle";
import Project from "./Project";
import projectsMock from "../datas/projects";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const [isTitleAnimationComplete, setIsTitleAnimationComplete] =
    useState(false);
  const [areAllProjectsDisplayed, setAreAllProjectsDisplayed] = useState(false);
  const projects = projectsMock;
  const projectsRef = useRef(null);

  useEffect(() => {
    if (isTitleAnimationComplete) {
      projectsRef.current.classList.add("fade-in");
    }
  }, [isTitleAnimationComplete]);

  const changeDisplayProjects = () => {
    const newDisplay = !areAllProjectsDisplayed;
    setAreAllProjectsDisplayed(newDisplay);

    if (newDisplay === false) {
      window.location.hash = "projects";
    }
  };

  return (
    <div
      id="projects"
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
          <div ref={projectsRef} className="opacity-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-0 py-4 mt-4">
              {projects
                .map(
                  ({ id, imageSrc, date, title, description, link, tags }) => (
                    <Project
                      key={id}
                      id={id}
                      imageSrc={imageSrc}
                      date={t(
                        `projects.${title.replaceAll(" ", "")}.date`,
                        date
                      )}
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
                  )
                )
                .filter((project) => project.props.id > 0)
                .sort((a, b) => (a.props.id > b.props.id ? -1 : 1))
                .slice(0, areAllProjectsDisplayed ? undefined : 3)}{" "}
            </div>
            <button
              className="text-2xl font-bold text-white w-full bg-gray-900/90 dark:bg-gray-800/80 shadow-lg shadow-gray-900/80 dark:shadow-white/50 rounded-md transition-transform transform hover:scale-105 h-12 mt-4"
              onClick={changeDisplayProjects}
            >
              {t(
                `${
                  areAllProjectsDisplayed
                    ? "projects.showLess"
                    : "projects.showMore"
                }`
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
