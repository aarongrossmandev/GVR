"use client";
import { FC, useState } from "react";
import { IconType } from "react-icons";

interface AmenitiesInputProps {
  icon: IconType;
  label: string;
  value: string[];
  onClick: (value: string[]) => void;
}

const AmenitiesInput: FC<AmenitiesInputProps> = ({
  icon: Icon,
  label,
  onClick,
}) => {
  const [selected, setSelected] = useState(false);

  const toggleActive = () => {
    setSelected(!selected);
  };

  return (
    <div
      onClick={() => onClick([label])}
      onMouseDown={toggleActive}
      className={`rounded-xl text-center border-2 p-4 flex flex-col items-center justify-center flex-auto gap-3 hover:border-emerald-800 hover:text-emerald-800 dark:hover:border-emerald-400 dark:hover:text-emerald-400 transition cursor-pointer 
  ${
    selected
      ? "border-emerald-800 dark:border-emerald-400 bg-emerald-800/10 dark:bg-emerald-400/10 dark:text-white text-zinc-900"
      : ""
  }
  `}
    >
      <Icon size={30} className="transition" />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default AmenitiesInput;
