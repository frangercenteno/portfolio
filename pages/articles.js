import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import TransitionEffect from "../components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import article1 from "../public/images/articles/create_loading_screen_in_react_js.jpg";
import article3 from "../public/images/articles/create_modal_component_in_react_using_react_portals.png";
import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";

const FramerImage = motion(Image);

const MovingImg = ({ img, title, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave() {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      href={link}
      target="_blank"
      className="w-full inline-block"
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x, y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        src={img}
        alt={title}
        ref={imgRef}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ title, img, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-primary border-r-4 border-b-4 dark:border-primaryDark dark:bg-dark dark:text-light sm:flex-col"
    >
      <MovingImg title={title} link={link} img={img} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-primary  relative dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%]  bg-primary" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.2,
          }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <h2 className="capitalize text-2xl font-bold mb-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const Articles = () => {
  return (
    <>
      <Head>
        <title>Articles</title>
        <meta name="description" content="Articles" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              summary={
                "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              }
              time={"9 min read"}
              link="/"
              img={article1}
            />
            <FeaturedArticle
              title={
                "Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
              }
              summary={
                "Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience."
              }
              time={"10 min read"}
              link="/"
              img={article1}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              img={article3}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Creating An Efficient Modal Component In React Using Hooks And Portals"
              img={article3}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
              img={article3}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Redux Simplified: A Beginner's Guide For Web Developers"
              img={article3}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="What Is Higher Order Component (Hoc) In React?"
              img={article3}
              date="March 22, 2023"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
