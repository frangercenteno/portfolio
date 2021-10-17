import { FC } from "react";

import TitleSection from "@/components/TitleSection";
import ItemsExperience from "@/components/ItemsExperience";

import data from "db/experience.json";

const experienceData = data.data;

interface ExperienceProps {
  title: string;
  summary: string;
}

const Experience: FC<ExperienceProps> = ({ title, summary }) => {
  return (
    <div className="bg-primary-lighter py-16" id="experience">
      <div className="container">
        <TitleSection title={title} subTitle={summary} />

        <div className="bg-secondary-lighter experience-container p-8 md:p-12 mx-auto shadow-md">
          {experienceData.map(({ id, company, job, jobDescription }) => (
            <ItemsExperience
              key={id}
              company={company}
              titleJob={job}
              summary={jobDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
