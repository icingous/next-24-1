import React, { FC, PropsWithChildren } from "react";

const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="mt-3 mb-3">{children}</div>;
};

export default PageWrapper;
