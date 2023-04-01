"use client";

import { FC, useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ThemeButton } from "./ThemeButton";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const UserMenu: FC = () => {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block">
          <ThemeButton />
        </div>
        <button
          onClick={() => {}}
          className="hidden lg:block text-sm font-semibold py-3 px-4 rounded-full dark:hover:bg-emerald-400/60 hover:bg-emerald-900 hover:text-white transition"
        >
          Host Your Home
        </button>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border border-emerald-900 dark:border-emerald-400 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md dark:shadow-emerald-400 shadow-emerald-900 transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white/80 dark:bg-black/70 overflow-hidden right-0 top-12 text-sm z-40">
          <ul className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={registerModal.onOpen} label="Sign up" />
              <li className="px-4 py-3 dark:hover:bg-emerald-400 hover:bg-emerald-900 transition font-semibold w-full block md:hidden">
                <ThemeButton />
              </li>
            </>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
