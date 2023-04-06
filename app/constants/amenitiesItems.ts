import { AiOutlineCar, AiOutlineWifi } from "react-icons/ai";
import { MdOutlineComputer, MdOutlineKitchen } from "react-icons/md";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { ImMeter2 } from "react-icons/im";
import { BsSnow2 } from "react-icons/bs";
import { GiOfficeChair } from "react-icons/gi";
import { FiMonitor } from "react-icons/fi";

export const amenitiesItems = [
  {
    label: "Wifi",
    icon: AiOutlineWifi,
  },
  {
    label: "Kitchen",
    icon: MdOutlineKitchen,
  },
  {
    label: "Washer",
    icon: CgSmartHomeWashMachine,
  },
  {
    label: "Free parking",
    icon: AiOutlineCar,
  },
  {
    label: "Paid parking",
    icon: ImMeter2,
  },
  {
    label: "Air conditioning",
    icon: BsSnow2,
  },
  {
    label: "Office space",
    icon: GiOfficeChair,
  },
  {
    label: "Television",
    icon: FiMonitor,
  },
  {
    label: "Computer",
    icon: MdOutlineComputer,
  },
];
