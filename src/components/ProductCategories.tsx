import PlaceholderImage from "./PlaceholderImage";
import { ChevronRight } from "./icons";

const products = [
  {
    title: "Entrance Mats",
    description:
      "Capture 85% of tracked-in dirt and moisture in the first 15 feet. Protect interior floors and reduce cleaning costs.",
    imageLabel: "Entrance Mat System",
  },
  {
    title: "Anti-Fatigue Mats",
    description:
      "Reduce employee fatigue by up to 50% in standing workstations. Boost productivity and reduce workplace injury claims.",
    imageLabel: "Anti-Fatigue Mat Installation",
  },
  {
    title: "Custom Logo Mats",
    description:
      "Brand your entrance with high-definition logo mats. Professional appearance with the performance of commercial-grade matting.",
    imageLabel: "Custom Logo Mat",
  },
  {
    title: "Industrial & Specialty",
    description:
      "ESD mats, clean room mats, drainage mats, and more. Specialized solutions for demanding environments.",
    imageLabel: "Industrial Matting Solution",
  },
];

export default function ProductCategories() {
  return (
    <section id="products" className="bg-slate-50 py-16 md:py-24" aria-label="Products">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber">
            Our Products
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Matting Solutions for Every Application
          </h2>
        </div>

        {/* Product grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.title}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <PlaceholderImage
                label={product.imageLabel}
                aspectRatio="3/2"
                className="rounded-none border-0 border-b-2"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {product.description}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy transition-colors hover:text-navy-light"
                >
                  Learn More
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
