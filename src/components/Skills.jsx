import React, { useState } from "react";
import CustomTitle from "./CustomTitle";
import OS from "./Skill";
import p1 from "../assets/p1.png";
import Skill from "./Skill";

const Skills = () => {
    const [isFirstTitleAnimationComplete, setIsFirstTitleAnimationComplete] = useState(false);
    const [isSecondTitleAnimationComplete, setIsSecondTitleAnimationComplete] = useState(false);
    const [isThirdTitleAnimationComplete, setIsThirdTitleAnimationComplete] = useState(false);
    const [isFourthTitleAnimationComplete, setIsFourthTitleAnimationComplete] = useState(false);

    const langages = [
        {
            id: 1,
            title: "Title 1",
            link: "https://google.com",
            imageSrc: p1,
        },
    ];

    const os = [
        {
            id: 1,
            title: "Linux 1",
            link: "https://www.linux.org/",
            imageSrc: p1,
        },
        {
            id: 2,
            title: "Linux 2",
            link: "https://www.linux.org/",
            imageSrc: p1,
        },
        {
            id: 3,
            title: "Linux 3",
            link: "https://www.linux.org/",
            imageSrc: p1,
        },
        {
            id: 4,
            title: "Linux 4",
            link: "https://www.linux.org/",
            imageSrc: p1,
        },
        {
            id: 5,
            title: "Linux 5",
            link: "https://www.linux.org/",
            imageSrc: p1,
        },
        {
            id: 6,
            title: "Linux 6",
            link: "https://www.linux.org/",
            imageSrc: p1,
        },
        {
            id: 7,
            title: "Linux 7",
            link: "https://www.linux.org/",
            imageSrc: p1,
        },
        {
            id: 8,
            title: "Linux 8",
            link: "https://www.linux.org/",
            imageSrc: p1,
        },
        {
            id: 9,
            title: "Linux 9",
            link: "https://www.linux.org/",
            imageSrc: p1,
        }
    ];

    const tools = [
        {
            id: 1,
            title: "Title 1",
            link: "https://google.com",
            imageSrc: p1,
        },
    ];

    return (
        <div
            name="Skills"
            className="flex items-center min-h-screen w-full flex-col bg-gradient-to-r from-background-color to-container-bg px-5 pt-20"
        >
            <div className="flex flex-col w-full 2xl:w-2/3">
                <CustomTitle title="cd ~/Skills" margin="24" onAnimationEnd={() => setIsFirstTitleAnimationComplete(true)} />
                {isFirstTitleAnimationComplete && (
                    <>
                        <CustomTitle title="ls Langages&Frameworks" margin="0" onAnimationEnd={() => setIsSecondTitleAnimationComplete(true)} />
                        {isSecondTitleAnimationComplete && (
                            <div className="bg-green-800 bg-opacity-80 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 sm:px-0">
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
                            <div className="bg-green-800 bg-opacity-80 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 sm:px-0">
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
                            <div className="bg-green-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 sm:px-0">
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
