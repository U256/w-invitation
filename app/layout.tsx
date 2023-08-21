import "./normalize.css";
import "./globals.css";
import type { Metadata } from "next";
import clsx from "clsx";
import { Handjet, Comfortaa, Caveat } from "next/font/google";
import { Header } from "components/Header";
import { Countdown } from "components/Countdown";
import inviteImage from "public/images/invite.png";

const main = Comfortaa({ variable: "--font-main", subsets: ["cyrillic", "latin"] });
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
  openGraph: {
    url: "https://w-invitation.vercel.app",
    type: "website",
    title: "Свадьба Алексея и Дарьи",
    description: "Приглашение на свадьбу",
    images: [inviteImage.src],
    siteName: "https://w-invitation.vercel.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(main.className, main.variable, caveat.variable, handjet.variable)}>
        <Header />
        {children}
        <footer className="fixed w-full flex justify-center left-0 bottom-0 border-t bg-inherit z-10 footer-override">
          <Countdown />
        </footer>
      </body>
    </html>
  );
}
