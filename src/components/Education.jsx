import React, { useState, useEffect, useRef } from "react";
import CustomTitle from "./CustomTitle";
import TreeBranch from "./TreeBranch";
import educationMock from "../datas/education";
import EducationBox from "./EducationBox";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t, i18n } = useTranslation();
  const [isTitleAnimationComplete, setIsTitleAnimationComplete] =
    useState(false);
  const [title, setTitle] = useState("");
  const education = educationMock;
  const educationRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTitle(t(`education.titleMinSize`));
      } else {
        setTitle(t(`education.titleMaxSize`));
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [i18n.language]);

  useEffect(() => {
    if (isTitleAnimationComplete) {
      educationRef.current.classList.add("fade-in");
    }
  }, [isTitleAnimationComplete]);

  return (
    <div
      name="Education"
      className="flex items-center min-h-screen w-full flex-col bg-gradient-to-r from-background-color to-container-bg px-5 md:px-12 pt-20"
    >
      <div className="flex flex-col w-full 2xl:w-2/3">
        <CustomTitle
          currentLanguage={localStorage.getItem("currentLangage")}
          animationActivated={!isTitleAnimationComplete}
          title={title}
          margin="12"
          onAnimationEnd={() => setIsTitleAnimationComplete(true)}
          key={title}
        />
        {isTitleAnimationComplete && (
          <div ref={educationRef} className="p-4 opacity-0 rounded-md mt-4">
            {education.map(
              (
                {
                  id,
                  institution,
                  degree,
                  year,
                  skills,
                  specials,
                  specialsWithImage,
                },
                index
              ) => (
                <div className="hidden md:block" key={id}>
                  <>
                    <TreeBranch
                      key={"Degree" + id + index}
                      label={t(
                        `education.${institution.replaceAll(" ", "")}.degree`
                      )}
                      firstPipe={true}
                      secondPipe={true}
                      isLast={index === education.length - 1}
                      depth="0"
                      color="blue"
                      showPipe={true}
                    />
                    <TreeBranch
                      key={"Institution" + id + index}
                      label={institution}
                      firstPipe={index !== education.length - 1}
                      secondPipe={false}
                      depth="1"
                      color="white"
                      showPipe={false}
                    />
                    <TreeBranch
                      key={"Year" + id + index}
                      label={year}
                      firstPipe={index !== education.length - 1}
                      secondPipe={false}
                      depth="1"
                      color="white"
                      showPipe={false}
                    />

                    {skills.length > 0 && (
                      <>
                        <TreeBranch
                          key={"Skills" + id + index}
                          label={t(
                            `education.${institution.replaceAll(
                              " ",
                              ""
                            )}.skills.title`
                          )}
                          firstPipe={index !== education.length - 1}
                          isLast={false}
                          depth="1"
                          color="blue"
                          showPipe={false}
                        />
                        {skills.map((skill, skillIndex) => (
                          <TreeBranch
                            key={id + skill + skillIndex}
                            label={
                              i18n.exists(
                                `education.${institution.replaceAll(
                                  " ",
                                  ""
                                )}.skills.${skill.replaceAll(" ", "")}`
                              )
                                ? t(
                                    `education.${institution.replaceAll(
                                      " ",
                                      ""
                                    )}.skills.${skill.replaceAll(" ", "")}`
                                  )
                                : skill
                            }
                            isLast={skillIndex === skills.length - 1}
                            firstPipe={index !== education.length - 1}
                            secondPipe={true}
                            depth="2"
                            color="white"
                            showPipe={false}
                          />
                        ))}
                      </>
                    )}

                    {specials.length > 0 && (
                      <>
                        {specials.map((special, specialIndex) => (
                          <TreeBranch
                            key={id + special + specialIndex}
                            label={t(
                              `education.${institution.replaceAll(
                                " ",
                                ""
                              )}.specials.${special.replaceAll(" ", "")}`
                            )}
                            firstPipe={index !== education.length - 1}
                            secondPipe={false}
                            isLast={
                              specialIndex === specials.length - 1 &&
                              specialsWithImage.length === 0
                            }
                            depth="1"
                            color="white"
                            showPipe={true}
                          />
                        ))}
                      </>
                    )}

                    {specialsWithImage.length > 0 && (
                      <>
                        {specialsWithImage.map((special, specialIndex) => (
                          <div key={id + "specialImg" + specialIndex}>
                            <TreeBranch
                              key={id + special.title + specialIndex}
                              label={t(
                                `education.${institution.replaceAll(
                                  " ",
                                  ""
                                )}.specials.${special.title.replaceAll(
                                  " ",
                                  ""
                                )}.title`
                              )}
                              firstPipe={index !== education.length - 1}
                              secondPipe={false}
                              isLast={
                                specialIndex === specialsWithImage.length - 1
                              }
                              depth="1"
                              color="white"
                              showPipe={true}
                            />
                            <a
                              href={special.link}
                              target="_blank"
                              rel="noreferrer"
                              style={{
                                display: "inline-block",
                                marginLeft: "5.7em",
                                marginTop: "0.5vw",
                              }}
                            >
                              <img
                                src={special.srcImage}
                                alt={t(`education.specials.${special.title}`)}
                                className="h-36 rounded-lg bg-gray-200 border-4 border-gray-400 p-2"
                              />
                            </a>
                          </div>
                        ))}
                      </>
                    )}

                    <TreeBranch
                      key={"end" + id + index}
                      empty={true}
                      showPipe={index !== education.length - 1}
                    />
                  </>
                </div>
              )
            )}
            {education.map(
              ({
                id,
                institution,
                degree,
                year,
                skills,
                specials,
                specialsWithImage,
                srcImage,
                link,
              }) => (
                <div className="md:hidden" key={id + "2"}>
                  <EducationBox
                    key={"box" + id}
                    degree={t(
                      `education.${institution.replaceAll(" ", "")}.degree`,
                      degree
                    )}
                    institution={institution}
                    year={year}
                    skills={skills.map((skill) =>
                      i18n.exists(
                        `education.${institution.replaceAll(
                          " ",
                          ""
                        )}.skills.${skill.replaceAll(" ", "")}`
                      )
                        ? t(
                            `education.${institution.replaceAll(
                              " ",
                              ""
                            )}.skills.${skill.replaceAll(" ", "")}`
                          )
                        : skill
                    )}
                    specials={specials.map((special) =>
                      t(
                        `education.${institution.replaceAll(
                          " ",
                          ""
                        )}.specials.${special.replaceAll(" ", "")}`
                      )
                    )}
                    specialsWithImage={specialsWithImage.map((special) => ({
                      ...special,
                      title: t(
                        `education.${institution.replaceAll(
                          " ",
                          ""
                        )}.specials.${special.title.replaceAll(" ", "")}.title`
                      ),
                      description: t(
                        `education.${institution.replaceAll(
                          " ",
                          ""
                        )}.specials.${special.title.replaceAll(
                          " ",
                          ""
                        )}.description`
                      ),
                    }))}
                    srcImage={srcImage}
                    link={link}
                  />
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
