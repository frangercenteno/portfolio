import { FC } from "react";

interface TitleSectionProp {
  isDark?: boolean;
  title: string;
}

const TitleSection: FC<TitleSectionProp> = ({ isDark, title }) => {
  return (
    <div className="max-w-3xl m-auto mb-2">
      <h2
        className={`${
          isDark ? "text-secondary-lighter" : "text-secondary-default"
        } font-bold text-2xl`}
      >
        {title}
      </h2>
    </div>
  );
};

export default TitleSection;
