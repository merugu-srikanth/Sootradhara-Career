"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Latest Jobs", path: "/latest-govt-jobs" },
    { name: "Internships", path: "/internship" },
    { name: "Contact", path: "/contact-us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            {/* <span
              className={`text-2xl font-extrabold tracking-tight transition-colors ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Career Mitra
            </span> */}
            <Image
              src="/NewLogo.png"
              alt="Career Mitra Logo"
              width={122}
              height={32}
              className="ml-2  object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`font-medium transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:text-orange-500"
                    : "text-white hover:text-orange-300"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Search Icon */}
            <button
              className={`transition-colors ${
                scrolled
                  ? "text-gray-600 hover:text-green-600"
                  : "text-white hover:text-green-300"
              }`}
            >
              <FiSearch size={20} />
            </button>

            {/* CTA Button */}
            <Link
              href="/latest-govt-jobs"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:scale-105 text-white px-5 py-2 rounded-full font-semibold shadow-md transition-all"
            >
              Get Alerts
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors focus:outline-none ${
                scrolled
                  ? "text-gray-700"
                  : "text-white"
              }`}
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/latest-govt-jobs"
              onClick={() => setIsOpen(false)}
              className="block mt-4 text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-3 rounded-xl font-semibold shadow-md"
            >
              Get Alerts
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}