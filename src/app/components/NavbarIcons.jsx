import {
  IoSearchOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoCartOutline,
} from "react-icons/io5";

export default function NavbarIcons() {
  return (
    <div className="flex items-center">
      <button className="w-16 h-16 flex items-center justify-center cursor-pointer text-white text-2xl transition relative ">
        <IoSearchOutline />
      </button>
      <button className="w-16 h-16 flex items-center justify-center cursor-pointer text-white text-2xl  transition relative ">
        <IoHeartOutline />
        <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
          7
        </span>
      </button>
      <button className="w-16 h-16 flex items-center justify-center cursor-pointer text-white text-2xl  transition relative ">
        <IoCartOutline />
        <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
          0
        </span>
      </button>
      <button className="w-16 h-16 flex items-center justify-center cursor-pointer text-white text-2xl transition group">
        <IoPersonOutline />
      </button>

   
    </div>
  );
}
