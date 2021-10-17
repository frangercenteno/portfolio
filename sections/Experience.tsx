import { FC } from "react";
import Link from "next/link";

import TitleSection from "@/components/TitleSection";
import ItemsExperience from "@/components/ItemsExperience";

import data from "db/experience.json";

const experienceData = data.data;

interface ExperienceProps {
  title: string;
}

const Experience: FC<ExperienceProps> = ({ title }) => {
  return (
    <div className="bg-secondary-default py-16" id="experience">
      <div className="container">
        <TitleSection title={title} isDark />

        <div className="mx-auto shadow-md max-w-3xl flex flex-wrap justify-between">
          {experienceData
            .slice(0, 2)
            .map(({ id, company, job, jobDescription }) => (
              <ItemsExperience
                key={id}
                company={company}
                titleJob={job}
                summary={jobDescription}
              />
            ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/blog">
            <a
              href="/blog"
              className="text-primary-default text-base hover:text-secondary-lighter"
            >
              Ver más
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
