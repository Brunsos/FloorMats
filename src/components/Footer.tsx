import { Phone, Mail, MapPin } from "./icons";

const productLinks = [
  "Entrance Mats",
  "Anti-Fatigue Mats",
  "Custom Logo Mats",
  "Industrial Mats",
  "Specialty Mats",
];

const serviceLinks = [
  "Mat Distribution",
  "Loss Prevention Consulting",
  "Facility Assessment",
  "Maintenance Programs",
  "OSHA Compliance",
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white">FloorMats</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Professional floor matting distribution and loss prevention
              consulting. Protecting your people, your floors, and your bottom
              line.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Products
            </h4>
            <ul className="mt-3 space-y-2">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#products"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Services
            </h4>
            <ul className="mt-3 space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contact
            </h4>
            <ul className="mt-3 space-y-3">
              <li>
                <a
                  href="tel:5551234567"
                  className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <Phone size={16} />
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@floormats.com"
                  className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <Mail size={16} />
                  info@floormats.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin size={16} />
                  City, State (Placeholder)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} FloorMats. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-slate-500 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-slate-500 transition-colors hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
