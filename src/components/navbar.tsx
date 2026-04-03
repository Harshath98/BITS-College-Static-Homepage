"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Placements", href: "/placements" },
    { name: "Campus", href: "/Campus" },
    { name: "Admissions", href: "/admissions" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="
    fixed top-[40px] left-0 w-full z-40
    bg-[#120f0f]/90 backdrop-blur-md
    shadow-[0_4px_20px_rgba(0,0,0,0.4)]
    border-b border-white/10
    ">

      <div className="max-w-[1280px] mx-auto px-4 py-2 flex items-center justify-between">

        {/* Logo + Name → GOOGLE MAPS LINK */}
        <Link 
          href="https://maps.app.goo.gl/B6DSawMjEEpnhAgt7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 cursor-pointer"
        >

          {/* Logo */}
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <Image
              src="/Bheema Logo.jpeg"
              alt="Bheema Institute Logo"
              width={55}
              height={55}
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Name */}
          <div className="hidden md:flex flex-col leading-tight text-white">
            <h1 className="text-2xl font-bold tracking-wide">
              BHEEMA
            </h1>
            <span className="text-sm text-gray-300">
              Institute of Technology & Science
            </span>
            <span className="text-sm text-gray-400">
              Adoni
            </span>
          </div>

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-md font-medium text-white">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-[#3B82F6] transition duration-200"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/apply"
            className="
            bg-gradient-to-r from-[#2563EB] to-[#3B82F6]
            px-4 py-1.5 rounded-full text-white text-sm
            hover:scale-105 transition duration-300
            shadow-md
            "
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#120f0f]/95 backdrop-blur-md text-white px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/apply"
            className="block bg-blue-600 text-center py-2 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      )}

    </header>
  );
}