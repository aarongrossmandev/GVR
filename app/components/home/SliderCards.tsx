import { FC } from "react";
import Heading from "../Heading";
import CategoryCard from "./CategoryCard";

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
    image: "",
  },
  {
    label: "Villas",
    image: "",
  },
  {
    label: "Cottages",
    image: "",
  },
  {
    label: "Cabins",
    image: "",
  },
  {
    label: "Bungalows",
    image: "",
  },
  {
    label: "Townhouses",
    image: "",
  },
  {
    label: "Hotels",
    image: "",
  },
  {
    label: "Chalets",
    image: "",
  },
  {
    label: "Bed & Breakfasts",
    image: "",
  },
  {
    label: "Camping",
    image: "",
  },
  {
    label: "Boats",
    image: "",
  },
];

const SliderCards: FC = () => {
  return (
    <div className="">
      <Heading title="Find your style" />
      <div className="max-w-[1750px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 flex mt-6 flex-row overflow-x-auto scrollbar-thin scrollbar-track-emerald-900 scrollbar-thumb-emerald-300 md:scrollbar-none gap-2 h-3/4 py-4 scroll-smooth">
        {categoryCards.map((type) => (
          <CategoryCard
            key={type.label}
            label={type.label}
            image={type.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderCards;
