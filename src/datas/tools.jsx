import git from "../assets/tools/git.svg";
import github from "../assets/tools/github.svg";
import gitlab from "../assets/tools/gitlab.svg";
import vsc from "../assets/tools/vscode.svg";
import intellij from "../assets/tools/intellij.svg";
import android_studio from "../assets/tools/android-studio.png";
import notion from "../assets/tools/notion.png";
import postman from "../assets/tools/postman.svg";
import docker from "../assets/tools/docker.svg";

const tools = [
    {
        id: 1,
        title: "Git",
        link: "https://git-scm.com/",
        imageSrc: git,
    },
    {
        id: 2,
        title: "GitHub",
        link: "https://github.com/",
        imageSrc: github,

    },
    {
        id: 3,
        title: "GitLab",
        link: "https://about.gitlab.com/",
        imageSrc: gitlab,
    },
    {
        id: 4,
        title: "VS Code",
        link: "https://code.visualstudio.com/",
        imageSrc: vsc,
    },
    {
        id: 5,
        title: "IntelliJ",
        link: "https://www.jetbrains.com/idea/",
        imageSrc: intellij,
    },
    {
        id: 6,
        title: "Android Studio",
        link: "https://developer.android.com/studio",
        imageSrc: android_studio,
    },
    {
        id: 7,
        title: "Notion",
        link: "https://www.notion.so/",
        imageSrc: notion,
    },
    {
        id: 8,
        title: "Postman",
        link: "https://www.postman.com/",
        imageSrc: postman,
    },
    {
        id: 9,
        title: "Docker",
        link: "https://www.docker.com/",
        imageSrc: docker,
    },
];

export default tools;