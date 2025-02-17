import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-spartan",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Invoice",
  description: "Invoice App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
