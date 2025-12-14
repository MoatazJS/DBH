"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Desktop navbar */}
      <nav className="bg-black hidden md:flex justify-between items-center h-32">
        <div>
          <h1 className="text-white font-bold text-2xl pl-9">
            DBH<span className="text-[#C86EFC]">.</span>
          </h1>
        </div>
        <div>
          <li className="text-gray-200 flex justify-between gap-8 pr-9">
            <ul className="hover:text-[#C86EFC]">
              <Link href={"/About"}>About</Link>
            </ul>
            <ul className="hover:text-[#C86EFC]">
              <Link href={"/Vision"}>Vision</Link>
            </ul>
            <ul className="hover:text-[#C86EFC]">
              <Link href={"/Method"}>Method</Link>
            </ul>
            <ul className="hover:text-[#C86EFC]">
              <Link href={"/Work"}>Work</Link>
            </ul>
            <ul className="hover:text-[#C86EFC]">
              <Link href={"/Contact"}>Contact</Link>
            </ul>
          </li>
        </div>
      </nav>
      {/* Mobie View */}
      <nav className="bg-black flex md:hidden justify-between items-center h-32 px-9 relative">
        <h1 className="text-white font-bold text-2xl">
          DBH<span className="text-[#C86EFC]">.</span>
        </h1>

        {/* Burger button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-3xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Mobile menu */}
        {open && (
          <ul className="absolute top-32 left-0 w-full bg-black text-gray-200 flex flex-col items-center gap-6 py-8">
            {["About", "Vision", "Method", "Work", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-[#C86EFC]"
                onClick={() => setOpen(false)}
              >
                <Link href={`/${item}`}>{item}</Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}
