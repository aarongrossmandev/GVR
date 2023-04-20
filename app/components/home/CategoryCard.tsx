"use client";
import Image from "next/image";
import { FC, useCallback } from "react";
import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";

interface CategoryCardProps {
  label: string;
  image?: any;
}

const CategoryCard: FC<CategoryCardProps> = ({ label, image }) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "vacations/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [params, label, router]);
  return (
    <div
      onClick={handleClick}
      className="relative h-[40vh] aspect-[4/5] rounded-xl group transition overflow-hidden min-w-[200px] md:min-w-[250px] hover:cursor-pointer border-2 border-emerald-800 dark:border-emerald-400"
    >
      <Image
        src={image}
        alt=""
        fill
        className="object-cover rounded-xl group-hover:scale-105 transition"
      />
      <div className="bg-black/20 absolute inset-0 w-full h-full z-1" />
      <p className="absolute left-2 bottom-8 bold text-lg md:text-2xl text-white">
        {label}
      </p>
    </div>
  );
};

export default CategoryCard;
