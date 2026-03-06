const stats = [
  {
    value: "$11B",
    label: "Annual cost of slip-and-fall injuries in U.S. workplaces",
  },
  {
    value: "85%",
    label: "Of tracked-in dirt captured by a proper entrance matting system",
  },
  {
    value: "$50K",
    label: "Average cost per slip-and-fall lawsuit settlement",
  },
  {
    value: "3-6 mo",
    label: "Typical ROI timeline for a professional matting program",
  },
];

export default function ROIStats() {
  return (
    <section className="bg-navy py-16 md:py-24" aria-label="ROI statistics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-crimson-bright">
            The Business Case
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
            Matting Programs That Pay for Themselves
          </h2>
        </div>

        {/* Stats grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center ${
                i < stats.length - 1
                  ? "lg:border-r lg:border-white/20"
                  : ""
              }`}
            >
              <p className="text-4xl font-bold text-white md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting paragraph */}
        <p className="mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed text-white/60">
          Our clients see an average 40% reduction in slip-and-fall incidents
          within the first year. We document the ROI so you can prove the value
          to stakeholders.
        </p>
      </div>
    </section>
  );
}
