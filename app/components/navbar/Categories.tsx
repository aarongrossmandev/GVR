"use client";
import { FC, useCallback, useState } from "react";
import Container from "../Container";
import { TbBeach, TbBuildingCottage } from "react-icons/tb";
import {
  GiBarn,
  GiIsland,
  GiCastle,
  GiForestCamp,
  GiWoodCabin,
  GiMountainRoad,
  GiPostOffice,
  GiFamilyHouse,
  GiSpeedBoat,
} from "react-icons/gi";
import {
  MdBungalow,
  MdChalet,
  MdFreeBreakfast,
  MdOutlineCabin,
  MdOutlineVilla,
} from "react-icons/md";
import {
  BsChevronLeft,
  BsChevronRight,
  BsFillBuildingsFill,
  BsFillHouseFill,
  BsHousesFill,
} from "react-icons/bs";
import { FaCaravan, FaSkiing } from "react-icons/fa";
import { RiHotelFill } from "react-icons/ri";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { IoIosBoat } from "react-icons/io";

export const categories = [
  {
    label: "Houses",
    icon: BsFillHouseFill,
    description: "This property is close to the beach",
  },
  {
    label: "Condos/Apartments",
    icon: BsFillBuildingsFill,
    description: "This is a condo or apartment",
  },
  {
    label: "Villas",
    icon: MdOutlineVilla,
    description: "This is a modern property",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is an ancient castle",
  },
  {
    label: "Country Houses",
    icon: GiMountainRoad,
    description: "This property is in the countryside",
  },
  {
    label: "Studios",
    icon: GiPostOffice,
    description: "This is a studio",
  },
  {
    label: "Cottages",
    icon: TbBuildingCottage,
    description: "Cottage",
  },
  {
    label: "Cabins",
    icon: MdOutlineCabin,
    description: "This is property has a beautiful pool",
  },
  {
    label: "Bungalows",
    icon: MdBungalow,
    description: "Bungalow",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island",
  },
  {
    label: "Townhouses",
    icon: GiFamilyHouse,
    description: "This property is a townhouse",
  },
  {
    label: "Hotels",
    icon: RiHotelFill,
    description: "These are hotels",
  },
  {
    label: "Guest houses",
    icon: BsHousesFill,
    description: "This is a guest house",
  },
  {
    label: "Caravans",
    icon: FaCaravan,
    description: "This is a caravan place",
  },
  {
    label: "Chalets",
    icon: MdChalet,
    description: "Chalet",
  },
  {
    label: "Lodges",
    icon: GiWoodCabin,
    description: "This property is near a lake",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activies",
  },
  {
    label: "Beach Houses",
    icon: TbBeach,
    description: "This is a house near or on the beach",
  },
  {
    label: "Bed & Breakfasts",
    icon: MdFreeBreakfast,
    description: "This property is a bed and breakfast",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property offers camping activities",
  },
  {
    label: "Yachts",
    icon: IoIosBoat,
    description: "This is a yacht rental",
  },
  {
    label: "Boats",
    icon: GiSpeedBoat,
    description: "House boat rentals",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn",
  },
];

const Categories: FC = ({}) => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isVacationPage = pathname === "/vacations";

  if (!isVacationPage) {
    return null;
  }

  const scrollLeft = () => {
    var slider = document.getElementById("catSlider");
    slider!.scrollLeft = slider!.scrollLeft - 125;
  };

  const scrollRight = () => {
    var slider = document.getElementById("catSlider");
    slider!.scrollLeft = slider!.scrollLeft + 125;
  };

  return (
    <Container>
      <div className="w-11/12 mx-auto md:w-full relative flex items-center">
        <button
          onClick={scrollRight}
          className="absolute -right-10 z-10 p-1 hover:shadow-sm hover:shadow-emerald-800 dark:hover:shadow-emerald-400 rounded-full transition"
        >
          <BsChevronRight size={22} />
        </button>
        <button
          onClick={scrollLeft}
          className="absolute -left-10 z-10 p-1 hover:shadow-sm hover:shadow-emerald-800 dark:hover:shadow-emerald-400 rounded-full transition"
        >
          <BsChevronLeft size={22} />
        </button>
        <div
          id="catSlider"
          className="pt-4 flex flex-row items-center justify-between overflow-x-auto md:scrollbar-none scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-emerald-900 whitespace-nowrap scroll-smooth"
        >
          {categories.map((cat) => (
            <CategoryBox
              key={cat.label}
              label={cat.label}
              selected={category === cat.label}
              icon={cat.icon}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Categories;
