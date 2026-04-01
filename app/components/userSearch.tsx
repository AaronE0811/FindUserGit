"use client";
import { useState, useEffect } from "react";
import { callApi } from "../services/callApi";
import { CiSearch } from "react-icons/ci";

import userApi from "../hook/userApi";
import Pc from "./pcComponent";
import Mobile from "./mobileComponent";
import Nav from "./nav.components";

interface UserProps {
  searchUser: string;
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  data: any;
}

function User({ searchUser, isDark, setIsDark }: UserProps) {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    callApi({ search });
  }, []);

  {
    /*isDark*/
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim() === "") {
      return;
    }
    datos(search);
    console.log(search);
  };

  {
    /*datos hook*/
  }
  const { loading, error, data, datos } = userApi();

  const hasData = !loading && data && !error;

  const notFound = !loading && error;

  return (
    <div className={`flex lg:w-182 md:w-182 w-full flex-col gap-8 m-4`}>
      <Nav isDark={isDark} setIsDark={setIsDark} />
      <form onSubmit={handleSubmit}>
        <div
          className={`search w-full h-17 p-2 items-center shadow-xl rounded-2xl ${isDark ? "bg-[#1E2A47] text-white" : "bg-white "} relative flex gap-2 justify-evenly lg:justify-between md:justify-between`}
        >
          <CiSearch className="absolute gap-2 left-4 text-[#0079FF] w-4 h-4" />
          <input
            type="text"
            placeholder="Search GitHub username..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={` w-full pl-8 text-[#4B6A9B]`}
          />
          <button
            type="submit"
            className="h-12  font-bold text-[16px] w-24 text-[white] bg-[#0079FF] p-2 rounded-2xl"
          >
            Search
          </button>
        </div>
      </form>
      <main>
        {loading ? (
          <div className="w-full mt-20 flex justify-center items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#0079FF] mb-4"></div>
            <h1 className="font-bold text-[20px]">Searching user...</h1>
          </div>
        ) : hasData ? (
          <>
            <Pc isDark={isDark} data={data} />
            <Mobile isDark={isDark} data={data} />
          </>
        ) : error ? (
          <div
            className={`w-full flex flex-col justify-center items-center ${isDark ? "bg-[#1E2A47] text-white" : "bg-white shadow"} rounded-2xl p-4`}
          >
            <h1
              className={`mt-2 mb-2 font-bold text-[22px] leading-[120%] ${isDark ? "text-white" : "text-[#2B3442]"}`}
            >
              Not results found
            </h1>
            <p
              className={`w-[70%] text-center font-regular mb-4 text-[16px] leading-[150%] "text-[#90A4D4]`}
            >
              We couldn’t find any GitHub users matching your search. Please
              double-check the username and try again.
            </p>
          </div>
        ) : (
          <div
            className={`w-full flex flex-col justify-center items-center ${isDark ? "bg-[#1E2A47] text-white" : "bg-white shadow"} rounded-2xl p-4`}
          >
            <h1
              className={`mt-2 mb-2 font-bold text-[22px] leading-[120%] ${isDark ? "text-white" : "text-[#2B3442]"}`}
            >
              Find a GitHub user
            </h1>
          </div>
        )}
      </main>
    </div>
  );
}

export default User;
