import { Route, Technology } from "./interfaces/Pages";

export const BASE_API = "https://api.github.com/users/frangercenteno/";
export const SITE_URL = "https://franger.dev";
export const SITE_NAME = "Franger Dev";
export const TWITTER_USERNAME = "@frangercenteno";

export const routes: Route[] = [
  {
    name: "Home",
    slug: "/",
    url: "/",
    id: 1,
  },
  {
    name: "About me",
    slug: "/about-me",
    url: "/about-me",
    id: 2,
  },
  {
    name: "Projects",
    slug: "/projects",
    url: "/projects",
    id: 3,
  },
  {
    name: "Posts",
    slug: "/posts",
    url: "/posts",
    id: 4,
  },
];

export const technologies: Technology[] = [
  {
    name: "JavaScript",
    slug: "javascript",
    path: "/img/javascript.svg",
    id: 0,
  },
  {
    name: "Node",
    slug: "nodejs",
    path: "/img/nodejs-icon.svg",
    id: 1,
  },
  {
    name: "React",
    slug: "react",
    path: "/img/react.svg",
    id: 2,
  },
  {
    name: "Graphql",
    slug: "grahpql",
    path: "/img/graphql.svg",
    id: 4,
  },
  {
    name: "Typescript",
    slug: "typescript",
    path: "/img/typescript.svg",
    id: 5,
  },
  {
    name: "Next.js",
    slug: "nextjs",
    path: "/img/next-js.svg",
    id: 6,
  },
];

export const SKILLS = [
  {
    id: "1",
    title: "Front End",
    skills: [
      {
        imageUrl: "/img/skills/react.svg",
        name: "React Js",
      },
      {
        imageUrl: "/img/skills/javascript.svg",
        name: "Javascript",
      },
      {
        imageUrl: "/img/skills/typescript.svg",
        name: "Typescript",
      },
      {
        imageUrl: "/img/skills/next.svg",
        name: "Next Js",
      },
      {
        imageUrl: "/img/skills/css.svg",
        name: "CSS3",
      },
      {
        imageUrl: "/img/skills/sass.svg",
        name: "SASS",
      },
      {
        imageUrl: "/img/skills/styled-components.svg",
        name: "Styled Components",
      },
      {
        imageUrl: "/img/skills/html5.svg",
        name: "HTML5",
      },
      {
        imageUrl: "/img/skills/redux.svg",
        name: "Redux",
      },
      {
        imageUrl: "/img/skills/vue.svg",
        name: "Vue",
      },
    ],
  },
  {
    id: "2",
    title: "Testing",
    skills: [
      {
        imageUrl: "/img/skills/jest.svg",
        name: "Jest",
      },
      {
        imageUrl: "/img/skills/react-testing-library.png",
        name: "React Testing Library",
      },
    ],
  },
  {
    id: "3",
    title: "Back End",
    skills: [
      {
        imageUrl: "/img/skills/nodejs.svg",
        name: "Nodejs",
      },
      {
        imageUrl: "/img/skills/apollo.svg",
        name: "Apollo",
      },
      {
        imageUrl: "/img/skills/graphql.svg",
        name: "GraphQL",
      },
      {
        imageUrl: "/img/skills/express.svg",
        name: "Express",
      },
      {
        imageUrl: "/img/skills/mysql.svg",
        name: "mysql",
      },
      {
        imageUrl: "/img/skills/postgresql.svg",
        name: "postgresql",
      },
    ],
  },
  {
    id: "4",
    title: "Version Control",
    skills: [
      {
        imageUrl: "/img/skills/git.svg",
        name: "git",
      },
      {
        imageUrl: "/img/skills/bitbucket.svg",
        name: "bitbucket",
      },
      {
        imageUrl: "/img/skills/github.svg",
        name: "github",
      },
      {
        imageUrl: "/img/skills/gitlab.svg",
        name: "gitlab",
      },
    ],
  },
  {
    id: "5",
    title: "Project Management",
    skills: [
      {
        imageUrl: "/img/skills/figma.svg",
        name: "figma",
      },
      {
        imageUrl: "/img/skills/jira.svg",
        name: "jira",
      },
      {
        imageUrl: "/img/skills/invision.svg",
        name: "invision",
      },
      {
        imageUrl: "/img/skills/trello.svg",
        name: "trello",
      },
    ],
  },
];
