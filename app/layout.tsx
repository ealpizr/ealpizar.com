import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enrique Alpízar | Software Engineer",
  description:
    "Software engineer with a passion for cybersecurity and ethical hacking.",
  alternates: {
    canonical: "https://ealpizar.com",
  },
  other: {
    "google-site-verification": "hHu-3rCyTMHzLSKUekcgc81CVoZ6VUweVeNEvFI-7D0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
