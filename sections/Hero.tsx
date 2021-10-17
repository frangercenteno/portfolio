import { FC } from 'react';

type HeroProps = {
  title: string;
  subtitle: string;
  summary: string;
  images: {
    name: string;
    path: string;
    id: number;
  }[]
};

const Hero: FC<HeroProps> = ({
  title,
  subtitle,
  summary,
  images,
}) => {
  return (
    <div className="bg-secondary-default header-main">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-10">
          <div className="md:mt-20 lg:mt-40 lg:max-w-6xl">
            <h1 className="text-primary-default text-3xl md:text-6xl font-bold leading-none">{title}</h1>
            <h2 className="text-secondary-lighter text-3xl font-bold leading-none md:mt-5">
              {subtitle}
            </h2>
            <h3 className="text-secondary-lighter leading-1 mt-5">
              {summary}
            </h3>
          </div>
          <div className="hidden md:block">
            <img src="img/Group_8.svg" alt="decoration"/>
          </div>
        </div>
        <div className="w-full flex justify-center items-center py-10">
          <div className="w-full flex justify-between items-center max-w-sm">
            {images.map(({ path, name, id }) => (
              <img className="w-12" src={path} alt={name} key={id}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
