"use client";
import { FC } from "react";
import Heading from "../Heading";
import CategoryCard from "./CategoryCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const categoryCards = [
  {
    label: "Houses",
    image: "/images/houses.jpg",
  },
  {
    label: "Castles",
    image: "/images/castle.jpg",
  },
  {
    label: "Condos/Apartments",
    image: "/images/condo.jpg",
  },
  {
    label: "Villas",
    image: "/images/villa.jpg",
  },
  {
    label: "Cottages",
    image: "/images/cottage.jpg",
  },
  {
    label: "Cabins",
    image: "/images/cabin.jpg",
  },
  {
    label: "Bungalows",
    image: "/images/bungalow.jpg",
  },
  {
    label: "Townhouses",
    image: "/images/townhouse.jpg",
  },
  {
    label: "Hotels",
    image: "/images/hotel.jpg",
  },
  {
    label: "Chalets",
    image: "/images/chalet.jpg",
  },
  {
    label: "Bed & Breakfasts",
    image: "/images/bedbreakfast.jpg",
  },
  {
    label: "Camping",
    image: "/images/camping.jpg",
  },
  {
    label: "Boats",
    image: "/images/boats.jpg",
  },
];

const SliderCards: FC = () => {
  const scrollLeft = () => {
    var slider = document.getElementById("cardSlider");
    slider!.scrollLeft = slider!.scrollLeft - 500;
  };

  const scrollRight = () => {
    var slider = document.getElementById("cardSlider");
    slider!.scrollLeft = slider!.scrollLeft + 500;
  };

  return (
    <div className="max-w-[1750px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 relative z-[2] rounded-lg py-8">
      <Heading title="Find your style" />
      <div
        id="cardSlider"
        className="max-w-[1750px] px-2 flex flex-row overflow-x-auto scrollbar-thin scrollbar-track-emerald-900 scrollbar-thumb-emerald-300 md:scrollbar-none gap-2 h-3/4 py-4 scroll-smooth relative"
      >
        {categoryCards.map((type) => (
          <CategoryCard
            key={type.label}
            label={type.label}
            image={type.image}
          />
        ))}
      </div>
      <button
        onClick={scrollLeft}
        role="button"
        className="hidden md:block absolute top-1/2 left-5 border border-black dark:border-white rounded-full p-1 transition hover:border-emerald-700 dark:hover:border-emerald-400 hover:bg-emerald-900/20 hover:scale-95 z-[5]"
      >
        <BiChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={scrollRight}
        role="button"
        className="hidden md:block absolute top-1/2 right-5 border border-black dark:border-white rounded-full p-1 transition hover:border-emerald-700 dark:hover:border-emerald-400 hover:bg-emerald-900/20 hover:scale-95 z-[5]"
      >
        <BiChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
};

export default SliderCards;
