// Use client-side indication as this file uses client-side data fetching
"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import NODATA from "./NODATA";

// Dynamically import the CodeArea component with no SSR
const CodeArea = dynamic(() => import("@/components/codeArea"), {
  ssr: false,
  // Optional loading component until CodeArea is loaded
  loading: () => <p className="w-full h-full bg-[#282A36]"></p>,
});

const ProblemCodeFetcher = ({ codeId }: { codeId: number }) => {
  const [bestCodeData, setBestCodeData] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDataOnRender = async () => {
    setIsLoading(true);
    try {
      const bestCode = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_VERSION}/problems/${codeId}/best`,
        { cache: "no-store" }
      );
      if (bestCode.status === 204) {
        setBestCodeData(null);
      } else {
        const bestData = await bestCode.json();
        setBestCodeData(bestData.content);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setBestCodeData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataOnRender();
  }, [codeId]);

  if (isLoading) {
    return <p className="w-full h-full bg-[#282A36]"></p>;
  }

  return (
    <>
      {bestCodeData !== null ? (
        <CodeArea
          code={bestCodeData}
          isFixable={false}
        />
      ) : (
        <NODATA />
      )}
    </>
  );
};

export default ProblemCodeFetcher;
