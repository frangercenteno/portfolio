import { FC } from "react";
import Image from "next/image";
interface HeroProps {
  title: string;
  subtitle: string;
  summary: string;
  images: {
    name: string;
    path: string;
    id: number;
  }[];
}

const Hero: FC<HeroProps> = ({ title, subtitle, summary, images }) => {
  return (
    <div className="bg-secondary-default header-main">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-10">
          <div className="md:mt-20 lg:my-20 lg:max-w-6xl">
            <h1 className="text-primary-default text-3xl md:text-6xl font-bold leading-none">
              {title}
            </h1>
            <h2 className="text-secondary-lighter text-3xl font-bold leading-none md:mt-5">
              {subtitle}
            </h2>
            <h3 className="text-secondary-lighter leading-1 mt-5">{summary}</h3>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute inset-0">
              <Image
                src="/img/Group_8.svg"
                alt="Franger.dev"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center py-10">
          <div className="w-full flex justify-between items-center max-w-sm">
            {images.map(({ path, name, id }) => (
              <div key={id} className="w-8 h-8 lg:w-12 lg:h-12 relative">
                <Image
                  layout="fill"
                  objectPosition="center"
                  objectFit="contain"
                  src={path}
                  alt={name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
