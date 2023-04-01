"use client";
import { FC } from "react";
import { IconType } from "react-icons/lib";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  type?: "submit" | "reset" | "button";
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  type,
  icon: Icon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:bg-opacity-80 dark:hover:opacity-80 transition w-full ${
        outline
          ? "bg-transparent dark:border-emerald-400 dark:text-emerald-400 text-emerald-700 border-emerald-700"
          : "dark:bg-emerald-700/80 border-transparent bg-emerald-900 text-white"
      }
      ${
        small
          ? "py-1 text-sm font-light border"
          : "py-2 text-base font-semibold border-2"
      }
      `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-2" />}
      {label}
    </button>
  );
};

export default Button;
