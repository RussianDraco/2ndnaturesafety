import {
  BookOpen,
  CheckCircle2,
  FileCheck2,
  MonitorPlay,
  PlayCircle,
} from "lucide-react";
import type { TrainingLesson } from "../_lib/training-data";

function lessonIcon(type: TrainingLesson["type"]) {
  switch (type) {
    case "video":
      return <MonitorPlay className="h-4 w-4 text-cyan-300" />;
    case "reading":
      return <BookOpen className="h-4 w-4 text-cyan-300" />;
    case "quiz":
      return <FileCheck2 className="h-4 w-4 text-cyan-300" />;
    case "checklist":
      return <CheckCircle2 className="h-4 w-4 text-cyan-300" />;
  }
}

export function LessonRow({
  lesson,
  index,
}: {
  lesson: TrainingLesson;
  index: number;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#08111b] px-4 py-4">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-slate-300">
          {index + 1}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            {lessonIcon(lesson.type)}
            <span className="capitalize">{lesson.type}</span>
          </div>
          <div className="truncate text-base font-medium text-white">
            {lesson.title}
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <div className="text-sm text-slate-400">{lesson.duration}</div>
        {lesson.completed ? (
          <CheckCircle2 className="h-5 w-5 text-emerald-300" />
        ) : (
          <PlayCircle className="h-5 w-5 text-cyan-300" />
        )}
      </div>
    </div>
  );
}