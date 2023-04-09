import { FC } from "react";
import { IconType } from "react-icons";

interface StandoutAmenitiesInputProps {
  icon: IconType;
}

const StandoutAmenitiesInput: FC<StandoutAmenitiesInputProps> = ({
  icon: Icon,
}) => {
  return (
    <>
      <Icon size={30} className="transition" />
    </>
  );
};

export default StandoutAmenitiesInput;
