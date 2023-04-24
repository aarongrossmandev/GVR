"use client";
import { useRouter } from "next/navigation";
import useCountries from "@/app/hooks/useCountries";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import { FC, useCallback, useMemo } from "react";
import { format } from "date-fns";
import Image from "next/image";
import LikeButton from "../LikeButton";
import Button from "../Button";

interface HomeFavoriteCardProps {
  data: SafeListing;

  currentUser?: SafeUser | null;
}

const HomeFavoriteCard: FC<HomeFavoriteCardProps> = ({
  data,

  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="cursor-pointer group mx-auto flex items-center justify-center relative h-[30vh] aspect-square rounded-full group transition overflow-hidden min-w-[200px] md:min-w-[250px] hover:cursor-pointer border-2 border-emerald-800 dark:border-emerald-400"
    >
      <Image
        alt="Listing"
        src={data.imageSrc}
        fill
        className="object-cover h-full w-full group-hover:scale-110 transition rounded-full"
      />
      <div className="absolute top-1/4 right-8">
        <LikeButton listingId={data.id} currentUser={currentUser} />
      </div>
    </div>
  );
};

export default HomeFavoriteCard;
