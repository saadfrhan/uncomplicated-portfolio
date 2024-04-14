import ListBulletPlusIcon from "@/icons/ListButtetPlusIcon";
import { ExperienceCardProps } from "./types";

export default function Experience({
  title,
  company,
  date,
  description,
}: ExperienceCardProps) {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-2">
          <div>
            <p className="text-lg font-bold leading-[21.6px] text-secondary-foreground">
              {title}
            </p>
            <h3 className="text-xl font-bold leading-6">{company}</h3>
          </div>
          <p className="leading-[19.2px] text-secondary-foreground">{date}</p>
        </div>
        <div className="flex flex-col gap-y-3">
          {description.map((desc, index) => (
            <div
              className="grid grid-cols-[0.2fr_5fr] text-secondary-foreground gap-x-0.5 max-sm:gap-x-3"
              key={index}
            >
              <ListBulletPlusIcon className="w-[14px] h-[14px] fill-foreground" />
              <p className="text-lg leading-[21.6px]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
