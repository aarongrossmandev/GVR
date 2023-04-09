"use client";
import { FC } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { CgDollar } from "react-icons/cg";

interface TextAreaProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const TextArea: FC<TextAreaProps> = ({
  id,
  label,
  errors,
  register,
  disabled,

  required,
}) => {
  return (
    <div className="w-full relative">
      <textarea
        id={id}
        rows={5}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        className={`
          peer z-10 relative w-full mt-6 p-4 pt-6 font-light bg-transparent border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed
          
          ${
            errors[id]
              ? "border-rose-500 focus:border-rose-500"
              : "dark:border-slate-50 border-zinc-800 dark:focus:border-emerald-400 focus:border-emerald-700"
          }
        `}
      />
      <label
        className={`
        absolute duration-150 transform -translate-y-3 top-10 left-3 z-[5] origin-[0]
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

export default TextArea;
