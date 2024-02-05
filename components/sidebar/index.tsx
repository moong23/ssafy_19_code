"use client";

const ICONSTATUS = ["#7B7F8B", "#F6F6F4"];
import IconCode from "@/assets/iconCode";
import IconCrown from "@/assets/iconCrown";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <aside className="w-11 h-full bg-[#353746] shrink-0 flex flex-col items-start">
      <span
        className={`${
          !pathName.includes("problem") ? "bg-[#3D3D51]" : ""
        } w-full aspect-square flexCenter`}
        onClick={() => router.push("/")}
      >
        <IconCrown
          width={32}
          fill={!pathName.includes("problem") ? ICONSTATUS[1] : ICONSTATUS[0]}
        />
      </span>
      <span
        className={`${
          pathName.includes("problem") ? "bg-[#3D3D51]" : ""
        } w-full aspect-square flexCenter`}
        onClick={() => router.push("/problem")}
      >
        <IconCode
          width={32}
          fill={pathName.includes("problem") ? ICONSTATUS[1] : ICONSTATUS[0]}
        />
      </span>
    </aside>
  );
};

export default Sidebar;
