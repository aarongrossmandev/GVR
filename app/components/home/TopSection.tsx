import { FC } from "react";
import Heading from "../Heading";
import GetawayCard from "./GetawayCard";

const TopSection: FC = () => {
  const getawayCategories = [
    {
      title: "Out in the country",
      label: "Country Houses",
      image: "/images/country-home.jpg",
    },
    {
      title: "On the islands",
      label: "Islands",
      image: "/images/islands.jpg",
    },
    {
      title: "Snowboard/Ski in the mountains",
      label: "Skiing",
      image: "/images/mountains.jpg",
    },
    {
      title: "Fancy boating",
      label: "Yachts",
      image: "/images/yachts.jpg ",
    },
    {
      title: "On the beach",
      label: "Beach Houses",
      image: "/images/on-the-beach.jpg",
    },
  ];

  return (
    <div className="md:-mt-14 max-w-[1750px] dark:bg-zinc-900 bg-slate-200 mx-auto xl:px-20 md:px-10 sm:px-2 px-4 relative z-[2] rounded-xl py-8">
      <Heading
        title="Find your ideal getaway"
        subtitle="Book homes with space, the right amenities, and area"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-3/4 mt-8">
        {getawayCategories.map((item) => (
          <GetawayCard
            key={item.label + "card"}
            title={item.title}
            label={item.label}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TopSection;
