import Image from "next/image";
import { ShieldCheck } from "./icons";

const certifications = [
  {
    title: "CIMS I.C.E. Certified",
    issuer: "ISSA — The Worldwide Cleaning Industry Association",
    year: "2017",
    description:
      "Certified to consult with and train organizations on achieving the Cleaning Industry Management Standard (CIMS) — the global benchmark for operational excellence in the cleaning industry.",
  },
  {
    title: "CMI Certified",
    issuer: "ISSA — Cleaning Management Institute",
    year: "2019",
    description:
      "Certified through ISSA's Cleaning Management Institute, the leading education and certification provider in the professional cleaning industry since 1964.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-24" aria-label="About">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-crimson">
            About KLL Solutions
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Industry Expertise You Can Trust
          </h2>
        </div>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-5">
          {/* Owner info */}
          <div className="lg:col-span-3">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <Image
                src="/Terry.png"
                alt="Terry Young, Founder of KLL Solutions"
                width={120}
                height={120}
                className="h-28 w-28 rounded-full object-cover shadow-md"
              />
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Terry Young</h3>
                <p className="mt-1 text-base font-medium text-crimson">
                  Founder, KLL Solutions
                </p>
              </div>
            </div>

            <p className="mt-6 leading-relaxed text-slate-600">
              KLL Solutions is led by Terry Young, a certified professional with
              deep expertise in the commercial floor matting and cleaning
              industry. With experience as a Territory Sales Manager at Anyway
              Distribution / Mattech West — a leading Canadian distributor of
              specialty flooring products — Terry brings hands-on knowledge of
              commercial matting, ergonomic flooring, and slip-resistant
              solutions.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Terry holds industry-recognized certifications from ISSA, the
              worldwide cleaning industry association, equipping him to not only
              supply matting products but to consult on facility-wide safety and
              cleaning management standards.
            </p>

            {/* LinkedIn */}
            <a
              href="https://ca.linkedin.com/in/terry-young-83577829"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-navy-light"
            >
              <svg
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>

          {/* Certifications */}
          <div className="space-y-6 lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
              Certifications
            </h4>
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="rounded-lg border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-crimson-light">
                    <ShieldCheck className="text-crimson" size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{cert.title}</p>
                    <p className="text-xs text-slate-500">
                      {cert.issuer} &middot; {cert.year}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
