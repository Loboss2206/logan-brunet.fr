import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

// Projects
import citadels from "../assets/projects/citadels.png";
import elfRunning from "../assets/projects/elf-running.png";
import pokemon from "../assets/projects/pokemon.jpg";
import mosaic from "../assets/projects/mosaic.png";
import portfolio from "../assets/projects/portfolio.png";
import mangattack from "../assets/projects/mangattack.png";
import stitch from "../assets/projects/stitch.png";
import klamar from "../assets/projects/klamar.png";

// Tags
import java from "../assets/langages/java.svg";
import git from "../assets/tools/git.svg";
import maven from "../assets/tools/maven.svg";
import angular from "../assets/langages/angular.svg";
import typescript from "../assets/langages/ts.svg";
import javascript from "../assets/langages/js.svg";
import html from "../assets/langages/html.svg";
import sass from "../assets/langages/sass.svg";
import css from "../assets/langages/css.svg";
import c from "../assets/langages/c.svg";
import postgresql from "../assets/langages/pgsql.svg";
import php from "../assets/langages/php.svg";
import android_studio from "../assets/tools/android-studio.png";
import tailwind from "../assets/langages/tailwind.svg";
import react from "../assets/langages/react.svg";
import vite from "../assets/tools/vite.svg";
import python from "../assets/langages/python.svg";
import ia from "../assets/interests/ia.png";
import apache from "../assets/tools/apache.svg";
import docker from "../assets/tools/docker.svg";
import playwright from "../assets/tools/playwright.png";

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
  sass: {
    tagName: "Sass",
    tagImage: sass,
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
    tagName: "IA",
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
    tags: [tags["c"], tags["IA"]],
  },
  {
    id: 2,
    title: "Pokae",
    date: "February 2022 - June 2022",
    link: "https://github.com/Loboss2206/Pokae",
    description:
      "In the context of the S2.01 project during the second semester of BUT Informatique, we had to create a Pokemon fight game with a console interface. The player can choose his pokemons and fight against another player or a bot based on different algorithms.",
    imageSrc: pokemon,
    tags: [tags["java"], tags["git"], tags["IA"]],
  },
  {
    id: 3,
    title: "StitchLand",
    date: "April 2022",
    link: "https://github.com/Loboss2206/StitchLand",
    description:
      "This project was carried out as part of the mobile development resource during my fourth semester of BUT Informatique. The goal was to create an e-commerce application using various useful and interesting technologies. In our shop, we sell several types of teddy bears, each with its own characteristics.",
    imageSrc: stitch,
    tags: [tags["android_studio"], tags["java"], tags["git"]],
  },
  {
    id: -1,
    title: "KillBique",
    date: "September 2022 - January 2023",
    description: "Test Description",
    imageSrc: java,
    tags: [tags["java"], tags["git"], tags["IA"]],
  },
  {
    id: 5,
    title: "Mozaic Generator",
    date: "March 2023",
    link: "https://github.com/Loboss2206/Mosaic-generator",
    description:
      "This little project was done for the Artificial Intelligence course during my fourth semester of BUT Informatique. The goal was to create a little program that generates a mosaic from a picture with a specific size of blocks. Each block of the main picture will be another picture which matches the best with the color of the block.",
    imageSrc: mosaic,
    tags: [tags["python"], tags["IA"]],
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
      tags["postgresql"],
      tags["git"],
    ],
  },
  {
    id: 7,
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
      tags["vite"],
      tags["git"],
      tags["apache"],
    ],
  },
  {
    id: 8,
    title: "Citadels",
    date: "October 2023 - February 2024",
    link: "https://github.com/Loboss2206/Citadelles",
    description:
      "This educational project, developed for the PS5 course at Polytech Nice-Sophia University, aims to recreate the famous Citadels game and all its features in a simplified version without a graphical interface and playable only by bots.",
    imageSrc: citadels,
    tags: [tags["java"], tags["git"], tags["maven"], tags["IA"]],
  },
  {
    id: 9,
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
      tags["git"],
      tags["html"],
      tags["sass"],
      tags["docker"],
      tags["playwright"],
    ],
  },
];

export default projects;
