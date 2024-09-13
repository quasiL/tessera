"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import NavLinks from "./NavLinks";

export default function NavBar() {
  const isContact = usePathname() === "/contact";

  return (
    <nav className="flex gap-4">
      <NavLinks />
      <Link
        className={clsx("bg-tessera_yellow p-4 rounded hover:bg-yellow-300", {
          "bg-yellow-300": isContact,
        })}
        href="/contact"
      >
        <p>Contact</p>
      </Link>
    </nav>
  );
}
