import { Truck, ShieldCheck, CheckCircle } from "./icons";

const services = [
  {
    icon: Truck,
    title: "Floor Mat Distribution",
    description:
      "Full-service supply of entrance mats, anti-fatigue mats, custom logo mats, and industrial matting solutions. Rental or purchase programs with scheduled maintenance.",
    features: [
      "Nationwide delivery",
      "Rental & purchase options",
      "Scheduled replacement programs",
      "Custom sizing available",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Loss Prevention Consulting",
    description:
      "Expert assessment of your facility's slip, trip, and fall risks. We identify hazard zones, recommend solutions, and help you achieve OSHA compliance.",
    features: [
      "Facility risk assessment",
      "OSHA compliance guidance",
      "Incident reduction strategies",
      "ROI documentation",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24" aria-label="Services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-crimson">
            What We Do
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Distribution &amp; Consulting Under One Roof
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We don&apos;t just sell mats. We assess your facility, design a
            matting plan, and maintain it &mdash; reducing your liability and
            operational costs.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-crimson-light">
                <service.icon className="text-crimson-dark" size={24} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle className="text-green" size={18} />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
