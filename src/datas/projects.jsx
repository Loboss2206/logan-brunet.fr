import p1 from "../assets/p1.png";
// Projects
import citadels from "../assets/projects/citadels.png"

// Tags
import java from "../assets/langages/java.svg";
import git from "../assets/tools/git.svg";
import angular from "../assets/langages/angular.svg";
import typescript from "../assets/langages/ts.svg";
import javascript from "../assets/langages/js.svg";

import p2 from "../assets/arrow.jpg";

const tags = {
    "java": {
        tagName: "Java",
        tagImage: java
    },
    "git": {
        tagName: "Git",
        tagImage: git
    },
    "maven": {
        tagName: "Maven",
        tagImage: ""
    },
    "angular": {
        tagName: "Angular",
        tagImage: angular
    },
    "typescript": {
        tagName: "Typescript",
        tagImage: typescript
    },
    "javascript": {
        tagName: "Javascript",
        tagImage: javascript
    }
};

const projects = [
    {
        id: 1,
        title:
            "Citadels",
        date: "Octobre 2023 - Février 2024",
        link: "https://google.com",
        description:
            "This educational project, developed for the PS5 course at Polytech Nice-Sophia University, aims to recreate the famous Citadels game and all its features in a simplified version without a graphical interface and playable only by bots.",
        imageSrc: citadels,
        tags: [tags["java"], tags["git"]]
    },
    {
        id: 2,
        title:
            "Klamar",
        date: "Février 2024 - Juin 2024",
        link: "https://google.com",
        description:
            "This project was done for the PS6 course at Polytech Nice-Sophia University. The goal was to create a website to help people with the Alzheimer's disease by providing them the possibility to play a quiz (and 2 other surprise games) to stimulate their memory.",
        imageSrc: p1,
        tags: [tags["angular"], tags["typescript"], tags["javascript"], tags["git"]]
    },
    {
        id: 3,
        title:
            "StitchLand",
        date: "Avril 2024",
        link: "https://google.com",
        description:
            "This project was carried out as part of the mobile development resource during my fourth semester of BUT Informatique. The goal was to create an e-commerce application using various useful and interesting technologies. In our shop, we sell several types of teddy bears, each with its own characteristics.",
        imageSrc: p2,
        tags: ["Java", "Design Patterns", "Git", "Maven"],


    },
    {
        id: 4,
        title:
            "Lutin VS Monstres",
        date: "22 Juin 2004",
        link: "https://google.com",
        description:
            "Test Description",
        imageSrc: p1,
        tags: ["Java", "Design Patterns", "Git", "Maven"],

    },
    {
        id: 5,
        title:
            "Pokae",
        date: "22 Juin 2004",
        description:
            "Test Description",
        imageSrc: p1,
        tags: ["Java", "Design Patterns", "Git", "Maven"],

    },
    {
        id: 6,
        title:
            "Mangattack",
        date: "22 Juin 2004",
        description:
            "Test Description",
        imageSrc: p1,
        tags: ["Java", "Design Patterns", "Git", "Maven"],

    },
    {
        id: 7,
        title:
            "Portfolio personnel",
        date: "22 Juin 2004",
        description:
            "Test Description",
        imageSrc: p1,
        tags: ["Java", "Design Patterns", "Git", "Maven"],

    },
    {
        id: 8,
        title:
            "Mozaic Generator",
        date: "22 Juin 2004",
        description:
            "Test Description",
        imageSrc: p1,
        tags: ["Java", "Design Patterns", "Git", "Maven"],

    },
    {
        id: 9,
        title:
            "KillBique",
        date: "22 Juin 2004",
        description:
            "Test Description",
        imageSrc: p1,
        tags: ["Java", "Design Patterns", "Git", "Maven"],

    }
];

export default projects;