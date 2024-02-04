import Sidebar from "@/components/sidebar";
import { Inter } from "next/font/google";
import "../globals.css";

import CodeList from "../components/mainPage/problemList/codeList";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " flex flex-row"}>
        <Sidebar />
        <CodeList />
        {children}
      </body>
    </html>
  );
}
