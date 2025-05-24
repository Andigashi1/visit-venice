"use client";

import { useState } from "react";
import logo from "@/public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <div className="z-100 fixed top-8 left-4 right-4 py-2 px-5 md:px-10 bg-white border border-neutral-200 shadow-lg flex justify-between items-center rounded-xl">
      <Image src={logo} className="w-20 h-12 max-md:hidden" alt="logo" />
      <button onClick={toggleMenu} className="md:hidden">
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      <div className={`${menuOpen ? 'flex' : 'hidden'} md:flex gap-6 max-md:text-xs font-bold [&>*]:cursor-pointer`}>
        <Link href="/" className={pathname === "/" ? "text-primary" : null}>
          Home
        </Link>
        <Link
          href="/history"
          className={pathname === "/history" ? "text-primary" : null}
        >
          History
        </Link>
        <Link
          href="/places"
          className={pathname === "/places" ? "text-primary" : null}
        >
          Places
        </Link>
        <Link
          href="/gallery"
          className={`${
            pathname === "/gallery" ? "text-primary" : null
          } cursor-pointer`}
        >
          Gallery
        </Link>
      </div>
    </div>
  );
};

export default Nav;
