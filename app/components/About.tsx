import { ReactNode } from "react";

function AboutSection({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className="flex-1">
      <h4 className="font-bold mb-4 text-3xl">{title}</h4>
      {children}
    </div>
  );
}

function SkillBadge({ displayName }: { displayName: string }) {
  return (
    <div className="py-2 px-4 rounded-lg bg-gray-200 dark:bg-slate-800">
      {displayName}
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="h-screen flex flex-col items-center justify-center gap-3 bg-[var(--bg-secondary)]"
    >
      <h3 className="font-bold text-5xl">ABOUT ME</h3>
      <span className="bg-[var(--fg-accent)] py-1 px-4 rounded-full mb-28"></span>
      <div className="flex justify-between w-full max-w-[1200px] gap-64">
        <AboutSection title="Get to know me!">
          <p className="font-mulish text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            libero commodi, quidem magnam aliquid eaque perferendis ullam
            repudiandae, repellat vitae atque voluptas. Ullam expedita similique
            sed hic culpa vitae quaerat. Molestiae dolores error consequatur
            reprehenderit, rerum voluptatum alias placeat expedita animi quos
            delectus fugiat nesciunt totam beatae vitae necessitatibus
            accusantium atque a at sint sunt? Soluta temporibus ullam odit
            similique? Nesciunt laboriosam labore fuga et non eaque suscipit,
            quas dignissimos dolores quaerat accusamus odio explicabo.
            Similique, odio doloribus. Recusandae, architecto. Cupiditate
            quaerat vero alias voluptatum eveniet commodi, aperiam quos culpa!
          </p>
        </AboutSection>
        <AboutSection title="My Skills">
          <div className="flex gap-4 flex-wrap">
            <SkillBadge displayName="Lorem" />
            <SkillBadge displayName="Lorem ipsum dolor" />
            <SkillBadge displayName="Lorem ipsum" />
            <SkillBadge displayName="Lorem" />
            <SkillBadge displayName="Lorem" />
            <SkillBadge displayName="Lorem" />
          </div>
        </AboutSection>
      </div>
    </section>
  );
}
