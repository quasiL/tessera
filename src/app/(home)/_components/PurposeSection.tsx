import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function PurposeSection() {
  return (
    <section className="container mx-auto pb-16">
      <div className="flex items-start gap-16">
        <div>
          <h1 className="text-xl pb-6">Purpose</h1>
          <Image
            src="/purpose.webp"
            width={896}
            height={512}
            className="md:hidden block rounded pb-6"
            alt="Purpose"
          />
          <h2 className="text-2xl pb-32">
            At Tessera, we’re committed to transforming how businesses operate
            with blockchain technology. Our mission is to simplify blockchain
            and reveal its potential to drive innovation, enhance security, and
            ensure transparency.
          </h2>
          <p className="pb-12">
            Blockchain isn’t just a trend — it’s a powerful tool for
            decentralized, secure transactions across industries. In this
            section, we’ll explain its core principles, show how it streamlines
            operations, and explore why adopting blockchain is key to the future
            of your business.
          </p>
          <Link
            href="/purpose"
            className="flex items-center gap-2 bg-tessera_blue hover:bg-blue-300 p-2 rounded w-2/6 group"
          >
            <p>Explore more</p>
            <div className="transition-all duration-300 ease-in-out group-hover:px-6">
              <ArrowRightIcon className="h-4 w-4" />
            </div>
          </Link>
        </div>
        <Image
          src="/purpose.webp"
          width={896}
          height={512}
          className="hidden md:block rounded"
          alt="Purpose"
        />
      </div>
    </section>
  );
}
