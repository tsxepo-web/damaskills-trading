import { Building2, Home, Hammer, HardHat, Ruler, Truck } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial Construction",
    description:
      "Office buildings, retail spaces, and industrial facilities built to your specifications.",
  },
  {
    icon: Home,
    title: "Residential Construction",
    description:
      "Custom homes, renovations, and additions tailored to your lifestyle.",
  },
  {
    icon: Hammer,
    title: "Renovations & Remodeling",
    description:
      "Transform existing spaces with modern design and quality materials.",
  },
  {
    icon: HardHat,
    title: "Project Management",
    description:
      "Full-service oversight from planning to completion, ensuring quality and timelines.",
  },
  {
    icon: Ruler,
    title: "Design-Build Services",
    description:
      "Integrated design and construction for seamless project delivery.",
  },
  {
    icon: Truck,
    title: "Site Development",
    description:
      "Land clearing, excavation, and site preparation for new construction.",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-600">
            What We Do
          </p>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            From concept to completion, we provide comprehensive construction
            services for every type of project.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 inline-flex rounded-lg bg-amber-100 p-3 text-amber-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
