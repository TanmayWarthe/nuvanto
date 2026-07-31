import { Metadata } from "next";
import { TeamPageContent } from "./TeamPageContent";

export const metadata: Metadata = {
  title: "Meet the Founders | Navunto",
  description: "The people behind Navunto. We're a small team that partners directly with founders to build premium websites.",
};

export default function TeamPage() {
  return (
    <main>
      <TeamPageContent />
    </main>
  );
}
