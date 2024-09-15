import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function ArrowButton({
  link,
  title,
}: {
  link: string;
  title: string;
}) {
  const locale = useLocale();

  return (
    <Link
      href={`/${locale}${link}`}
      className="flex items-center gap-2 bg-tessera_blue hover:bg-blue-300 py-2 px-3 rounded w-2/6 group"
    >
      <p>{title}</p>
      <div className="transition-all duration-300 ease-in-out group-hover:px-6">
        <ArrowRightIcon className="h-4 w-4" />
      </div>
    </Link>
  );
}
