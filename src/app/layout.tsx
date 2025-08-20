import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../auth";

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

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={`${monaSans.className}  antialiased`}>{children}</body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
