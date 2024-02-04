// Use client-side indication as this file uses client-side data fetching
"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import NODATA from "../mainPage/problemCode/NODATA";

const CodeArea = dynamic(() => import("@/components/codeArea"), {
  ssr: false,
  loading: () => <p className="w-full h-full bg-[#282A36]"></p>,
});

const CodeFetcher = ({ codeId }: { codeId: number }) => {
  const [codeData, setCodeData] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDataOnRender = async () => {
    setIsLoading(true);
    try {
      const code = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_VERSION}/codes/${codeId}`
      );
      if (code.status === 204) {
        setCodeData(null);
      } else {
        const data = await code.json();
        setCodeData(data.content);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setCodeData(null);
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
      {codeData !== null ? (
        <CodeArea
          code={codeData}
          isFixable={false}
        />
      ) : (
        <NODATA />
      )}
    </>
  );
};

export default CodeFetcher;
