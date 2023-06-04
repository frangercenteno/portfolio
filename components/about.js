import Head from "next/head";
import AnimatedText from "./AnimatedText";
import Layout from "./Layout";
import Experience from "./Experience";
import TransitionEffect from "./TransitionEffect";
import Logo from "@components/Logo";

const About = () => {
  return (
    <>
      <Head>
        <title>About | Franger Centeno</title>
        <meta
          name="description"
          content="As a web developer based in Lisbon, I am dedicated to turning
                ideas into innovative web applications. I have experience in
                Startups, Marketing Agencies and as a Freelancer"
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion For Digital Products!"
            className="mb-16 !text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                {" "}
                Hi, I&apos;m Franger, a web developer with a passion for
                creating beautiful, functional, and user-centered digital
                experiences. With more than 5 years of experience in the field.
                I am always looking for new and innovative ways to bring my
                clients&apos; visions to life.
              </p>

              <p className="font-medium mt-8">
                {" "}
                Whether I&apos;m working on a website, CMS, Startups or other
                digital product, I bring my commitment to create excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div className="col-span-3 relative h-max  border-2 border-solid border-primary bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] bg-primary dark:bg-primaryDark " />
              <Logo className="w-full" />
            </div>
          </div>
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default About;
