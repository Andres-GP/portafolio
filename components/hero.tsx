"use client";

import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import Spline from "@splinetool/react-spline/next";
import { useTheme } from "../app/context/ThemeContext";
import Loader from "./ui/loader";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function Hero() {
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-between gap-10 pt-25 lg:flex-row"
    >
      <div className="lg:flex-1 space-y-6">
        <div className="space-y-2">
          <div className="transform scale-160 h-[50px] w-fit ml-3 mb-2">
            <Avatar>
              <AvatarImage src="/avatar.png" alt="Andrés García" />
              <AvatarFallback>AG</AvatarFallback>
            </Avatar>
          </div>
          <p className="text-primary font-mono text-sm">Hi, my name is</p>

          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Andrés García
          </h1>
          <h2 className="text-4xl font-bold tracking-tight text-muted-foreground sm:text-5xl lg:text-6xl">
            I build things for the web.
          </h2>
        </div>

        <p className="text-lg leading-relaxed text-muted-foreground">
          I’m a Frontend Developer with +5 years of experience designing and
          coding mobile and web apps out of great ideas based in wisdom and
          intelligence, I’m willing to give amazing ideas and take them to live
          in little time, fast as thought. you can put all your confidence in my
          commitment, professionalism and knowledge, I’m always looking forward
          for collaborations and deals.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button
            size="lg"
            className="font-mono cursor-pointer"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-mono bg-transparent cursor-pointer"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex gap-4 pt-4">
          <a
            href="https://github.com/Andres-GP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/andres-felipe-garcia-pedreros/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:andresgarciapedreros@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
      <div className="flex-1 w-[800px] h-[700px] rounded-xl overflow-hidden scale-65 md:hidden lg:block">
        <Suspense fallback={<Loader />}>
          <Spline
            scene={
              isDark
                ? "https://prod.spline.design/N4-ypHUkAhRzf0qf/scene.splinecode"
                : "https://prod.spline.design/zBt7AYvjL9QXSq42/scene.splinecode"
            }
          />
          <div
            className={`w-[200px] h-[100px] absolute bottom-0 right-0 transition-colors duration-300 ${
              isDark ? "bg-black" : "bg-white"
            }`}
          />
        </Suspense>
      </div>
    </section>
  );
}
