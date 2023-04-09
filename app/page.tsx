import Header from "@components/Header";
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
    <>
      <Header />
      <main
        className={`${poppins.variable} ${mulish.variable} flex min-h-[200vh] flex-col items-center justify-center`}
      >
        <h1 className="text-3xl font-bold">ealpizar.com</h1>
      </main>
    </>
  );
}
