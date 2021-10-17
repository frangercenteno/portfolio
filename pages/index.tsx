import { Fragment } from "react";
import Head from "next/head";

import NavBar from "@/sections/NavBar";
import Hero from "@/sections/Hero";
import Experience from "@/sections/Experience";
import Footer from "@/sections/Footer";
import ReadMe from "@/sections/ReadMe";

import sectionsData from "../db/sections.json";

const { data } = sectionsData;

export default function Home() {

  return (
    <Fragment>
      <Head>
        <title>Franger Dev</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Franger Centento Web Developer Portfolio"/>
        <meta name="author" content="Franger Centeno" />
      </Head>
      <NavBar />
      <Hero {...data["hero"]} />
      <Experience {...data["experience"]} />
      <ReadMe {...data["readme"]} />
      <Footer />
    </Fragment>
  );
}
