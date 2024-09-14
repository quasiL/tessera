"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="container mx-auto pb-16">
      <div className="flex justify-between gap-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="w-full"
        >
          <h2 className="text-5xl">
            We are revolutionizing digital ecosystems with advanced blockchain
            solutions for security and scalability.
          </h2>
        </motion.div>
        <div className="bg-tessera_yellow p-6 rounded w-2/6 hover:bg-yellow-300 relative group hidden md:block">
          <Link href="/contact">
            <p className="mb-32">
              Have questions about our blockchain solutions? Contact us to see
              how we can enhance your business with innovation and security.
            </p>
            <h3 className="pt-32 text-xl">Contact us</h3>
            <div
              className="p-2 bg-white absolute bottom-0 right-0 transition-all duration-300 ease-in-out 
              group-hover:px-6"
            >
              <ArrowRightIcon className="h-7 w-7" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
