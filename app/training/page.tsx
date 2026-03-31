import { Laptop2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrainingShell } from "./_components/training-shell";
import { SectionHeading } from "./_components/section-heading";
import { TrainingModuleCard } from "./_components/training-module-card";
import { LessonRow } from "./_components/lesson-row";
import { modules, formatStyles } from "./_lib/training-data";

export default function TrainingPage() {
  const featuredModule = modules[0];
  const stats = [
    { label: "Assigned", value: "4 Modules" },
    { label: "Completed", value: "1 Module" },
    { label: "Certificates", value: "1 Earned" },
  ];

  return (
    <TrainingShell>
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-sm text-slate-300">
              <Laptop2 className="h-4 w-4 text-cyan-300" />
              Assigned training and course progress
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Complete required safety training and track your progress.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Access online modules, complete required lessons, review assigned
              training paths, and prepare for any required in-person practical
              evaluations.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="rounded-md bg-cyan-400 px-6 text-slate-950 hover:bg-cyan-300"
              >
                Continue Training
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-md border-white/15 bg-transparent px-6 text-white hover:bg-white/5"
              >
                View Assigned Modules
              </Button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-[#0c1724] p-4"
                >
                  <div className="text-sm text-slate-400">{stat.label}</div>
                  <div className="mt-2 text-base font-medium text-white">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#0c1724] p-6 lg:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm text-slate-400">Continue where you left off</div>
                <h2 className="mt-1 text-2xl font-semibold">{featuredModule.title}</h2>
              </div>
              <Badge className={`border ${formatStyles[featuredModule.format]}`}>
                {featuredModule.format}
              </Badge>
            </div>

            <div className="mt-6 space-y-3">
              {featuredModule.lessons.map((lesson, index) => (
                <LessonRow key={lesson.id} lesson={lesson} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <SectionHeading
          eyebrow="Assigned Training"
          title="Your current required modules."
          body="Complete online lessons in order, then attend any required practical or evaluation components where applicable."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {modules.slice(0, 3).map((module) => (
            <TrainingModuleCard key={module.id} module={module} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 lg:px-8 lg:py-8">
        <SectionHeading
          eyebrow="Course Catalog"
          title="Available training modules."
          body="Browse all available courses, including online awareness modules, hybrid programs, and supervisor training."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {modules.map((module) => (
            <TrainingModuleCard key={`${module.id}-catalog`} module={module} />
          ))}
        </div>
      </section>
    </TrainingShell>
  );
}