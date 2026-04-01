"use client";
import User from "./components/userSearch";
import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <div
      className={`${isDark ? "bg-[#141D2F] text-white" : "bg-white "} flex flex-col w-full items-center p-4  min-h-screen`}
    >
      <User searchUser="octocat" isDark={isDark} setIsDark={setIsDark} data />
    </div>
  );
}
