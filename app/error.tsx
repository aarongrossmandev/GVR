"use client";

import { useEffect } from "react";

interface ErrorStateProps {
  error: Error;
}

import { FC } from "react";
import EmptyState from "./components/EmptyState";

interface errorProps {}

const ErrorState: FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title="Oh No" subtitle="Something went wrong" />;
};

export default ErrorState;
