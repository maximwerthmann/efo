"use client";

import Link from "next/link";

import { ModeToggle } from "./mode-toggle";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Github, Instagram, Linkedin, Mail, Megaphone, Menu, Sparkles, Twitter } from "lucide-react";
import Logo from "./logo";
import Announcement from "./announcement";

const NavigationLinks = [
  {
    title: "Startseite",
    href: "/",
  },
  {
    title: "Der verein",
    href: "/about",
  },
  {
    title: "Neuigkeiten",
    href: "/neuigkeiten",
  },
  {
    title: "Spenden",
    href: "/spenden",
  }
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 flex flex-col w-full z-50">
      <div className="w-full flex items-center bg-background justify-between px-8 h-20">
        <div className="flex items-center flex-1 justify-start space-x-4">
          <Logo size="50" />
          <Separator orientation="vertical" className="h-8"/>
          <span className="font-semibold">Eisenbahnfreunde Ostbelgien</span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {NavigationLinks.map((item) => {
            const isActive = pathname == item.href;
            return (
              <Link
                href={item.href}
                key={item.title}
                className={`rounded-md relative flex flex-col hover:text-foreground transition items-center text-sm p-1 after:bg-primary after:h-0.5 after:absolute after:bottom-0 after:w-0 hover:after:w-full after:transition-all ${
                  isActive
                    ? "text-foreground after:w-full"
                    : "text-muted-foreground"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="hidden md:flex items-center space-x-4 flex-1 justify-end">

          <Link href={"/kontakt"}>
            <Button className="space-x-2">
              <span>Kontakt</span>
              <Mail size={16}/>
            </Button>
          </Link>
          <Link href={"/beitreten"}>
            <Button variant={'outline'} className="space-x-2">
              <span>Mitglied werden</span>
              <Sparkles size={16}/>
            </Button>
          </Link>
          <Separator orientation="vertical" className="h-8" />
          <ModeToggle />
        </div>
        <div className="md:hidden">
          <Menu size={32} />
        </div>
      </div>
      <Announcement/>
    </header>
  );
}
