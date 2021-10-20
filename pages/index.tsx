import { Fragment } from "react";
import Head from "next/head";

import NavBar from "@/sections/NavBar";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Footer from "@/sections/Footer";
import Posts from "@/sections/Posts";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Franger Dev</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Franger Centento Web Developer Portfolio"
        />
        <meta name="author" content="Franger Centeno" />
      </Head>
      <NavBar />
      <Hero />
      <Projects />
      <Posts />
      <Footer />
    </Fragment>
  );
}
