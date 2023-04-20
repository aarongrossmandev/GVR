"use client";
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { FC, useState } from "react";
import Heading from "../Heading";
import Image from "next/image";
import LikeButton from "../LikeButton";
import { MdArrowBack } from "react-icons/md";
import { useRouter } from "next/navigation";
import ListingImages from "./ListingImages";
import { HiXMark } from "react-icons/hi2";

interface ListingHeadProps {
  title: string;
  imageSrc: string;
  multipleImagesOne?: string;
  multipleImagesTwo?: string;
  multipleImagesThree?: string;
  multipleImagesFour?: string;
  locationValue: string;
  id: string;
  currentUser?: SafeUser | null;
}

const ListingHead: FC<ListingHeadProps> = ({
  id,
  imageSrc,
  multipleImagesOne,
  multipleImagesTwo,
  multipleImagesThree,
  multipleImagesFour,
  locationValue,
  title,
  currentUser,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);
  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region} / ${location?.label}`}
      />
      <div className="flex flex-row w-full h-[60vh] md:h-[82vh] overflow-y-hidden md:overflow-y-auto scrollbar-thin scrollbar-track-emerald-900 scrollbar-thumb-emerald-300 rounded-xl relative gap-x-2 gap-y-2 md:gap-y-0">
        <button
          onClick={() => router.back()}
          className="absolute dark:bg-emerald-400 bg-emerald-800 rounded-full top-5 left-5 p-1 z-10 flex items-center justify-center text-center text-white"
        >
          <MdArrowBack className="text-center" size={28} />
        </button>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`h-[59vh] md:h-[82vh] hover:cursor-pointer transition relative ${
            !multipleImagesOne &&
            !multipleImagesTwo &&
            !multipleImagesThree &&
            !multipleImagesFour
              ? "md:w-full w-full"
              : "md:w-2/3 w-full"
          }`}
        >
          <Image
            src={imageSrc}
            alt={title + "image"}
            fill
            className="rounded-xl"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="absolute top-5 right-5 z-30">
          <LikeButton listingId={id} currentUser={currentUser} />
        </div>
        <div
          className={`w-full md:w-1/3 hidden ${
            !multipleImagesOne &&
            !multipleImagesTwo &&
            !multipleImagesThree &&
            !multipleImagesFour
              ? "md:hidden"
              : "md:block"
          }`}
        >
          <ListingImages
            multipleImagesOne={multipleImagesOne}
            multipleImagesTwo={multipleImagesTwo}
            multipleImagesThree={multipleImagesThree}
            multipleImagesFour={multipleImagesFour}
          />
        </div>
      </div>
      <div className="flex flex-row md:hidden w-full">
        <ListingImages
          multipleImagesOne={multipleImagesOne}
          multipleImagesTwo={multipleImagesTwo}
          multipleImagesThree={multipleImagesThree}
          multipleImagesFour={multipleImagesFour}
        />
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 bg-black/80 w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden z-[70] transition">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hidden md:block absolute top-7 left-14 z-[80] hover:text-rose-500 transition text-white border border-white rounded-full bg-black/80"
          >
            <HiXMark size={38} />
          </button>
          <div className="relative w-[90vw] h-[50vh] md:h-[90vh] overflow-hidden z-[70]">
            <Image
              src={imageSrc}
              alt="additional images"
              fill
              className="rounded-xl"
              style={{ objectFit: "cover" }}
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden block absolute top-3 left-1 z-[80] hover:text-rose-500 transition text-white border border-white rounded-full bg-black/80"
            >
              <HiXMark size={38} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ListingHead;
