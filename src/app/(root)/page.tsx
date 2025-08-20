import React from "react";
import Sidebar from "@/components/Sidebar";

import { db } from "@/db/drizzle";
import { users } from "@/db/schema";

const Page = async () => {
  const result = await db.select().from(users);
  console.log(JSON.stringify(result, null, 2));

  return (
    <div className="text-xl text-white  ">
      <Sidebar />
    </div>
  );
};
export default Page;
