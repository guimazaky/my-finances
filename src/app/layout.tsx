import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";

export const monaSans = localFont({
  src: [
    {
      path: "./fonts/MonaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/MonaSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/MonaSans-Bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/MonaSans-SemiBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "MyFinances",
  description: "Finance app",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${monaSans.className}  antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
