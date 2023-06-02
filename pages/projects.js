import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import { GithubIcon } from "../components/Icons";
import project1 from "../public/images/projects/board-bjj.vercel.app.jpeg";
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
          {github && (
            <Link href={github} target="_blank" className="w-10 mr-4">
              <GithubIcon />
            </Link>
          )}

          <Link
            href={link}
            target="_blank"
            className="flex items-center border-2 border-solid bg-primary p-2.5 px-6 text-lg font-semibold
    capitalize text-dark hover:border-primary hover:bg-transparent 
    dark:bg-primaryDark  dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
    md:p-2 md:px-4 md:text-base"
          >
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
        <title>Projects | Franger Centeno</title>
        <meta
          name="description"
          content="As a web developer based in Lisbon, I am dedicated to turning
                ideas into innovative web applications. I have experience in
                Startups, Marketing Agencies and as a Freelancer"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination And Knowledge Come Together!"
            className="mb-16 lg:!text-5xl sm:mb-8 !text-7xl sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProjects
                title={"Dashboard Brazilian Jiu Jitsu"}
                summary={
                  "Given the few alternatives on the market for a Brazilian Jui Jitsu scoreboard, I decided to create one of my own with the necessary functionalities for a championship with basic rules."
                }
                link={"https://board-bjj.vercel.app/"}
                img={project1}
                type={"Side Project"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
