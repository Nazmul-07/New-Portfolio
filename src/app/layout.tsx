import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `${profile.brand} | ${profile.name} - ${profile.designation}`,
  description: `${profile.name} (${profile.brand}) - ${profile.designation} & ${profile.secondaryTitle}. Portfolio showcasing projects, technical skills, and experience.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
