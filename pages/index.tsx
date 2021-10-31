import { FC } from "react";
import { CustomServerSideProps } from "@/interfaces/CustomServerSideProps";

import Layout from "@/components/Layout";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Posts from "@/sections/Posts";

import { BASE_API } from "../constants";
import { GitHubData } from "@/interfaces/GitHub";

interface HomeProps {
  data: GitHubData[];
}

const Home: FC<HomeProps> = ({ data }) => {
  return (
    <Layout>
      <Hero />
      <Projects data={data} />
      <Posts />
    </Layout>
  );
};

export const getServerSideProps: CustomServerSideProps<HomeProps> =
  async () => {
    const res = await fetch(`${BASE_API}repos`);
    const data = await res.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data: data.slice(0, 4),
      },
    };
  };

export default Home;
