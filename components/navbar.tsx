import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/button";

export interface LinkData {
  label: string;
  href: string;
}

export interface NavbarProps {
  links: LinkData[];
}

export const Navbar = ({ links }: NavbarProps) => {
  return (
    <header className="flex py-7 justify-between container w-full">
      <div className="flex items-center space-x-10">
        <Link href="/" className="font-heading text-xl">
          Quizer
        </Link>
        <nav>
          <ul className="flex items-center gap-x-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Link href="/login" className={buttonVariants({ variant: "secondary" })}>
        Login
      </Link>
    </header>
  );
};
