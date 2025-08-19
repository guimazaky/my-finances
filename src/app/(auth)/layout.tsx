import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="root-container flex justify-center items-center ">
      <div className="blur-container"></div>
      <div className=" relative  ">
        <div className="">{children}</div>
      </div>
    </main>
  );
};
export default Layout;
