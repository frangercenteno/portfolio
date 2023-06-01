import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../components/Icons";
import project1 from "../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "../components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative border border-solid border-primary bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8  xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] bg-primary dark:bg-primaryDark xs:-right-2 sm:h-[102%] xs:w-full " />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 course-pointer overflow-auto rounded-lg lg:w-full"
      >
        <FramerImage
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.2,
          }}
          src={img}
          alt={title}
          className="h-auto w-full"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank" className="ml-4 primary-button">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProjects
                title={"Crypto Screener Application"}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the your local currency."
                }
                link={"/"}
                github={"/"}
                img={project1}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                title={"React Portfolio Website"}
                summary={`A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
                page transitions, cool background effects, unique design and it is mobile responsive.`}
                link={"/"}
                github={"/"}
                img={project1}
                type={"Featured Project"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
