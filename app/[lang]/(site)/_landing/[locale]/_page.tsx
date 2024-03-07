import React from "react";
import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

export const generateStaticParams = () =>
  i18n.locales.map((locale) => ({ lang: locale }));

const Landing = async (props: { params: { locale: Locale } }) => {
  const { locale } = props.params;
  const dictionary = await getDictionary(locale);

  return (
    <>
      <h1>{dictionary.pages.landing.greeting}</h1>
    </>
  );
};

export default Landing;
