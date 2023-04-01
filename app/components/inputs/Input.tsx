"use client";
import { FC } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { CgDollar } from "react-icons/cg";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: FC<InputProps> = ({
  id,
  label,
  type,
  errors,
  register,
  disabled,
  formatPrice,
  required,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && <CgDollar size={24} className="absolute top-5 left-2" />}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`
          peer z-10 relative w-full p-4 pt-6 font-light bg-transparent border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed
          ${formatPrice ? "pl-9" : "pl-4"}
          ${
            errors[id]
              ? "border-rose-500 focus:border-rose-500"
              : "dark:border-slate-50 border-zinc-900 dark:focus:border-emerald-400 focus:border-emerald-700"
          }
        `}
      />
      <label
        className={`
        absolute duration-150 transform -translate-y-3 top-5 z-[5] origin-[0]
        ${formatPrice ? "left-9" : "left-4"}
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4
        ${
          errors[id]
            ? "text-rose-500 dark:text-rose-500"
            : "dark:text-slate-100 text-zinc-700"
        }
      `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
