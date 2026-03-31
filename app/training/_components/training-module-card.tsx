import Link from "next/link";
import { Clock3, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  formatStyles,
  statusStyles,
  type TrainingModule,
} from "../_lib/training-data";

export function TrainingModuleCard({
  module,
}: {
  module: TrainingModule;
}) {
  const Icon = module.icon;

  return (
    <Card className="h-full rounded-xl border-white/10 bg-[#0c1724] text-white shadow-none">
      <CardContent className="p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex rounded-lg bg-cyan-400/10 p-3 text-cyan-300">
            <Icon className="h-6 w-6" />
          </div>
          <Badge className={`border ${formatStyles[module.format]}`}>
            {module.format}
          </Badge>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <div className="text-sm text-slate-400">{module.category}</div>
            <h3 className="mt-1 text-xl font-semibold">{module.title}</h3>
          </div>
          <Badge variant="outline" className={statusStyles[module.status]}>
            {module.status}
          </Badge>
        </div>

        <p className="mt-3 text-sm leading-7 text-slate-300">
          {module.description}
        </p>

        <div className="mt-5 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#08111b] px-3 py-2">
            <Clock3 className="h-4 w-4 text-cyan-300" />
            <span>{module.duration}</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#08111b] px-3 py-2">
            <Users className="h-4 w-4 text-cyan-300" />
            <span>{module.audience}</span>
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-white/10 bg-[#08111b] px-3 py-2 text-sm text-slate-300">
          Due: {module.dueDate ?? "Not assigned"}
        </div>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
            <span>Progress</span>
            <span>{module.progress}%</span>
          </div>
          <Progress value={module.progress} className="h-2 bg-white/10" />
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="rounded-md bg-cyan-400 text-slate-950 hover:bg-cyan-300">
            <Link href={`/training/modules/${module.slug}`}>
              {module.status === "Completed" ? "Review Module" : "Open Module"}
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="rounded-md border-white/15 bg-transparent text-white hover:bg-white/5"
          >
            <Link href={`/training/modules/${module.slug}`}>
              View Details
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}