"use client";

import { usePathname } from "next/navigation";
import CodeFetcher from "../components/problemPage";

const ProblemPage = () => {
  const pathName = usePathname();
  console.log(pathName.split("/").length);
  return (
    <main className="w-full h-full flex flex-row">
      <div className="bg-[#282a36] w-full h-full flexCenterCol gap-10">
        <div className="font-bold text-3xl text-white">SSAFY 11기 19반</div>
        <div className="font-bold text-2xl text-white">BEST ALGO PROJECT</div>
      </div>
    </main>
  );
};

export default ProblemPage;
