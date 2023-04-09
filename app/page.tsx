import { Mulish, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});
const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});

export default function Home() {
  return (
    <main
      className={`${poppins.variable} ${mulish.variable} flex min-h-screen flex-col items-center justify-center`}
    >
      <h1 className="text-3xl font-bold">ealpizar.com</h1>
    </main>
  );
}
