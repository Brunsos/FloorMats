import PlaceholderImage from "./PlaceholderImage";

const installations = [
  "Lobby Entrance System",
  "Manufacturing Floor Anti-Fatigue",
  "Custom Logo Mat \u2014 Corporate HQ",
  "Healthcare Facility Entrance",
  "Retail Store Entrance",
  "Industrial Kitchen Drainage",
];

export default function Gallery() {
  return (
    <section className="bg-slate-50 py-16 md:py-24" aria-label="Installation gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber">
            Our Work
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Professional Installations
          </h2>
        </div>

        {/* Gallery grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {installations.map((label) => (
            <PlaceholderImage key={label} label={label} aspectRatio="4/3" />
          ))}
        </div>

        <p className="mt-8 text-center text-sm italic text-slate-500">
          Photos from recent installations. Your facility assessment includes a
          custom matting plan with visual mockups.
        </p>
      </div>
    </section>
  );
}
