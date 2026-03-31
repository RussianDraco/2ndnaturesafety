import {
  HardHat,
  ShieldCheck,
  Wrench,
  FileCheck2,
} from "lucide-react";

export type TrainingLesson = {
  id: string;
  title: string;
  duration: string;
  type: "video" | "reading" | "quiz" | "checklist";
  completed?: boolean;
};

export type TrainingModule = {
  id: string;
  slug: string;
  title: string;
  category: string;
  format: "Online" | "Hybrid" | "In Person";
  duration: string;
  audience: string;
  description: string;
  status: "Not Started" | "In Progress" | "Completed" | "Locked";
  progress: number;
  icon: React.ComponentType<{ className?: string }>;
  certificateEligible?: boolean;
  dueDate?: string;
  lessons: TrainingLesson[];
};

export const modules: TrainingModule[] = [
  {
    id: "working-at-heights",
    slug: "working-at-heights",
    title: "Working at Heights Fundamentals",
    category: "Construction Safety",
    format: "Hybrid",
    duration: "2.5 hours + practical",
    audience: "Roofers, supervisors, new site workers",
    description:
      "Covers fall hazards, worker responsibilities, equipment basics, and required practical evaluation.",
    status: "In Progress",
    progress: 68,
    certificateEligible: true,
    dueDate: "Apr 12, 2026",
    icon: HardHat,
    lessons: [
      { id: "wah-1", title: "Course overview and learning outcomes", duration: "8 min", type: "reading", completed: true },
      { id: "wah-2", title: "Ontario fall hazard responsibilities", duration: "18 min", type: "video", completed: true },
      { id: "wah-3", title: "Ladders, anchors, and fall arrest basics", duration: "22 min", type: "video", completed: true },
      { id: "wah-4", title: "Pre-use equipment inspection checklist", duration: "10 min", type: "checklist" },
      { id: "wah-5", title: "Knowledge check", duration: "12 min", type: "quiz" },
    ],
  },
  {
    id: "whmis",
    slug: "whmis",
    title: "WHMIS Essentials",
    category: "Compliance Training",
    format: "Online",
    duration: "60 minutes",
    audience: "General employees and onboarding cohorts",
    description:
      "Introduces hazardous products, labels, safety data sheets, and core worker responsibilities.",
    status: "Completed",
    progress: 100,
    certificateEligible: true,
    dueDate: "Completed",
    icon: ShieldCheck,
    lessons: [
      { id: "whmis-1", title: "Introduction to hazardous products", duration: "8 min", type: "video", completed: true },
      { id: "whmis-2", title: "Labels and pictograms", duration: "12 min", type: "reading", completed: true },
      { id: "whmis-3", title: "Safety data sheets", duration: "15 min", type: "video", completed: true },
      { id: "whmis-4", title: "Worker responsibilities", duration: "10 min", type: "reading", completed: true },
      { id: "whmis-5", title: "Final quiz", duration: "15 min", type: "quiz", completed: true },
    ],
  },
  {
    id: "forklift",
    slug: "forklift-awareness",
    title: "Forklift Safety Awareness",
    category: "Equipment Safety",
    format: "Hybrid",
    duration: "90 minutes + evaluation",
    audience: "Warehouse, yard, and industrial teams",
    description:
      "Online theory with practical evaluation for safer powered industrial truck operation.",
    status: "Not Started",
    progress: 24,
    certificateEligible: true,
    dueDate: "Apr 20, 2026",
    icon: Wrench,
    lessons: [
      { id: "fork-1", title: "Equipment classes and core hazards", duration: "14 min", type: "video", completed: true },
      { id: "fork-2", title: "Load stability and operating zones", duration: "20 min", type: "video" },
      { id: "fork-3", title: "Pre-shift inspection workflow", duration: "8 min", type: "checklist" },
      { id: "fork-4", title: "Operator knowledge check", duration: "10 min", type: "quiz" },
    ],
  },
  {
    id: "safety-programs",
    slug: "safety-program-basics",
    title: "Safety Program Basics for Supervisors",
    category: "Leadership & Documentation",
    format: "Online",
    duration: "75 minutes",
    audience: "Supervisors and managers",
    description:
      "Focused on responsibilities, documentation, communication, and implementation basics.",
    status: "Locked",
    progress: 0,
    certificateEligible: false,
    dueDate: "Unavailable",
    icon: FileCheck2,
    lessons: [
      { id: "sp-1", title: "Why safety programs matter", duration: "10 min", type: "video" },
      { id: "sp-2", title: "Core sections of a practical program", duration: "15 min", type: "reading" },
      { id: "sp-3", title: "Site communication and enforcement", duration: "18 min", type: "video" },
      { id: "sp-4", title: "Supervisor implementation checklist", duration: "10 min", type: "checklist" },
      { id: "sp-5", title: "Module assessment", duration: "12 min", type: "quiz" },
    ],
  },
];

export const formatStyles: Record<TrainingModule["format"], string> = {
  Online: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
  Hybrid: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
  "In Person": "bg-amber-400/10 text-amber-300 border-amber-400/20",
};

export const statusStyles: Record<TrainingModule["status"], string> = {
  "Not Started": "border-white/10 text-slate-300",
  "In Progress": "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
  Completed: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  Locked: "border-amber-400/20 bg-amber-400/10 text-amber-300",
};