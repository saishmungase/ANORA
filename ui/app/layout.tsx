import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anora",
  description: "Conversations -> Content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='h-full w-full'
      >
        {children}
      </body>
    </html>
  );
}
