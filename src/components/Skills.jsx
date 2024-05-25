import React, { useState, useEffect, useRef } from "react";
import CustomTitle from "./CustomTitle";
import Skill from "./Skill";

import langagesMock from "../datas/langages"
import osMock from "../datas/os"
import toolsMock from "../datas/tools"

const Skills = () => {
    const [isFirstTitleAnimationComplete, setIsFirstTitleAnimationComplete] = useState(false);
    const [isSecondTitleAnimationComplete, setIsSecondTitleAnimationComplete] = useState(false);
    const [isThirdTitleAnimationComplete, setIsThirdTitleAnimationComplete] = useState(false);
    const [isFourthTitleAnimationComplete, setIsFourthTitleAnimationComplete] = useState(false);

    const langages = langagesMock;

    const os = osMock;

    const tools = toolsMock;

    const langagesRef = useRef(null);
    const osRef = useRef(null);
    const toolsRef = useRef(null);

    useEffect(() => {
        if (isSecondTitleAnimationComplete) {
            langagesRef.current.classList.add('fade-in');
        }
    }, [isSecondTitleAnimationComplete]);

    useEffect(() => {
        if (isThirdTitleAnimationComplete) {
            osRef.current.classList.add('fade-in');
        }
    }, [isThirdTitleAnimationComplete]);

    useEffect(() => {
        if (isFourthTitleAnimationComplete) {
            toolsRef.current.classList.add('fade-in');
        }
    }, [isFourthTitleAnimationComplete]);

    return (
        <div
            name="Skills"
            className="flex items-center min-h-screen w-full flex-col bg-gradient-to-r from-background-color to-container-bg px-5 pt-20"
        >
            <div className="flex flex-col w-full 2xl:w-2/3">
                <CustomTitle title="cd ~/Skills" margin="12" onAnimationEnd={() => setIsFirstTitleAnimationComplete(true)} />
                {isFirstTitleAnimationComplete && (
                    <>
                        <CustomTitle title="ls Langages&Frameworks" margin="0" onAnimationEnd={() => setIsSecondTitleAnimationComplete(true)} />
                        {isSecondTitleAnimationComplete && (
                            <div ref={langagesRef} className="opacity-0 bg-gray-800/80 rounded-lg grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-8 sm:px-0 p-4 mt-4">
                                {langages.map(({ id, imageSrc, title, link }) => (
                                    <Skill key={id} imageSrc={imageSrc} link={link} title={title} />
                                ))}
                            </div>
                        )}
                    </>
                )}
                {isSecondTitleAnimationComplete && (
                    <>
                        <CustomTitle title="ls OperatingSystems" margin="12" onAnimationEnd={() => setIsThirdTitleAnimationComplete(true)} />
                        {isThirdTitleAnimationComplete && (
                            <div ref={osRef} className="opacity-0 bg-gray-800/80 rounded-lg grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-8 sm:px-0 p-4 mt-4">
                                {os.map(({ id, imageSrc, title, link }) => (
                                    <Skill key={id} imageSrc={imageSrc} link={link} title={title} />
                                ))}
                            </div>
                        )}
                    </>
                )}
                {isThirdTitleAnimationComplete && (
                    <>
                        <CustomTitle title="ls Tools" margin="12" onAnimationEnd={() => setIsFourthTitleAnimationComplete(true)} />
                        {isFourthTitleAnimationComplete && (
                            <div ref={toolsRef} className="opacity-0 bg-gray-800/80 rounded-lg grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-8 sm:px-0 p-4 mt-4">
                                {tools.map(({ id, imageSrc, title, link }) => (
                                    <Skill key={id} imageSrc={imageSrc} link={link} title={title} />
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
