import * as React from "react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { Twitter, Linkedin, Instagram, Dribbble } from "lucide-react";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "X" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
];

export function Footer() {
  return (
    <footer className="w-full px-4 pb-4 pt-8">
      <div 
        className={cn(
          "relative mx-auto max-w-7xl rounded-2xl border border-white/20 dark:border-white/10 px-6 py-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden",
          "liquid-glass backdrop-blur-xl"
        )}
      >
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/[0.05] blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/[0.05] blur-[80px] pointer-events-none" />

        {/* Logo & Text */}
        <div className="flex items-center gap-3">
          <Logo className="scale-75 md:scale-90" />
          <span className="text-xl md:text-2xl font-bold tracking-tighter text-neutral-900 dark:text-white">
            VERTEX MEDIA HOUSE
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 md:gap-8">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-white/[0.02] text-neutral-600 dark:text-neutral-400 hover:border-orange-500/50 hover:text-orange-500 transition-all duration-300"
            >
              <social.icon className="h-5 w-5" />
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-full bg-orange-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        {/* Bottom decorative line for mobile */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-300/30 dark:via-white/10 to-transparent md:hidden" />
      </div>
      
      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-neutral-400 dark:text-neutral-600">
        © {new Date().getFullYear()} Vertex Media House. All rights reserved.
      </div>
    </footer>
  );
}
