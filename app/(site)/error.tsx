"use client";

// import Error from "next/error";
import React from "react";

const ErrorBoundary = ({ error }: { error: Error }) => {
  return <div>`Global Error Handler: ${error.message}`</div>;
};

export default ErrorBoundary;
