"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import { ThemeContext, ThemeProvider } from "@/context/ThemeContext";
import { useContext } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aameer Khan Portfolio",
  description: "Next App...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <link href="./styles/aos-noscript.css" rel="stylesheet" />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      </Head>
      <ThemeProvider>
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossOrigin="anonymous"
      />
    </html>
  );
}
