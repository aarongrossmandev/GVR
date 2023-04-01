"use client";
import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <header className="fixed w-full z-40 shadow-sm dark:bg-black/70 bg-white/80">
      <div className="py-4 border-b dark:border-emerald-400 border-emerald-900">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
