import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider1 } from "./_components/Provider";
import ReduxProvider from "./_components/ReduxProvider";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "shopping store",
  description: "practicing next js tailwind and typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider1><ReduxProvider><SkeletonTheme baseColor="#ebebeb" highlightColor="#7F7F7F">{children}</SkeletonTheme></ReduxProvider></Provider1>
      </body>
    </html>
  );
}
