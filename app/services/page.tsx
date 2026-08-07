import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Building2,
  Hammer,
  HardHat,
  Ruler,
  Truck,
  Wrench,
  Sparkles,
  PaintRoller,
  Droplets,
  Zap,
  Shield,
  Clock,
  Users,
  Award,
  Phone,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: Building2,
    title: "Construction Services",
    description:
      "Full-scale construction for residential and commercial properties. From foundations to finishing, we deliver quality craftsmanship.",
    features: [
      "Residential construction",
      "Commercial buildings",
      "Extensions and additions",
      "New builds",
      "Structural work",
    ],
    image: "/images/services/construction.jpg",
  },
  {
    id: 2,
    icon: Hammer,
    title: "Maintenance & Repairs",
    description:
      "Comprehensive maintenance services to keep your property in top condition. Fast response times and quality workmanship.",
    features: [
      "Building maintenance",
      "General repairs",
      "Plumbing repairs",
      "Electrical repairs",
      "Emergency maintenance",
    ],
    image: "/images/services/maintenance.jpg",
  },
  {
    id: 3,
    icon: Wrench,
    title: "Tools & Equipment Supply",
    description:
      "Quality tools and equipment for all your construction and industrial needs. We supply to industries across Kwazulu-Natal.",
    features: [
      "Welding machines",
      "Grinders and drills",
      "Rollers and pumps",
      "Motors and components",
      "Power tools",
    ],
    image: "/images/services/tools.jpg",
  },
  {
    id: 4,
    icon: Sparkles,
    title: "Cleaning Services",
    description:
      "Professional cleaning services for offices, industrial sites, and commercial properties. Reliable and thorough.",
    features: [
      "Office cleaning",
      "Industrial cleaning",
      "Commercial cleaning",
      "Post-construction cleaning",
      "Deep cleaning",
    ],
    image: "/images/services/cleaning.jpg",
  },
  {
    id: 5,
    icon: Zap,
    title: "Electrical & Engineering",
    description:
      "Expert electrical and engineering services for industrial and commercial applications. Safe, reliable, and code-compliant.",
    features: [
      "Electrical installations",
      "Engineering services",
      "Industrial electrical work",
      "Electrical machinery supply",
      "Maintenance and repair",
    ],
    image: "/images/services/electrical.jpg",
  },
  {
    id: 6,
    icon: Droplets,
    title: "Plumbing Works",
    description:
      "Professional plumbing services for residential and commercial properties. Quality fittings and reliable workmanship.",
    features: [
      "Plumbing installations",
      "Pipe fittings",
      "Water systems",
      "Plumbing materials supply",
      "Emergency plumbing",
    ],
    image: "/images/services/plumbing.jpg",
  },
  {
    id: 7,
    icon: Shield,
    title: "Safety & PPE Supplies",
    description:
      "Comprehensive safety equipment and Personal Protective Equipment (PPE) for construction and industrial sites.",
    features: [
      "Safety shoes",
      "Aprons and protective wear",
      "Welding helmets",
      "Safety equipment",
      "All PPE supplies",
    ],
    image: "/images/services/ppe.jpg",
  },
  {
    id: 8,
    icon: PaintRoller,
    title: "Supply of Stationery",
    description:
      "Quality stationery and office supplies for businesses and organizations across various sectors.",
    features: [
      "Office stationery",
      "Printing supplies",
      "Office materials",
      "Business supplies",
      "Custom orders",
    ],
    image: "/images/services/stationery.jpg",
  },
  {
    id: 9,
    icon: Truck,
    title: "Logistics & Delivery",
    description:
      "Reliable logistics and delivery services for materials, equipment, and supplies across Durban and Kwazulu-Natal.",
    features: [
      "Material delivery",
      "Equipment transport",
      "Local delivery",
      "Scheduled deliveries",
      "Express service",
    ],
    image: "/images/services/logistics.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center text-white lg:px-8">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Services</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Comprehensive construction and supply solutions for residential,
            commercial, and industrial clients across Kwazulu-Natal.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-amber-600">9+</p>
              <p className="text-sm text-gray-600">Service Categories</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-amber-600">2016</p>
              <p className="text-sm text-gray-600">Established</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-amber-600">Level 1</p>
              <p className="text-sm text-gray-600">B-BBEE Contributor</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-amber-600">✓</p>
              <p className="text-sm text-gray-600">Quality Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore our comprehensive range of services designed to meet all
              your construction, supply, and maintenance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group rounded-lg bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-amber-100 p-3 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    {service.description}
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose Damaskills Trading?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              We combine experience, quality, and reliability to deliver
              exceptional results for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center p-6 rounded-lg border border-gray-100 hover:border-amber-200 transition-colors">
              <Award className="mx-auto mb-4 h-12 w-12 text-amber-600" />
              <h3 className="mb-2 font-bold text-gray-900">B-BBEE Level 1</h3>
              <p className="text-sm text-gray-600">
                100% Black ownership with 135% procurement recognition. Your
                ideal partner for government and corporate contracts.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-100 hover:border-amber-200 transition-colors">
              <Clock className="mx-auto mb-4 h-12 w-12 text-amber-600" />
              <h3 className="mb-2 font-bold text-gray-900">Established 2016</h3>
              <p className="text-sm text-gray-600">
                Over 8 years of experience serving clients across Durban and
                Kwazulu-Natal with quality and reliability.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-100 hover:border-amber-200 transition-colors">
              <Users className="mx-auto mb-4 h-12 w-12 text-amber-600" />
              <h3 className="mb-2 font-bold text-gray-900">
                Client Satisfaction
              </h3>
              <p className="text-sm text-gray-600">
                We take customer satisfaction seriously and are committed to
                building long-term business relationships.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-100 hover:border-amber-200 transition-colors">
              <HardHat className="mx-auto mb-4 h-12 w-12 text-amber-600" />
              <h3 className="mb-2 font-bold text-gray-900">
                Professional Supervision
              </h3>
              <p className="text-sm text-gray-600">
                All projects are managed and supervised by skilled professionals
                to ensure quality workmanship.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-100 hover:border-amber-200 transition-colors">
              <Shield className="mx-auto mb-4 h-12 w-12 text-amber-600" />
              <h3 className="mb-2 font-bold text-gray-900">Safety First</h3>
              <p className="text-sm text-gray-600">
                Committed to protecting our environment, natural resources, and
                ensuring safe working conditions.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-100 hover:border-amber-200 transition-colors">
              <Truck className="mx-auto mb-4 h-12 w-12 text-amber-600" />
              <h3 className="mb-2 font-bold text-gray-900">
                Kwazulu-Natal Wide
              </h3>
              <p className="text-sm text-gray-600">
                Serving clients across Kwazulu-Natal with reliable delivery and
                responsive service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            Contact us today for a free consultation and quote. Let's bring your
            vision to life with quality and reliability.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-amber-600 px-8 py-3 font-semibold text-white hover:bg-amber-500 transition-colors"
            >
              Get Your Free Quote
            </Link>
            <a
              href="tel:+2731400469"
              className="rounded-md bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <Phone className="inline-block mr-2 h-4 w-4" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
