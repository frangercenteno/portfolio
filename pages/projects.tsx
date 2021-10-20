import Layout from "@/components/Layout";
import ItemsProject from "@/components/ItemsProject";
import { projects } from "../constants";

const Projects = () => {
  return (
    <Layout>
      <div className="py-20">
        <h1 className="text-primary-default text-3xl md:text-4xl font-bold leading-none">
          Projects
        </h1>
        <h2 className="text-secondary-lighter text-1xl font-bold leading-none md:my-2">
          Coming soon...
        </h2>
      </div>
      <div className="shadow-md flex flex-wrap justify-between">
        {projects.map(({ id, name, age, description, technologies, url }) => (
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
    </Layout>
  );
};

export default Projects;
