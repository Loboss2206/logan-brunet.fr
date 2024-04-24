import React, { useState, useEffect, useRef } from "react";
import CustomTitle from "./CustomTitle";
import TreeBranch from "./TreeBranch";
import educationMock from "../mocks/education";

const Education = () => {
    const [isTitleAnimationComplete, setIsTitleAnimationComplete] = useState(false);
    const education = educationMock;
    const educationRef = useRef(null);

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
                <CustomTitle title="tree ~/Education" margin="12" onAnimationEnd={() => setIsTitleAnimationComplete(true)} />
                {isTitleAnimationComplete && (
                    <div ref={educationRef} className="p-4 opacity-0 rounded-md mt-4">
                        {education.map(({ id, institution, degree, year, skills, specials }, index) => (
                            <div key={id}>
                                <>
                                    <TreeBranch label={`${degree}`} firstPipe={true} secondPipe={true} isLast={index === education.length - 1} depth="0" color="blue" showPipe={true} />
                                    <TreeBranch label={`${institution}`} firstPipe={index !== education.length - 1} secondPipe={false} depth="1" color="white" showPipe={false} />
                                    <TreeBranch label={`${year}`} firstPipe={index !== education.length - 1} secondPipe={false} depth="1" color="white" showPipe={false} />

                                    {skills.length > 0 && (
                                        <>
                                            <TreeBranch label={`Skills`} firstPipe={index !== education.length - 1} isLast={false} depth="1" color="blue" showPipe={false} />
                                            {skills.map((skill, skillIndex) => (
                                                <TreeBranch key={skillIndex} label={`${skill}`} isLast={skillIndex === skills.length - 1} firstPipe={index !== education.length - 1} secondPipe={true} depth="2" color="white" showPipe={false} />
                                            ))}
                                        </>
                                    )}

                                    {specials.length > 0 && (
                                        <>
                                            {specials.map((special, specialIndex) => (
                                                <TreeBranch key={specialIndex} label={`${special}`} firstPipe={index !== education.length - 1} secondPipe={false} isLast={specialIndex === specials.length - 1} depth="1" color="white" showPipe={true} />
                                            ))}
                                        </>
                                    )}

                                    <TreeBranch empty={true} showPipe={index !== education.length - 1} />
                                </>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Education;
