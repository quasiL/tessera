"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

export default function HeroSection() {
  const translate = useTranslations("HeroSection");
  const locale = useLocale();

  return (
    <section className="container mx-auto pb-16">
      <div className="relative hidden md:block">
        <Image
          src="/video.gif"
          width={2000}
          height={760}
          className="rounded"
          alt="Cityscape of Tessera"
          unoptimized
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="absolute bottom-8 right-10 text-white flex items-center gap-3"
        >
          <h1 className="text-2xl font-bold">See Our Case Studies</h1>
          <Link href={`/${locale}/studies`}>
            <button className="bg-tessera_blue hover:bg-blue-300 p-2 rounded text-black">
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </Link>
        </motion.div>
        <div className="absolute bottom-0 left-0 bg-white p-2">
          <h1 className="text-9xl font-bold">Tessera</h1>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="absolute top-8 left-10 text-white flex items-center gap-3"
        >
          <h1 className="text-4xl">{translate("motto")}</h1>
        </motion.div>
      </div>
    </section>
  );
}
