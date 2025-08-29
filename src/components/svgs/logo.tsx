"use client";

import type { ImgHTMLAttributes } from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Logo(props: ImgHTMLAttributes<HTMLImageElement>) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/logo.svg");

  useEffect(() => {
    setMounted(true);

    // Obtém o tema do localStorage ao montar
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "dark") {
        setLogoSrc("/logo-dark.svg");
      } else {
        setLogoSrc("/logo.svg");
      }
    }
  }, []);

  // Atualiza o logo quando o tema muda
  useEffect(() => {
    if (mounted && resolvedTheme) {
      setLogoSrc(resolvedTheme === "dark" ? "/logo-dark.svg" : "/logo.svg");
    }
  }, [resolvedTheme, mounted]);

  return <img src={logoSrc} alt="LiveMart logo" {...props} />;
}
