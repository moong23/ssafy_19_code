"use server";

import CodeDate from "@/components/problemList/problemDate/codeDate";

interface IProblemApiData {
  date: string;
  problems: IProblem[];
}

interface IProblem {
  id: number;
  name: string;
  submissions: number;
}

const CodeList = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_VERSION}/problems`,
    { cache: "no-store" }
  );
  const jsonData = await data.json();
  return (
    <div className="w-[260px] h-full bg-[#262626] shrink-0 overflow-y-scroll">
      {jsonData.items.map((data: IProblemApiData) => (
        <CodeDate
          key={data.date}
          date={data.date}
          problemList={data.problems}
          isOpen={false}
        />
      ))}
    </div>
  );
};

export default CodeList;
