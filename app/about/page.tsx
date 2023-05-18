import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Next Project",
  description: "Overview of NextJS",
};

export default function About() {
  // throw new Error("test");
  return (
    <div className="text-center mt-10">
      <p>About Page</p>
      <Link href="/">Return to home</Link>
    </div>
  );
}
