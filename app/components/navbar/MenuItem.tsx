"use client";
import { FC } from "react";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <li
      onClick={onClick}
      className="px-4 py-3 dark:hover:bg-emerald-400 hover:bg-emerald-900 transition font-semibold"
    >
      {label}
    </li>
  );
};

export default MenuItem;
