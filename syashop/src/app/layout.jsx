import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import localFont from "next/font/local";

const gilroy = localFont({
  src: [
    {
      path: "../assets/font/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/font/Gilroy-Medium.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/font/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/font/Gilroy-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/font/Gilroy-MediumItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../assets/font/Gilroy-RegularItalic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-gilroy",
});

export const metadata = {
  title: "syashop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${gilroy.variable} antialiased container mx-auto px-6 md:px-6 lg:px-20 `}
      >
        {children}
      </body>
    </html>
  );
}
