"use client";
import Image from "next/image";
import { FC } from "react";
import { useRouter } from "next/navigation";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  const router = useRouter();
  return (
    <div className="w-full h-[450px] sm:h-[550px] relative flex justify-center items-end pb-24 md:pb-28">
      <Image
        src="/images/family-vacation.jpg"
        alt="family on beach vacation hero image"
        className="absolute inset-0 object-cover object-center opacity-80"
        fill
      />
      <button
        onClick={() => router.push("/vacations")}
        role="button"
        className="relative disabled:opacity-70 disabled:cursor-not-allowed rounded-full hover:bg-opacity-80 dark:hover:opacity-80 transition dark:bg-emerald-700/80 border-transparent bg-emerald-900 text-white py-2 px-4 text-base font-semibold border-2"
      >
        See All Dream Vacations
      </button>
    </div>
  );
};

export default Hero;
