import { Fragment, ReactNode, FC } from "react";

import NavBar from "@/sections/NavBar";
import Footer from "@/sections/Footer";
import Meta from "@/components/Meta";
interface LayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

const Layout: FC<LayoutProps> = ({ children, pageTitle = "Home" }) => {
  return (
    <Fragment>
      <Meta pageTitle={pageTitle} />
      <div className="bg-secondary-default min-h-screen text-secondary-lighter">
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
