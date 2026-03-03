import PlaceholderImage from "./PlaceholderImage";

export default function Hero() {
  return (
    <section className="bg-navy" aria-label="Hero">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Text content - 60% */}
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber">
              Safety &amp; Loss Prevention Specialists
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Slip-and-Fall Incidents Cost Businesses{" "}
              <span className="text-amber">$11 Billion</span> Annually.
              <br />
              We Fix That.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
              Professional floor matting distribution and loss prevention
              consulting that protects your people, your floors, and your bottom
              line.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-amber px-7 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-amber-dark"
              >
                Request a Facility Assessment
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                View Our Products
              </a>
            </div>

            {/* Trust indicators */}
            <p className="mt-8 text-sm text-white/50">
              OSHA Compliant &nbsp;|&nbsp; NFSI Certified &nbsp;|&nbsp; 500+
              Facilities Served
            </p>
          </div>

          {/* Hero image placeholder - 40% */}
          <div className="lg:col-span-2">
            <PlaceholderImage
              label="Entrance Mat System Installation"
              aspectRatio="4/3"
              className="shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
