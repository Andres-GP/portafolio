"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { useTheme } from "../app/context/ThemeContext";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const { isDark, toggleDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <button
          onClick={() => scrollToSection("home")}
          className="text-lg font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
        >
          Portfolio
        </button>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => scrollToSection(item.id)}
              className={
                activeSection === item.id
                  ? "text-primary cursor-pointer"
                  : "text-muted-foreground hover:text-foreground cursor-pointer"
              }
            >
              {item.label}
            </Button>
          ))}
          <Button
            onClick={toggleDark}
            className="font-mono cursor-pointer ml-2"
          >
            {isDark ? "Toggle to Light theme" : "Toggle to Dark theme"}
          </Button>
        </div>
      </div>
    </nav>
  );
}
