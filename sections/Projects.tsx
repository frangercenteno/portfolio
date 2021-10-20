import { FC } from "react";
import Link from "next/link";

import TitleSection from "@/components/TitleSection";
import ItemsProject from "@/components/ItemsProject";

import { projects } from "../constants";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
  return (
    <div className="bg-secondary-default pb-16">
      <div className="container">
        <TitleSection title="Projects" isDark />

        <div className="mx-auto shadow-md max-w-3xl flex flex-wrap justify-between">
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
        <div className="mt-6 max-w-3xl m-auto">
          <Link href="/blog">
            <a
              href="/blog"
              className="text-secondary-lighter text-base hover:text-secondary-lighter"
            >
              Ver más {">"}
              {">"}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
