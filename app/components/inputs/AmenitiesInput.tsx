import { FC } from "react";
import { IconType } from "react-icons";

interface AmenitiesInputProps {
  icon: IconType;
}

const AmenitiesInput: FC<AmenitiesInputProps> = ({ icon: Icon }) => {
  return (
    <>
      <Icon size={30} className="transition" />
    </>
  );
};

export default AmenitiesInput;
