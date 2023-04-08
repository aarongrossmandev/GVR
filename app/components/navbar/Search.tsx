"use client";
import useCountries from "@/app/hooks/useCountries";
import useSearchModal from "@/app/hooks/useSearchModal";
import { differenceInDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import { FC, useMemo } from "react";
import { BiSearch } from "react-icons/bi";

const Search: FC = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return "Anywhere";
  }, [locationValue, getByValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let difference = differenceInDays(end, start);

      if (difference === 0) {
        difference = 1;
      }
      return `${difference} Days`;
    }

    return "Any Week";
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }
    return "Add Guests";
  }, [guestCount]);

  return (
    <div
      onClick={searchModal.onOpen}
      className="border border-emerald-900 dark:border-emerald-400 w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md dark:hover:shadow-emerald-900 transition cursor-pointer"
    >
      <div className="flex items-center justify-between text-sm font-semibold">
        <div className="px-6">{locationLabel}</div>
        <div className="hidden sm:block px-6 border-x flex-1 text-center">
          {durationLabel}
        </div>
        <div className="pl-6 pr-2 flex flex-row items-center gap-3">
          <div className="hidden sm:block font-normal">{guestLabel}</div>
          <div className="p-2 bg-emerald-600 rounded-full">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
