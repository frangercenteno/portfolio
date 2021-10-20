import Layout from "@/components/Layout";

import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Posts from "@/sections/Posts";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Posts />
    </Layout>
  );
}
