"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import NavLinks from "./NavLinks";
import { useTranslations, useLocale } from "next-intl";

export default function NavBar() {
  const translate = useTranslations("Navigation");
  const locale = useLocale();
  const isContact = usePathname() === `/${locale}/contact`;

  return (
    <nav className="flex gap-4">
      <NavLinks />
      <Link
        className={clsx("bg-tessera_yellow p-4 rounded hover:bg-yellow-300", {
          "bg-yellow-300": isContact,
        })}
        href={`/${locale}/contact`}
      >
        <p>{translate("contact")}</p>
      </Link>
    </nav>
  );
}
