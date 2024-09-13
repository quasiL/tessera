"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/" },
  { name: "Purpose", href: "/purpose" },
  { name: "Case Studies", href: "/studies" },
  { name: "Blog", href: "/blog" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      <div className="flex gap-8 bg-zinc-200 py-4 px-6 rounded w-full">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <div key={link.name} className="flex items-center gap-2 group">
              <div
                className={clsx("w-3 h-3 group-hover:bg-tessera_red", {
                  "bg-tessera_red": isActive,
                  "bg-gray-400": !isActive,
                })}
              />
              <Link href={link.href} className="hover:text-gray-700">
                <p>{link.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
