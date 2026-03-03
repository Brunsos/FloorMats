import { ShieldCheck } from "./icons";

const certifications = [
  "OSHA Compliant",
  "NFSI Certified",
  "ISO 9001",
  "GSA Contract Holder",
  "TIPS Certified",
];

export default function TrustBar() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-6" aria-label="Certifications">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="flex items-center gap-2 text-slate-400"
            >
              <ShieldCheck size={18} />
              <span className="text-xs font-medium uppercase tracking-wide">
                {cert}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
