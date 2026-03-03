import { Phone } from "./icons";

export default function CTASection() {
  return (
    <section id="contact" className="bg-crimson py-16 md:py-24" aria-label="Call to action">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Ready to Reduce Risk and Protect Your Bottom Line?
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Schedule a no-obligation facility assessment. We&apos;ll identify your
          risk zones and deliver a custom matting plan with documented ROI.
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-crimson transition-colors hover:bg-slate-100"
          >
            Request a Facility Assessment
          </a>
        </div>
        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-white/60">
          <Phone size={16} />
          Or call us: (555) 123-4567
        </p>
      </div>
    </section>
  );
}
