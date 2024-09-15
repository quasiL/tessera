import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useLocale } from "next-intl";

export default function BigButton({
  title,
  text,
  link,
  color,
}: {
  title: string;
  text: string;
  link: string;
  color: string;
}) {
  const locale = useLocale();
  const colorClass = color === "blue" ? "bg-tessera_blue" : "bg-tessera_yellow";
  const hoverColorClass =
    color === "blue" ? "hover:bg-blue-300" : "hover:bg-yellow-300";

  return (
    <div
      className={`${colorClass} ${hoverColorClass} p-6 rounded w-2/6 relative group hidden md:block`}
    >
      <Link href={`/${locale}${link}`} passHref>
        <p className="mb-32">{text}</p>
        <h3 className="pt-32 text-xl">{title}</h3>
        <div
          className="p-2 bg-white absolute bottom-0 right-0 transition-all duration-300 ease-in-out 
              group-hover:px-6"
        >
          <ArrowRightIcon className="h-7 w-7" />
        </div>
      </Link>
    </div>
  );
}
