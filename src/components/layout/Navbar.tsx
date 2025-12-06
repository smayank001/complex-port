import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import MediaFullscreen from "@/components/media/MediaFullscreen";
import { FuturisticNavbar } from "./FuturisticNavbar";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Media", href: "#media" },
  { name: "Tech", href: "#tech" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return <FuturisticNavbar />;
}
