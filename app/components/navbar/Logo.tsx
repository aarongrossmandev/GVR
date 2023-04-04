"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Logo: FC = ({}) => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      alt="logo"
      className="hidden md:block cursor-pointer"
      height={60}
      width={60}
      src="/images/logo.png"
    />
  );
};

export default Logo;
