import React, { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth } from "../../../auth";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (session) redirect("/");

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
