"use client";

import { FC, useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ThemeButton } from "./ThemeButton";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRentModal from "@/app/hooks/useRentModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser: SafeUser | null;
}

const UserMenu: FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRentClick = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block">
          <ThemeButton />
        </div>
        <button
          onClick={onRentClick}
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
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white dark:bg-black overflow-hidden right-0 top-12 text-sm z-40">
          <ul className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => router.push("/vacations")}
                  label="Vacations"
                />
                <MenuItem
                  onClick={() => router.push("/trips")}
                  label="My trips"
                />
                <MenuItem
                  onClick={() => router.push("/favorites")}
                  label="My favorites"
                />
                <MenuItem
                  onClick={() => router.push("/reservations")}
                  label="My reservations"
                />
                <MenuItem
                  onClick={() => router.push("/properties")}
                  label="My properties"
                />
                <MenuItem onClick={rentModal.onOpen} label="Host your home" />
                <li className="px-4 py-3 dark:hover:bg-emerald-400 hover:bg-emerald-900 transition font-semibold w-full block md:hidden">
                  <ThemeButton />
                </li>
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign up" />
                <li className="px-4 py-3 dark:hover:bg-emerald-400 hover:bg-emerald-900 transition font-semibold w-full block md:hidden">
                  <ThemeButton />
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
