"use client";

import { motion } from "framer-motion";
import BigButton from "../../_components/BigButton";

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
        <BigButton
          title="Contact us"
          text="Have questions about our blockchain solutions? Contact us to see
              how we can enhance your business with innovation and security."
          link="/contact"
          color="yellow"
        />
      </div>
    </section>
  );
}
