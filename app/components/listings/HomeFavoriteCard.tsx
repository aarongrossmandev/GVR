"use client";
import { useRouter } from "next/navigation";
import useCountries from "@/app/hooks/useCountries";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import { FC, useCallback, useMemo } from "react";
import { format } from "date-fns";
import Image from "next/image";
import LikeButton from "../LikeButton";
import Button from "../Button";

interface HomeFavoriteCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const HomeFavoriteCard: FC<HomeFavoriteCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionId = "",
  actionLabel,
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [onAction, actionId, disabled]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="cursor-pointer group mx-auto flex items-center justify-center relative h-[30vh] aspect-square rounded-full group transition overflow-hidden min-w-[200px] md:min-w-[250px] hover:cursor-pointer border-2 border-emerald-800 dark:border-emerald-400"
    >
      <Image
        alt="Listing"
        src={data.imageSrc}
        fill
        className="object-cover h-full w-full group-hover:scale-110 transition rounded-full"
      />
      <div className="absolute top-1/4 right-8">
        <LikeButton listingId={data.id} currentUser={currentUser} />
      </div>
      <div className="bg-black/20 absolute inset-0 w-full h-full z-1" />
      <p className="bold text-lg md:text-lg text-white max-w-[150px] mx-auto text-center absolute inset-0 flex items-center justify-center">
        {data.title}
      </p>
    </div>
  );
};

export default HomeFavoriteCard;
