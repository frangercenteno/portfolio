import Image from "next/image";

import Layout from "@/components/Layout";
import { SKILLS } from "../constants";

const AboutMe = () => {
  return (
    <Layout pageTitle="About Me">
      <div className="py-16">
        <h1 className="text-primary-default text-3xl md:text-4xl font-bold leading-none">
          About me
        </h1>
      </div>
      <p className="text-secondary-lighter text-sm mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, placeat
        tempore quasi voluptate libero totam saepe commodi hic soluta accusamus
        dolore dignissimos quidem voluptates quas ullam ipsum obcaecati sequi
        porro!
      </p>
      <div className="py-16">
        {SKILLS.map((skill) => (
          <div className="my-4" key={skill.id}>
            <h2 className="text-2xl font-bold">{skill.title}</h2>
            <div className="flex items-center flex-wrap mt-5">
              {skill.skills.map((item, i) => (
                <div
                  key={i.toString()}
                  className="bg-secondary-lighter p-4 flex justify-center items-center relative rounded mr-8 mb-8"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    layout="intrinsic"
                    width={64}
                    height={64}
                    loader={({ src }) => `${src}?auto=format&q=80`}
                    blurDataURL={`${item.imageUrl}?base64`}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default AboutMe;
