"use client";
import { FC } from "react";
import { Range } from "react-date-range";
import Calender from "../inputs/Calender";
import Button from "../Button";

interface ListingReservationProps {
  price: number;
  totalPrice: number;
  dateRange: Range;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation: FC<ListingReservationProps> = ({
  dateRange,
  disabledDates,
  onChangeDate,
  onSubmit,
  price,
  totalPrice,
  disabled,
}) => {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 dark:border-slate-500 overflow-hidden text-zinc-900">
      <div className="flex flex-row items-center gap-1 p-4">
        <p className="text-2xl font-semibold"> $ {price}</p>
        <p className="text-2xl font-semibold"> / night</p>
      </div>
      <hr />
      <Calender
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
      </div>
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <p>Total</p>
        <p>$ {totalPrice}</p>
      </div>
    </div>
  );
};

export default ListingReservation;
