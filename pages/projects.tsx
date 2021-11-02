import { FC } from "react";
import Layout from "@/components/Layout";
import ItemsProject from "@/components/ItemsProject";
import { GitHubData } from "@/interfaces/GitHub";
import { BASE_API } from "../constants";

interface ProjectsProps {
  data: GitHubData[];
}

const Projects: FC<ProjectsProps> = ({ data }) => {
  return (
    <Layout pageTitle="Projects">
      <div className="py-16">
        <h1 className="text-primary-default text-3xl md:text-4xl font-bold leading-none">
          Projects
        </h1>
        <h2 className="text-secondary-lighter text-1xl font-bold leading-none my-2">
          Coming soon...
        </h2>
      </div>
      <div className="shadow-md flex flex-wrap justify-between">
        {data.map((item) => (
          <ItemsProject key={item.id} data={item} />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${BASE_API}repos`);
  const data: GitHubData[] = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data.filter((item) => item.name !== "frangercenteno"),
    },
  };
};

export default Projects;
