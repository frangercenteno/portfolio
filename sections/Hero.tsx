import { FC } from "react";

const SUMMARY =
  "Tengo amplio conocimiento con JavaScript y frameworks como React del lado FrontEnd y Express y Node.js en el BackEnd";
interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <div className="bg-secondary-default header-main">
      <div className="container">
        <div className="md:pt-20 lg:py-20 sm:max-w-3xl m-auto">
          <h1 className="text-primary-default text-3xl md:text-4xl font-bold leading-none">
            Franger Centeno
          </h1>
          <h2 className="text-secondary-lighter text-2xl font-bold leading-none md:mt-5">
            Front End Developer
          </h2>
          <h3 className="text-secondary-lighter leading-1 mt-5">{SUMMARY}</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
