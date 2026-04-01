import { IoLocationOutline } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { IoGlobe } from "react-icons/io5";

interface UserProps {
  isDark: boolean;
  data: any;
}
function Mobile({ isDark, data }: UserProps) {
  const date = new Date(data.created_at).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const hasBio = data.bio === null;
  return (
    <div
      className={`datos w-full mt-6 flex flex-col md:hidden lg:hidden ${isDark ? "bg-[#1E2A47] text-white" : "bg-white "} rounded-2xl p-2`}
    >
      <div>
        <div className="p-4 flex justify-evenly">
          <div className="w-17 h-17 rounded-full overflow-hidden">
            <img
              className="w-full h-full rounded-full bg-amber-800"
              src={data.avatar_url}
              alt={data.name}
            />
          </div>
          <div>
            <h1
              className={`font-bold text-[26px] leading-[120%] ${isDark ? "text-white" : "text-[#2B3442]"}`}
            >
              {data.name}
            </h1>
            <p className="font-regular text-[16px] leading-[150%] text-[#0079FF]">
              @{data.login}
            </p>
            <p className=" font-regular text-[14px] leading-[150%] text-[#4B6A9B]">
              Joined {date}
            </p>
          </div>
        </div>
        <div className=" flex flex-col m-4">
          <p
            className={`font-regular mb-4 text-[16px] leading-[150%] ${isDark ? "text-white" : "text-[#4B6A9B]"}`}
          >
            {hasBio ? "This profile has no bio." : data.bio}
          </p>
          <div
            className={`${isDark ? "bg-[#141D2F] shadow " : "bg-[#F6F8FF] shadow "} flex justify-between w-full p-2 rounded `}
          >
            <div className={`${isDark ? "text-white" : "text-[#4B6A9B]"}`}>
              <p className={`"font-regular text-[16px] leading-[150%] `}>
                Repos
              </p>
              <p
                className={`font-bold text-[22px] leading-[150%] ${isDark ? "text-white" : "text-[#2B3442]"}`}
              >
                {data.public_repos}
              </p>
            </div>
            <div className={`${isDark ? "text-white" : "text-[#4B6A9B]"}`}>
              <p className="font-regular text-[16px] leading-[150%] ">
                Followers
              </p>
              <p
                className={`font-bold text-[22px] leading-[150%] ${isDark ? "text-white" : "text-[#2B3442]"}`}
              >
                {data.followers}
              </p>
            </div>
            <div className={`${isDark ? "text-white" : "text-[#4B6A9B]"}`}>
              <p className="font-regular text-[16px] leading-[150%] ">
                Following
              </p>
              <p
                className={`font-bold text-[22px] leading-[150%] ${isDark ? "text-white" : "text-[#2B3442]"}`}
              >
                {data.following}
              </p>
            </div>
          </div>
          <div
            className={`${isDark ? "text-white" : "text-[#4B6A9B]"} flex flex-col gap-2 mt-2`}
          >
            <p className="font-regular text-[16px] leading-[150%] flex gap-2 items-center ">
              <IoLocationOutline />
              {data.location ? data.location : "Not available"}
            </p>
            <p className="font-regular text-[16px] leading-[150%] flex gap-2 items-center ">
              <MdOutlineMail />
              {data.email ? data.email : "Not available"}
            </p>
            <p className="font-regular text-[16px] leading-[150%] flex gap-2 items-center">
              <IoGlobe />
              {data.blog ? data.blog : "Not available"}
            </p>
            <p className="font-regular text-[16px] leading-[150%] flex gap-2 items-center ">
              <CiTwitter />
              {data.twitter_username ? data.twitter_username : "Not available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mobile;
