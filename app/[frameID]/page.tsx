import type { Metadata } from "next";
import { fetchMetadata } from "frames.js/next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Ecommerce Frame",
    description: "This is an ecommerce Frame",
    other: {
      ...(await fetchMetadata(
        new URL(
          "/[frameID]/frames",
          process.env.VERCEL_URL || "http://localhost:3001"
        )
      )),
    },
  };
}

export default async function Home() {
  return (
    <div>
      Ecommerce Frame
    </div>
  );
}
