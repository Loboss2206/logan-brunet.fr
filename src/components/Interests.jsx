import React, { useRef, useEffect } from "react";
import CustomTitle from "./CustomTitle";
import hinata from "../assets/interests/hinata.png";
import ball from "../assets/interests/ball.png";
import plane from "../assets/interests/plane.png";
import plane2 from "../assets/interests/earth.png";
import narutomaki from "../assets/interests/narutomaki.png";
import japan from "../assets/interests/japan.png";
import InterestBox from "./InterestBox";
import { useTranslation } from "react-i18next";

const Interests = () => {
  const { t, i18n } = useTranslation();
  const [isTitleAnimationComplete, setIsTitleAnimationComplete] =
    React.useState(false);
  const interestsRef = useRef(null);

  useEffect(() => {
    if (isTitleAnimationComplete) {
      interestsRef.current.classList.add("fade-in");
    }
  }, [isTitleAnimationComplete]);

  return (
    <div
      name="Interests"
      className="flex items-center w-full flex-col bg-gradient-to-r from-background-color to-container-bg px-5 md:px-12 pt-20 relative"
    >
      <div className="flex flex-col w-full 2xl:w-2/3">
        <CustomTitle
          currentLanguage={localStorage.getItem("currentLangage")}
          animationActivated={!isTitleAnimationComplete}
          title={t("interests.title")}
          margin="12"
          onAnimationEnd={() => setIsTitleAnimationComplete(true)}
        />
        <div ref={interestsRef} className="opacity-0 p-4 mt-4">
          <div className="hidden md:flex items-center inline relative">
            <div className="flex flex-col items-center mx-auto">
              <div className="flex items-center mx-2">
                <a href="http://www.ffvb.org/" target="_blank" rel="noreferrer">
                  <img
                    src={hinata}
                    alt="Hinata"
                    className="w-full"
                    style={{
                      filter: "drop-shadow(16px 16px 16px rgba(0, 0, 0, 0.25))",
                    }}
                  />
                </a>

                <a href="http://www.ffvb.org/" target="_blank" rel="noreferrer">
                  <img
                    src={ball}
                    alt="Ball"
                    className="w-24 md2:w-36 mb-80 mx-2 animate-spin"
                    style={{
                      filter: "drop-shadow(8px 8px 8px rgba(0, 0, 0, 0.25))",
                    }}
                  />
                </a>
              </div>
              <p className="animate-swing dark:text-white text-4xl font-bold">
                Volley-ball
              </p>
            </div>
            <div className="mx-auto flex flex-col justify-end h-96 px-4">
              <a
                href="https://www.lonelyplanet.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  name="dark"
                  src={plane}
                  alt="Plane"
                  className="w-64 animate-bounce hidden dark:block"
                />
                <img
                  name="light"
                  src={plane2}
                  alt="Plane"
                  className="w-52 mb-8 animate-bounce dark:hidden"
                />
              </a>
              <p className="animate-swing dark:text-white text-4xl font-bold text-center">
                {t("interests.Travelling.title")}
              </p>
            </div>

            <div className="mx-auto flex flex-col justify-end h-96 px-4">
              <a
                href="https://www.japan.travel/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  name="dark"
                  src={narutomaki}
                  alt="Japan"
                  className="w-44 mb-8 animate-bounce hidden dark:block"
                />
                <img
                  name="light"
                  src={japan}
                  alt="Japan"
                  className="w-52 mb-8 animate-bounce dark:hidden"
                />
              </a>
              <p className="animate-swing dark:text-white text-4xl font-bold text-center">
                {t("interests.Japan.title")}
              </p>
            </div>
          </div>
          <div className="md:hidden flex flex-col bg-gray-900/90 dark:bg-gray-800/80 shadow-lg shadow-gray-900/80 dark:shadow-white/50 rounded-lg p-2">
            <InterestBox
              id="1"
              title="Volley-ball"
              description={t("interests.Volley-ball.description")}
              srcImage={ball}
              link="http://www.ffvb.org/"
            />
            <InterestBox
              id="2"
              title={t("interests.Travelling.title")}
              description={t("interests.Travelling.description")}
              srcImage={plane}
              link="https://www.lonelyplanet.com/"
            />
            <InterestBox
              id="3"
              title={t("interests.Japan.title")}
              description={t("interests.Japan.description")}
              srcImage={narutomaki}
              link="https://www.japan.travel/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
