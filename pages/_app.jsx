import { Inter, Dancing_Script } from "@next/font/google";

import "./globals.css";
import { useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancingScript",
});

export default function App({ Component, pageProps }) {
  const fetchUserIP = async () => {
    const responseIP = await fetch("https://api.ipify.org?format=json");
    const jsonResponseIP = await responseIP.json();
    const userIP = jsonResponseIP.ip;

    await fetch("/api/v1/access", {
      method: "POST",
      body: JSON.stringify({ ip: userIP }),
    });
  };

  useEffect(() => {
    fetchUserIP();
  }, []);

  return (
    <main className={`${inter.variable} ${dancingScript.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
