import { Project, Route, Technology, Post } from "./types";

export const routes: Route[] = [
  {
    name: "Home",
    slug: "/",
    url: "/",
    id: 1,
  },
  {
    name: "About me",
    slug: "about-me",
    url: "/about-me",
    id: 2,
  },
  {
    name: "Projects",
    slug: "projects",
    url: "/projects",
    id: 3,
  },
  {
    name: "Posts",
    slug: "posts",
    url: "/posts",
    id: 4,
  },
];

export const projects: Project[] = [
  {
    id: 0,
    name: "Crehana",
    age: "2021",
    description: "Lorem ipsum",
    technologies: ["node", "javascript", "typescript"],
    url: "/",
  },
  {
    id: 1,
    name: "Crehana",
    age: "2021",
    description: "Lorem ipsum",
    technologies: ["node", "javascript", "typescript"],
    url: "/",
  },
  {
    id: 2,
    name: "Crehana",
    age: "2021",
    description: "Lorem ipsum",
    technologies: ["node", "javascript", "typescript"],
    url: "/",
  },
  {
    id: 3,
    name: "Crehana",
    age: "2021",
    description: "Lorem ipsum",
    technologies: ["node", "javascript", "typescript"],
    url: "/",
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

export const posts: Post[] = [
  {
    id: 0,
    title: "Article Title 1",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos, et aperiam veniam possimus autem accusantium facere corporis, animi quaerat inventore mollitia blanditiis.",
    date: "25 de abril de 2015",
    image: "https://picsum.photos/600/400/?random",
    path: "/blog/article-title-1",
  },
  {
    id: 1,
    title: "Article Title 2",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos, et aperiam veniam possimus autem accusantium facere corporis, animi quaerat inventore mollitia blanditiis.",
    date: "25 de abril de 2015",
    image: "https://picsum.photos/600/400/?random",
    path: "/blog/article-title-2",
  },
  {
    id: 2,
    title: "Article Title 3",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos, et aperiam veniam possimus autem accusantium facere corporis, animi quaerat inventore mollitia blanditiis.",
    date: "25 de abril de 2015",
    image: "https://picsum.photos/600/400/?random",
    path: "/blog/article-title-3",
  },
  {
    id: 3,
    title: "Article Title 4",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos, et aperiam veniam possimus autem accusantium facere corporis, animi quaerat inventore mollitia blanditiis.",
    date: "25 de abril de 2015",
    image: "https://picsum.photos/600/400/?random",
    path: "/blog/article-title-4",
  },
];
