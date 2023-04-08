"use client";
import { RingLoader } from "react-spinners";

const LoadingScreen = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
      <RingLoader size={150} color="#059669" />
    </div>
  );
};

export default LoadingScreen;
