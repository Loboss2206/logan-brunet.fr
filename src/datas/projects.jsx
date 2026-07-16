import typescript from "../assets/langages/ts.svg";

import android_studio from "../assets/tools/android-studio.png";
import angular from "../assets/langages/angular.svg";
import apache from "../assets/tools/apache.svg";
import auSecoursJim from "../assets/projects/au-secours-jim.png";
import benefitHub from "../assets/projects/benefit-hub.png";
import c from "../assets/langages/c.svg";
import citadels from "../assets/projects/citadels.png";
import css from "../assets/langages/css.svg";
import cypress from "../assets/tools/cypress.svg";
import docker from "../assets/tools/docker.svg";
import dsl from "../assets/projects/dsl.png";
import elfRunning from "../assets/projects/elf-running.png";
import git from "../assets/tools/git.svg";
import halo from "../assets/projects/halo.png";
import html from "../assets/langages/html.svg";
import ia from "../assets/interests/ia.png";
import java from "../assets/langages/java.svg";
import javascript from "../assets/langages/js.svg";
import jenkins from "../assets/tools/jenkins.png";
import jfrog from "../assets/tools/jfrog.webp";
import kafka from "../assets/tools/kafka.svg";
import klamar from "../assets/projects/klamar.png";
import langium from "../assets/langages/langium.png";
import loupsGarousGMAssistant from "../assets/projects/lg-gm-assistant.jpg";
import mangattack from "../assets/projects/mangattack.png";
import maven from "../assets/tools/maven.svg";
import mosaic from "../assets/projects/mosaic.png";
import mqtt from "../assets/tools/mqtt.png";
import nestjs from "../assets/langages/nestjs.svg";
import nginx from "../assets/tools/nginx.webp";
import nodejs from "../assets/langages/node.png";
import php from "../assets/langages/php.svg";
import playwright from "../assets/tools/playwright.png";
import pokemon from "../assets/projects/pokemon.jpg";
import portfolio from "../assets/projects/portfolio.png";
import postgresql from "../assets/tools/pgsql.webp";
import python from "../assets/langages/python.svg";
import react from "../assets/langages/react.svg";
import scss from "../assets/langages/scss.svg";
import sophiaEats from "../assets/projects/sophia-eats.png";
import stitch from "../assets/projects/stitch.png";
import tailwind from "../assets/langages/tailwind.svg";
import vite from "../assets/tools/vite.svg";

const tags = {
  java: {
    tagName: "Java",
    tagImage: java,
  },
  git: {
    tagName: "Git",
    tagImage: git,
  },
  maven: {
    tagName: "Maven",
    tagImage: maven,
  },
  angular: {
    tagName: "Angular",
    tagImage: angular,
  },
  typescript: {
    tagName: "Typescript",
    tagImage: typescript,
  },
  javascript: {
    tagName: "Javascript",
    tagImage: javascript,
  },
  html: {
    tagName: "HTML",
    tagImage: html,
  },
  scss: {
    tagName: "SCSS",
    tagImage: scss,
  },
  css: {
    tagName: "CSS",
    tagImage: css,
  },
  c: {
    tagName: "C",
    tagImage: c,
  },
  postgresql: {
    tagName: "PostgreSQL",
    tagImage: postgresql,
  },
  php: {
    tagName: "PHP",
    tagImage: php,
  },
  android_studio: {
    tagName: "Android Studio",
    tagImage: android_studio,
  },
  tailwind: {
    tagName: "Tailwind",
    tagImage: tailwind,
  },
  react: {
    tagName: "React",
    tagImage: react,
  },
  vite: {
    tagName: "Vite",
    tagImage: vite,
  },
  python: {
    tagName: "Python",
    tagImage: python,
  },
  IA: {
    tagName: "AI",
    tagImage: ia,
  },
  apache: {
    tagName: "Apache",
    tagImage: apache,
  },
  docker: {
    tagName: "Docker",
    tagImage: docker,
  },
  playwright: {
    tagName: "Playwright",
    tagImage: playwright,
  },
  nodejs: {
    tagName: "Node.js",
    tagImage: nodejs,
  },
  kafka: {
    tagName: "Kafka",
    tagImage: kafka,
  },
  mqtt: {
    tagName: "MQTT",
    tagImage: mqtt,
  },
  nestjs: {
    tagName: "NestJS",
    tagImage: nestjs,
  },
  nginx: {
    tagName: "Nginx",
    tagImage: nginx,
  },
  cypress: {
    tagName: "Cypress",
    tagImage: cypress,
  },
  langium: {
    tagName: "Langium",
    tagImage: langium,
  },
  jenkins: {
    tagName: "Jenkins",
    tagImage: jenkins
  },
  jfrog: {
    tagName: "JFrog",
    tagImage: jfrog
  }
};

