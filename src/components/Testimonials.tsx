import { Quote } from "./icons";

const testimonials = [
  {
    quote:
      "Their facility assessment identified hazard zones we'd overlooked for years. Within 6 months, our slip-and-fall incidents dropped 45%.",
    name: "[Client Name]",
    title: "Facilities Director, [Manufacturing Company]",
  },
  {
    quote:
      "The matting program paid for itself in the first year. The ROI documentation made it easy to justify to leadership.",
    name: "[Client Name]",
    title: "Operations Manager, [Healthcare System]",
  },
  {
    quote:
      "Professional, responsive, and genuinely invested in our safety outcomes. Best vendor decision we've made.",
    name: "[Client Name]",
    title: "Safety Director, [Retail Chain]",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-16 md:py-24" aria-label="Client testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber">
            What Clients Say
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Trusted by Facility Managers Nationwide
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="rounded-xl bg-white p-8 shadow-sm"
            >
              <Quote className="text-amber" size={32} />
              <p className="mt-4 leading-relaxed text-slate-700 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                {/* Headshot placeholder */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-400">
                  ?
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
