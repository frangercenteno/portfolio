import { FC } from "react";
interface HeroProps {
  title: string;
  subtitle: string;
  summary: string;
}

const Hero: FC<HeroProps> = ({ title, subtitle, summary }) => {
  return (
    <div className="bg-secondary-default header-main">
      <div className="container">
        <div className="md:pt-20 lg:py-20 sm:max-w-3xl m-auto">
          <h1 className="text-primary-default text-3xl md:text-4xl font-bold leading-none">
            {title}
          </h1>
          <h2 className="text-secondary-lighter text-2xl font-bold leading-none md:mt-5">
            {subtitle}
          </h2>
          <h3 className="text-secondary-lighter leading-1 mt-5">{summary}</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
