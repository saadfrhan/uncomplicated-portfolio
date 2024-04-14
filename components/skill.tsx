import DashedLine from "@/icons/DashedLine";
import ListBulletSquigglyCircleIcon from "@/icons/ListBulletSquigglyCircleIcon";
import React from "react";

export default function Skill({ skill }: { skill: string }) {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex gap-x-4 items-start">
        <ListBulletSquigglyCircleIcon className="fill-foreground" />
        <p className="text-xl font-bold leading-6">{skill}</p>
      </div>
      <DashedLine className="w-full stroke-foreground" />
    </div>
  );
}
