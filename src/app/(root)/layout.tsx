import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="root-container">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>
      <div className=" relative ">
        <div className="">{children}</div>
      </div>
    </main>
  );
};
export default Layout;
