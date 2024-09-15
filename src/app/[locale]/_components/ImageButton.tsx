import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function ImageButton({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image: string;
}) {
  const locale = useLocale();

  return (
    <Link href={`/${locale}${href}`} passHref>
      <div className="relative w-60 h-60 overflow-hidden rounded cursor-pointer group">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          className="rounded group-hover:scale-110 transition-all duration-300 ease-in-out"
          alt="Real Estate"
        />
        <div className="absolute top-0 left-0 p-4 text-white">
          <h3>{title}</h3>
        </div>
        <div className="absolute bottom-0 right-0 bg-white p-2">
          <ArrowUpRightIcon className="h-8 w-8" />
        </div>
      </div>
    </Link>
  );
}
