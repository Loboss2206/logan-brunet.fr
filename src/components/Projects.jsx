import React from "react";

import Project from './Project';
import Title from './CustomTitle';

import react from "../assets/react.png";
import p1 from "../assets/p1.png";
import CustomTitle from "./CustomTitle";

const Projects = () => {
    const links = [
        {
            id: 1,
            title:
                "Title 1",
            date: "22 Juin 2004",
            link: "https://google.com",
            description:
                "Test Description The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
            imageSrc: p1,
            langages: [
                { langage: "React.js", icon: react },
            ],
        },
        {
            id: 2,
            title:
                "Title 1",
            date: "22 Juin 2004",
            link: "https://google.com",
            description:
                "Test Description The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
            imageSrc: p1,
            langages: [
                { langage: "React.js", icon: react },
            ],
        },
        {
            id: 3,
            title:
                "Title 1",
            date: "22 Juin 2004",
            link: "https://google.com",
            description:
                "Test Description",
            imageSrc: p1,
            langages: [
                { langage: "React.js", icon: react },
            ],
        },
        {
            id: 4,
            title:
                "Title 1",
            date: "22 Juin 2004",
            link: "https://google.com",
            description:
                "Test Description",
            imageSrc: p1,
            langages: [
                { langage: "React.js", icon: react },
            ],
        },
        {
            id: 5,
            title:
                "Title 1",
            date: "22 Juin 2004",
            link: "https://google.com",
            description:
                "Test Description",
            imageSrc: p1,
            langages: [
                { langage: "React.js", icon: react },
            ],
        }
    ];

    return (
        <div
            name="Projets"
            className="flex items-center min-h-screen w-full flex-col bg-gradient-to-r from-background-color to-container-bg px-5 pt-20"

            TEST>
            <div className="flex flex-col w-full 2xl:w-2/3">
                <CustomTitle title="ls ~/Projects" margin="8" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0 mt-4">
                    {links.map(
                        ({ id, imageSrc, date, title, description }) => (
                            <Project
                                key={id}
                                imageSrc={imageSrc}
                                date={date}
                                title={title}
                                description={description}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
};
export default Projects;