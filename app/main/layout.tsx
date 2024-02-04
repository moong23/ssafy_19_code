import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import ProblemList from "../components/mainPage/problemList";
import Sidebar from "@/components/sidebar";
// import ProblemList from "../components/problemList";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SSAFY_11th_19",
  description: "best_algo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " flex flex-row"}>
        <Sidebar />
        <ProblemList />
        {children}
      </body>
    </html>
  );
}
