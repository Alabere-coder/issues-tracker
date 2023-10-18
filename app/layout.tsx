import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@radix-ui/themes/styles.css';
import "./globals.css";
import NavBar from "./components/NavBar";
import { Theme, ThemePanel } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <NavBar />
          <main>{children}</main>
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
