"use client";

import CodeAddArea from "@/components/codeAddArea";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
const CodeAddPage = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // {
  //   "solver": "김문기",
  //   "content": "codecode!",
  //   "password": "비밀번호"
  // }

  const handleSubmitCode = () => {
    if (!name || !password || !code) return;
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/${
          process.env.NEXT_PUBLIC_API_VERSION
        }/codes?problem=${pathName.split("/")[2]}`,
        {
          solver: name,
          content: code,
          password: password,
        }
      )
      .then((res) => {
        if (res.data.type === "good") alert("코드가 등록되었습니다.");
        router.push("/problem/" + pathName.split("/")[2]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full h-full flexCenterCol bg-[#232a36]">
      <div className="w-full h-20 bg-[#232a36] flex flex-row font-bold justify-evenly items-end text-xl text-white border-[#B197E7] border-b-2 py-2">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-1/4 h-10 bg-[#282a36] border-gray-400 border-b-2 text-white px-2 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-1/4 h-10 bg-[#282a36] border-gray-400 border-b-2 text-white px-2 focus:outline-none"
        />
        <button
          className="w-1/6 h-10 bg-[#282a36] text-white font-bold rounded-md"
          onClick={() => {
            handleSubmitCode();
          }}
        >
          submit
        </button>
      </div>
      <CodeAddArea
        code={code}
        onSubmitCode={(code) => setCode(code)}
        isFixable={true}
      />
    </div>
  );
};

export default CodeAddPage;
