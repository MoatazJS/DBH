"use client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
export default function HeroSection() {
  return (
    <>
      <main className="min-h-screen bg-black flex flex-col gap-6">
        <div className="flex items-center justify-center">
          <Badge variant="secondary" className="bg-[#0D0D0D] text-[#723392] ">
            Creative Advertising Agency
          </Badge>
        </div>
        <div className="text-center">
          <h1 className="text-white text-9xl font-bold tracking-tight">
            VISION
          </h1>
          <h1 className="text-9xl font-extrabold bg-linear-to-r from-[#7793FF] to-[#A6A6A6] bg-clip-text text-transparent tracking-tight">
            UNBOUND
          </h1>
        </div>
        <div className=" text-center ">
          <p className="text-[#A6A6A6] text-xl">
            We are the architects of the unseen. DBH blends diverse artistic
            prowess
            <br /> with cutting-edge technology to deliver immersive experiences
            that leave a<br /> lasting mark on the world.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={"/Projects"}
            className="bg-purple-500 cursor-pointer text-white px-8 py-4 rounded-full hover:bg-purple-600 transition"
          >
            See Our Work
          </Link>
          <Link
            href={"/Contact"}
            className="border border-purple-500 cursor-pointer text-purple-500 px-8 py-4 rounded-full hover:bg-purple-500 hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </main>
    </>
  );
}
