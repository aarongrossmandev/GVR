"use client";
import { SafeListing, SafeUser } from "@/app/types";
import { FC } from "react";
import Heading from "../Heading";
import HomeFavoriteCard from "../listings/HomeFavoriteCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface FavoritesSliderProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const FavoritesSlider: FC<FavoritesSliderProps> = ({
  listings,
  currentUser,
}) => {
  const scrollLeft = () => {
    var slider = document.getElementById("favoritedSlider");
    slider!.scrollLeft = slider!.scrollLeft - 500;
  };

  const scrollRight = () => {
    var slider = document.getElementById("favoritedSlider");
    slider!.scrollLeft = slider!.scrollLeft + 500;
  };
  return (
    <div className="max-w-3xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4 relative z-[2] py-8">
      <section className="pt-8">
        <Heading center title="Places you have favorited" />
        <div
          id="favoritedSlider"
          className="mx-auto max-w-2xl px-2 flex flex-row overflow-x-auto scrollbar-thin scrollbar-track-emerald-900 scrollbar-thumb-emerald-300 md:scrollbar-none gap-2 h-3/4 py-4 scroll-smooth relative"
        >
          {listings.map((listing) => (
            <HomeFavoriteCard
              key={listing.id}
              currentUser={currentUser}
              data={listing}
            />
          ))}
        </div>
        <button
          onClick={scrollLeft}
          role="button"
          className="hidden md:block absolute top-1/2 left-5 border border-black dark:border-white rounded-full p-1 transition hover:border-emerald-800 dark:hover:border-emerald-400 hover:bg-emerald-900/20 hover:scale-95 z-[5]"
        >
          <BiChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={scrollRight}
          role="button"
          className="hidden md:block absolute top-1/2 right-5 border border-black dark:border-white rounded-full p-1 transition hover:border-emerald-800 dark:hover:border-emerald-400 hover:bg-emerald-900/20 hover:scale-95 z-[5]"
        >
          <BiChevronRight className="w-8 h-8" />
        </button>
      </section>
    </div>
  );
};

export default FavoritesSlider;
