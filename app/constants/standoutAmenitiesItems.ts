import {
  MdOutdoorGrill,
  MdOutlineDeck,
  MdOutlineHotTub,
  MdOutlinePool,
  MdOutlineSnowboarding,
} from "react-icons/md";
import {
  GiFireBowl,
  GiFireplace,
  GiHarborDock,
 GiPingPongBat,
  GiPoolTableCorner,
  GiTheater,
} from "react-icons/gi";
import { TbLayoutBoard } from "react-icons/tb";
import { IoBarbellOutline } from "react-icons/io5";
import { FaUmbrellaBeach } from "react-icons/fa";

export const standoutAmenitiesItems = [
  {
    label: "Swimming pool",
    icon: MdOutlinePool,
  },
  {
    label: "Hot tub",
    icon: MdOutlineHotTub,
  },
  {
    label: "Patio",
    icon: TbLayoutBoard,
  },
  {
    label: "Outdoor dining",
    icon: MdOutlineDeck,
  },
  {
    label: "Grill",
    icon: MdOutdoorGrill,
  },
  {
    label: "Firepit",
    icon: GiFireBowl,
  },
  {
    label: "Pool table",
    icon: GiPoolTableCorner,
  },
  {
    label: "Ping-pong table",
    icon: GiPingPongBat,
  },
  {
    label: "Indoor theater",
    icon: GiTheater,
  },
  {
    label: "Fireplace",
    icon: GiFireplace,
  },
  {
    label: "Gym",
    icon: IoBarbellOutline,
  },
  {
    label: "Beach access",
    icon: FaUmbrellaBeach,
  },
  {
    label: "Lake access",
    icon: GiHarborDock,
  },
  {
    label: "Ski/Snowboarding",
    icon: MdOutlineSnowboarding,
  },
];
