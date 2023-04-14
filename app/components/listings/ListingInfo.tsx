"use client";
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { FC } from "react";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";
import { BsDoorOpenFill, BsSnow2 } from "react-icons/bs";
import {
  MdOutdoorGrill,
  MdOutlineComputer,
  MdOutlineDeck,
  MdOutlineFamilyRestroom,
  MdOutlineHotTub,
  MdOutlineKitchen,
  MdOutlinePool,
  MdOutlineSnowboarding,
} from "react-icons/md";
import {
  GiBathtub,
  GiBed,
  GiFireBowl,
  GiFireplace,
  GiHarborDock,
  GiOfficeChair,
  GiPingPongBat,
  GiPoolTableCorner,
  GiTheater,
} from "react-icons/gi";
import { AiOutlineCar, AiOutlineWifi } from "react-icons/ai";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { ImMeter2 } from "react-icons/im";
import { FiMonitor } from "react-icons/fi";
import { TbLayoutBoard } from "react-icons/tb";
import { IoBarbellOutline } from "react-icons/io5";
import { FaUmbrellaBeach } from "react-icons/fa";

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
        <div className="flex flex-row items-center gap-4 font-light text-neutral-800 dark:text-slate-200 text-base md:text-lg">
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
      <hr className="bg-red-500" />
      <h5 className="font-bold text-2xl">Basic Amenities</h5>
      <div className="grid grid-cols-2 leading-loose">
        {amenities.map((am, idx) => (
          <p className="flex flex-row items-center gap-x-1" key={idx}>
            {am === "Kitchen" && <MdOutlineKitchen size={20} />}
            {am === "Wifi" && <AiOutlineWifi size={20} />}
            {am === "Washer" && <CgSmartHomeWashMachine size={20} />}
            {am === "Free parking" && <AiOutlineCar size={20} />}
            {am === "Paid parking" && <ImMeter2 size={20} />}
            {am === "Air conditioning" && <BsSnow2 size={20} />}
            {am === "Office space" && <GiOfficeChair size={20} />}
            {am === "Television" && <FiMonitor size={20} />}
            {am === "Computer" && <MdOutlineComputer size={20} />}
            {am}
          </p>
        ))}
      </div>
      <hr />
      <h5 className="font-bold text-2xl">What this place offers</h5>
      <div className="grid grid-cols-2 md:grid-cols-3 tracking-wider leading-loose">
        {standoutAmenities.map((sm) => (
          <p className="flex flex-row items-center gap-x-1" key={sm}>
            {sm === "Swimming pool" && <MdOutlinePool size={20} />}
            {sm === "Hot tub" && <MdOutlineHotTub size={20} />}
            {sm === "Patio" && <TbLayoutBoard size={20} />}
            {sm === "Outdoor dining" && <MdOutlineDeck size={20} />}
            {sm === "Grill" && <MdOutdoorGrill size={22} />}
            {sm === "Firepit" && <GiFireBowl size={20} />}
            {sm === "Pool table" && <GiPoolTableCorner size={20} />}
            {sm === "Ping-pong table" && <GiPingPongBat size={20} />}
            {sm === "Indoor theater" && <GiTheater size={20} />}
            {sm === "Fireplace" && <GiFireplace size={20} />}
            {sm === "Gym" && <IoBarbellOutline size={20} />}
            {sm === "Beach access" && <FaUmbrellaBeach size={20} />}
            {sm === "Lake access" && <GiHarborDock size={20} />}
            {sm === "Ski/Snowboarding" && <MdOutlineSnowboarding size={20} />}
            {sm}
          </p>
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
