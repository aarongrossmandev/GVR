"use client";
import Image from "next/image";
import { FC, useState } from "react";
import { HiXMark } from "react-icons/hi2";

interface ListingImagesProps {
  multipleImagesOne?: string;
  multipleImagesTwo?: string;
  multipleImagesThree?: string;
  multipleImagesFour?: string;
}

const ListingImages: FC<ListingImagesProps> = ({
  multipleImagesOne,
  multipleImagesTwo,
  multipleImagesThree,
  multipleImagesFour,
}) => {
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openFour, setOpenFour] = useState(false);

  return (
    <div className="w-full flex flex-row md:flex-col gap-2 overflow-x-auto overflow-y-auto scrollbar-none sm:scrollbar-thin scrollbar-track-emerald-900 scrollbar-thumb-emerald-300">
      {multipleImagesOne && (
        <div
          onClick={() => setOpenOne(!openOne)}
          className="relative md:w-full aspect-video h-[19vh] rounded-xl hover:cursor-pointer transition"
        >
          <Image
            src={multipleImagesOne}
            alt="additional images"
            fill
            className="rounded-xl"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      {multipleImagesOne && openOne && (
        <div className="fixed top-0 left-0 bg-black/60 w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden z-[70] transition">
          <button
            onClick={() => setOpenOne(!openOne)}
            className="hidden md:block absolute top-7 left-14 z-[80] hover:text-rose-500 transition text-white border border-white rounded-full bg-black/80"
          >
            <HiXMark size={38} />
          </button>
          <div className="relative w-[90vw] h-[50vh] md:h-[90vh] overflow-hidden z-[70]">
            <Image
              src={multipleImagesOne}
              alt="additional images"
              fill
              className="rounded-xl"
              style={{ objectFit: "cover" }}
            />
            <button
              onClick={() => setOpenOne(!openOne)}
              className="md:hidden block absolute top-3 left-1 z-[80] hover:text-rose-500 transition text-white border border-white rounded-full bg-black/80"
            >
              <HiXMark size={38} />
            </button>
          </div>
        </div>
      )}
      {multipleImagesTwo && (
        <div
          onClick={() => setOpenTwo(!openTwo)}
          className="relative md:w-full aspect-video h-[19vh] rounded-xl hover:cursor-pointer transition"
        >
          <Image
            src={multipleImagesTwo}
            alt="additional images"
            fill
            className="rounded-xl"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      {multipleImagesTwo && openTwo && (
        <div className="fixed top-0 left-0 bg-black/60 w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden z-[70] transition">
          <button
            onClick={() => setOpenTwo(!openTwo)}
            className="hidden md:block absolute top-7 left-14 z-[80] hover:text-rose-500 transition text-white border border-white rounded-full bg-black/80"
          >
            <HiXMark size={38} />
          </button>
          <div className="relative w-[90vw] h-[50vh] md:h-[90vh] overflow-hidden z-[70]">
            <Image
              src={multipleImagesTwo}
              alt="additional images"
              fill
              className="rounded-xl"
              style={{ objectFit: "cover" }}
            />
            <button
              onClick={() => setOpenTwo(!openTwo)}
              className="md:hidden block absolute top-3 left-1 z-[80] hover:text-rose-500 transition text-white border border-white rounded-full bg-black/80"
            >
              <HiXMark size={38} />
            </button>
          </div>
        </div>
      )}
      {multipleImagesThree && (
        <div
          onClick={() => setOpenThree(!openThree)}
          className="relative md:w-full aspect-video h-[19vh] rounded-xl hover:cursor-pointer transition"
        >
          <Image
            src={multipleImagesThree}
            alt="additional images"
            fill
            className="rounded-xl"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      {multipleImagesThree && openThree && (
        <div className="fixed top-0 left-0 bg-black/60 w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden z-[70] transition">
          <button
            onClick={() => setOpenThree(!openThree)}
            className="hidden md:block absolute top-7 left-14 z-[80] hover:text-rose-500 transition text-white border border-white rounded-full bg-black/80"
          >
            <HiXMark size={38} />
          </button>
          <div className="relative w-[90vw] h-[50vh] md:h-[90vh] overflow-hidden z-[70]">
            <Image
              src={multipleImagesThree}
              alt="additional images"
              fill
              className="rounded-xl"
              style={{ objectFit: "cover" }}
            />
            <button
              onClick={() => setOpenThree(!openThree)}
              className="md:hidden block absolute top-5 left-1 z-[80] hover:text-rose-500 transition text-white border border-white rounded-full bg-black/80"
            >
              <HiXMark size={38} />
            </button>
          </div>
        </div>
      )}
      {multipleImagesFour && (
        <div
          onClick={() => setOpenThree(!openFour)}
          className="w-[300px] h-[19vh] relative"
        >
          <Image
            src={multipleImagesFour}
            alt="additional images"
            fill
            className="rounded-xl"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      {multipleImagesFour && openFour && (
        <div className="fixed top-0 left-0 bg-black/60 w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden z-[70] transition">
          <button
            onClick={() => setOpenFour(!openFour)}
            className="hidden md:block absolute top-7 left-14 z-[80] hover:text-rose-500 transition text-white border border-white rounded-full bg-black/80"
          >
            <HiXMark size={38} />
          </button>
          <div className="relative w-[90vw] h-[50vh] md:h-[90vh] overflow-hidden z-[70]">
            <Image
              src={multipleImagesFour}
              alt="additional images"
              fill
              className="rounded-xl"
              style={{ objectFit: "cover" }}
            />
            <button
              onClick={() => setOpenFour(!openFour)}
              className="md:hidden block absolute top-5 left-1 z-[80] hover:text-rose-500 transition text-white border border-white rounded-full bg-black/80"
            >
              <HiXMark size={38} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingImages;
