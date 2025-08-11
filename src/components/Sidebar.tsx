import React from "react";
import { ArrowDownUp, DollarSign, FileUser, House } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Sidebar = () => {
  return (
    <div className=" flex flex-col mr-auto w-60 h-screen bg-gradient rounded-r-4xl p-4 antialiased justify-between">
      <div className="flex flex-col gap-4 mt-4  ">
        <div className="mb-8">
          <h1 className="p-4 text-3xl cursor-pointer hover:bg-white rounded-lg">
            MyFinances
          </h1>
        </div>

        <div className="h-10  items-center flex  gap-2  hover:bg-white rounded-lg cursor-pointer">
          <House width={30} />
          <h2 className=" ">Home</h2>
        </div>
        <div className="h-10  items-center flex gap-2 hover:bg-white rounded-lg cursor-pointer">
          <ArrowDownUp width={30} />
          <h2 className="">Transações</h2>
        </div>
        <div className="h-10  items-center flex gap-2  hover:bg-white rounded-lg cursor-pointer">
          <FileUser width={30} />
          <h2>Resumo</h2>
        </div>
        <div className="h-10 items-center flex gap-2  hover:bg-white rounded-lg cursor-pointer">
          <DollarSign width={30} />
          <h2>Valores</h2>
        </div>
      </div>
      <div className="p-4 flex gap-4 items-center cursor-pointer hover:bg-white rounded-2xl ">
        <Avatar className="w-15 h-15">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2>Guilherme Akiyama</h2>
      </div>
    </div>
  );
};
export default Sidebar;
