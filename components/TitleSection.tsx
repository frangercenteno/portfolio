import { FC } from "react";

interface TitleSectionProp {
  isDark?: boolean;
  title: string;
  subTitle: string;
}

const TitleSection: FC<TitleSectionProp> = ({ isDark, title, subTitle }) => {
  return (
    <div className="text-center max-w-2xl m-auto mb-16">
      <h2
        className={`${
          isDark ? "text-secondary-lighter" : "text-secondary-default"
        } font-bold text-4xl`}
      >
        {title}
      </h2>
      <h4
        className={`${
          isDark ? "text-secondary-lighter" : "text-secondary-default"
        } font-normal text-base`}
      >
        {subTitle}
      </h4>
    </div>
  );
};

export default TitleSection;
