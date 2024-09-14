"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { useTranslations, useLocale } from "next-intl";
import { useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GlobeIcon } from "@radix-ui/react-icons";

export default function NavLinks() {
  const pathname = usePathname();
  const locale = useLocale();
  const translate = useTranslations("Navigation");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleValueChange = (value: string) => {
    const updatedUrl = pathname.replace(/^\/[a-z]{2}/, `/${value}`);
    startTransition(() => {
      router.replace(updatedUrl);
    });
  };

  const links = [
    { name: translate("home"), href: "" },
    { name: translate("purpose"), href: "/purpose" },
    { name: translate("case_studies"), href: "/studies" },
    { name: translate("blog"), href: "/blog" },
  ];

  return (
    <>
      <div className="w-full bg-zinc-200 py-4 px-6 rounded flex justify-between">
        <div className="flex gap-8">
          {links.map((link) => {
            const isActive = pathname === `/${locale}${link.href}`;

            return (
              <div key={link.name} className="flex items-center gap-2 group">
                <div
                  className={clsx("w-3 h-3 group-hover:bg-tessera_red", {
                    "bg-tessera_red": isActive,
                    "bg-gray-400": !isActive,
                  })}
                />
                <Link
                  href={`/${locale}${link.href}`}
                  className="hover:text-gray-700"
                >
                  <p>{link.name}</p>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex gap-2 items-center">
          <GlobeIcon className="w-6 h-6" />
          <Select
            onValueChange={handleValueChange}
            disabled={isPending}
            value={locale}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">
                <div className="flex gap-2">
                  <Image
                    src="/uk.svg"
                    width={16}
                    height={12}
                    className="rounded"
                    alt="uk"
                  />
                  <p>UK</p>
                </div>
              </SelectItem>
              <SelectItem value="cz">
                <div className="flex gap-2">
                  <Image
                    src="/cz.svg"
                    width={16}
                    height={12}
                    className="rounded"
                    alt="cz"
                  />
                  <p>CZ</p>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
}
