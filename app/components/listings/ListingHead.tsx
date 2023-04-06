"use client";
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { FC } from "react";
import Heading from "../Heading";
import Image from "next/image";
import LikeButton from "../LikeButton";
import { MdArrowBack } from "react-icons/md";
import { useRouter } from "next/navigation";

interface ListingHeadProps {
  title: string;
  imageSrc: string;
  locationValue: string;
  id: string;
  currentUser?: SafeUser | null;
}

const ListingHead: FC<ListingHeadProps> = ({
  id,
  imageSrc,
  locationValue,
  title,
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);
  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region} / ${location?.label}`}
      />
      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
        <button
          onClick={() => router.back()}
          className="absolute dark:bg-emerald-400 bg-emerald-800 rounded-full top-5 left-5 p-1 z-10 flex items-center justify-center text-center"
        >
          <MdArrowBack className="text-center" size={28} />
        </button>
        <Image
          src={imageSrc}
          alt={title + "image"}
          fill
          className="object-cover w-full"
        />
        <div className="absolute top-5 right-5">
          <LikeButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
