import React, { FC, PropsWithChildren } from "react";

const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="pt-3 pb-3 pl-6 pr-6">{children}</div>;
};

export default PageWrapper;
