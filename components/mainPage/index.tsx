"use client";

import ProblemCodeFetcher from "@/app/components/mainPage/problemCode";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const MainPage = () => {
  const pathName = usePathname();

  return (
    <main className="w-full h-full flex flex-row">
      {pathName === "/main" ? (
        <div className="bg-[#282a36] w-full h-full flexCenterCol gap-10">
          <div className="font-bold text-3xl text-white">SSAFY 11기 19반</div>
          <div className="font-bold text-2xl text-white">BEST ALGO PROJECT</div>
        </div>
      ) : (
        <ProblemCodeFetcher codeId={Number(pathName.split("/")[3])} />
      )}
    </main>
  );
};

export default MainPage;
