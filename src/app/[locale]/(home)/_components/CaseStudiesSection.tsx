"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BigButton from "../../_components/BigButton";
import ImageButton from "../../_components/ImageButton";

export default function CaseStudiesSection() {
  return (
    <section className="container mx-auto pb-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <h1 className="text-xl pb-6">Case Studies</h1>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <h2 className="text-2xl pb-8 w-1/2">
          See how blockchain is transforming industries like supply chain and
          real estate, improving transparency, security, and operational
          efficiency in real-world use cases.
        </h2>
      </motion.div>
      <div className="flex gap-3 w-full">
        <Image
          src="/cases.webp"
          width={850}
          height={300}
          className="hidden md:block rounded"
          alt="Purpose"
        />
        <div></div>
        <BigButton
          title="Learn more"
          text="Explore how private blockchain solutions are revolutionizing various industries with real-world applications. From enhancing supply chain transparency to streamlining real estate transactions, see how our technology delivers tangible benefits"
          link="/case_studies"
          color="blue"
        />
      </div>
      <div className="pt-6 flex gap-6">
        <ImageButton href="/#" title="Real Estate" image="/real-estate.webp" />
        <ImageButton
          href="/#"
          title="Supply Chain"
          image="/supply-chain.webp"
        />
        <ImageButton
          href="/#"
          title="Loyalty Program"
          image="/loyalty-program.webp"
        />
      </div>
    </section>
  );
}
