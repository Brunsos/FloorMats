"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "./icons";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#">
          <Image
            src="/kll-logo.png"
            alt="KLL Solutions"
            width={180}
            height={64}
            className="h-14 w-auto"
          />
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop right side */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:5551234567"
            className="flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-navy"
          >
            <Phone size={16} />
            (555) 123-4567
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-crimson px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-crimson-dark"
          >
            Request a Facility Assessment
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-slate-600 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-navy"
              >
                {link.label}
              </a>
            ))}
            <hr className="border-slate-200" />
            <a
              href="tel:5551234567"
              className="flex items-center gap-1.5 text-sm font-medium text-slate-600"
            >
              <Phone size={16} />
              (555) 123-4567
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg bg-crimson px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-crimson-dark"
            >
              Request a Facility Assessment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
