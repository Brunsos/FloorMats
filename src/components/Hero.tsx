import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative" aria-label="Hero">
      {/* Banner image */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
        <Image
          src="/placeholder.jpg"
          alt="Commercial entrance mat system installed in a modern building lobby"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-navy/70" />

        {/* Text content over the banner */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Slip-and-Fall Incidents Cost Businesses{" "}
              <span className="text-crimson-bright">$11 Billion</span> Annually.
              <br />
              We Fix That.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
              Professional floor matting distribution and loss prevention
              consulting that protects your people, your floors, and your bottom
              line.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-crimson px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-crimson-dark"
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
        </div>
      </div>
    </section>
  );
}
