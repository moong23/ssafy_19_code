"use client";

import IconCalendar from "@/assets/iconCalendar";
import IconChevDown from "@/assets/iconChevDown";
import moment from "moment";
import "moment/locale/ko";
import { useState } from "react";
import { IProbDateProps } from "@/interface/problem";
import ProblemCodeBlock from "../problemBlock/CodeBlock";
import { usePathname } from "next/navigation";

const CodeDate = ({ date, problemList, isOpen }: IProbDateProps) => {
  const [open, setOpen] = useState(isOpen);
  const pathName = usePathname();
  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className={`w-full h-8 flex flex-row gap-2 pl-4 justify-start items-center cursor-pointer hover:bg-[#34363F]`}
      >
        <IconChevDown
          width={12}
          height={12}
          fill={"white"}
          direction={!open ? "right" : "down"}
        />
        <IconCalendar
          width={16}
          height={16}
          fill={"orange"}
        />
        <div className="font-normal text-xs text-white cursor-pointer">
          {moment(date).format("MM월 DD일 dddd")}
        </div>
      </div>
      {open &&
        problemList.map((problem) => (
          <ProblemCodeBlock
            key={problem.id}
            id={problem.id}
            name={problem.name}
            submissions={problem.submissions}
            isSelected={Number(pathName.split("/")[2]) === problem.id}
          />
        ))}
    </>
  );
};

export default CodeDate;
