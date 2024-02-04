"use client";

import ProblemCodeFetcher from "@/app/components/mainPage/problemCode";
import { usePathname } from "next/navigation";

const MainCodeArea = () => {
  const pathName = usePathname();
  return <ProblemCodeFetcher codeId={Number(pathName.split("/")[2])} />;
};

export default MainCodeArea;
