import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const SUMMARY =
  "Tengo amplio conocimiento con JavaScript y frameworks como React del lado FrontEnd y Express y Node.js en el BackEnd";
interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <div className="bg-secondary-default header-main">
      <div className="container">
        <div className="py-20 sm:max-w-3xl m-auto md:flex">
          <div className="sm:w-2/3">
            <h1 className="text-primary-default text-3xl md:text-4xl font-bold leading-none">
              Franger Centeno
            </h1>
            <h2 className="text-secondary-lighter text-1xl font-bold leading-none md:mt-2">
              Front End Developer
            </h2>
            <h3 className="text-secondary-dark leading-1 mt-5">{SUMMARY}</h3>
          </div>
          <div className="hidden sm:block sm:w-2/3 sm:text-right">
            <Link href="/">
              <a className="cursor-pointer">
                <Image
                  src="/preferente-logo-bl-wh_1.svg"
                  width={280}
                  height={180}
                  layout="intrinsic"
                  alt="Franger Dev"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
