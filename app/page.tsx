import { HardHat, ClipboardCheck, Phone, Mail, CheckCircle2, Package, MapPin, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const heroImages = [
    "/images/fall-protection.png",
    "/images/hero-safety-training.png",
    "/images/site-meeting.png",
];

const logoImage = "/images/logo.png";

const services = [
    {
        icon: HardHat,
        title: "Health & Safety Training",
        description:
            "Practical on-site and office-based training programs designed to keep teams compliant and job-site ready.",
        bullets: [
            "Training delivered at your field site or office",
            "Working at Heights and job-site safety programs",
            "Hands-on instruction for crews and supervisors",
        ],
    },
    {
        icon: ClipboardCheck,
        title: "Safety Consulting",
        description:
            "Support for building, improving, and maintaining workplace safety systems with a practical approach.",
        bullets: [
            "Safety systems and implementation",
            "Site inspections, audits, and investigations",
            "Safe work plans, orientations, and talks",
        ],
    },
    {
        icon: Package,
        title: "Safety Equipment Supply",
        description:
            "Access to PPE and specialized safety equipment for construction and industrial operations.",
        bullets: [
            "PPE and job-site safety gear",
            "Specialized equipment and supplies",
            "Convenient sourcing through one provider",
        ],
    },
];

const consultingItems = [
    "Safety management systems",
    "Site inspections and audits",
    "On-site fit testing",
    "Confined space support",
    "Safe work plan development",
    "Incident investigation",
    "Return-to-work coordination",
    "Site orientations and safety talks",
];

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
    return (
        <div className="max-w-3xl">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                {eyebrow}
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">{body}</p>
        </div>
    );
}

export default function ModernSafetyWebsite() {
    return (
        <div className="min-h-screen bg-[#08111b] text-white">
            <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08111b]">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                    <div>
                        <div className="flex items-center gap-3">
                            <img src={logoImage} alt="2nd Nature Safety logo" className="h-10 w-10 object-contain" />
                            <div className="text-lg font-bold tracking-tight">2nd Nature Safety</div>
                        </div>
                        <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Training • Consulting • Supply</div>
                    </div>
                    <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
                        <a href="#services" className="transition hover:text-white">Services</a>
                        <a href="#consulting" className="transition hover:text-white">Capabilities</a>
                        <a href="#contact" className="transition hover:text-white">Contact</a>
                    </nav>
                    <Button className="rounded-md bg-cyan-400 text-slate-950 hover:bg-cyan-300">
                        Contact Us
                    </Button>
                </div>
            </header>

            <main>
                <section className="border-b border-white/10">
                    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
                        <div>
                            <div className="mb-4 inline-flex items-center gap-2 text-sm text-slate-300">
                                <MapPin className="h-4 w-4 text-cyan-300" />
                                Serving Ottawa and surrounding area
                            </div>
                            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                                Professional health and safety support for construction and industrial teams.
                            </h1>
                            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                                On-site training, practical consulting, and dependable equipment supply for companies that need clear communication and reliable service.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Button size="lg" className="rounded-md bg-cyan-400 px-6 text-slate-950 hover:bg-cyan-300">
                                    Contact Us
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="rounded-md border-white/15 bg-transparent px-6 text-white hover:bg-white/5"
                                >
                                    View Services
                                </Button>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0c1724]">
                            <img src={heroImages[0]} alt="Safety training on site" className="h-full w-full object-cover" />
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
                    <div className="grid gap-4 md:grid-cols-3">
                        {heroImages.map((src, index) => (
                            <div key={src} className="overflow-hidden rounded-xl border border-white/10 bg-[#0c1724]">
                                <img
                                    src={src}
                                    alt={index === 0 ? "Safety training" : index === 1 ? "Fall protection equipment" : "Site safety meeting"}
                                    className="h-64 w-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                <section id="services" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
                    <SectionHeading
                        eyebrow="Core Services"
                        title="Safety services tailored to your operations."
                        body="We focus on training, consulting, and equipment supply. The layout is intentionally simple and professional so visitors can understand the offering quickly."
                    />

                    <div className="mt-12 grid gap-6 lg:grid-cols-3">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <div key={service.title}>
                                    <Card className="h-full rounded-xl border-white/10 bg-[#0c1724] text-white shadow-none">
                                        <CardContent className="p-7">
                                            <div className="inline-flex rounded-lg bg-cyan-400/10 p-3 text-cyan-300">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                                            <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                                            <div className="mt-6 space-y-3">
                                                {service.bullets.map((bullet) => (
                                                    <div key={bullet} className="flex items-start gap-3 text-sm text-slate-200">
                                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                                                        <span>{bullet}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section id="consulting" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
                    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                        <div className="rounded-xl border border-white/10 bg-[#0c1724] p-8">
                            <div className="inline-flex rounded-lg bg-cyan-400/10 p-3 text-cyan-300">
                                <FileText className="h-6 w-6" />
                            </div>
                            <h3 className="mt-5 text-2xl font-semibold">Consulting capabilities</h3>
                            <p className="mt-4 text-base leading-7 text-slate-300">
                                Our consulting support helps clients strengthen safety systems, documentation, and field practices with a practical, organized approach.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {consultingItems.map((item) => (
                                <div key={item} className="rounded-xl border border-white/10 bg-[#0c1724] p-5 text-sm leading-7 text-slate-200">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                                        <span>{item}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
                    <div className="rounded-xl border border-white/10 bg-[#0c1724] p-8 md:p-10">
                        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                            <div>
                                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                                    Contact
                                </div>
                                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                                    Ready to discuss your safety needs?
                                </h2>
                                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                                    Contact us to arrange training, request consulting support, or ask about equipment and product supply.
                                </p>
                            </div>

                            <div className="grid gap-4">
                                <div className="rounded-xl border border-white/10 bg-[#08111b] p-5">
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-lg bg-white/10 p-3 text-cyan-300">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-slate-400">Phone</div>
                                            <div className="text-lg font-medium">(613) 552-2460</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-[#08111b] p-5">
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-lg bg-white/10 p-3 text-cyan-300">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-slate-400">Email</div>
                                            <div className="text-lg font-medium">info@2ndnaturesafety.ca</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Button size="lg" className="rounded-md bg-cyan-400 text-slate-950 hover:bg-cyan-300">
                                        Get in Touch
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
                    <div>© 2nd Nature Safety</div>
                    <div>Training • Consulting • Supply</div>
                </div>
            </footer>
        </div>
    );
}
