import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pork & Garlic — Season 2 Planner",
  description: "An editable financial decision tool for Season 2.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
