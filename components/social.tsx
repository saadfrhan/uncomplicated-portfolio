import ArrowUpRightIcon from "@/icons/ArrowUpRightIcon";
import DashedLine from "@/icons/DashedLine";
import Link from "next/link";
import { SocialCardProps } from "./types";

export default function Social({ name, username, url }: SocialCardProps) {
  return (
    <div className="flex flex-col w-full">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex justify-between pb-4"
      >
        <div>
          <p className="font-bold leading-[19.2px]">
            {name}_
            <span className="font-normal text-secondary-foreground">
              {username}
            </span>
          </p>
        </div>
        <ArrowUpRightIcon className="fill-foreground" />
      </Link>

      <DashedLine className="w-full stroke-foreground" />
    </div>
  );
}
