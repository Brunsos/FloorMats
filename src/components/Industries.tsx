import {
  Factory,
  HeartPulse,
  ShoppingBag,
  Building,
  Briefcase,
  GraduationCap,
} from "./icons";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Anti-fatigue, ESD, and oil-resistant matting for production floors.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Antimicrobial entrance and anti-fatigue mats for hospitals and clinics.",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description:
      "Logo mats and entrance systems that protect floors and brand your store.",
  },
  {
    icon: Building,
    title: "Hospitality",
    description:
      "Elegant entrance mats and kitchen drainage mats for hotels and restaurants.",
  },
  {
    icon: Briefcase,
    title: "Office & Corporate",
    description:
      "Entrance systems, ergonomic mats, and branded floor solutions.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "High-traffic entrance systems for schools, universities, and campuses.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-white py-16 md:py-24" aria-label="Industries served">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-crimson">
            Who We Serve
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Solutions for Every Industry
          </h2>
        </div>

        {/* Industry grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-lg border border-slate-200 p-6 transition-colors hover:border-navy-light"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy/10">
                <industry.icon className="text-navy" size={22} />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-800">
                {industry.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
