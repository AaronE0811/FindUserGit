import { IoLocationOutline } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { IoGlobe } from "react-icons/io5";
interface UserProps {
  isDark: boolean;
  data: any;
}
function Pc({ isDark, data }: UserProps) {
  const date = new Date(data.created_at).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const hasBio = data.bio === null;
  return (
    <div
      className={`hidden mt-8 md:flex w-full lg:flex justify-start ${isDark ? "bg-[#1E2A47] shadow" : "bg-[#ffffff] shadow"} rounded-2xl p-4 gap-4`}
    >
      <div className="w-17 ml-20 mr-10 h-17 rounded-full overflow-hidden">
        <img
          className="w-full h-full rounded-full"
          src={data.avatar_url}
          alt={data.name}
        />
      </div>
      <div className="flex flex-col w-[70%] ">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1
              className={`font-bold text-[26px] leading-[120%] ${isDark ? "text-white" : "text-[#2B3442]"}`}
            >
              {data.name}
            </h1>
            <p className="font-regular text-[16px] leading-[150%] text-[#0079FF]">
              @{data.login}
            </p>
          </div>
          <p className=" font-regular text-[14px] leading-[150%] text-[#4B6A9B]">
            Joined {date}
          </p>
        </div>
        <p className="font-regular  text-[16px] leading-[150%] text-[#4B6A9B] mt-4">
          {hasBio ? "This profile has no bio." : data.bio}
        </p>
        <div
          className={` ${isDark ? "bg-[#141D2F]" : "bg-[#F6F8FF]"} w-full p-2 rounded flex justify-start gap-12 pl-4 mt-4`}
        >
          <div className="">
            <p
              className={`font-regular text-[16px] leading-[150%] ${isDark ? "text-white" : "text-[#4B6A9B]"}`}
            >
              Repos
            </p>
            <p
              className={`font-bold text-[22px] leading-[150%] ${isDark ? "text-white" : "text-[#2B3442]"}`}
            >
              {data.public_repos}
            </p>
          </div>
          <div>
            <p
              className={`font-regular text-[16px] leading-[150%] ${isDark ? "text-white" : "text-[#4B6A9B]"}`}
            >
              Followers
            </p>
            <p
              className={`font-bold text-[22px] leading-[150%] ${isDark ? "text-white" : "text-[#2B3442]"}`}
            >
              {data.followers}
            </p>
          </div>
          <div>
            <p
              className={`font-regular text-[16px] leading-[150%] ${isDark ? "text-white" : "text-[#4B6A9B]"}`}
            >
              Following
            </p>
            <p
              className={`font-bold text-[22px] leading-[150%] ${isDark ? "text-white" : "text-[#2B3442]"}`}
            >
              {data.following}
            </p>
          </div>
        </div>
        <div className="flex w-full gap-2 mt-2">
          <div className="flex flex-col gap-4 mr-10">
            <p
              className={`font-regular text-[16px] leading-[150%] flex items-center gap-2 ${isDark ? "text-white" : "text-[#4B6A9B]"}`}
            >
              <IoLocationOutline />
              {data.location ? data.location : "Not available"}
            </p>
            <p
              className={`font-regular flex items-center gap-2 text-[16px] leading-[150%] ${isDark ? "text-white" : "text-[#4B6A9B]"}`}
            >
              <MdOutlineMail />
              {data.email ? data.email : "Not available"}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p
              className={`font-regular flex items-center gap-2 text-[16px] leading-[150%] ${isDark ? "text-white" : "text-[#4B6A9B]"}`}
            >
              <IoGlobe />
              {data.blog ? data.blog : "Not available"}
            </p>
            <p
              className={`font-regular flex items-center gap-2 text-[16px] leading-[150%] ${isDark ? "text-white" : "text-[#4B6A9B]"}`}
            >
              <CiTwitter />
              {data.twitter_username ? data.twitter_username : "Not available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pc;
