"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import DemoModal from "./DemoModal";
import Image from "next/image";

const navLinks = [
  { href: "#services", label: "Nos solutions" },
  { href: "#comment-ca-marche", label: "Comment ça marche" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
              {/* <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h8M8 11h5M3 7l1-3h16l1 3M3 7v10a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1V7M7 17h.01M17 17h.01"
                />
              </svg> */}
              <Image
                src="/logo/Design-sans-titre-_1_.svg"
                alt="Logo"
                width={0}
                height={0}
                className="w-5 h-auto invert brightness-0"
              />
            </div>
            <div className="leading-none">
              <span className="font-bold text-lg text-blue-700">Transport</span>
              <span className="font-bold text-lg text-orange-500"> Facile</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-7"
            aria-label="Navigation principale"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-blue-700 font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA — une seule action, claire */}
          <div className="hidden md:flex items-center">
            <DemoModal
              triggerLabel="Demander une démo gratuite"
              triggerClassName="bg-orange-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-orange-600 transition-all shadow-sm shadow-orange-200 cursor-pointer"
            />
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 pb-1 px-4">
              <DemoModal
                triggerLabel="Demander une démo gratuite"
                triggerClassName="w-full text-center bg-orange-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-orange-600 transition-colors cursor-pointer block"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
