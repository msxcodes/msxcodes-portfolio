import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import StarsCanvas from "@/components/common/star-background";
import Footer from "@/components/footer/footer";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "msxcodes - portfolio website",
  description: "This is a portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <NextUIProvider>
          <StarsCanvas />
          <Toaster />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
