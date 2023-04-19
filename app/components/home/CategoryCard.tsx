"use client";
import Image from "next/image";
import { FC } from "react";

interface CategoryCardProps {
  label: string;
  image?: any;
}

const CategoryCard: FC<CategoryCardProps> = ({ label, image }) => {
  return (
    <div className="relative h-[40vh] aspect-[4/5] rounded-xl group transition">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover rounded-xl group-hover:scale-105"
      />
      <div className="bg-black/20 absolute inset-0 w-full h-full z-1" />
      <p className="absolute left-2 bottom-8 bold text-lg md:text-2xl text-white">
        {label}
      </p>
    </div>
  );
};

export default CategoryCard;
