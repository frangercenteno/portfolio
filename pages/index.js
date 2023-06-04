import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import TransitionEffect from "../components/TransitionEffect";
import Logo from "@components/Logo";
import Experience from "../components/Experience";

import profilePic from "../public/images/profile/developer-pic-1.png";

// eslint-disable-next-line no-unused-vars
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Franger Centeno</title>
        <meta
          name="description"
          content="As a web developer based in Lisbon, I am dedicated to turning
                ideas into innovative web applications. I have experience in
                Startups, Marketing Agencies and as a Freelancer."
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-center w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Franger Centeno"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/3 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="I'm Franger Centeno"
                className="!text-5xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl  xs:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a web developer based in Lisbon, I am dedicated to turning
                ideas into innovative web applications. I have experience in
                Startups, Marketing Agencies and as a Freelancer.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/CV_Portfolio.pdf"
                  target="_blank"
                  className="flex items-center border-2 border-solid bg-primary p-2.5 px-6 text-lg font-semibold
                  capitalize text-dark hover:border-primary hover:bg-transparent 
                  dark:bg-primaryDark  dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                  md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume
                </Link>
                <Link
                  href="mailto:frangercenteno@outlook.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline  dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <section className="grid w-full grid-cols-8 gap-16 sm:gap-8 mt-64">
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
          </section>
          <Experience />
        </Layout>
      </main>
    </>
  );
}
