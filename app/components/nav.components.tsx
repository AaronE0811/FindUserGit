import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
interface UserProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}
function Nav({ isDark, setIsDark }: UserProps) {
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };
  return (
    <nav className="flex justify-between items-center relative z-50 p-2">
      <h1
        className={`font-bold text-[26px] ${isDark ? "text-white" : "text-[#2B3442]"}`}
      >
        DevFinder
      </h1>

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          toggleDarkMode();
        }}
        className={`cursor-pointer p-4 -m-4 flex items-center gap-3 select-none active:opacity-50 transition-all 
          ${isDark ? "text-white" : "text-[#4B6A9B]"}`}
      >
        <span className="font-bold text-[13px] tracking-[2.5px] uppercase">
          {isDark ? "LIGHT" : "DARK"}
        </span>
        {isDark ? (
          <IoSunnyOutline className="w-5 h-5" />
        ) : (
          <FaRegMoon className="w-5 h-5" />
        )}
      </button>
    </nav>
  );
}

export default Nav;
