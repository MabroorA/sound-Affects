import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navBar"

import { auth } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "*App Name*",
  description: "App description",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth();

  return (
    <html lang="en">
      <body className={inter.className}>
          <NavBar session={session}/>
          <main className="mx-auto max-w-7xl max-h-lvh p-3
          ">
            {children}
          </main>
        </body>
    </html>
  );
}
