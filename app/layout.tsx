import "./normalize.css";
import "./globals.css";
import type { Metadata } from "next";
import clsx from "clsx";
import { Handjet, Jost, Caveat } from "next/font/google";
import { Header } from "components/Header";
import { Countdown } from "components/Countdown";

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
  icons: {
    icon: "./favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(jost.className, jost.variable, caveat.variable, handjet.variable)}>
        <Header />
        {children}
        <footer className="fixed w-full flex justify-center bottom-0 left-0 border-t bg-inherit z-10">
          <Countdown />
        </footer>
      </body>
    </html>
  );
}
