"use client";
import Image from "next/image";
import { FC, useCallback } from "react";
import { useRouter } from "next/navigation";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRentModal from "@/app/hooks/useRentModal";
import { SafeUser } from "@/app/types";

interface BottomHeroProps {
  currentUser: SafeUser | null;
}

const BottomHero: FC<BottomHeroProps> = ({ currentUser }) => {
  const loginModal = useLoginModal();
  const router = useRouter();
  const rentModal = useRentModal();
  const onListButton = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="w-full h-[550px] sm:h-[550px] relative flex justify-center items-end pb-24 pt-24 md:pb-28 mt-24">
      <Image
        src="/images/bottom-hero.jpg"
        alt="family on beach vacation hero image"
        className="absolute inset-0 object-cover object-center"
        fill
      />
      <div className="flex flex-col text-white opacity-100">
        <p className="relative z-[2] py-4 text-lg sm:text-2xl md:text-3xl">
          Start earning off of your property now
        </p>
        <button
          onClick={onListButton}
          role="button"
          className="relative disabled:opacity-70 disabled:cursor-not-allowed rounded-full hover:bg-opacity-80 dark:hover:opacity-80 transition dark:bg-emerald-700/80 border-transparent bg-emerald-900 text-white py-3 px-6 text-base font-semibold border-2"
        >
          List Your Home
        </button>
      </div>
    </div>
  );
};

export default BottomHero;
