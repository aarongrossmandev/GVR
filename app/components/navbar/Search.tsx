"use client";
import { FC } from "react";
import { BiSearch } from "react-icons/bi";

const Search: FC = () => {
  return (
    <div className="border border-emerald-900 dark:border-emerald-400 w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md dark:hover:shadow-emerald-900 transition cursor-pointer">
      <div className="flex items-center justify-between text-sm font-semibold">
        <div className="px-6">Anywhere</div>
        <div className="hidden sm:block px-6 border-x flex-1 text-center">
          Any Week
        </div>
        <div className="pl-6 pr-2 flex flex-row items-center gap-3">
          <div className="hidden sm:block font-normal">Add Guests</div>
          <div className="p-2 bg-emerald-600 rounded-full">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
