"use client";

import { cn } from "~/lib/utils";
import { useScroll } from "~/hooks/use-scroll";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "./svgs";

export default function Header() {
  const scrolled = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "py-4 flex flex-row gap-2 justify-between items-center md:px-10 sm:px-6 px-4 sticky top-0 z-50",
        scrolled &&
          "bg-background/50 md:bg-transparent md:backdrop-blur-none backdrop-blur-sm"
      )}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Logo className="w-32 h-8" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link href="/" className="text-sm hover:text-primary transition-colors">
          Início
        </Link>
        <Link
          href="/about"
          className="text-sm hover:text-primary transition-colors"
        >
          Sobre
        </Link>
        <Link
          href="/founders"
          className="text-sm hover:text-primary transition-colors"
        >
          Fundadores
        </Link>
        <Link href="/">
          <Button
            size="sm"
            className="bg-[#4d4d4d] hover:bg-[#4d4d4d] cursor-pointer"
          >
            <p className="text-white">Entrar na Lista</p>
          </Button>
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col space-y-1 p-2"
        aria-label="Toggle menu"
      >
        <span
          className={cn(
            "block w-6 h-0.5 bg-current transition-all duration-300",
            isMenuOpen && "rotate-45 translate-y-1.5"
          )}
        />
        <span
          className={cn(
            "block w-6 h-0.5 bg-current transition-all duration-300",
            isMenuOpen && "opacity-0"
          )}
        />
        <span
          className={cn(
            "block w-6 h-0.5 bg-current transition-all duration-300",
            isMenuOpen && "-rotate-45 -translate-y-1.5"
          )}
        />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className="text-sm hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/about"
              className="text-sm hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="/founders"
              className="text-sm hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Fundadores
            </Link>
            <Link href="/">
              <Button
                size="sm"
                className="w-full bg-[#4d4d4d] hover:bg-[#4d4d4d] text-white"
              >
                Entrar na Lista
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
