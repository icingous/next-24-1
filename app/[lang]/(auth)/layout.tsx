import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import LocaleSwitch from "../../components/LocaleSwitch";
import "../../globals.css";
import { Locale } from "@/i18n-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// export async function generateStaticParams() {
//   return [{ lang: "en" }, { lang: "uk" }];
// }

export default function AuthLayout({
  params: { lang },
  children,
}: Readonly<{
  params: { lang: Locale };
  children: React.ReactNode;
}>) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <div className="p-3 flex justify-between gap-2 bg-slate-500 text-white">
          <Link href={`/${lang}`}>Home {lang}</Link>
          <LocaleSwitch current={lang} />
        </div>
        {children}
      </body>
    </html>
  );
}
