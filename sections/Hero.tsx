import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const SUMMARY =
  "Se un par de cosas sobre Javascript en el Front End o Back End";
interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <header className="header-main">
      <div className="py-16  md:flex">
        <div className="sm:w-2/3">
          <h1 className="text-primary-default text-3xl md:text-4xl font-bold leading-none mb-2">
            Franger Centeno
          </h1>
          <h2 className="text-secondary-lighter text-1xl font-bold leading-none md:mt-2">
            Web Developer
          </h2>
          <h3 className="text-secondary-dark leading-1 mt-5">
            {SUMMARY} <br />
            <br />
            <span className="block">
              Puedes leer un poco más{" "}
              <Link href="/about-me">
                <a className="text-primary-default"> sobre mí.</a>
              </Link>
            </span>
          </h3>
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
                loader={({ src }) => `${src}?auto=format&q=80`}
                blurDataURL={"/preferente-logo-bl-wh_1.svg?base64"}
                unoptimized
              />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