const projects = [
  {
    id: 1,
    title: "Lutin VS Monstres",
    date: "October 2021 - January 2022",
    link: "https://github.com/Loboss2206/LutinVsMonstres",
    description:
      "This project was developped for the S1.01 project at the IUT of Nice. The goal was to create a game where a lutin has to avoid monsters in a grid by using movements wrote in a file.",
    imageSrc: elfRunning,
    tags: [tags["c"], tags["IA"]]
  },
  {
    id: 2,
    title: "Pokae",
    date: "February 2022 - June 2022",
    link: "https://github.com/Loboss2206/Pokae",
    description:
      "In the context of the S2.01 project during the second semester of BUT Informatique, we had to create a Pokemon fight game with a console interface. The player can choose his pokemons and fight against another player or a bot based on different algorithms.",
    imageSrc: pokemon,
    tags: [tags["java"], tags["IA"]]
  },
  {
    id: 3,
    title: "StitchLand",
    date: "April 2022",
    link: "https://github.com/Loboss2206/StitchLand",
    description:
      "This project was carried out as part of the mobile development resource during my fourth semester of BUT Informatique. The goal was to create an e-commerce application using various useful and interesting technologies. In our shop, we sell several types of teddy bears, each with its own characteristics.",
    imageSrc: stitch,
    tags: [tags["android_studio"], tags["java"]]
  },
  {
    id: -1,
    title: "KillBique",
    date: "September 2022 - January 2023",
    description: "Test Description",
    imageSrc: java,
    tags: [tags["java"], tags["IA"]]
  },
  {
    id: 5,
    title: "Mozaic Generator",
    date: "March 2023",
    link: "https://github.com/Loboss2206/Mosaic-generator",
    description:
      "This little project was done for the Artificial Intelligence course during my fourth semester of BUT Informatique. The goal was to create a little program that generates a mosaic from a picture with a specific size of blocks. Each block of the main picture will be another picture which matches the best with the color of the block.",
    imageSrc: mosaic,
    tags: [tags["python"], tags["IA"]]
  },
  {
    id: 6,
    title: "Mangattack",
    date: "April 2023 - September 2023",
    link: "https://github.com/Loboss2206/MangAttack",
    description:
      "This project was developed on my own and aims to create a manga shop where users can buy mangas and read them online (not for real). A main page allows users to see the latest mangas and the most popular ones. They can also click on a manga to see its details. It also includes an admin page, a cart system and a login system.",
    imageSrc: mangattack,
    tags: [
      tags["html"],
      tags["css"],
      tags["php"],
      tags["postgresql"]
    ]
  },
  {
    id: 7,
    title: "Citadels",
    date: "October 2023 - February 2024",
    link: "https://github.com/Loboss2206/Citadelles",
    description:
      "This educational project, developed for the PS5 course at Polytech Nice-Sophia University, aims to recreate the famous Citadels game and all its features in a simplified version without a graphical interface and playable only by bots.",
    imageSrc: citadels,
    tags: [tags["java"], tags["maven"], tags["IA"]]
  },
  {
    id: 8,
    title: "Klamar",
    date: "February 2024 - June 2024",
    link: "https://github.com/Loboss2206/Klamar",
    description:
      "This project was done for the PS6 course at Polytech Nice-Sophia University. The goal was to create a website to help people with the Alzheimer's disease by providing them the possibility to play a quiz (and 2 other surprise games) to stimulate their memory.",
    imageSrc: klamar,
    tags: [
      tags["angular"],
      tags["typescript"],
      tags["javascript"],
      tags["html"],
      tags["scss"],
      tags["docker"],
      tags["playwright"]
    ]
  },
  {
    id: 9,
    title: "Personal Portfolio",
    date: "September 2023 - June 2024",
    link: "https://github.com/Loboss2206/logan-brunet.fr",
    description:
      "This project is my personnal portfolio and it allows people who doesn't know me to discover my skills, my experiences, my projects, my hobbies and some other informations about me. It can be used on any device and is fully responsive and finally it also allows people to contact me by sending me a mail.",
    imageSrc: portfolio,
    tags: [
      tags["react"],
      tags["tailwind"],
      tags["javascript"],
      tags["docker"],
      tags["nginx"],
      tags["vite"]
    ]
  },
  {
    id: 10,
    title: "SophiaEats",
    date: "September 2024 - December 2024",
    link: "https://github.com/Loboss2206/SophiaEats",
    description:
      "SophiaTech Eat is a university project aimed at developing a campus food delivery platform, fully decentralized into autonomous microservices (users, orders, restaurants, and an API gateway). Developed with a rigorous focus on software quality (TDD, CI/CD, and Cucumber testing), the system highlights an advanced and seamless group-ordering workflow. Participants can join a group using a shared code, select their meals, and individually manage their own extra toppings or discounts, all while benefiting from an optimized cart and payment system.",
    imageSrc: sophiaEats,
    tags: [tags["java"], tags["typescript"], tags["angular"], tags["html"], tags["css"]]
  },
  {
    id: 11,
    title: "BenefitHub",
    date: "January 2025 - April 2025",
    link: "https://github.com/Loboss2206/ISA-DEVOPS-SI4",
    description:
      "BenefitHub is an academic project balancing service-oriented architecture design (ISA) and the implementation of a continuous integration infrastructure (DevOps). For the ISA part, we developed a modular ecosystem using Java 21, Maven, and PostgreSQL, featuring a backend, an interactive CLI, and Node.js microservices simulating a bank and an external partner. For the DevOps part, we deployed an automated Jenkins pipeline that manages publishing our packages to JFrog Artifactory, multi-service containerization with Docker-Compose, and deployment onto a dedicated virtual machine.",
    imageSrc: benefitHub,
    tags: [tags["java"], tags["nodejs"], tags["docker"], tags["postgresql"], tags["maven"], tags["jenkins"], tags["jfrog"]]
  },
  {
    id: 12,
    title: "HALO",
    date: "September 2025 - November 2025",
    link: "https://github.com/Loboss2206/HALO-IAL-SI5",
    description:
      "HALO is a university project aimed at securing home care for the elderly through IoT. It relies on connected sensors that transmit health data in real time to a central server. The application generates clear tracking charts and sends automated reminders to doctors or alerts in case of anomalies, ensuring optimal medical responsiveness.",
    imageSrc: halo,
    tags: [tags["javascript"], tags["typescript"], tags["kafka"], tags["mqtt"], tags["java"], tags["docker"], tags["nodejs"], tags["postgresql"]]
  },
  {
    id: 13,
    title: "AuSecoursJim",
    date: "September 2025 - November 2025",
    link: "https://github.com/Loboss2206/AuSecoursJim",
    description:
      "Au Secours Jim is a university project featuring an interactive ordering kiosk (fast-food style) based on microservices, designed to compare two architectural patterns: one utilizing a BFF (Backend-for-Frontend) and the other relying on direct communication without any intermediary. The application manages the entire user journey, from item selection and fine-grained ingredient customization to real-time order tracking post-payment. It allows splitting the bill based on various parameters and integrates a group ordering feature: from a predefined menu, each participant selects their items and pays for any extra toppings or sides they add.",
    imageSrc: auSecoursJim,
    tags: [tags["angular"], tags["nestjs"], tags["typescript"], tags["javascript"], tags["html"], tags["scss"], tags["docker"]]
  },
  {
    id: 14,
    title: "MLLSSlideDeckML",
    date: "December 2025 - January 2026",
    link: "https://github.com/Loboss2206/MLLS-SlideDeckML",
    description:
      "SlideDeckMl is a university project designed to build a dedicated Domain-Specific Language (DSL) for creating dynamic, modern, and highly interactive web presentations. Built with Langium and Node.js, it allows users to structure slides using a grid layout system (Boxes), leverage reusable components, and embed rich content such as LaTeX equations (via KaTeX), syntax-highlighted code, and videos. The framework stands out with its real-time interactivity features, including live presentation annotation tools and an audience-engaging LiveQuiz system connected via QR Codes.",
    imageSrc: dsl,
    tags: [tags["langium"], tags["nodejs"], tags["typescript"]]
  },
  {
    id: 15,
    title: "LoupsGarousGMAssistant",
    date: "July 2025 - Present",
    link: "https://github.com/Loboss2206/Loups-Garous-GM-Assistant",
    description:
      "Developed as a personal project, this application serves as a tracking tool for the Game Master during a game of Werewolf. It allows logging players' roles and actions in real time. It is the perfect assistant to streamline the flow of the game and ensure that no crucial decision is missed during the night phase.",
    imageSrc: loupsGarousGMAssistant,
    tags: [tags["react"], tags["tailwind"], tags["typescript"], tags["vite"], tags["docker"], tags["nginx"], tags["cypress"]]
  }
];

export default projects;
