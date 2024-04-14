import { EducationCardProps } from "./types";

export default function Education({
  date,
  degree,
  university,
}: EducationCardProps) {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-1">
        <div>
          <p className="text-lg font-bold leading-[21.6px] text-secondary-foreground">
            {degree}
          </p>
          <h3 className="text-xl font-bold leading-6">{university}</h3>
        </div>
        <p className="leading-[19.2px] text-secondary-foreground">{date}</p>
      </div>
    </div>
  );
}
