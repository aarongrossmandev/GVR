"use client";
import { FC } from "react";
import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

const Counter: FC<CounterProps> = ({ title, onChange, subtitle, value }) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }

    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light dark:slate-100 text-neutral-500">
          {subtitle}
        </div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <button
          onClick={onReduce}
          className="w-10 h-10 rounded-full border border-emerald-800 dark:border-emerald-400 flex items-center justify-center text-neutral-600 dark:text-slate-100 hover:opacity-80 transition"
        >
          <AiOutlineMinus size={20} />
        </button>
        <div className="font-light text-xl text-neutral-600 dark:text-slate-100">
          {value}
        </div>
        <button
          onClick={onAdd}
          className="w-10 h-10 rounded-full border border-emerald-800 dark:border-emerald-400 flex items-center justify-center text-neutral-600 dark:text-slate-100 hover:opacity-80 transition"
        >
          <AiOutlinePlus size={20} />
        </button>
      </div>
    </div>
  );
};

export default Counter;
