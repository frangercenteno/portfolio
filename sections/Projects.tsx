import { FC } from "react";

import TitleSection from "@/components/TitleSection";
import ItemsProject from "@/components/ItemsProject";
import LinkViewMore from "@/components/LinkViewMore";
import { GitHubData } from "@/interfaces/GitHub";

interface ProjectsProps {
  data: GitHubData[];
}

const Projects: FC<ProjectsProps> = ({ data }) => {
  return (
    <section className="pb-16">
      <TitleSection title="Projects" isDark />

      <div className="shadow-md flex flex-wrap justify-between">
        {data.map((item) => (
          <ItemsProject key={item.id} data={item} />
        ))}
      </div>
      <LinkViewMore url="/projects" />
    </section>
  );
};

export default Projects;
