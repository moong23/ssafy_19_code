"use client";

import ProblemCodeFetcher from "@/app/components/mainPage/problemCode";
import CodeFetcher from "@/app/components/problemPage";
import { usePathname } from "next/navigation";

const MainCodeArea = () => {
  const pathName = usePathname();
  return <CodeFetcher codeId={Number(pathName.split("/")[4])} />;
};

export default MainCodeArea;
