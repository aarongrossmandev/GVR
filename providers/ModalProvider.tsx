"use client";

import LoginModal from "@/app/components/modals/LoginModal";
import RegisterModal from "@/app/components/modals/RegisterModal";
import RentModal from "@/app/components/modals/RentModal";
import SearchModal from "@/app/components/modals/SearchModal";
import React from "react";

const ModalProvider = () => {
  return (
    <>
      <SearchModal />
      <RegisterModal />
      <LoginModal />
      <RentModal />
    </>
  );
};

export default ModalProvider;
