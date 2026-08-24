import type { Metadata } from "next";
import "./globals.css";
import "./mobile-intro.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || process.env.RENDER_EXTERNAL_URL || "http://localhost:3000"),
  title: "Fletcher Tattoos | Shrewsbury",
  description: "Fine line, dotwork, blackwork and portrait tattooing by Abbie Fletcher at The Needle Lounge, Shrewsbury.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
