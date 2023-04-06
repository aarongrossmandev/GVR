import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="w-full h-[450px] sm:h-[550px] relative flex justify-center items-end pb-24 md:pb-28">
      <Image
        src="/images/family-vacation.jpg"
        alt="family on beach vacation hero image"
        className="absolute inset-0 object-cover object-center opacity-80"
        fill
      />
      <Link
        href="vacations"
        className="relative disabled:opacity-70 disabled:cursor-not-allowed rounded-full hover:bg-opacity-80 dark:hover:opacity-80 transition dark:bg-emerald-700/80 border-transparent bg-emerald-900 text-white py-2 px-4 text-base font-semibold border-2"
      >
        See All Dream Vacations
      </Link>
    </div>
  );
};

export default Hero;
