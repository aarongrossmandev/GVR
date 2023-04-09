"use client";
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { FC } from "react";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";
import { BsDoorOpenFill } from "react-icons/bs";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { GiBathtub, GiBed } from "react-icons/gi";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  bedCount: number;
  category: { icon: IconType; label: string; description: string } | undefined;
  locationValue: string;
  amenities: string[];
  standoutAmenities: string[];
}

const ListingInfo: FC<ListingInfoProps> = ({
  amenities,
  bathroomCount,
  bedCount,
  category,
  description,
  guestCount,
  locationValue,
  roomCount,
  standoutAmenities,
  user,
}) => {
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex flex-row items-center gap-2">
          <p>Hosted by {user?.name}</p>
          <Avatar src={user?.image} />
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500 dark:text-slate-200 text-base md:text-lg">
          <p className="flex items-center">
            {guestCount} guests{" "}
            <MdOutlineFamilyRestroom className="ml-1" size={18} />{" "}
          </p>
          <p className="flex items-center">
            {roomCount} rooms <BsDoorOpenFill className="ml-1" size={17} />
          </p>
          <p className="flex items-center">
            {bedCount} beds <GiBed className="ml-1 mt-1" size={22} />{" "}
          </p>
          <p className="flex items-center">
            {bathroomCount} bathrooms{" "}
            <GiBathtub className="ml-1 mb-1" size={20} />{" "}
          </p>
        </div>
      </div>
      <hr />
      <h5 className="font-bold text-2xl">Basic Amenities</h5>
      <div className="grid grid-cols-2 leading-loose">
        {amenities.map((am, idx) => (
          <p key={idx}>{am}</p>
        ))}
      </div>
      <hr />
      <h5 className="font-bold text-2xl">What this place offers</h5>
      <div className="grid grid-cols-2 md:grid-cols-3 tracking-wider leading-loose">
        {standoutAmenities.map((sm) => (
          <p key={sm}>{sm}</p>
        ))}
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <h4 className="font-bold text-2xl tracking-wider">About this property</h4>
      <p className="text-lg font-light text-neutral-500 dark:text-slate-200 tracking-wider">
        {description}
      </p>
      <hr />
      <h5 className="font-semibold text-2xl tracking-wider">
        Where you&apos;ll be
      </h5>
      <Map center={coordinates} />
    </div>
  );
};

export default ListingInfo;
