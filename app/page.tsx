import Education from "@/components/education";
import Experience from "@/components/experience";
import Skills from "@/components/skill";
import Social from "@/components/social";
import ThemeToggler from "@/components/theme-toggler";
import { about, education, experiences, skills, socials } from "@/lib/data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto max-w-[45rem] flex flex-col gap-y-14 my-12 px-4">
      <section className="flex flex-col gap-y-6">
        <div>
          <div className="flex w-full justify-between">
            <h1 className="text-2xl font-bold leading-[28.8px]">
              {about.name}
            </h1>
            <ThemeToggler />
          </div>
          <p className="text-lg font-normal text-secondary-foreground leading-[21.6px]">
            {about.title}
          </p>
        </div>
        <p className="text-lg font-normal leading-[21.6px] text-secondary-foreground">
          {about.description}
        </p>
      </section>

      <section className="flex flex-col gap-y-10">
        <h2 className="text-2xl font-bold leading-[28.8px]">Experience_</h2>
        {experiences.map((experience, index) => (
          <Experience {...experience} key={index} />
        ))}
      </section>

      <section className="flex flex-col gap-y-10">
        <h2 className="text-2xl font-bold leading-[28.8px]">Education_</h2>
        {education.map((edu, index) => (
          <Education {...edu} key={index} />
        ))}
      </section>

      <section className="flex flex-col gap-y-10">
        <h2 className="text-2xl font-bold leading-[28.8px]">Skills_</h2>
        <div className="flex flex-col gap-4">
          {skills.map((skill, index) => (
            <Skills skill={skill} key={index} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-y-10">
        <h2 className="text-2xl font-bold leading-[28.8px]">Connect_</h2>
        <div className="flex items-center w-full flex-col gap-y-6">
          {socials.map((social, index) => (
            <Social {...social} key={index} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-y-6 items-center justify-center text-center">
        <Image alt="Sun" src="/images/sun.png" width={78.05} height={80} />
        <div className="flex flex-col gap-y-1">
          <p className="text-lg leading-[21.6px] text-secondary-foreground">
            You reached End, Thanks for Showing Interest in my work.
          </p>
          <p className="text-lg leading-[21.6px] font-bold">
            Have a Great day!
          </p>
        </div>
      </section>
    </div>
  );
}
