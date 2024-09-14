import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const locale = useLocale();
  const translate = useTranslations("Navigation");
  const currentYear = new Date().getFullYear();

  const links = [
    { name: translate("home"), href: "" },
    { name: translate("purpose"), href: "/purpose" },
    { name: translate("case_studies"), href: "/studies" },
    { name: translate("blog"), href: "/blog" },
  ];

  return (
    <footer className="container mx-auto p-8 pb-32 bg-tessera_blue rounded">
      <div className="flex justify-between gap-16">
        <div className="w-1/3">
          <p className="font-bold text-xl pb-1">Tessera</p>
          <p>Copyright © {currentYear} Tessera. All rights reserved.</p>
          <div className="pt-4 flex gap-4 items-center">
            <Link href="/#">
              <LinkedInLogoIcon className="w-8 h-8" />
            </Link>
            <Link href="/#">
              <Image
                src="/facebook.svg"
                alt="Facebook Logo"
                width={8}
                height={8}
                className="w-8 h-8"
              />
            </Link>
            <Link href="/#">
              <Image
                src="/twitterx.svg"
                alt="Twitterx Logo"
                width={8}
                height={8}
                className="w-8 h-8"
              />
            </Link>
            <Link href="/#">
              <EnvelopeIcon className="w-9 h-9" />
            </Link>
          </div>
        </div>
        <div className="w-1/3">
          <div className="flex items-center gap-3 pb-6">
            <div className="w-3 h-3 bg-tessera_red"></div>
            <p className="text-lg">Contact</p>
          </div>
          <p>
            Have questions about our blockchain solutions? Contact us to see how
            we can enhance your business with innovation and security.
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-white hover:bg-gray-200 py-2 px-4 rounded mt-4"
          >
            <p>Contact us</p>
          </Link>
        </div>
        <div className="w-1/3">
          <div className="flex items-center gap-3 pb-6">
            <div className="w-3 h-3 bg-tessera_red"></div>
            <p className="text-lg">Links</p>
          </div>
          <div className="flex flex-col gap-2">
            {links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={`/${locale}${link.href}`}
                  className="hover:text-gray-700 underline underline-offset-2"
                >
                  <p>{link.name}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
