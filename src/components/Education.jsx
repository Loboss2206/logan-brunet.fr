import React from "react";
import CustomTitle from "./CustomTitle";
import TreeBranch from "./TreeBranch";

const Education = () => {
    const educationData = [
        {
            id: 1,
            institution: "Polytech Nice-Sophia",
            degree: "Graduate University degree in Engineering",
            year: "2023-2024",
            skills: [
                "Github",
                "Java",
                "C",
                "Angular",
                "SQL"
            ],
        },
        {
            id: 2,
            institution: "IUT de Nice Fabron",
            degree: "Two-year University of Technology degree",
            year: "2021-2023",
            skills: [
                "Java",
                "C",
                "SQL",
                "HTML",
                "CSS",
                "Javascript",
                "PHP"
            ],
        },
    ];

    return (
        <div
            name="Education"
            className="flex items-center min-h-screen w-full flex-col bg-gradient-to-r from-background-color to-container-bg px-5 pt-20"
        >
            <div className="flex flex-col w-full 2xl:w-2/3">
                <CustomTitle title="tree ~/Education" margin="24" />
                <div className="p-4 /*bg-green-800 opacity-80*/ rounded-md mt-4">
                    {educationData.map(({ id, institution, degree, year, skills }, index) => (
                        <div key={id}>
                            {index === educationData.length - 1 && (
                                <>
                                    <TreeBranch label={`${degree}`} firstPipe={true} secondPipe={true} isLast={index === educationData.length - 1} depth="0" color="green" showPipe={true} />
                                    <TreeBranch label={`${institution}`} firstPipe={false} secondPipe={false} depth="1" color="white" showPipe={false} />
                                    <TreeBranch label={`${year}`} firstPipe={false} secondPipe={false} depth="1" color="white" showPipe={false} />

                                    {skills.length > 0 && (
                                        <>
                                            <TreeBranch label={`Skills`} isLast={true} depth="1" color="green" showPipe={false} />
                                            {skills.map((skill, skillIndex) => (
                                                <TreeBranch key={skillIndex} label={`${skill}`} isLast={skillIndex === skills.length - 1} depth="2" color="white" showPipe={false} />
                                            ))}
                                        </>
                                    )}

                                    <TreeBranch empty={true} showPipe={false} />
                                </>
                            )}
                            {index !== educationData.length - 1 && (
                                <>
                                    <TreeBranch label={`${degree}`} firstPipe={false} secondPipe={false} isLast={index === educationData.length - 1} depth="0" color="blue" showPipe={true} />
                                    <TreeBranch label={`${institution}`} firstPipe={true} secondPipe={false} depth="1" color="white" showPipe={true} />
                                    <TreeBranch label={`${year}`} firstPipe={true} secondPipe={false} depth="1" color="white" showPipe={true} />

                                    {skills.length > 0 && (
                                        <>
                                            <TreeBranch label={`Skills`} firstPipe={true} secondPipe={false} isLast={true} depth="1" color="blue" showPipe={true} />
                                            {skills.map((skill, skillIndex) => (
                                                <TreeBranch key={skillIndex} label={`${skill}`} firstPipe={true} secondPipe={false} isLast={skillIndex === skills.length - 1} depth="2" color="white" showPipe={true} />
                                            ))}
                                        </>
                                    )}

                                    <TreeBranch empty={true} showPipe={true} />
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
