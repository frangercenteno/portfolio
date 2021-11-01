import { FC } from "react";

import Layout from "@/components/Layout";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Posts from "@/sections/Posts";

import { BASE_API } from "../constants";
import { GitHubData } from "@/interfaces/GitHub";
import Post from "@/interfaces/Post";
import { getAllPosts } from "@/utils/mdxUtils";

interface HomeProps {
  data: GitHubData[];
  posts: Post[];
}

const Home: FC<HomeProps> = ({ data, posts }) => {
  return (
    <Layout>
      <Hero />
      <Projects data={data} />
      <Posts posts={posts} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  try {
    const posts = await getAllPosts([
      "slug",
      "date",
      "thumbnail",
      "title",
      "description",
      "tags",
    ]);
    const res = await fetch(`${BASE_API}repos`);
    const data: GitHubData[] = await res.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data: data.filter((item) => item.name !== "frangercenteno").slice(0, 4),
        posts: posts.slice(0, 3),
      },
    };
  } catch (_) {
    return {
      notFound: true,
    };
  }
};

export default Home;
