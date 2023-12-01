import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import { Roboto } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";

const roboto = Roboto({ subsets: ["greek"], weight: "300" });

export const metadata: Metadata = {
  title: "CW Table",
  description: "Show tables for users and their roles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={roboto.className}>
        <Navigation />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
