"use client";
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { FC } from "react";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";

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
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500 dark:text-slate-200">
          <p>{guestCount} guests</p>
          <p>{roomCount} rooms</p>
          <p>{bedCount} beds</p>
          <p>{bathroomCount} bathrooms</p>
        </div>
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
      <p className="text-lg font-light text-neutral-500 dark:text-slate-200">
        {description}
      </p>
      <hr />
      <h5 className="font-semibold text-2xl">Where you&apos;ll be</h5>
      <Map center={coordinates} />
    </div>
  );
};

export default ListingInfo;
