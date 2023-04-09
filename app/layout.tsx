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
      <body>{children}</body>
    </html>
  );
}
