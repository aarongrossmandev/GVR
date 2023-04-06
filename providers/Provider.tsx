"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Provider;
