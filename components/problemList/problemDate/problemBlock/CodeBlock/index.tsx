"use client";

import IconFile from "@/assets/iconFile";
import { ICandidates, IProblem, ICandidate } from "@/interface/problem";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import IconChevDown from "@/assets/iconChevDown";
import IconGithub from "@/assets/iconGithub";
import IconTerminal from "@/assets/iconTerminal";

const ProblemCodeBlock = ({ id, name, isSelected }: IProblem) => {
  const pathName = usePathname();
  const router = useRouter();
  const ICONSTATUS = ["#7B7F8B", "#F6F6F4"];
  const [candidateList, setCandidateList] = useState<ICandidate[]>();

  const handleClickProblem = () => {
    router.push(`/problem/${id}`);
  };

  const handleCodeOpen = (cId: number) => {
    router.push(`/problem/${id}/code/${cId}`);
  };

  const handleCodeAdd = () => {
    router.push(`/problem/${id}/code/add`);
  };

  const handleFetchData = async () => {
    const candidate = await fetch(
      `
    ${process.env.NEXT_PUBLIC_API_URL}/${
        process.env.NEXT_PUBLIC_API_VERSION
      }/problems/${pathName.split("/")[2]}/codes
    `,
      { cache: "no-store" }
    );
    const candiData: ICandidates = await candidate.json();
    console.log(candiData);
    setCandidateList(candiData.codes);
  };
  useEffect(() => {
    if (Number(pathName.split("/")[2]) !== id) return;
    handleFetchData();
  }, [pathName]);

  return (
    <>
      <div
        onClick={handleClickProblem}
        className={`${
          id === Number(pathName.split("/")[2]) && "bg-[#34363F]"
        } w-full h-8 flex flex-row gap-2 justify-start items-center hover:bg-[#34363F] pl-10 pr-4`}
      >
        <IconChevDown
          width={12}
          height={12}
          fill={"white"}
          direction={id === Number(pathName.split("/")[2]) ? "down" : "right"}
        />
        <IconFile
          width={16}
          fill={
            Number(pathName.split("/")[2]) !== id
              ? ICONSTATUS[0]
              : ICONSTATUS[1]
          }
        />
        <div className="text-[11px] text-white cursor-pointer truncate">
          {name}
        </div>
      </div>
      {isSelected && (
        <div className="flex flex-col">
          {candidateList &&
            candidateList.length > 0 &&
            candidateList.map((candidate) => (
              <div
                key={candidate.id}
                onClick={() => handleCodeOpen(candidate.id)}
                className={`${
                  candidate.id === Number(pathName.split("/")[4]) &&
                  "bg-[#34363F]"
                } w-full h-8 pl-14 gap-4 flex items-center hover:bg-[#34363F] cursor-pointer text-[14px] text-white truncate`}
              >
                <IconGithub
                  width={16}
                  height={16}
                  fill={"white"}
                />
                {candidate.name}
              </div>
            ))}
          <div
            onClick={handleCodeAdd}
            className={`${
              pathName.split("/")[4] === "add" && "bg-[#34363f]"
            } w-full h-8 pl-14 gap-4 flex items-center hover:bg-[#34363f] cursor-pointer text-[14px] text-white`}
          >
            <IconTerminal
              width={16}
              fill={"white"}
            />
            Upload My Code
          </div>
        </div>
      )}
    </>
  );
};

export default ProblemCodeBlock;
