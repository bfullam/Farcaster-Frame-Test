export const metadata = {
  title: "Ecommerce Frame",
  description: "...",
};

import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-row items-center pl-10 p-3 space-x-5 border border-b border-gray-300">
          <div className="flex flex-row items-center space-x-1">
            <Image
              src="/flames.jpg" // The path to your image
              alt="Description of the image" // Alternative text for the image
              width={40} // Desired width of the image (can be changed)
              height={20} // Desired height of the image (can be changed)
            />
            <div className="text-lg font-semibold">Flames</div>
          </div>

          <Link href="/" passHref>
            <span className="font-semibold pl-5">Create</span>{" "}
            {/* Add Link and a tags */}
          </Link>
          <Link href="/manage" passHref>
            <span className="font-semibold">Manage</span>{" "}
            {/* Add Link and a tags */}
          </Link>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
