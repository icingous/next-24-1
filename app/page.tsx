import React from "react";
import { RedirectType, redirect } from "next/navigation";
console.log();
const page = () => {
  redirect("/uk", RedirectType.replace);
};

export default page;
