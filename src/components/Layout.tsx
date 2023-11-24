import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NavLinks from "./NavLinks";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="fixed bottom-16 z-50 w-full sm:hidden">
        <NavLinks />
      </div>
      <div className="relative top-14 bottom-14 mb-40">{children}</div>

      <Footer />
    </>
  );
};

export default Layout;
