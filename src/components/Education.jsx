import React, { useState, useEffect, useRef } from "react";
import CustomTitle from "./CustomTitle";
import TreeBranch from "./TreeBranch";
import educationMock from "../mocks/education";
import EducationBox from "./EducationBox";

const Education = () => {
    const [isTitleAnimationComplete, setIsTitleAnimationComplete] = useState(false);
    const [title, setTitle] = useState(""); // Added state for the title
    const education = educationMock;
    const educationRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setTitle("ls ~/Education");
            } else {
                setTitle("tree ~/Education");
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (isTitleAnimationComplete) {
            educationRef.current.classList.add('fade-in');
        }
    }, [isTitleAnimationComplete]);

    return (
        <div
            name="Education"
            className="flex items-center min-h-screen w-full flex-col bg-gradient-to-r from-background-color to-container-bg px-5 pt-20"
        >
            <div className="flex flex-col w-full 2xl:w-2/3">
                <CustomTitle animationActivated={!isTitleAnimationComplete} title={title} margin="12" onAnimationEnd={() => setIsTitleAnimationComplete(true)} key={title} />
                {isTitleAnimationComplete && (
                    <div ref={educationRef} className="p-4 opacity-0 rounded-md mt-4">
                        {education.map(({ id, institution, degree, year, skills, specials, specialsWithImage }, index) => (
                            <div className="hidden md:block" key={id}>
                                <>
                                    <TreeBranch label={`${degree}`} firstPipe={true} secondPipe={true} isLast={index === education.length - 1} depth="0" color="blue" showPipe={true} />
                                    <TreeBranch label={`${institution}`} firstPipe={index !== education.length - 1} secondPipe={false} depth="1" color="white" showPipe={false} />
                                    <TreeBranch label={`${year}`} firstPipe={index !== education.length - 1} secondPipe={false} depth="1" color="white" showPipe={false} />

                                    {skills.length > 0 && (
                                        <>
                                            <TreeBranch label={`Skills`} firstPipe={index !== education.length - 1} isLast={false} depth="1" color="blue" showPipe={false} />
                                            {skills.map((skill, skillIndex) => (
                                                <TreeBranch key={skillIndex} label={`${skill}`} isLast={skillIndex === skills.length - 1} firstPipe={index !== education.length - 1} secondPipe={true} depth="2" color="white" showPipe={false} />))}
                                        </>
                                    )}

                                    {specials.length > 0 && (
                                        <>
                                            {specials.map((special, specialIndex) => (
                                                <TreeBranch key={specialIndex} label={`${special}`} firstPipe={index !== education.length - 1} secondPipe={false} isLast={specialIndex === specials.length - 1 && specialsWithImage.length == 0} depth="1" color="white" showPipe={true} />
                                            ))}
                                        </>
                                    )}

                                    {specialsWithImage.length > 0 && (
                                        <>
                                            {specialsWithImage.map((special, specialIndex) => (
                                                <div>
                                                    <TreeBranch key={specialIndex} label={`${special.title}`} firstPipe={index !== education.length - 1} secondPipe={false} isLast={specialIndex === specialsWithImage.length - 1} depth="1" color="white" showPipe={true} />
                                                    <a href={special.link} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginLeft: '10em' }}>
                                                        <img src={special.srcImage} alt={special.title} className="h-36 rounded-lg bg-gray-200 border-4 border-gray-400 p-2" />
                                                    </a>
                                                </div>
                                            ))}
                                        </>
                                    )}

                                    <TreeBranch empty={true} showPipe={index !== education.length - 1} />
                                </>
                            </div>
                        ))}
                        {education.map(({ id, institution, degree, year, skills, specials, specialsWithImage, srcImage, link }, index) => (
                            <div className="md:hidden" key={id}>
                                <EducationBox degree={degree} institution={institution} year={year} skills={skills} specials={specials} specialsWithImage={specialsWithImage} srcImage={srcImage} link={link} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div >
    );
};

export default Education;