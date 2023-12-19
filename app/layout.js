import "./globals.css";
import { Forum } from "next/font/google";
import Navbar from "./components/Navbar";
import Script from "next/script";
import Footer from "./components/Footer";

const forum = Forum({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Hazel Miller & The Collective",
  description:
    "Looking for an unforgettable experience? Book Hazel Miller and the Collective, a renowned Colorado-based band led by the force of nature herself, Hazel Miller.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-red text-white">
      <body className={forum.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
