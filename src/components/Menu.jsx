import React, { useCallback, useEffect, useState } from "react";
import en from "../assets/flags/en.png";
import fr from "../assets/flags/fr.png";
import github from "../assets/tools/github.svg";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t, i18n } = useTranslation();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleMobileMenu = () => {
    setIsActive(!isActive);
    setTimeout(() => setMobileMenuOpen(!isActive), 500);
  };

  const toggleTheme = () => {
    const newDarkMode = !isDarkTheme;
    setIsDarkTheme(newDarkMode);

    localStorage.setItem("darkMode", newDarkMode);

    const html = document.querySelector("html");
    html.classList.toggle("dark", newDarkMode);
  };

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "fr" : "en";

    localStorage.setItem("currentLangage", newLanguage);

    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const handleResize = useCallback(() => {
    if (window.innerWidth > 1024) {
      setMobileMenuOpen(false);
      setIsActive(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    const html = document.querySelector("html");
    if (localStorage.getItem("darkMode") === "true") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  const height = "50";

  return (
    <>
      <div className="menu fixed top-0 left-0 w-full z-50">
        <div className="menu-container flex flex-row lg:items-center justify-between px-8 bg-emerald-900 bg-opacity-90 dark:bg-opacity-80 text-white relative h-20">
          <div className="hidden sm:flex lg:hidden items-center h-full space-x-8 ml-2">
            <button
              className="relative flex items-center justify-center"
              type="button"
              onClick={handleChangeLanguage}
            >
              <img
                src={currentLanguage === "en" ? fr : en}
                className="h-8 w-12"
              />
              <svg
                className="absolute bottom-0 right-0 translate-x-3/4 translate-y-1/4"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99268 12.984C4.44039 12.984 3.99268 13.4318 3.99268 13.984C3.99268 14.3414 4.18016 14.655 4.46214 14.8319L7.14976 17.5195C7.54029 17.91 8.17345 17.91 8.56398 17.5195C8.9545 17.129 8.9545 16.4958 8.56398 16.1053L7.44275 14.984H14.9927C15.545 14.984 15.9927 14.5363 15.9927 13.984C15.9927 13.4318 15.545 12.984 14.9927 12.984L5.04213 12.984C5.033 12.9839 5.02388 12.9839 5.01476 12.984H4.99268Z"
                  fill="white"
                />
                <path
                  d="M19.0076 11.0158C19.5599 11.0158 20.0076 10.5681 20.0076 10.0158C20.0076 9.65844 19.8201 9.34484 19.5381 9.16801L16.8505 6.48039C16.46 6.08987 15.8268 6.08987 15.4363 6.48039C15.0457 6.87092 15.0457 7.50408 15.4363 7.89461L16.5575 9.01583L9.00757 9.01583C8.45528 9.01583 8.00757 9.46355 8.00757 10.0158C8.00757 10.5681 8.45528 11.0158 9.00757 11.0158L18.9581 11.0158C18.9672 11.016 18.9764 11.016 18.9855 11.0158H19.0076Z"
                  fill="white"
                />
              </svg>
            </button>
            <div className="ml-6">
              <input
                className="toggle--checkbox cursor-pointer"
                type="checkbox"
                id="toggle"
                checked={isDarkTheme}
                onChange={toggleTheme}
              />
              <label htmlFor="toggle" className="toggle--label cursor-pointer">
                <span className="toggle--label-background"></span>
              </label>
            </div>
          </div>

          <div
            className={`order-1 lg:order-2 sm:mx-auto sm:my-auto flex items-center justify-center absolute sm:relative md:absolute top-1/2 sm:top-0 md:top-1/2 left-6 sm:left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 sm:-translate-y-0 md:-translate-y-1/2`}
          >
            <a href="about" className="block w-full h-full">
              <p className={`responsive-text text-green-500 font-bold m-0`}>
                LOGAN BRUNET
              </p>
            </a>
          </div>

          <div
            style={{ marginTop: `1.125rem` }}
            className="lg:hidden absolute right-6 flex-row-reverse md2:order-2"
          >
            <button
              onClick={toggleMobileMenu}
              className={`focus:outline-none p-2 ${isActive ? "active" : "not-active"
                } ham`}
            >
              <span className="lineMenu"></span>
              <span className="lineMenu"></span>
              <span className="lineMenu"></span>
            </button>
          </div>
          <nav className="hidden lg:flex md2:order-1 md2:mt-1 md2:space-x-6">
            <a href="about">
              <p
                className={`animate-swing-hover text-white text-2xl font-bold py-2 duration-300 hover:scale-125`}
              >
                {t("header.about")}
              </p>
            </a>
            <a href="contact">
              <p
                className={`animate-swing-hover text-white text-2xl font-bold py-2 duration-300 hover:scale-125`}
              >
                {t("header.contact")}
              </p>
            </a>
            <button
              className="relative flex items-center justify-center"
              type="button"
              onClick={handleChangeLanguage}
            >
              <img
                src={currentLanguage === "en" ? fr : en}
                className="h-8 w-12 relative ml-2"
              />
              <svg
                className="absolute bottom-0 right-0 translate-x-3/4 translate-y-1/4"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99268 12.984C4.44039 12.984 3.99268 13.4318 3.99268 13.984C3.99268 14.3414 4.18016 14.655 4.46214 14.8319L7.14976 17.5195C7.54029 17.91 8.17345 17.91 8.56398 17.5195C8.9545 17.129 8.9545 16.4958 8.56398 16.1053L7.44275 14.984H14.9927C15.545 14.984 15.9927 14.5363 15.9927 13.984C15.9927 13.4318 15.545 12.984 14.9927 12.984L5.04213 12.984C5.033 12.9839 5.02388 12.9839 5.01476 12.984H4.99268Z"
                  fill="white"
                />
                <path
                  d="M19.0076 11.0158C19.5599 11.0158 20.0076 10.5681 20.0076 10.0158C20.0076 9.65844 19.8201 9.34484 19.5381 9.16801L16.8505 6.48039C16.46 6.08987 15.8268 6.08987 15.4363 6.48039C15.0457 6.87092 15.0457 7.50408 15.4363 7.89461L16.5575 9.01583L9.00757 9.01583C8.45528 9.01583 8.00757 9.46355 8.00757 10.0158C8.00757 10.5681 8.45528 11.0158 9.00757 11.0158L18.9581 11.0158C18.9672 11.016 18.9764 11.016 18.9855 11.0158H19.0076Z"
                  fill="white"
                />
              </svg>
            </button>
          </nav>
          <div id="icons" className="hidden lg:flex md2:space-x-4 md2:order-4">
            {!isMobileMenuOpen && (
              <div className="md2:mt-1 mr-6">
                <input
                  className="toggle--checkbox cursor-pointer"
                  type="checkbox"
                  id="toggle"
                  checked={isDarkTheme}
                  onChange={toggleTheme}
                />{" "}
                <label
                  htmlFor="toggle"
                  className="toggle--label cursor-pointer"
                >
                  <span className="toggle--label-background"></span>
                </label>
              </div>
            )}

            <a
              href="https://www.linkedin.com/in/blogan06/"
              target="_blank"
              rel="noreferrer"
              className={`duration-300 hover:scale-125`}
            >
              <svg
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width={`${height}px`}
                height={`${height}px`}
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
              </svg>
            </a>
            <a
              href="https://github.com/Loboss2206"
              target="_blank"
              rel="noreferrer"
              className={`duration-300 hover:scale-125`}
            >
              <img
                src={github}
                width={`${height}px`}
                height={`${height}px`}
              ></img>
            </a>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu border-2 border-white/25 bg-emerald-900 bg-opacity-90 dark:bg-opacity-80 rounded-b-2xl text-white px-8 py-4 lg:hidden flex flex-col items-center justify-center">
            <nav className="flex space-x-4">
              <a href="about">
                <p
                  className={`animate-swing-hover text-white responsive-text2 font-bold`}
                >
                  {t("header.about")}
                </p>
              </a>
              <a href="contact">
                <p
                  className={`animate-swing-hover text-white responsive-text2 font-bold`}
                >
                  {t("header.contact")}
                </p>
              </a>
            </nav>
            <div id="icons" className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/in/blogan06/"
                target="_blank"
                rel="noreferrer"
                className={`duration-300 hover:scale-125 responsive-icon`}
              >
                <svg
                  fill="#FFFFFF"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width={`${height * 0.85}px`}
                  height={`${height * 0.85}px`}
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                </svg>
              </a>
              <a
                href="https://github.com/Loboss2206"
                target="_blank"
                rel="noreferrer"
                className={`duration-300 hover:scale-125 hover:text-green-500`}
              >
                <img
                  src={github}
                  width={`${height * 0.85}px`}
                  height={`${height * 0.85}px`}
                ></img>
              </a>
            </div>
            <div className="flex sm:hidden space-x-8 mt-4 ml-2">
              <button
                className="relative flex items-center justify-center"
                type="button"
                onClick={handleChangeLanguage}
              >
                <img
                  src={currentLanguage === "en" ? fr : en}
                  className="h-8 w-12"
                />
                <svg
                  className="absolute bottom-0 right-0 translate-x-3/4 translate-y-1/4"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.99268 12.984C4.44039 12.984 3.99268 13.4318 3.99268 13.984C3.99268 14.3414 4.18016 14.655 4.46214 14.8319L7.14976 17.5195C7.54029 17.91 8.17345 17.91 8.56398 17.5195C8.9545 17.129 8.9545 16.4958 8.56398 16.1053L7.44275 14.984H14.9927C15.545 14.984 15.9927 14.5363 15.9927 13.984C15.9927 13.4318 15.545 12.984 14.9927 12.984L5.04213 12.984C5.033 12.9839 5.02388 12.9839 5.01476 12.984H4.99268Z"
                    fill="white"
                  />
                  <path
                    d="M19.0076 11.0158C19.5599 11.0158 20.0076 10.5681 20.0076 10.0158C20.0076 9.65844 19.8201 9.34484 19.5381 9.16801L16.8505 6.48039C16.46 6.08987 15.8268 6.08987 15.4363 6.48039C15.0457 6.87092 15.0457 7.50408 15.4363 7.89461L16.5575 9.01583L9.00757 9.01583C8.45528 9.01583 8.00757 9.46355 8.00757 10.0158C8.00757 10.5681 8.45528 11.0158 9.00757 11.0158L18.9581 11.0158C18.9672 11.016 18.9764 11.016 18.9855 11.0158H19.0076Z"
                    fill="white"
                  />
                </svg>
              </button>
              <div className="ml-6">
                <input
                  className="toggle--checkbox cursor-pointer"
                  type="checkbox"
                  id="toggle"
                  checked={isDarkTheme}
                  onChange={toggleTheme}
                />
                <label
                  htmlFor="toggle"
                  className="toggle--label cursor-pointer"
                >
                  <span className="toggle--label-background"></span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
