"use client";

import React, { FC, PropsWithChildren } from "react";

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div onClick={() => console.log("wrapper click")}>{children}</div>;
};

export default Wrapper;
