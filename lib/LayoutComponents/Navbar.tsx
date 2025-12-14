import Link from "next/link";

export default function Navbar() {
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
      <nav className="bg-black flex md:hidden justify-between items-center h-32">
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
    </>
  );
}
