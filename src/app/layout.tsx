import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stratena",
  description: "Modern website platform managed from an admin panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
