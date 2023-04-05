"use client";
import { FC } from "react";
import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-emerald-800 hover:text-emerald-800 dark:hover:border-emerald-400 dark:hover:text-emerald-400 transition cursor-pointer 
  ${
    selected
      ? "border-emerald-800 dark:border-emerald-400 text-emerald-800 dark:text-emerald-400"
      : "border-inherit"
  }
  `}
    >
      <Icon size={30} className="transition" />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryInput;
