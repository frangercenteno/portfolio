import { GitHubData } from "./GitHub";

export interface Route {
  id: number;
  name: string;
  slug: string;
  url: string;
}

export interface Project {
  data: GitHubData;
}

export interface Technology {
  id: number;
  path: string;
  name: string;
  slug: string;
}

export interface Post {
  id: number;
  title: string;
  summary: string;
  date: string;
  image: string;
  path: string;
}
