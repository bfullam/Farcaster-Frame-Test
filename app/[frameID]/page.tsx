import type { Metadata } from "next";
import { fetchMetadata } from "frames.js/next";

type Props = {
  params: { frameID: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  console.log(process.env.VERCEL_URL);
  return {
    title: "Ecommerce Frame",
    description: "This is an ecommerce Frame",
    other: {
      ...(await fetchMetadata(
        new URL(
          `/${params.frameID}/frames`,
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
