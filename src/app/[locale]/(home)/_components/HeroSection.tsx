import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useTranslations, useLocale } from "next-intl";

export default function HeroSection() {
  const translate = useTranslations("HeroSection");
  const locale = useLocale();

  return (
    <section className="container mx-auto pb-16">
      <div className="relative hidden md:block">
        <Image
          src="/hero.webp"
          width={2000}
          height={760}
          className="rounded"
          alt="Cityscape of Tessera"
        />
        <div className="absolute bottom-8 right-10 text-white flex items-center gap-3">
          <h1 className="text-2xl font-bold">See Our Case Studies</h1>
          <Link href={`/${locale}/studies`}>
            <button className="bg-tessera_blue hover:bg-blue-300 p-2 rounded text-black">
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </Link>
        </div>
        <div className="absolute top-8 left-10 text-white flex items-center gap-3">
          <h1 className="text-4xl">{translate("motto")}</h1>
        </div>
      </div>
    </section>
  );
}
