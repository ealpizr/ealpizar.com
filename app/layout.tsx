import "./globals.css";

export const metadata = {
  title: "Enrique Alpízar – Software Engineer",
  description: "Enrique Alpízar's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-[#767676] hover:scrollbar-thumb-[#8c8c8c] scrollbar-track-[#e5e5e5] dark:scrollbar-thumb-[#767676] dark:hover:scrollbar-thumb-[#a6a6a6] dark:scrollbar-track-[#424242]">
        {children}
      </body>
    </html>
  );
}
