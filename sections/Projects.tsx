import { FC } from "react";

import TitleSection from "@/components/TitleSection";
import ItemsProject from "@/components/ItemsProject";
import LinkViewMore from "@/components/LinkViewMore";

import { projects } from "../constants";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
  return (
    <section className="pb-16">
      <TitleSection title="Projects" isDark />

      <div className="shadow-md flex flex-wrap justify-between">
        {projects
          .slice(0, 4)
          .map(({ id, name, age, description, technologies, url }) => (
            <ItemsProject
              key={id}
              id={id}
              name={name}
              age={age}
              description={description}
              technologies={technologies}
              url={url}
            />
          ))}
      </div>
      <LinkViewMore url="/projects" />
    </section>
  );
};

export default Projects;
