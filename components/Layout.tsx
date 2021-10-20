import { Fragment, ReactNode, FC } from "react";
import Head from "next/head";

import NavBar from "@/sections/NavBar";
import Footer from "@/sections/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
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
      <div className="bg-secondary-default min-h-screen">
        <div className="container">
          <div className="w-full max-w-3xl m-auto">
            <NavBar />
            <div className="mt-18">{children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
