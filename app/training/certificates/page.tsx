import { Award, Download, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrainingShell } from "../_components/training-shell";

const certificates = [
  {
    id: "cert-1",
    title: "WHMIS Essentials",
    issuedDate: "Mar 28, 2026",
    status: "Available",
  },
  {
    id: "cert-2",
    title: "Working at Heights Fundamentals",
    issuedDate: "Pending practical completion",
    status: "Pending",
  },
];

export default function CertificatesPage() {
  return (
    <TrainingShell>
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Certificates
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Your training certificates.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Download completed training certificates and view which modules are
            still pending final validation.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="rounded-xl border border-white/10 bg-[#0c1724] p-6"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-cyan-400/10 p-3 text-cyan-300">
                    {certificate.status === "Available" ? (
                      <Award className="h-6 w-6" />
                    ) : (
                      <ShieldCheck className="h-6 w-6" />
                    )}
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold">{certificate.title}</h2>
                    <div className="mt-1 text-sm text-slate-400">
                      Issued: {certificate.issuedDate}
                    </div>
                    <div className="mt-2 text-sm text-slate-300">
                      Status: {certificate.status}
                    </div>
                  </div>
                </div>

                <Button
                  disabled={certificate.status !== "Available"}
                  className="rounded-md bg-cyan-400 text-slate-950 hover:bg-cyan-300 disabled:opacity-50"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Certificate
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </TrainingShell>
  );
}