import Link from "next/link";
import { Button } from "@/components/ui/button";

export function TrainingShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#08111b] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08111b]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-lg font-bold tracking-tight">2nd Nature Safety</div>
            <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
              Training
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
            <Link href="/training" className="transition hover:text-white">
              Dashboard
            </Link>
            <Link href="/training/certificates" className="transition hover:text-white">
              Certificates
            </Link>
            <Link href="/training/records" className="transition hover:text-white">
              Records
            </Link>
          </nav>

          <Button
            variant="outline"
            className="rounded-md border-white/15 bg-transparent text-white hover:bg-white/5"
          >
            My Profile
          </Button>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}