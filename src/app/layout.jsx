import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tadween UI",
  description: "Generate arabic text digitally from images",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0c0c0c]`}>{children}</body>
    </html>
  );
}
