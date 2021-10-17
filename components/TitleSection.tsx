import { FC } from "react";

interface TitleSectionProp {
  isDark?: boolean;
  title: string;
}

const TitleSection: FC<TitleSectionProp> = ({ isDark, title }) => {
  return (
    <div className="max-w-3xl m-auto mb-16">
      <h2
        className={`${
          isDark ? "text-primary-default" : "text-secondary-default"
        } font-bold text-2xl`}
      >
        {title}
      </h2>
    </div>
  );
};

export default TitleSection;
