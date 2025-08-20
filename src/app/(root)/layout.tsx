import React, { ReactNode } from "react";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (!session) redirect("/sign-in");

  return (
    <main className="root-container">
      <div className="blur-container"></div>
      <div className=" relative ">
        <div className="">{children}</div>
      </div>
    </main>
  );
};
export default Layout;
