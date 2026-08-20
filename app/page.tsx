import type { Metadata } from "next";
import BookExperience from "./BookExperience";

export const metadata: Metadata = {
  title: "Fletcher Tattoos | Shrewsbury",
  description: "Fine line, dotwork, blackwork and portrait tattooing by Abbie Fletcher at The Needle Lounge, Shrewsbury.",
};

export default function HomePage() {
  return <BookExperience />;
}
