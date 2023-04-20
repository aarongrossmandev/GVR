"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, useCallback } from "react";
import qs from "query-string";

interface GetawayCardProps {
  label: string;
  image: any;
  title: string;
}

const GetawayCard: FC<GetawayCardProps> = ({ label, image, title }) => {
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
      className="relative h-[40vh] w-full rounded-xl border-2 dark:border-emerald-400 border-emerald-800 col-span-1 md:last-of-type:col-span-2 md:last-of-type:h-[60vh] cursor-pointer group overflow-hidden transition"
    >
      <Image
        src={image}
        alt={label + " " + "image link"}
        fill
        className="object-cover rounded-xl group-hover:scale-105 transition"
      />
      <div className="bg-black/30 absolute inset-0 h-full w-full z-1" />
      <p className="absolute left-4 bottom-8 bold text-2xl md:text-4xl text-white">
        {title}
      </p>
    </div>
  );
};

export default GetawayCard;
