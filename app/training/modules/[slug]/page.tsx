import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TrainingShell } from "../../_components/training-shell";
import { LessonRow } from "../../_components/lesson-row";
import {
  modules,
  formatStyles,
  statusStyles,
} from "../../_lib/training-data";

export default async function TrainingModuleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const module = modules.find((item) => item.slug === slug);

  if (!module) notFound();

  const Icon = module.icon;

  return (
    <TrainingShell>
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-xl border border-white/10 bg-[#0c1724] p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="inline-flex rounded-lg bg-cyan-400/10 p-3 text-cyan-300">
                <Icon className="h-6 w-6" />
              </div>
              <Badge className={`border ${formatStyles[module.format]}`}>
                {module.format}
              </Badge>
            </div>

            <div className="mt-6">
              <div className="text-sm text-slate-400">{module.category}</div>
              <h1 className="mt-1 text-4xl font-semibold tracking-tight">
                {module.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                {module.description}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="outline" className={statusStyles[module.status]}>
                {module.status}
              </Badge>
              <Badge variant="outline" className="border-white/10 text-slate-300">
                {module.duration}
              </Badge>
              <Badge variant="outline" className="border-white/10 text-slate-300">
                Due: {module.dueDate}
              </Badge>
            </div>

            <div className="mt-8">
              <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                <span>Overall progress</span>
                <span>{module.progress}%</span>
              </div>
              <Progress value={module.progress} className="h-2 bg-white/10" />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-md bg-cyan-400 text-slate-950 hover:bg-cyan-300">
                Continue Module
              </Button>
              <Button
                variant="outline"
                className="rounded-md border-white/15 bg-transparent text-white hover:bg-white/5"
              >
                Download Outline
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#0c1724] p-8">
            <h2 className="text-2xl font-semibold">Module details</h2>

            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <div className="rounded-lg border border-white/10 bg-[#08111b] p-4">
                <div className="text-slate-400">Audience</div>
                <div className="mt-1 text-white">{module.audience}</div>
              </div>

              <div className="rounded-lg border border-white/10 bg-[#08111b] p-4">
                <div className="text-slate-400">Certificate</div>
                <div className="mt-1 text-white">
                  {module.certificateEligible ? "Issued after completion" : "Not available"}
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-[#08111b] p-4">
                <div className="text-slate-400">Practical requirement</div>
                <div className="mt-1 text-white">
                  {module.format === "Hybrid" || module.format === "In Person"
                    ? "Required"
                    : "Not required"}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-white/10 bg-[#0c1724] p-8">
          <h2 className="text-2xl font-semibold">Lessons</h2>
          <div className="mt-6 space-y-3">
            {module.lessons.map((lesson, index) => (
              <LessonRow key={lesson.id} lesson={lesson} index={index} />
            ))}
          </div>
        </div>
      </section>
    </TrainingShell>
  );
}