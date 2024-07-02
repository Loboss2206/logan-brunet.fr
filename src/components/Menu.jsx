import React, { useState, useEffect, useCallback } from "react";
import App from "../App.jsx";

const Menu = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleMobileMenu = () => {
        setIsActive(!isActive);
        setTimeout(
            () => setMobileMenuOpen(!isActive),
            500
        );
        console.log(isActive);
    };

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        const html = document.querySelector("html");
        html.classList.toggle("dark");
    };

    function isMobile() {
        const userAgent = navigator.userAgent;
        const mobileDevices = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];

        for (let i = 0; i < mobileDevices.length; i++) {
            if (mobileDevices[i].test(userAgent)) {
                return true;
            }
        }

        return false;
    }

    const handleResize = useCallback(() => {
        if (window.innerWidth > 975) {
            setMobileMenuOpen(false);
            setIsActive(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    const height = "50";

    return (
        <>
            <div className="menu fixed top-0 left-0 w-full z-50">
                <div className="menu-container flex flex-col md2:flex-row md2:items-center justify-between px-8 bg-emerald-900 bg-opacity-90 dark:bg-opacity-80 text-white relative h-20">
                    <div className={`order-1 md2:order-2 flex items-center justify-center absolute top-1/2 left-6 sm:left-1/2 transform sm:-translate-x-1/2 -translate-y-1/2`}>
                        <a href="about" className="block w-full h-full">
                            <p className={`responsive-text text-green-500 font-bold m-0`}>LOGAN BRUNET</p>
                        </a>
                    </div>


                    <div style={{ marginTop: `1.125rem` }} className="md2:hidden absolute right-6 flex-row-reverse md2:order-2">
                        <button onClick={toggleMobileMenu} className={`focus:outline-none p-2 ${isActive ? "active" : "not-active"} ham`}>
                            <span className="lineMenu"></span>
                            <span className="lineMenu"></span>
                            <span className="lineMenu"></span>
                        </button>
                    </div>

                    <nav className="hidden md2:flex md2:order-1 md2:mt-1 md2:space-x-6">
                        <a href="about">
                            <p className={`animate-swing-hover text-white text-2xl font-bold py-2 duration-300 hover:scale-125`}>ABOUT</p>
                        </a>
                        <a href="contact">
                            <p className={`animate-swing-hover text-white text-2xl font-bold py-2 duration-300 hover:scale-125`}>CONTACT</p>
                        </a>
                    </nav>

                    <div id="icons" className="hidden md2:flex md2:space-x-4 md2:order-4">
                        {!isMobileMenuOpen && (
                            <div className="md2:mt-1 mr-6">
                                <input
                                    className="toggle--checkbox cursor-pointer"
                                    type="checkbox"
                                    id="toggle"
                                    checked={isDarkTheme}
                                    onChange={toggleTheme}
                                />                                <label for="toggle" className="toggle--label cursor-pointer">
                                    <span className="toggle--label-background"></span>
                                </label>
                            </div>
                        )}

                        <a href="https://www.linkedin.com/in/blogan06/" target="_blank" rel="noreferrer" className={`duration-300 hover:scale-125`}>
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
                        <a href="https://github.com/Loboss2206" target="_blank" rel="noreferrer" className={`duration-300 hover:scale-125`}>
                            <svg
                                fill="#FFFFFF"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50"
                                width={`${height}px`}
                                height={`${height}px`}
                            >
                                <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
                            </svg>
                        </a>
                        <a href="https://twitter.com/blogan206" target="_blank" rel="noreferrer" className={`duration-300 hover:scale-125`}>
                            <svg
                                fill="#FFFFFF"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50"
                                width={`${height}px`}
                                height={`${height}px`}
                            >
                                <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="mobile-menu border-2 border-white/25 bg-emerald-900 bg-opacity-90 dark:bg-opacity-80 rounded-b-2xl text-white px-8 py-4 md2:hidden flex flex-col items-center justify-center">
                        <nav className="flex space-x-4">
                            <a href="about">
                                <p className={`animate-swing-hover text-white responsive-text2 font-bold`}>ABOUT</p>
                            </a>
                            <a href="contact">
                                <p className={`animate-swing-hover text-white responsive-text2 font-bold`}>CONTACT</p>
                            </a>
                        </nav>
                        <div id="icons" className="flex space-x-4 mt-4">
                            <a href="https://www.linkedin.com/in/blogan06/" target="_blank" rel="noreferrer" className={`duration-300 hover:scale-125 responsive-icon`}>
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
                            <a href="https://github.com/Loboss2206" target="_blank" rel="noreferrer" className={`duration-300 hover:scale-125 hover:text-green-500`}>
                                <svg
                                    fill="#FFFFFF"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                    width={`${height * 0.85}px`}
                                    height={`${height * 0.85}px`}
                                >
                                    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com/blogan206" target="_blank" rel="noreferrer" className={`duration-300 hover:scale-125`}>
                                <svg
                                    fill="#FFFFFF"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                    width={`${height * 0.85}px`}
                                    height={`${height * 0.85}px`}
                                >
                                    <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
                                </svg>
                            </a>
                            <div className="ml-6">
                                <input className="toggle--checkbox cursor-pointer" type="checkbox" id="toggle" checked={isDarkTheme}
                                    onChange={toggleTheme} />
                                <label for="toggle" className="toggle--label cursor-pointer">
                                    <span className="toggle--label-background"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                )}
            </div >
        </>
    );
};

export default Menu;
