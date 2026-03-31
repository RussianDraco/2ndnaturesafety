import { CalendarDays, FileText, UserCheck } from "lucide-react";
import { TrainingShell } from "../_components/training-shell";

const records = [
  {
    id: "record-1",
    module: "WHMIS Essentials",
    completionDate: "Mar 28, 2026",
    result: "Passed",
    notes: "Certificate issued",
  },
  {
    id: "record-2",
    module: "Working at Heights Fundamentals",
    completionDate: "In progress",
    result: "Awaiting practical",
    notes: "Online portion nearly complete",
  },
  {
    id: "record-3",
    module: "Forklift Safety Awareness",
    completionDate: "Not completed",
    result: "Not started",
    notes: "Assigned for this month",
  },
];

export default function RecordsPage() {
  return (
    <TrainingShell>
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Training Records
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Completion history and status.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Review module completion history, outcomes, and notes related to
            practical validation or certificate issuance.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-[#0c1724]">
          <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-4">
            <div className="bg-[#08111b] p-4 text-sm font-medium text-slate-300">
              Module
            </div>
            <div className="bg-[#08111b] p-4 text-sm font-medium text-slate-300">
              Completion Date
            </div>
            <div className="bg-[#08111b] p-4 text-sm font-medium text-slate-300">
              Result
            </div>
            <div className="bg-[#08111b] p-4 text-sm font-medium text-slate-300">
              Notes
            </div>

            {records.map((record) => (
              <div key={`${record.id}-spacer`}>
                <div key={`${record.id}-module`} className="bg-[#0c1724] p-4 text-sm text-white">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-cyan-300" />
                    {record.module}
                  </div>
                </div>
                <div key={`${record.id}-date`} className="bg-[#0c1724] p-4 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-cyan-300" />
                    {record.completionDate}
                  </div>
                </div>
                <div key={`${record.id}-result`} className="bg-[#0c1724] p-4 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <UserCheck className="h-4 w-4 text-cyan-300" />
                    {record.result}
                  </div>
                </div>
                <div key={`${record.id}-notes`} className="bg-[#0c1724] p-4 text-sm text-slate-300">
                  {record.notes}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </TrainingShell>
  );
}