import "./normalize.css";
import "./globals.css";
import type { Metadata } from "next";
import clsx from "clsx";
import { Handjet, Jost, Caveat } from "next/font/google";
import { Header } from "components/Header";

const jost = Jost({ variable: "--font-main", subsets: ["cyrillic", "latin"] });
const handjet = Handjet({
  variable: "--font-pixel",
  weight: ["400"],
  subsets: ["cyrillic", "latin"],
});
const caveat = Caveat({
  variable: "--font-handwritten",
  weight: ["500"],
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "Свадьба Алексея и Дарьи",
  description: "Приглашение на свадьбу",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(jost.className, jost.variable, caveat.variable, handjet.variable)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
