import './normalize.css';
import './globals.css';
import type { Metadata } from 'next';
import { Handjet, Jost, Caveat } from 'next/font/google';
import clsx from 'clsx';

const jost = Jost({ variable: '--font-main', subsets: ['cyrillic', 'latin'] });
const handjet = Handjet({
  variable: '--font-pixel',
  weight: ['400'],
  subsets: ['cyrillic', 'latin'],
});
const caveat = Caveat({
  variable: '--font-handwritten',
  weight: ['500'],
  subsets: ['cyrillic', 'latin'],
});

export const metadata: Metadata = {
  title: 'Свадьба Алексея и Дарьи',
  description: 'Приглашение на свадьбу',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          jost.className,
          jost.variable,
          caveat.variable,
          handjet.variable
        )}
      >
        <div style={{ padding: 50, fontSize: 28 }}>
          <p className={jost.className}>
            jost
            <br />
            Приглашаем на свадьбу Дарьи и Алексея. Будем рады видеть вас.
            friendship000
          </p>
          <br />
          <p style={{ fontFamily: 'var(--font-pixel)' }}>
            handjet
            <br /> Приглашаем на свадьбу Дарьи и Алексея. Будем рады видеть вас.
            friendship000
          </p>
          <br />
          <p style={{ fontFamily: 'var(--font-handwritten)' }}>
            caveat
            <br />
            Приглашаем на свадьбу Дарьи и Алексея. Будем рады видеть вас.
            friendship000
          </p>
        </div>
        {children}
      </body>
    </html>
  );
}
