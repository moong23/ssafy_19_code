"use server";

import ProblemDate from "@/components/problemList/problemDate";

interface IProblemApiData {
  date: string;
  problems: IProblem[];
}

interface IProblem {
  id: number;
  name: string;
  submissions: number;
}

const ProblemList = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_VERSION}/problems`,
    { cache: "no-store" }
  );
  const jsonData = await data.json();
  return (
    <div className="w-[260px] h-full bg-[#262626] shrink-0">
      {jsonData.items.map((data: IProblemApiData) => (
        <ProblemDate
          key={data.date}
          date={data.date}
          problemList={data.problems}
          isOpen={false}
        />
      ))}
    </div>
  );
};

export default ProblemList;
