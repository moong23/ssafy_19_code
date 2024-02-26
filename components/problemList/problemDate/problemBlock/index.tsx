"use client";

import IconFile from "@/assets/iconFile";
import { IProblem } from "@/interface/problem";
import { usePathname, useRouter } from "next/navigation";

const ProblemBlock = ({ id, name, isSelected }: IProblem) => {
  const pathName = usePathname();
  const router = useRouter();
  const ICONSTATUS = ["#7B7F8B", "#F6F6F4"];

  //best code
  const handleClickProblem = () => {
    router.push(`/main/${id}`);
  };
  return (
    <div
      onClick={handleClickProblem}
      className={`${
        id === Number(pathName.split("/")[2]) && "bg-[#34363F]"
      } w-full h-8 flex flex-row gap-2 justify-start items-center hover:bg-[#34363F] pl-10 pr-4`}
    >
      <div className="width-[10%]">
        <IconFile
          width={16}
          fill={
            Number(pathName.split("/")[2]) !== id
              ? ICONSTATUS[0]
              : ICONSTATUS[1]
          }
        />
      </div>
      <div className="text-[11px] text-white cursor-pointer truncate">
        {name}
      </div>
    </div>
  );
};

export default ProblemBlock;
