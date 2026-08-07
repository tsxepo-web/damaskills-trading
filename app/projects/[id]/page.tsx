import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Building2,
  CheckCircle,
} from "lucide-react";

// This would normally come from a database or CMS
const projects = [
  {
    id: 1,
    title: "Downtown Office Tower",
    category: "Commercial",
    location: "City Center",
    year: "2024",
    description:
      "A 12-story commercial office building featuring modern architecture, energy-efficient systems, and premium office spaces.",
    fullDescription:
      "The Downtown Office Tower project was a landmark development in the city center. Standing 12 stories tall, this commercial building features state-of-the-art energy systems, floor-to-ceiling glass windows, and flexible office spaces designed for modern businesses. The project was completed on time and within budget, earning recognition for its sustainable design and architectural excellence.",
    image: "/images/projects/project-1.jpg",
    gallery: [
      "/images/projects/project-1.jpeg",
      "/images/projects/project-1.jpeg",
      "/images/projects/project-1.jpeg",
    ],
    features: [
      "12-story commercial building",
      "Energy-efficient systems",
      "Modern architectural design",
      "Flexible office spaces",
      "Sustainable materials",
      "LEED Gold certified",
    ],
    featured: true,
  },
  // ... add more projects with full details
];

// Generate static paths for all projects (SSG)
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

// Get project by ID
function getProject(id: string) {
  return projects.find((project) => project.id === parseInt(id));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = getProject(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Back Button */}
      <div className="mx-auto max-w-7xl px-4 pt-8 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-semibold text-gray-600 hover:text-amber-600 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      {/* Project Header */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center text-white lg:px-8">
          <div className="mb-4 flex items-center justify-center gap-2 text-amber-400">
            <Building2 className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {project.location}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Completed {project.year}
            </span>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Project Overview
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                {project.fullDescription}
              </p>

              {/* Features */}
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-lg font-bold text-gray-900">
                  Project Details
                </h3>
                <div className="space-y-3 border-t border-gray-200 pt-4">
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-semibold text-gray-900">
                      {project.category}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold text-gray-900">
                      {project.location}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Year Completed</p>
                    <p className="font-semibold text-gray-900">
                      {project.year}
                    </p>
                  </div>
                  {project.featured && (
                    <div className="rounded-md bg-amber-50 p-3 text-center">
                      <p className="text-sm font-semibold text-amber-600">
                        ⭐ Featured Project
                      </p>
                    </div>
                  )}
                </div>
                <Link
                  href="/contact"
                  className="mt-6 block w-full rounded-md bg-amber-600 px-4 py-3 text-center font-semibold text-white hover:bg-amber-500 transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
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
            vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-md bg-amber-600 px-8 py-3 font-semibold text-white hover:bg-amber-500 transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
