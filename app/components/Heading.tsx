"use client";
import { FC } from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  categoryTitle?: string;
  center?: boolean;
}

const Heading: FC<HeadingProps> = ({
  title,
  subtitle,
  center,
  categoryTitle,
}) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light dark:text-slate-200 text-neutral-600 mt-2">
        {categoryTitle}
      </div>
      <div className="font-light dark:text-slate-200 text-neutral-600 mt-2">
        {subtitle}
      </div>
    </div>
  );
};

export default Heading;
